import {
  SubstanceQuantity, ReactionConditions, ReactionResult,
  ReactionRule, PhaseChange, VisualEffect, ReactorConfig,
} from "../types";
import { REACTION_RULES, REACTOR_CONFIGS } from "../data/reactions";
import { COMPOUND_MAP } from "../data/compounds";
import { Thermodynamics } from "./Thermodynamics";
import { SafetyGuard } from "./SafetyGuard";

export class ReactionEngine {
  private reactorConfig: ReactorConfig;
  private conditions: ReactionConditions;
  private reactants: Map<string, number>;
  private logs: string[] = [];
  private visualEffects: VisualEffect[] = [];
  private phaseChanges: PhaseChange[] = [];
  private learningUnlocks: string[] = [];

  constructor(conditions: ReactionConditions) {
    this.conditions = conditions;
    this.reactorConfig = REACTOR_CONFIGS.find(r => r.type === conditions.reactorType) || REACTOR_CONFIGS[0];
    this.reactants = new Map();
  }

  addSubstance(compoundId: string, moles: number): void {
    const current = this.reactants.get(compoundId) || 0;
    this.reactants.set(compoundId, current + moles);
  }

  run(): ReactionResult {
    this.logs = [];
    this.visualEffects = [];
    this.phaseChanges = [];
    this.learningUnlocks = [];

    if (this.conditions.temperature > this.reactorConfig.maxTemperature) {
      return this.fail(`Reactor maximum temperature (${this.reactorConfig.maxTemperature} K) exceeded.`);
    }
    if (this.conditions.pressure > this.reactorConfig.maxPressure) {
      return this.fail(`Reactor maximum pressure (${this.reactorConfig.maxPressure} atm) exceeded.`);
    }

    this.log(`Reactor: ${this.reactorConfig.name}`);
    this.log(`Conditions: ${this.conditions.temperature} K, ${this.conditions.pressure} atm`);
    this.log(`Contents: ${this.describeContents()}`);

    const matches = this.findMatchingRules();
    if (matches.length === 0) {
      this.checkPhaseChanges();
      return {
        success: true,
        message: "No reaction occurred under these conditions. Substances remain mixed.",
        reactants: this.toSubstanceArray(),
        products: [],
        energyChange: 0,
        energyPerMole: 0,
        isExothermic: false,
        phaseChanges: this.phaseChanges,
        visualEffects: this.visualEffects,
        logs: this.logs,
        safetyFlags: [],
        learningUnlocks: [],
      };
    }

    const result = this.executeReaction(matches[0]);
    SafetyGuard.auditLog("reaction_attempt", {
      reactants: Array.from(this.reactants.entries()),
      conditions: this.conditions,
      result: result.success,
    });
    return result;
  }

  private findMatchingRules(): Array<{ rule: ReactionRule; score: number }> {
    const matches: Array<{ rule: ReactionRule; score: number }> = [];
    for (const rule of REACTION_RULES) {
      const { reactantPattern } = rule;
      let hasAll = true;
      let limitingMoles = Infinity;
      for (let i = 0; i < reactantPattern.compoundIds.length; i++) {
        const id = reactantPattern.compoundIds[i];
        const needed = reactantPattern.stoichiometry[i];
        const available = this.reactants.get(id) || 0;
        if (available < needed * 0.001) { hasAll = false; break; }
        limitingMoles = Math.min(limitingMoles, available / needed);
      }
      if (!hasAll) continue;
      if (reactantPattern.minTemp && this.conditions.temperature < reactantPattern.minTemp) continue;
      if (reactantPattern.maxTemp && this.conditions.temperature > reactantPattern.maxTemp) continue;
      if (reactantPattern.requiresCatalyst) {
        const hasCatalyst = this.conditions.catalysts.includes(reactantPattern.requiresCatalyst)
          || Array.from(this.reactants.keys()).includes(reactantPattern.requiresCatalyst);
        if (!hasCatalyst) limitingMoles *= 0.01;
      }
      const entropyChange = Thermodynamics.reactionEntropy(rule.products,
        rule.reactantPattern.compoundIds.map((id, i) => ({ compoundId: id, stoichiometry: rule.reactantPattern.stoichiometry[i] }))
      );
      const deltaG = Thermodynamics.gibbsFreeEnergy(rule.enthalpyChange, entropyChange, this.conditions.temperature);
      if (deltaG > 50) continue;
      const rate = Thermodynamics.arrheniusRate(rule.preExponential, rule.activationEnergy, this.conditions.temperature);
      const extent = Thermodynamics.reactionExtent(rate, this.conditions.time);
      const eqConstant = Thermodynamics.equilibriumConstant(deltaG, this.conditions.temperature);
      const eqExtent = eqConstant / (1 + eqConstant);
      const actualExtent = Math.min(extent, eqExtent);
      const score = actualExtent * limitingMoles * this.reactorConfig.rateMultiplier
        * (1 + this.reactorConfig.equilibriumShift * Math.sign(deltaG));
      if (actualExtent > 0.05) matches.push({ rule, score });
    }
    return matches.sort((a, b) => b.score - a.score);
  }

  private executeReaction(match: { rule: ReactionRule; score: number }): ReactionResult {
    const { rule, score } = match;
    const extent = Math.min(score, 1.0);
    this.log(`Reaction identified: ${rule.name}`);
    this.log(`Description: ${rule.description}`);
    const consumed = new Map<string, number>();
    const produced = new Map<string, number>();
    for (let i = 0; i < rule.reactantPattern.compoundIds.length; i++) {
      const id = rule.reactantPattern.compoundIds[i];
      const stoich = rule.reactantPattern.stoichiometry[i];
      const available = this.reactants.get(id) || 0;
      const amount = Math.min(available, stoich * extent);
      consumed.set(id, amount);
      this.reactants.set(id, available - amount);
    }
    for (const p of rule.products) {
      const current = this.reactants.get(p.compoundId) || 0;
      const amount = p.stoichiometry * extent;
      produced.set(p.compoundId, amount);
      this.reactants.set(p.compoundId, current + amount);
    }
    const totalMolesReacted = Array.from(consumed.values()).reduce((a, b) => a + b, 0);
    const energyChange = rule.enthalpyChange * totalMolesReacted;
    const isExothermic = energyChange < 0;
    this.log(`Extent of reaction: ${(extent * 100).toFixed(1)}%`);
    this.log(`Energy change: ${energyChange.toFixed(2)} kJ (${isExothermic ? "exothermic" : "endothermic"})`);
    if (isExothermic) {
      this.log("Heat released to surroundings.");
      this.visualEffects.push(...rule.visualEffects);
      if (Math.abs(energyChange) > 100) {
        this.visualEffects.push({ type: "glow", color: "#FF4500", intensity: "high", duration: 5000 });
      }
    } else {
      this.log("Heat absorbed from surroundings.");
      if (Math.abs(energyChange) > 50) {
        this.visualEffects.push({ type: "crystals", intensity: "medium", duration: 4000 });
      }
    }
    this.checkPhaseChanges();
    const safety = SafetyGuard.validateReaction(
      Array.from(consumed.entries()).map(([id, moles]) => ({ compoundId: id, moles })),
      Array.from(produced.entries()).map(([id, moles]) => ({ compoundId: id, moles }))
    );
    if (!safety.allowed) return this.fail(`Safety block: ${safety.flags.join("; ")}`);
    if (rule.learningNote) this.learningUnlocks.push(rule.learningNote);
    if (extent > 0.9) {
      this.learningUnlocks.push(`Near-complete conversion achieved. Le Chatelier's principle: consider how T/P changes might improve yield further.`);
    }
    return {
      success: true,
      message: `Reaction completed with ${(extent * 100).toFixed(1)}% conversion.`,
      reactants: Array.from(consumed.entries()).map(([compoundId, moles]) => ({ compoundId, moles })),
      products: Array.from(produced.entries()).map(([compoundId, moles]) => ({ compoundId, moles })),
      energyChange,
      energyPerMole: totalMolesReacted > 0 ? energyChange / totalMolesReacted : 0,
      isExothermic,
      phaseChanges: this.phaseChanges,
      visualEffects: this.visualEffects,
      logs: this.logs,
      safetyFlags: safety.flags,
      learningUnlocks: this.learningUnlocks,
    };
  }

  private checkPhaseChanges(): void {
    for (const [compoundId, moles] of this.reactants.entries()) {
      if (moles < 0.001) continue;
      const compound = COMPOUND_MAP.get(compoundId);
      if (!compound) continue;
      const newPhase = Thermodynamics.determinePhase(compound, this.conditions.temperature, this.conditions.pressure);
      const oldPhase = compound.properties.phaseAtSTP;
      if (newPhase !== oldPhase) {
        this.phaseChanges.push({ compoundId, from: oldPhase, to: newPhase, temperature: this.conditions.temperature });
        this.log(`Phase transition: ${compound.name} ${oldPhase} → ${newPhase}`);
        if (newPhase === "gas") this.visualEffects.push({ type: "gas-evolution", intensity: "medium", duration: 3000 });
        else if (newPhase === "solid" && oldPhase === "liquid") this.visualEffects.push({ type: "crystals", intensity: "medium", duration: 5000 });
      }
    }
  }

  private fail(message: string): ReactionResult {
    this.log(`FAILED: ${message}`);
    return {
      success: false, message,
      reactants: this.toSubstanceArray(), products: [],
      energyChange: 0, energyPerMole: 0, isExothermic: false,
      phaseChanges: [],
      visualEffects: [{ type: "smoke", color: "#FF0000", intensity: "low", duration: 2000 }],
      logs: this.logs, safetyFlags: [message], learningUnlocks: [],
    };
  }

  private describeContents(): string {
    return Array.from(this.reactants.entries())
      .filter(([, moles]) => moles > 0.001)
      .map(([id, moles]) => { const c = COMPOUND_MAP.get(id); return `${c?.name || id} (${moles.toFixed(3)} mol)`; })
      .join(", ");
  }

  private toSubstanceArray(): SubstanceQuantity[] {
    return Array.from(this.reactants.entries())
      .filter(([, moles]) => moles > 0.001)
      .map(([compoundId, moles]) => ({ compoundId, moles }));
  }
}
