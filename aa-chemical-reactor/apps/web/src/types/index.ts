export type Phase = "solid" | "liquid" | "gas" | "plasma";
export type BondType = "single" | "double" | "triple" | "aromatic";
export type Acidity = "acid" | "base" | "neutral" | "amphoteric";
export type Polarity = "polar" | "nonpolar" | "ionic";
export type Solubility = "soluble" | "insoluble" | "slightly";
export type LicenseTier = "free" | "education" | "pro" | "enterprise";
export type ReactorType = "batch" | "flow" | "pressure-vessel" | "vacuum" | "plasma" | "nano";

export interface Element {
  atomicNumber: number;
  symbol: string;
  name: string;
  atomicMass: number;
  category: string;
  color: string;
  valenceElectrons: number;
  commonValences: number[];
  electronegativity: number;
  radius: number;
  phaseAtSTP: Phase;
  meltingPoint: number;
  boilingPoint: number;
  density: number;
}

export interface AtomNode {
  id: string;
  element: string;
  x: number; y: number; z: number;
  formalCharge: number;
  lonePairs: number;
}

export interface BondEdge {
  from: string;
  to: string;
  type: BondType;
}

export interface GeometryHint {
  shape: "linear" | "bent" | "trigonal-planar" | "tetrahedral" | "trigonal-bipyramidal" | "octahedral" | "trigonal-pyramidal";
  bondAngle: number;
}

export interface Compound {
  id: string;
  name: string;
  formula: string;
  molecularMass: number;
  atoms: AtomNode[];
  bonds: BondEdge[];
  properties: {
    meltingPoint: number;
    boilingPoint: number;
    phaseAtSTP: Phase;
    color: string;
    acidity: Acidity;
    polarity: Polarity;
    solubilityInWater: Solubility;
    enthalpyOfFormation: number;
    entropy: number;
    restricted: boolean;
    tags: string[];
  };
  geometryHints: Record<string, GeometryHint>;
}

export interface SubstanceQuantity {
  compoundId: string;
  moles: number;
}

export interface ReactionConditions {
  temperature: number;
  pressure: number;
  reactorType: ReactorType;
  catalysts: string[];
  time: number;
}

export interface ReactionRule {
  id: string;
  name: string;
  description: string;
  reactantPattern: {
    compoundIds: string[];
    stoichiometry: number[];
    minTemp?: number;
    maxTemp?: number;
    requiresCatalyst?: string;
  };
  products: {
    compoundId: string;
    stoichiometry: number;
  }[];
  enthalpyChange: number;
  activationEnergy: number;
  preExponential: number;
  visualEffects: VisualEffect[];
  learningNote?: string;
}

export interface VisualEffect {
  type: "color-change" | "glow" | "smoke" | "bubbles" | "crystals" | "sparks" | "precipitate" | "gas-evolution";
  color?: string;
  intensity: "low" | "medium" | "high";
  duration: number;
}

export interface ReactionResult {
  success: boolean;
  message: string;
  reactants: SubstanceQuantity[];
  products: SubstanceQuantity[];
  energyChange: number;
  energyPerMole: number;
  isExothermic: boolean;
  phaseChanges: PhaseChange[];
  visualEffects: VisualEffect[];
  logs: string[];
  safetyFlags: string[];
  learningUnlocks: string[];
}

export interface PhaseChange {
  compoundId: string;
  from: Phase;
  to: Phase;
  temperature: number;
}

export interface ReactorConfig {
  type: ReactorType;
  name: string;
  description: string;
  maxPressure: number;
  maxTemperature: number;
  volume: number;
  rateMultiplier: number;
  equilibriumShift: number;
  specialEffects: string[];
  unlockRequirement?: string;
}

export interface UserLicense {
  tier: LicenseTier;
  orgId?: string;
  features: {
    maxCompounds: number;
    maxReactors: number;
    allowSharing: boolean;
    allowExport: boolean;
    advancedVisuals: boolean;
    cloudSaves: boolean;
  };
  expiresAt?: string;
}

export interface Recipe {
  id: string;
  name: string;
  userId: string;
  orgId?: string;
  reactants: SubstanceQuantity[];
  conditions: ReactionConditions;
  result: ReactionResult;
  isPublic: boolean;
  createdAt: string;
}

export interface AuditEntry {
  id: string;
  userId: string;
  orgId?: string;
  action: "reaction_attempt" | "reaction_blocked" | "recipe_save" | "recipe_share";
  details: Record<string, unknown>;
  timestamp: string;
  ipHash: string;
}
