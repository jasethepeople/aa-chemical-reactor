import { ReactionRule, ReactorConfig } from "../types";

export const REACTOR_CONFIGS: ReactorConfig[] = [
  {
    type: "batch", name: "Batch Reactor", description: "Classic stirred-tank reactor. Good for general synthesis and observation.",
    maxPressure: 10, maxTemperature: 800, volume: 1.0, rateMultiplier: 1.0, equilibriumShift: 0,
    specialEffects: ["gentle-bubbling"], unlockRequirement: undefined,
  },
  {
    type: "flow", name: "Continuous Flow Reactor", description: "Reactants flow through continuously. Higher throughput, precise control.",
    maxPressure: 50, maxTemperature: 1200, volume: 0.5, rateMultiplier: 1.5, equilibriumShift: 0.2,
    specialEffects: ["stream-lines"], unlockRequirement: "complete_5_reactions",
  },
  {
    type: "pressure-vessel", name: "Pressure Vessel", description: "High-pressure environment shifts equilibrium toward denser products.",
    maxPressure: 200, maxTemperature: 900, volume: 0.8, rateMultiplier: 0.8, equilibriumShift: 0.5,
    specialEffects: ["pressure-gauge"], unlockRequirement: "complete_10_reactions",
  },
  {
    type: "vacuum", name: "Vacuum Chamber", description: "Low pressure favors gas evolution and volatile products.",
    maxPressure: 0.001, maxTemperature: 600, volume: 2.0, rateMultiplier: 0.6, equilibriumShift: -0.3,
    specialEffects: ["vapor-trails"], unlockRequirement: "complete_15_reactions",
  },
  {
    type: "plasma", name: "Plasma Reactor", description: "Extreme temperatures ionize gases. Enables reactions impossible at lower energy.",
    maxPressure: 5, maxTemperature: 5000, volume: 0.3, rateMultiplier: 3.0, equilibriumShift: 0.8,
    specialEffects: ["electric-arc","ion-glow"], unlockRequirement: "complete_25_reactions",
  },
  {
    type: "nano", name: "Nano-Reactor", description: "Confined nanoscale environment. Surface effects dominate. Ultra-selective catalysis.",
    maxPressure: 100, maxTemperature: 1500, volume: 0.001, rateMultiplier: 5.0, equilibriumShift: 0.0,
    specialEffects: ["quantum-glow"], unlockRequirement: "complete_40_reactions",
  },
];

export const REACTION_RULES: ReactionRule[] = [
  {
    id: "neutralization-strong",
    name: "Strong Acid-Strong Base Neutralization",
    description: "H⁺ from acid reacts with OH⁻ from base to form water and a salt.",
    reactantPattern: {
      compoundIds: ["hydrogen-chloride", "sodium-hydroxide"],
      stoichiometry: [1, 1],
    },
    products: [
      { compoundId: "water", stoichiometry: 1 },
      { compoundId: "sodium-chloride", stoichiometry: 1 },
    ],
    enthalpyChange: -57.3,
    activationEnergy: 5.0,
    preExponential: 1e10,
    visualEffects: [
      { type: "color-change", color: "#FFFFFF", intensity: "low", duration: 2000 },
      { type: "bubbles", intensity: "low", duration: 3000 },
    ],
    learningNote: "Neutralization reactions are exothermic. The heat released is called the enthalpy of neutralization.",
  },
  {
    id: "neutralization-bicarbonate",
    name: "Acid + Bicarbonate",
    description: "Acid reacts with bicarbonate to produce salt, water, and carbon dioxide gas.",
    reactantPattern: {
      compoundIds: ["hydrogen-chloride", "sodium-bicarbonate"],
      stoichiometry: [1, 1],
    },
    products: [
      { compoundId: "sodium-chloride", stoichiometry: 1 },
      { compoundId: "water", stoichiometry: 1 },
      { compoundId: "carbon-dioxide", stoichiometry: 1 },
    ],
    enthalpyChange: -45.0,
    activationEnergy: 10.0,
    preExponential: 8e9,
    visualEffects: [
      { type: "gas-evolution", intensity: "medium", duration: 4000 },
      { type: "bubbles", intensity: "high", duration: 4000 },
    ],
    learningNote: "Baking soda (sodium bicarbonate) reacts with acid to produce CO₂ — the chemistry behind baking and volcanoes.",
  },
  {
    id: "combustion-methane",
    name: "Methane Combustion",
    description: "Complete combustion of methane yields carbon dioxide and water.",
    reactantPattern: {
      compoundIds: ["methane", "oxygen"],
      stoichiometry: [1, 2],
      minTemp: 800,
    },
    products: [
      { compoundId: "carbon-dioxide", stoichiometry: 1 },
      { compoundId: "water", stoichiometry: 2 },
    ],
    enthalpyChange: -890.4,
    activationEnergy: 50.0,
    preExponential: 1e12,
    visualEffects: [
      { type: "glow", color: "#FF4500", intensity: "high", duration: 3000 },
      { type: "sparks", intensity: "medium", duration: 2000 },
    ],
    learningNote: "Combustion is a highly exothermic redox reaction. The negative ΔH means substantial heat release.",
  },
  {
    id: "decomposition-calcium-carbonate",
    name: "Thermal Decomposition of Calcium Carbonate",
    description: "Heat drives off CO₂, leaving calcium oxide (quicklime).",
    reactantPattern: {
      compoundIds: ["calcium-carbonate"],
      stoichiometry: [1],
      minTemp: 1100,
    },
    products: [
      { compoundId: "calcium-oxide", stoichiometry: 1 },
      { compoundId: "carbon-dioxide", stoichiometry: 1 },
    ],
    enthalpyChange: 178.3,
    activationEnergy: 120.0,
    preExponential: 1e8,
    visualEffects: [
      { type: "gas-evolution", intensity: "medium", duration: 6000 },
      { type: "color-change", color: "#FFFFFF", intensity: "low", duration: 4000 },
    ],
    learningNote: "This is an endothermic decomposition. Energy input is required to break the strong ionic and covalent bonds.",
  },
  {
    id: "decomposition-hydrogen-peroxide",
    name: "Catalytic Decomposition of H₂O₂",
    description: "Hydrogen peroxide decomposes to water and oxygen, especially with catalysts.",
    reactantPattern: {
      compoundIds: ["hydrogen-peroxide"],
      stoichiometry: [2],
    },
    products: [
      { compoundId: "water", stoichiometry: 2 },
      { compoundId: "oxygen", stoichiometry: 1 },
    ],
    enthalpyChange: -196.0,
    activationEnergy: 75.0,
    preExponential: 2e7,
    visualEffects: [
      { type: "gas-evolution", intensity: "high", duration: 5000 },
      { type: "bubbles", intensity: "high", duration: 5000 },
    ],
    learningNote: "H₂O₂ is thermodynamically unstable relative to H₂O + ½O₂. Catalysts like MnO₂ dramatically lower the activation barrier.",
  },
  {
    id: "synthesis-water",
    name: "Hydrogen + Oxygen → Water",
    description: "Direct synthesis of water from its elements. Highly exothermic.",
    reactantPattern: {
      compoundIds: ["hydrogen", "oxygen"],
      stoichiometry: [2, 1],
      minTemp: 600,
    },
    products: [
      { compoundId: "water", stoichiometry: 2 },
    ],
    enthalpyChange: -571.6,
    activationEnergy: 40.0,
    preExponential: 1e11,
    visualEffects: [
      { type: "glow", color: "#4488FF", intensity: "high", duration: 2000 },
      { type: "sparks", intensity: "high", duration: 1500 },
    ],
    learningNote: "The Hindenburg disaster demonstrated this reaction. The activation energy is provided by a spark; once started, it is self-sustaining.",
  },
  {
    id: "haber-bosch",
    name: "Haber-Bosch Process",
    description: "Catalytic synthesis of ammonia from nitrogen and hydrogen.",
    reactantPattern: {
      compoundIds: ["nitrogen", "hydrogen"],
      stoichiometry: [1, 3],
      minTemp: 673,
      requiresCatalyst: "iron-catalyst",
    },
    products: [
      { compoundId: "ammonia", stoichiometry: 2 },
    ],
    enthalpyChange: -92.4,
    activationEnergy: 80.0,
    preExponential: 1e9,
    visualEffects: [
      { type: "color-change", color: "#CCFFCC", intensity: "low", duration: 5000 },
      { type: "bubbles", intensity: "low", duration: 5000 },
    ],
    learningNote: "The Haber-Bosch process feeds half the world. High pressure and moderate temperature with an iron catalyst maximize ammonia yield.",
  },
  {
    id: "quicklime-slaking",
    name: "Slaking of Quicklime",
    description: "Calcium oxide reacts vigorously with water to form calcium hydroxide.",
    reactantPattern: {
      compoundIds: ["calcium-oxide", "water"],
      stoichiometry: [1, 1],
    },
    products: [
      { compoundId: "calcium-hydroxide", stoichiometry: 1 },
    ],
    enthalpyChange: -65.2,
    activationEnergy: 8.0,
    preExponential: 1e10,
    visualEffects: [
      { type: "glow", color: "#FFAA00", intensity: "medium", duration: 4000 },
      { type: "smoke", color: "#FFFFFF", intensity: "medium", duration: 3000 },
    ],
    learningNote: "This reaction is so exothermic that it can produce steam. It was historically used in lime kilns and self-heating cans.",
  },
  {
    id: "photosynthesis",
    name: "Photosynthesis (Simplified)",
    description: "Plants convert CO₂ and water to glucose using light energy.",
    reactantPattern: {
      compoundIds: ["carbon-dioxide", "water"],
      stoichiometry: [6, 6],
      minTemp: 280,
    },
    products: [
      { compoundId: "glucose", stoichiometry: 1 },
      { compoundId: "oxygen", stoichiometry: 6 },
    ],
    enthalpyChange: 2803.0,
    activationEnergy: 0,
    preExponential: 1e6,
    visualEffects: [
      { type: "glow", color: "#00FF00", intensity: "medium", duration: 6000 },
      { type: "bubbles", intensity: "medium", duration: 6000 },
    ],
    learningNote: "Photosynthesis is endothermic — it stores solar energy in chemical bonds. The reverse process (cellular respiration) releases that energy.",
  },
];
