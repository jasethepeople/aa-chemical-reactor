import { Compound, Phase } from "../types";
import { COMPOUND_MAP } from "../data/compounds";

const R = 8.314; // J/(mol·K)

export class Thermodynamics {
  static gibbsFreeEnergy(
    enthalpyChange: number,
    entropyChange: number,
    temperature: number
  ): number {
    return enthalpyChange - (temperature * entropyChange) / 1000;
  }

  static arrheniusRate(
    preExponential: number,
    activationEnergy: number,
    temperature: number
  ): number {
    const eaJ = activationEnergy * 1000;
    return preExponential * Math.exp(-eaJ / (R * temperature));
  }

  static equilibriumConstant(deltaG: number, temperature: number): number {
    const deltaGJ = deltaG * 1000;
    return Math.exp(-deltaGJ / (R * temperature));
  }

  static determinePhase(
    compound: Compound,
    temperature: number,
    pressure: number
  ): Phase {
    const { meltingPoint, boilingPoint } = compound;
    const dhVap = 85 * boilingPoint;
    const tbCorrected = boilingPoint * (1 + (R * boilingPoint / dhVap) * Math.log(pressure));

    if (temperature < meltingPoint) return "solid";
    if (temperature < tbCorrected) return "liquid";
    if (temperature > 8000) return "plasma";
    return "gas";
  }

  static reactionExtent(
    rateConstant: number,
    time: number,
    equilibriumConstant?: number
  ): number {
    const kineticExtent = 1 - Math.exp(-rateConstant * time);
    if (equilibriumConstant === undefined) {
      return Math.min(kineticExtent, 1.0);
    }
    const eqExtent = equilibriumConstant / (1 + equilibriumConstant);
    return Math.min(kineticExtent, eqExtent);
  }

  static reactionEntropy(
    productIds: { compoundId: string; stoichiometry: number }[],
    reactantIds: { compoundId: string; stoichiometry: number }[]
  ): number {
    let sProducts = 0;
    let sReactants = 0;
    for (const p of productIds) {
      const c = COMPOUND_MAP.get(p.compoundId);
      if (c) sProducts += p.stoichiometry * c.properties.entropy;
    }
    for (const r of reactantIds) {
      const c = COMPOUND_MAP.get(r.compoundId);
      if (c) sReactants += r.stoichiometry * c.properties.entropy;
    }
    return sProducts - sReactants;
  }
}
