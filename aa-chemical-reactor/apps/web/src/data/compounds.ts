import { Compound } from "../types";

export const COMPOUNDS: Compound[] = [
  {
    id: "water", name: "Water", formula: "H₂O", molecularMass: 18.015,
    atoms: [
      { id: "O1", element: "O", x: 0, y: 0, z: 0, formalCharge: 0, lonePairs: 2 },
      { id: "H1", element: "H", x: 0.96, y: 0, z: 0, formalCharge: 0, lonePairs: 0 },
      { id: "H2", element: "H", x: -0.24, y: 0.93, z: 0, formalCharge: 0, lonePairs: 0 },
    ],
    bonds: [{ from: "O1", to: "H1", type: "single" }, { from: "O1", to: "H2", type: "single" }],
    properties: { meltingPoint: 273.15, boilingPoint: 373.15, phaseAtSTP: "liquid", color: "#AADDFF", acidity: "amphoteric", polarity: "polar", solubilityInWater: "soluble", enthalpyOfFormation: -285.8, entropy: 69.9, restricted: false, tags: ["universal-solvent","essential","polar"] },
    geometryHints: { O1: { shape: "bent", bondAngle: 104.5 } }
  },
  {
    id: "carbon-dioxide", name: "Carbon Dioxide", formula: "CO₂", molecularMass: 44.01,
    atoms: [
      { id: "C1", element: "C", x: 0, y: 0, z: 0, formalCharge: 0, lonePairs: 0 },
      { id: "O1", element: "O", x: 1.16, y: 0, z: 0, formalCharge: 0, lonePairs: 2 },
      { id: "O2", element: "O", x: -1.16, y: 0, z: 0, formalCharge: 0, lonePairs: 2 },
    ],
    bonds: [{ from: "C1", to: "O1", type: "double" }, { from: "C1", to: "O2", type: "double" }],
    properties: { meltingPoint: 194.7, boilingPoint: 194.7, phaseAtSTP: "gas", color: "#E8E8E8", acidity: "acid", polarity: "nonpolar", solubilityInWater: "slightly", enthalpyOfFormation: -393.5, entropy: 213.7, restricted: false, tags: ["greenhouse-gas","acidic-oxide"] },
    geometryHints: { C1: { shape: "linear", bondAngle: 180 } }
  },
  {
    id: "sodium-chloride", name: "Sodium Chloride", formula: "NaCl", molecularMass: 58.44,
    atoms: [
      { id: "Na1", element: "Na", x: 0, y: 0, z: 0, formalCharge: 1, lonePairs: 0 },
      { id: "Cl1", element: "Cl", x: 2.36, y: 0, z: 0, formalCharge: -1, lonePairs: 3 },
    ],
    bonds: [{ from: "Na1", to: "Cl1", type: "single" }],
    properties: { meltingPoint: 1074, boilingPoint: 1686, phaseAtSTP: "solid", color: "#FFFFFF", acidity: "neutral", polarity: "ionic", solubilityInWater: "soluble", enthalpyOfFormation: -411.2, entropy: 72.1, restricted: false, tags: ["salt","ionic-crystal","electrolyte"] },
    geometryHints: {}
  },
  {
    id: "hydrogen", name: "Hydrogen", formula: "H₂", molecularMass: 2.016,
    atoms: [
      { id: "H1", element: "H", x: 0, y: 0, z: 0, formalCharge: 0, lonePairs: 0 },
      { id: "H2", element: "H", x: 0.74, y: 0, z: 0, formalCharge: 0, lonePairs: 0 },
    ],
    bonds: [{ from: "H1", to: "H2", type: "single" }],
    properties: { meltingPoint: 13.99, boilingPoint: 20.27, phaseAtSTP: "gas", color: "#EEEEEE", acidity: "neutral", polarity: "nonpolar", solubilityInWater: "slightly", enthalpyOfFormation: 0, entropy: 130.7, restricted: false, tags: ["fuel","diatomic","lightest"] },
    geometryHints: {}
  },
  {
    id: "oxygen", name: "Oxygen", formula: "O₂", molecularMass: 32.00,
    atoms: [
      { id: "O1", element: "O", x: 0, y: 0, z: 0, formalCharge: 0, lonePairs: 2 },
      { id: "O2", element: "O", x: 1.21, y: 0, z: 0, formalCharge: 0, lonePairs: 2 },
    ],
    bonds: [{ from: "O1", to: "O2", type: "double" }],
    properties: { meltingPoint: 54.36, boilingPoint: 90.20, phaseAtSTP: "gas", color: "#CCDDFF", acidity: "neutral", polarity: "nonpolar", solubilityInWater: "slightly", enthalpyOfFormation: 0, entropy: 205.2, restricted: false, tags: ["oxidizer","essential","diatomic"] },
    geometryHints: {}
  },
  {
    id: "nitrogen", name: "Nitrogen", formula: "N₂", molecularMass: 28.01,
    atoms: [
      { id: "N1", element: "N", x: 0, y: 0, z: 0, formalCharge: 0, lonePairs: 1 },
      { id: "N2", element: "N", x: 1.10, y: 0, z: 0, formalCharge: 0, lonePairs: 1 },
    ],
    bonds: [{ from: "N1", to: "N2", type: "triple" }],
    properties: { meltingPoint: 63.15, boilingPoint: 77.36, phaseAtSTP: "gas", color: "#DDEEFF", acidity: "neutral", polarity: "nonpolar", solubilityInWater: "slightly", enthalpyOfFormation: 0, entropy: 191.6, restricted: false, tags: ["inert","diatomic","atmosphere"] },
    geometryHints: {}
  },
  {
    id: "methane", name: "Methane", formula: "CH₄", molecularMass: 16.04,
    atoms: [
      { id: "C1", element: "C", x: 0, y: 0, z: 0, formalCharge: 0, lonePairs: 0 },
      { id: "H1", element: "H", x: 0.63, y: 0.63, z: 0.63, formalCharge: 0, lonePairs: 0 },
      { id: "H2", element: "H", x: -0.63, y: -0.63, z: 0.63, formalCharge: 0, lonePairs: 0 },
      { id: "H3", element: "H", x: -0.63, y: 0.63, z: -0.63, formalCharge: 0, lonePairs: 0 },
      { id: "H4", element: "H", x: 0.63, y: -0.63, z: -0.63, formalCharge: 0, lonePairs: 0 },
    ],
    bonds: [
      { from: "C1", to: "H1", type: "single" }, { from: "C1", to: "H2", type: "single" },
      { from: "C1", to: "H3", type: "single" }, { from: "C1", to: "H4", type: "single" },
    ],
    properties: { meltingPoint: 90.69, boilingPoint: 111.66, phaseAtSTP: "gas", color: "#DDDDDD", acidity: "neutral", polarity: "nonpolar", solubilityInWater: "slightly", enthalpyOfFormation: -74.6, entropy: 186.3, restricted: false, tags: ["fuel","greenhouse-gas","alkane"] },
    geometryHints: { C1: { shape: "tetrahedral", bondAngle: 109.5 } }
  },
  {
    id: "ammonia", name: "Ammonia", formula: "NH₃", molecularMass: 17.03,
    atoms: [
      { id: "N1", element: "N", x: 0, y: 0, z: 0, formalCharge: 0, lonePairs: 1 },
      { id: "H1", element: "H", x: 0.94, y: 0, z: 0.38, formalCharge: 0, lonePairs: 0 },
      { id: "H2", element: "H", x: -0.47, y: 0.81, z: 0.38, formalCharge: 0, lonePairs: 0 },
      { id: "H3", element: "H", x: -0.47, y: -0.81, z: 0.38, formalCharge: 0, lonePairs: 0 },
    ],
    bonds: [
      { from: "N1", to: "H1", type: "single" }, { from: "N1", to: "H2", type: "single" },
      { from: "N1", to: "H3", type: "single" },
    ],
    properties: { meltingPoint: 195.42, boilingPoint: 239.81, phaseAtSTP: "gas", color: "#CCFFCC", acidity: "base", polarity: "polar", solubilityInWater: "soluble", enthalpyOfFormation: -45.9, entropy: 192.8, restricted: false, tags: ["base","fertilizer","polar"] },
    geometryHints: { N1: { shape: "trigonal-pyramidal", bondAngle: 107.8 } }
  },
  {
    id: "hydrogen-chloride", name: "Hydrogen Chloride", formula: "HCl", molecularMass: 36.46,
    atoms: [
      { id: "H1", element: "H", x: 0, y: 0, z: 0, formalCharge: 0, lonePairs: 0 },
      { id: "Cl1", element: "Cl", x: 1.27, y: 0, z: 0, formalCharge: 0, lonePairs: 3 },
    ],
    bonds: [{ from: "H1", to: "Cl1", type: "single" }],
    properties: { meltingPoint: 158.97, boilingPoint: 188.11, phaseAtSTP: "gas", color: "#EEFFEE", acidity: "acid", polarity: "polar", solubilityInWater: "soluble", enthalpyOfFormation: -92.3, entropy: 186.9, restricted: false, tags: ["strong-acid","electrolyte"] },
    geometryHints: {}
  },
  {
    id: "sulfuric-acid", name: "Sulfuric Acid", formula: "H₂SO₄", molecularMass: 98.079,
    atoms: [
      { id: "S1", element: "S", x: 0, y: 0, z: 0, formalCharge: 0, lonePairs: 0 },
      { id: "O1", element: "O", x: 1.43, y: 0, z: 0, formalCharge: 0, lonePairs: 2 },
      { id: "O2", element: "O", x: -1.43, y: 0, z: 0, formalCharge: 0, lonePairs: 2 },
      { id: "O3", element: "O", x: 0, y: 1.0, z: 0.8, formalCharge: -1, lonePairs: 2 },
      { id: "O4", element: "O", x: 0, y: -1.0, z: 0.8, formalCharge: 0, lonePairs: 2 },
      { id: "H1", element: "H", x: 0.5, y: 1.5, z: 1.2, formalCharge: 1, lonePairs: 0 },
      { id: "H2", element: "H", x: -0.5, y: -1.5, z: 1.2, formalCharge: 0, lonePairs: 0 },
    ],
    bonds: [
      { from: "S1", to: "O1", type: "double" }, { from: "S1", to: "O2", type: "double" },
      { from: "S1", to: "O3", type: "single" }, { from: "S1", to: "O4", type: "single" },
      { from: "O3", to: "H1", type: "single" }, { from: "O4", to: "H2", type: "single" },
    ],
    properties: { meltingPoint: 283.46, boilingPoint: 610, phaseAtSTP: "liquid", color: "#FFFFCC", acidity: "acid", polarity: "polar", solubilityInWater: "soluble", enthalpyOfFormation: -814.0, entropy: 156.9, restricted: false, tags: ["strong-acid","diprotic","industrial"] },
    geometryHints: { S1: { shape: "tetrahedral", bondAngle: 109.5 } }
  },
  {
    id: "sodium-hydroxide", name: "Sodium Hydroxide", formula: "NaOH", molecularMass: 40.00,
    atoms: [
      { id: "Na1", element: "Na", x: 0, y: 0, z: 0, formalCharge: 1, lonePairs: 0 },
      { id: "O1", element: "O", x: 2.0, y: 0, z: 0, formalCharge: -1, lonePairs: 3 },
      { id: "H1", element: "H", x: 2.96, y: 0, z: 0, formalCharge: 0, lonePairs: 0 },
    ],
    bonds: [{ from: "O1", to: "H1", type: "single" }],
    properties: { meltingPoint: 596, boilingPoint: 1663, phaseAtSTP: "solid", color: "#FFFFFF", acidity: "base", polarity: "ionic", solubilityInWater: "soluble", enthalpyOfFormation: -469.6, entropy: 75.9, restricted: false, tags: ["strong-base","caustic","industrial"] },
    geometryHints: {}
  },
  {
    id: "calcium-carbonate", name: "Calcium Carbonate", formula: "CaCO₃", molecularMass: 100.09,
    atoms: [
      { id: "Ca1", element: "Ca", x: 0, y: 0, z: 0, formalCharge: 2, lonePairs: 0 },
      { id: "C1", element: "C", x: 2.5, y: 0, z: 0, formalCharge: 0, lonePairs: 0 },
      { id: "O1", element: "O", x: 3.5, y: 0.8, z: 0, formalCharge: -1, lonePairs: 2 },
      { id: "O2", element: "O", x: 3.5, y: -0.8, z: 0, formalCharge: -1, lonePairs: 2 },
      { id: "O3", element: "O", x: 2.5, y: 0, z: 1.2, formalCharge: 0, lonePairs: 2 },
    ],
    bonds: [
      { from: "C1", to: "O1", type: "single" }, { from: "C1", to: "O2", type: "single" },
      { from: "C1", to: "O3", type: "double" },
    ],
    properties: { meltingPoint: 1612, boilingPoint: 1612, phaseAtSTP: "solid", color: "#F5F5DC", acidity: "base", polarity: "ionic", solubilityInWater: "insoluble", enthalpyOfFormation: -1207.6, entropy: 91.7, restricted: false, tags: ["chalk","limestone","antacid"] },
    geometryHints: { C1: { shape: "trigonal-planar", bondAngle: 120 } }
  },
  {
    id: "calcium-oxide", name: "Calcium Oxide", formula: "CaO", molecularMass: 56.08,
    atoms: [
      { id: "Ca1", element: "Ca", x: 0, y: 0, z: 0, formalCharge: 2, lonePairs: 0 },
      { id: "O1", element: "O", x: 2.0, y: 0, z: 0, formalCharge: -2, lonePairs: 2 },
    ],
    bonds: [{ from: "Ca1", to: "O1", type: "single" }],
    properties: { meltingPoint: 2888, boilingPoint: 3123, phaseAtSTP: "solid", color: "#FFFFFF", acidity: "base", polarity: "ionic", solubilityInWater: "slightly", enthalpyOfFormation: -635.5, entropy: 39.8, restricted: false, tags: ["quicklime","strong-base","industrial"] },
    geometryHints: {}
  },
  {
    id: "calcium-hydroxide", name: "Calcium Hydroxide", formula: "Ca(OH)₂", molecularMass: 74.09,
    atoms: [
      { id: "Ca1", element: "Ca", x: 0, y: 0, z: 0, formalCharge: 2, lonePairs: 0 },
      { id: "O1", element: "O", x: 2.0, y: 0.5, z: 0, formalCharge: -1, lonePairs: 3 },
      { id: "O2", element: "O", x: 2.0, y: -0.5, z: 0, formalCharge: -1, lonePairs: 3 },
      { id: "H1", element: "H", x: 2.96, y: 0.5, z: 0, formalCharge: 0, lonePairs: 0 },
      { id: "H2", element: "H", x: 2.96, y: -0.5, z: 0, formalCharge: 0, lonePairs: 0 },
    ],
    bonds: [{ from: "O1", to: "H1", type: "single" }, { from: "O2", to: "H2", type: "single" }],
    properties: { meltingPoint: 853, boilingPoint: 1663, phaseAtSTP: "solid", color: "#FFFFFF", acidity: "base", polarity: "ionic", solubilityInWater: "slightly", enthalpyOfFormation: -986.1, entropy: 83.4, restricted: false, tags: ["slaked-lime","strong-base","construction"] },
    geometryHints: {}
  },
  {
    id: "iron-oxide", name: "Iron(III) Oxide", formula: "Fe₂O₃", molecularMass: 159.69,
    atoms: [
      { id: "Fe1", element: "Fe", x: 0, y: 0, z: 0, formalCharge: 3, lonePairs: 0 },
      { id: "Fe2", element: "Fe", x: 3.0, y: 0, z: 0, formalCharge: 3, lonePairs: 0 },
      { id: "O1", element: "O", x: 1.5, y: 1.5, z: 0, formalCharge: -2, lonePairs: 2 },
      { id: "O2", element: "O", x: 1.5, y: -1.5, z: 0, formalCharge: -2, lonePairs: 2 },
      { id: "O3", element: "O", x: 1.5, y: 0, z: 2.0, formalCharge: -2, lonePairs: 2 },
    ],
    bonds: [
      { from: "Fe1", to: "O1", type: "single" }, { from: "Fe1", to: "O2", type: "single" },
      { from: "Fe2", to: "O1", type: "single" }, { from: "Fe2", to: "O3", type: "single" },
    ],
    properties: { meltingPoint: 1838, boilingPoint: 3196, phaseAtSTP: "solid", color: "#8B4513", acidity: "amphoteric", polarity: "ionic", solubilityInWater: "insoluble", enthalpyOfFormation: -824.2, entropy: 87.4, restricted: false, tags: ["rust","pigment","ore"] },
    geometryHints: {}
  },
  {
    id: "copper-sulfate", name: "Copper(II) Sulfate", formula: "CuSO₄", molecularMass: 159.61,
    atoms: [
      { id: "Cu1", element: "Cu", x: 0, y: 0, z: 0, formalCharge: 2, lonePairs: 0 },
      { id: "S1", element: "S", x: 2.5, y: 0, z: 0, formalCharge: 0, lonePairs: 0 },
      { id: "O1", element: "O", x: 3.5, y: 0.8, z: 0, formalCharge: -1, lonePairs: 2 },
      { id: "O2", element: "O", x: 3.5, y: -0.8, z: 0, formalCharge: -1, lonePairs: 2 },
      { id: "O3", element: "O", x: 2.5, y: 0, z: 1.2, formalCharge: -1, lonePairs: 2 },
      { id: "O4", element: "O", x: 2.5, y: 0, z: -1.2, formalCharge: 0, lonePairs: 2 },
    ],
    bonds: [
      { from: "S1", to: "O1", type: "single" }, { from: "S1", to: "O2", type: "single" },
      { from: "S1", to: "O3", type: "single" }, { from: "S1", to: "O4", type: "double" },
    ],
    properties: { meltingPoint: 383, boilingPoint: 650, phaseAtSTP: "solid", color: "#1E90FF", acidity: "acid", polarity: "ionic", solubilityInWater: "soluble", enthalpyOfFormation: -771.4, entropy: 109.2, restricted: false, tags: ["blue-crystal","fungicide","electrolyte"] },
    geometryHints: { S1: { shape: "tetrahedral", bondAngle: 109.5 } }
  },
  {
    id: "hydrogen-peroxide", name: "Hydrogen Peroxide", formula: "H₂O₂", molecularMass: 34.01,
    atoms: [
      { id: "O1", element: "O", x: 0, y: 0, z: 0, formalCharge: 0, lonePairs: 2 },
      { id: "O2", element: "O", x: 1.48, y: 0, z: 0, formalCharge: 0, lonePairs: 2 },
      { id: "H1", element: "H", x: -0.94, y: 0.75, z: 0, formalCharge: 0, lonePairs: 0 },
      { id: "H2", element: "H", x: 2.42, y: 0.75, z: 0, formalCharge: 0, lonePairs: 0 },
    ],
    bonds: [
      { from: "O1", to: "O2", type: "single" }, { from: "O1", to: "H1", type: "single" },
      { from: "O2", to: "H2", type: "single" },
    ],
    properties: { meltingPoint: 272.74, boilingPoint: 423.35, phaseAtSTP: "liquid", color: "#FFFFFF", acidity: "acid", polarity: "polar", solubilityInWater: "soluble", enthalpyOfFormation: -187.8, entropy: 109.6, restricted: false, tags: ["oxidizer","disinfectant","bleach"] },
    geometryHints: { O1: { shape: "bent", bondAngle: 111.5 }, O2: { shape: "bent", bondAngle: 111.5 } }
  },
  {
    id: "sulfur-dioxide", name: "Sulfur Dioxide", formula: "SO₂", molecularMass: 64.07,
    atoms: [
      { id: "S1", element: "S", x: 0, y: 0, z: 0, formalCharge: 0, lonePairs: 1 },
      { id: "O1", element: "O", x: 1.43, y: 0, z: 0, formalCharge: 0, lonePairs: 2 },
      { id: "O2", element: "O", x: -0.72, y: 1.24, z: 0, formalCharge: 0, lonePairs: 2 },
    ],
    bonds: [{ from: "S1", to: "O1", type: "double" }, { from: "S1", to: "O2", type: "double" }],
    properties: { meltingPoint: 197.65, boilingPoint: 263.15, phaseAtSTP: "gas", color: "#FFFFFF", acidity: "acid", polarity: "polar", solubilityInWater: "soluble", enthalpyOfFormation: -296.8, entropy: 248.2, restricted: false, tags: ["pollutant","acidic-oxide","bleach"] },
    geometryHints: { S1: { shape: "bent", bondAngle: 119 } }
  },
  {
    id: "nitrogen-dioxide", name: "Nitrogen Dioxide", formula: "NO₂", molecularMass: 46.01,
    atoms: [
      { id: "N1", element: "N", x: 0, y: 0, z: 0, formalCharge: 1, lonePairs: 0 },
      { id: "O1", element: "O", x: 1.20, y: 0, z: 0, formalCharge: 0, lonePairs: 2 },
      { id: "O2", element: "O", x: -1.20, y: 0, z: 0, formalCharge: -1, lonePairs: 2 },
    ],
    bonds: [{ from: "N1", to: "O1", type: "double" }, { from: "N1", to: "O2", type: "single" }],
    properties: { meltingPoint: 262.05, boilingPoint: 294.25, phaseAtSTP: "gas", color: "#FF5500", acidity: "acid", polarity: "polar", solubilityInWater: "soluble", enthalpyOfFormation: 33.2, entropy: 240.1, restricted: false, tags: ["pollutant","brown-gas","radical"] },
    geometryHints: { N1: { shape: "bent", bondAngle: 134 } }
  },
  {
    id: "carbon-monoxide", name: "Carbon Monoxide", formula: "CO", molecularMass: 28.01,
    atoms: [
      { id: "C1", element: "C", x: 0, y: 0, z: 0, formalCharge: 1, lonePairs: 1 },
      { id: "O1", element: "O", x: 1.13, y: 0, z: 0, formalCharge: -1, lonePairs: 2 },
    ],
    bonds: [{ from: "C1", to: "O1", type: "triple" }],
    properties: { meltingPoint: 68.15, boilingPoint: 81.65, phaseAtSTP: "gas", color: "#DDDDDD", acidity: "neutral", polarity: "polar", solubilityInWater: "slightly", enthalpyOfFormation: -110.5, entropy: 197.7, restricted: false, tags: ["toxic","fuel","reducing-agent"] },
    geometryHints: { C1: { shape: "linear", bondAngle: 180 } }
  },
  {
    id: "magnesium-oxide", name: "Magnesium Oxide", formula: "MgO", molecularMass: 40.30,
    atoms: [
      { id: "Mg1", element: "Mg", x: 0, y: 0, z: 0, formalCharge: 2, lonePairs: 0 },
      { id: "O1", element: "O", x: 2.0, y: 0, z: 0, formalCharge: -2, lonePairs: 2 },
    ],
    bonds: [{ from: "Mg1", to: "O1", type: "single" }],
    properties: { meltingPoint: 3125, boilingPoint: 3873, phaseAtSTP: "solid", color: "#FFFFFF", acidity: "base", polarity: "ionic", solubilityInWater: "insoluble", enthalpyOfFormation: -601.6, entropy: 27.0, restricted: false, tags: ["refractory","antacid","insulator"] },
    geometryHints: {}
  },
  {
    id: "aluminum-oxide", name: "Aluminum Oxide", formula: "Al₂O₃", molecularMass: 101.96,
    atoms: [
      { id: "Al1", element: "Al", x: 0, y: 0, z: 0, formalCharge: 3, lonePairs: 0 },
      { id: "Al2", element: "Al", x: 3.0, y: 0, z: 0, formalCharge: 3, lonePairs: 0 },
      { id: "O1", element: "O", x: 1.5, y: 1.5, z: 0, formalCharge: -2, lonePairs: 2 },
      { id: "O2", element: "O", x: 1.5, y: -1.5, z: 0, formalCharge: -2, lonePairs: 2 },
      { id: "O3", element: "O", x: 1.5, y: 0, z: 2.0, formalCharge: -2, lonePairs: 2 },
    ],
    bonds: [
      { from: "Al1", to: "O1", type: "single" }, { from: "Al1", to: "O2", type: "single" },
      { from: "Al2", to: "O1", type: "single" }, { from: "Al2", to: "O3", type: "single" },
    ],
    properties: { meltingPoint: 2345, boilingPoint: 3273, phaseAtSTP: "solid", color: "#FFFFFF", acidity: "amphoteric", polarity: "ionic", solubilityInWater: "insoluble", enthalpyOfFormation: -1675.7, entropy: 50.9, restricted: false, tags: ["corundum","refractory","ceramic"] },
    geometryHints: {}
  },
  {
    id: "silicon-dioxide", name: "Silicon Dioxide", formula: "SiO₂", molecularMass: 60.08,
    atoms: [
      { id: "Si1", element: "Si", x: 0, y: 0, z: 0, formalCharge: 0, lonePairs: 0 },
      { id: "O1", element: "O", x: 1.61, y: 0, z: 0, formalCharge: 0, lonePairs: 2 },
      { id: "O2", element: "O", x: -1.61, y: 0, z: 0, formalCharge: 0, lonePairs: 2 },
    ],
    bonds: [{ from: "Si1", to: "O1", type: "double" }, { from: "Si1", to: "O2", type: "double" }],
    properties: { meltingPoint: 1986, boilingPoint: 2503, phaseAtSTP: "solid", color: "#FFFFFF", acidity: "acid", polarity: "nonpolar", solubilityInWater: "insoluble", enthalpyOfFormation: -910.7, entropy: 41.5, restricted: false, tags: ["quartz","glass","sand","network-solid"] },
    geometryHints: { Si1: { shape: "linear", bondAngle: 180 } }
  },
  {
    id: "sodium-bicarbonate", name: "Sodium Bicarbonate", formula: "NaHCO₃", molecularMass: 84.01,
    atoms: [
      { id: "Na1", element: "Na", x: 0, y: 0, z: 0, formalCharge: 1, lonePairs: 0 },
      { id: "H1", element: "H", x: 2.0, y: 0, z: 0, formalCharge: 0, lonePairs: 0 },
      { id: "C1", element: "C", x: 3.0, y: 0, z: 0, formalCharge: 0, lonePairs: 0 },
      { id: "O1", element: "O", x: 4.0, y: 0.8, z: 0, formalCharge: -1, lonePairs: 2 },
      { id: "O2", element: "O", x: 4.0, y: -0.8, z: 0, formalCharge: -1, lonePairs: 2 },
      { id: "O3", element: "O", x: 3.0, y: 0, z: 1.2, formalCharge: 0, lonePairs: 2 },
    ],
    bonds: [
      { from: "C1", to: "O1", type: "single" }, { from: "C1", to: "O2", type: "single" },
      { from: "C1", to: "O3", type: "double" }, { from: "O1", to: "H1", type: "single" },
    ],
    properties: { meltingPoint: 543, boilingPoint: 851, phaseAtSTP: "solid", color: "#FFFFFF", acidity: "base", polarity: "ionic", solubilityInWater: "soluble", enthalpyOfFormation: -950.8, entropy: 102.1, restricted: false, tags: ["baking-soda","weak-base","antacid"] },
    geometryHints: { C1: { shape: "trigonal-planar", bondAngle: 120 } }
  },
  {
    id: "sodium-carbonate", name: "Sodium Carbonate", formula: "Na₂CO₃", molecularMass: 105.99,
    atoms: [
      { id: "Na1", element: "Na", x: 0, y: 0, z: 0, formalCharge: 1, lonePairs: 0 },
      { id: "Na2", element: "Na", x: 3.0, y: 0, z: 0, formalCharge: 1, lonePairs: 0 },
      { id: "C1", element: "C", x: 1.5, y: 1.5, z: 0, formalCharge: 0, lonePairs: 0 },
      { id: "O1", element: "O", x: 2.5, y: 2.3, z: 0, formalCharge: -1, lonePairs: 2 },
      { id: "O2", element: "O", x: 0.5, y: 2.3, z: 0, formalCharge: -1, lonePairs: 2 },
      { id: "O3", element: "O", x: 1.5, y: 1.5, z: 1.2, formalCharge: 0, lonePairs: 2 },
    ],
    bonds: [
      { from: "C1", to: "O1", type: "single" }, { from: "C1", to: "O2", type: "single" },
      { from: "C1", to: "O3", type: "double" },
    ],
    properties: { meltingPoint: 1124, boilingPoint: 1124, phaseAtSTP: "solid", color: "#FFFFFF", acidity: "base", polarity: "ionic", solubilityInWater: "soluble", enthalpyOfFormation: -1130.7, entropy: 135.0, restricted: false, tags: ["washing-soda","soluble","strong-base"] },
    geometryHints: { C1: { shape: "trigonal-planar", bondAngle: 120 } }
  },
  {
    id: "potassium-hydroxide", name: "Potassium Hydroxide", formula: "KOH", molecularMass: 56.11,
    atoms: [
      { id: "K1", element: "K", x: 0, y: 0, z: 0, formalCharge: 1, lonePairs: 0 },
      { id: "O1", element: "O", x: 2.0, y: 0, z: 0, formalCharge: -1, lonePairs: 3 },
      { id: "H1", element: "H", x: 2.96, y: 0, z: 0, formalCharge: 0, lonePairs: 0 },
    ],
    bonds: [{ from: "O1", to: "H1", type: "single" }],
    properties: { meltingPoint: 673, boilingPoint: 1593, phaseAtSTP: "solid", color: "#FFFFFF", acidity: "base", polarity: "ionic", solubilityInWater: "soluble", enthalpyOfFormation: -424.8, entropy: 81.2, restricted: false, tags: ["strong-base","caustic","electrolyte"] },
    geometryHints: {}
  },
  {
    id: "nitric-acid", name: "Nitric Acid", formula: "HNO₃", molecularMass: 63.01,
    atoms: [
      { id: "N1", element: "N", x: 0, y: 0, z: 0, formalCharge: 1, lonePairs: 0 },
      { id: "O1", element: "O", x: 1.21, y: 0, z: 0, formalCharge: 0, lonePairs: 2 },
      { id: "O2", element: "O", x: -0.60, y: 1.04, z: 0, formalCharge: -1, lonePairs: 2 },
      { id: "O3", element: "O", x: -0.60, y: -1.04, z: 0, formalCharge: -1, lonePairs: 2 },
      { id: "H1", element: "H", x: -1.56, y: -1.04, z: 0, formalCharge: 0, lonePairs: 0 },
    ],
    bonds: [
      { from: "N1", to: "O1", type: "double" }, { from: "N1", to: "O2", type: "single" },
      { from: "N1", to: "O3", type: "single" }, { from: "O3", to: "H1", type: "single" },
    ],
    properties: { meltingPoint: 231.55, boilingPoint: 356.15, phaseAtSTP: "liquid", color: "#FFFFCC", acidity: "acid", polarity: "polar", solubilityInWater: "soluble", enthalpyOfFormation: -174.1, entropy: 155.6, restricted: false, tags: ["strong-acid","oxidizer","industrial"] },
    geometryHints: { N1: { shape: "trigonal-planar", bondAngle: 120 } }
  },
  {
    id: "hydrogen-sulfide", name: "Hydrogen Sulfide", formula: "H₂S", molecularMass: 34.08,
    atoms: [
      { id: "S1", element: "S", x: 0, y: 0, z: 0, formalCharge: 0, lonePairs: 2 },
      { id: "H1", element: "H", x: 1.34, y: 0, z: 0, formalCharge: 0, lonePairs: 0 },
      { id: "H2", element: "H", x: -0.67, y: 1.16, z: 0, formalCharge: 0, lonePairs: 0 },
    ],
    bonds: [{ from: "S1", to: "H1", type: "single" }, { from: "S1", to: "H2", type: "single" }],
    properties: { meltingPoint: 187.63, boilingPoint: 213.55, phaseAtSTP: "gas", color: "#FFFFAA", acidity: "acid", polarity: "polar", solubilityInWater: "slightly", enthalpyOfFormation: -20.6, entropy: 205.8, restricted: false, tags: ["toxic","rotten-egg","weak-acid"] },
    geometryHints: { S1: { shape: "bent", bondAngle: 92.1 } }
  },
  {
    id: "phosphoric-acid", name: "Phosphoric Acid", formula: "H₃PO₄", molecularMass: 97.99,
    atoms: [
      { id: "P1", element: "P", x: 0, y: 0, z: 0, formalCharge: 0, lonePairs: 0 },
      { id: "O1", element: "O", x: 1.51, y: 0, z: 0, formalCharge: 0, lonePairs: 2 },
      { id: "O2", element: "O", x: -0.76, y: 1.31, z: 0, formalCharge: 0, lonePairs: 2 },
      { id: "O3", element: "O", x: -0.76, y: -1.31, z: 0, formalCharge: 0, lonePairs: 2 },
      { id: "O4", element: "O", x: 0, y: 0, z: 1.2, formalCharge: 0, lonePairs: 2 },
      { id: "H1", element: "H", x: 2.47, y: 0, z: 0, formalCharge: 0, lonePairs: 0 },
      { id: "H2", element: "H", x: -1.72, y: 1.31, z: 0, formalCharge: 0, lonePairs: 0 },
      { id: "H3", element: "H", x: -1.72, y: -1.31, z: 0, formalCharge: 0, lonePairs: 0 },
    ],
    bonds: [
      { from: "P1", to: "O1", type: "single" }, { from: "P1", to: "O2", type: "single" },
      { from: "P1", to: "O3", type: "single" }, { from: "P1", to: "O4", type: "double" },
      { from: "O1", to: "H1", type: "single" }, { from: "O2", to: "H2", type: "single" },
      { from: "O3", to: "H3", type: "single" },
    ],
    properties: { meltingPoint: 315.45, boilingPoint: 484, phaseAtSTP: "liquid", color: "#FFFFEE", acidity: "acid", polarity: "polar", solubilityInWater: "soluble", enthalpyOfFormation: -1288.3, entropy: 158.2, restricted: false, tags: ["triprotic","fertilizer","weak-acid"] },
    geometryHints: { P1: { shape: "tetrahedral", bondAngle: 109.5 } }
  },
  {
    id: "silver-nitrate", name: "Silver Nitrate", formula: "AgNO₃", molecularMass: 169.87,
    atoms: [
      { id: "Ag1", element: "Ag", x: 0, y: 0, z: 0, formalCharge: 1, lonePairs: 0 },
      { id: "N1", element: "N", x: 2.5, y: 0, z: 0, formalCharge: 1, lonePairs: 0 },
      { id: "O1", element: "O", x: 3.5, y: 0.8, z: 0, formalCharge: -1, lonePairs: 2 },
      { id: "O2", element: "O", x: 3.5, y: -0.8, z: 0, formalCharge: -1, lonePairs: 2 },
      { id: "O3", element: "O", x: 2.5, y: 0, z: 1.2, formalCharge: -1, lonePairs: 2 },
    ],
    bonds: [
      { from: "N1", to: "O1", type: "single" }, { from: "N1", to: "O2", type: "single" },
      { from: "N1", to: "O3", type: "double" },
    ],
    properties: { meltingPoint: 485, boilingPoint: 717, phaseAtSTP: "solid", color: "#FFFFFF", acidity: "neutral", polarity: "ionic", solubilityInWater: "soluble", enthalpyOfFormation: -124.4, entropy: 140.9, restricted: false, tags: ["photo-sensitive","oxidizer","stain"] },
    geometryHints: { N1: { shape: "trigonal-planar", bondAngle: 120 } }
  },
  {
    id: "potassium-permanganate", name: "Potassium Permanganate", formula: "KMnO₄", molecularMass: 158.03,
    atoms: [
      { id: "K1", element: "K", x: 0, y: 0, z: 0, formalCharge: 1, lonePairs: 0 },
      { id: "Mn1", element: "Mn", x: 2.5, y: 0, z: 0, formalCharge: 7, lonePairs: 0 },
      { id: "O1", element: "O", x: 3.5, y: 0.8, z: 0, formalCharge: -2, lonePairs: 2 },
      { id: "O2", element: "O", x: 3.5, y: -0.8, z: 0, formalCharge: -2, lonePairs: 2 },
      { id: "O3", element: "O", x: 2.5, y: 0, z: 1.2, formalCharge: -2, lonePairs: 2 },
      { id: "O4", element: "O", x: 2.5, y: 0, z: -1.2, formalCharge: -2, lonePairs: 2 },
    ],
    bonds: [
      { from: "Mn1", to: "O1", type: "double" }, { from: "Mn1", to: "O2", type: "double" },
      { from: "Mn1", to: "O3", type: "double" }, { from: "Mn1", to: "O4", type: "double" },
    ],
    properties: { meltingPoint: 513, boilingPoint: 513, phaseAtSTP: "solid", color: "#800080", acidity: "neutral", polarity: "ionic", solubilityInWater: "soluble", enthalpyOfFormation: -837.2, entropy: 171.7, restricted: false, tags: ["oxidizer","disinfectant","purple","strong-oxidizer"] },
    geometryHints: { Mn1: { shape: "tetrahedral", bondAngle: 109.5 } }
  },
  {
    id: "ethanol", name: "Ethanol", formula: "C₂H₅OH", molecularMass: 46.07,
    atoms: [
      { id: "C1", element: "C", x: 0, y: 0, z: 0, formalCharge: 0, lonePairs: 0 },
      { id: "C2", element: "C", x: 1.54, y: 0, z: 0, formalCharge: 0, lonePairs: 0 },
      { id: "O1", element: "O", x: 2.24, y: 1.0, z: 0, formalCharge: 0, lonePairs: 2 },
      { id: "H1", element: "H", x: -0.36, y: 1.03, z: 0, formalCharge: 0, lonePairs: 0 },
      { id: "H2", element: "H", x: -0.36, y: -0.51, z: 0.89, formalCharge: 0, lonePairs: 0 },
      { id: "H3", element: "H", x: -0.36, y: -0.51, z: -0.89, formalCharge: 0, lonePairs: 0 },
      { id: "H4", element: "H", x: 1.90, y: -0.51, z: 0.89, formalCharge: 0, lonePairs: 0 },
      { id: "H5", element: "H", x: 1.90, y: -0.51, z: -0.89, formalCharge: 0, lonePairs: 0 },
      { id: "H6", element: "H", x: 2.84, y: 0.70, z: 0, formalCharge: 0, lonePairs: 0 },
    ],
    bonds: [
      { from: "C1", to: "C2", type: "single" }, { from: "C2", to: "O1", type: "single" },
      { from: "C1", to: "H1", type: "single" }, { from: "C1", to: "H2", type: "single" },
      { from: "C1", to: "H3", type: "single" }, { from: "C2", to: "H4", type: "single" },
      { from: "C2", to: "H5", type: "single" }, { from: "O1", to: "H6", type: "single" },
    ],
    properties: { meltingPoint: 159.05, boilingPoint: 351.44, phaseAtSTP: "liquid", color: "#DDEEFF", acidity: "neutral", polarity: "polar", solubilityInWater: "soluble", enthalpyOfFormation: -277.6, entropy: 160.7, restricted: false, tags: ["alcohol","solvent","fuel","biofuel"] },
    geometryHints: { C1: { shape: "tetrahedral", bondAngle: 109.5 }, C2: { shape: "tetrahedral", bondAngle: 109.5 }, O1: { shape: "bent", bondAngle: 104.5 } }
  },
  {
    id: "acetic-acid", name: "Acetic Acid", formula: "CH₃COOH", molecularMass: 60.05,
    atoms: [
      { id: "C1", element: "C", x: 0, y: 0, z: 0, formalCharge: 0, lonePairs: 0 },
      { id: "C2", element: "C", x: 1.54, y: 0, z: 0, formalCharge: 0, lonePairs: 0 },
      { id: "O1", element: "O", x: 2.24, y: 1.0, z: 0, formalCharge: 0, lonePairs: 2 },
      { id: "O2", element: "O", x: 2.24, y: -1.0, z: 0, formalCharge: -1, lonePairs: 2 },
      { id: "H1", element: "H", x: -0.36, y: 1.03, z: 0, formalCharge: 0, lonePairs: 0 },
      { id: "H2", element: "H", x: -0.36, y: -0.51, z: 0.89, formalCharge: 0, lonePairs: 0 },
      { id: "H3", element: "H", x: -0.36, y: -0.51, z: -0.89, formalCharge: 0, lonePairs: 0 },
      { id: "H4", element: "H", x: 2.84, y: 1.0, z: 0, formalCharge: 1, lonePairs: 0 },
    ],
    bonds: [
      { from: "C1", to: "C2", type: "single" }, { from: "C2", to: "O1", type: "double" },
      { from: "C2", to: "O2", type: "single" }, { from: "C1", to: "H1", type: "single" },
      { from: "C1", to: "H2", type: "single" }, { from: "C1", to: "H3", type: "single" },
      { from: "O2", to: "H4", type: "single" },
    ],
    properties: { meltingPoint: 289.85, boilingPoint: 391.25, phaseAtSTP: "liquid", color: "#EEFFDD", acidity: "acid", polarity: "polar", solubilityInWater: "soluble", enthalpyOfFormation: -484.5, entropy: 159.8, restricted: false, tags: ["weak-acid","vinegar","organic"] },
    geometryHints: { C1: { shape: "tetrahedral", bondAngle: 109.5 }, C2: { shape: "trigonal-planar", bondAngle: 120 } }
  },
  {
    id: "benzene", name: "Benzene", formula: "C₆H₆", molecularMass: 78.11,
    atoms: [
      { id: "C1", element: "C", x: 1.40, y: 0, z: 0, formalCharge: 0, lonePairs: 0 },
      { id: "C2", element: "C", x: 0.70, y: 1.21, z: 0, formalCharge: 0, lonePairs: 0 },
      { id: "C3", element: "C", x: -0.70, y: 1.21, z: 0, formalCharge: 0, lonePairs: 0 },
      { id: "C4", element: "C", x: -1.40, y: 0, z: 0, formalCharge: 0, lonePairs: 0 },
      { id: "C5", element: "C", x: -0.70, y: -1.21, z: 0, formalCharge: 0, lonePairs: 0 },
      { id: "C6", element: "C", x: 0.70, y: -1.21, z: 0, formalCharge: 0, lonePairs: 0 },
      { id: "H1", element: "H", x: 2.49, y: 0, z: 0, formalCharge: 0, lonePairs: 0 },
      { id: "H2", element: "H", x: 1.25, y: 2.16, z: 0, formalCharge: 0, lonePairs: 0 },
      { id: "H3", element: "H", x: -1.25, y: 2.16, z: 0, formalCharge: 0, lonePairs: 0 },
      { id: "H4", element: "H", x: -2.49, y: 0, z: 0, formalCharge: 0, lonePairs: 0 },
      { id: "H5", element: "H", x: -1.25, y: -2.16, z: 0, formalCharge: 0, lonePairs: 0 },
      { id: "H6", element: "H", x: 1.25, y: -2.16, z: 0, formalCharge: 0, lonePairs: 0 },
    ],
    bonds: [
      { from: "C1", to: "C2", type: "aromatic" }, { from: "C2", to: "C3", type: "aromatic" },
      { from: "C3", to: "C4", type: "aromatic" }, { from: "C4", to: "C5", type: "aromatic" },
      { from: "C5", to: "C6", type: "aromatic" }, { from: "C6", to: "C1", type: "aromatic" },
      { from: "C1", to: "H1", type: "single" }, { from: "C2", to: "H2", type: "single" },
      { from: "C3", to: "H3", type: "single" }, { from: "C4", to: "H4", type: "single" },
      { from: "C5", to: "H5", type: "single" }, { from: "C6", to: "H6", type: "single" },
    ],
    properties: { meltingPoint: 278.68, boilingPoint: 353.25, phaseAtSTP: "liquid", color: "#DDDDDD", acidity: "neutral", polarity: "nonpolar", solubilityInWater: "insoluble", enthalpyOfFormation: 49.0, entropy: 173.3, restricted: false, tags: ["aromatic","solvent","organic","carcinogen"] },
    geometryHints: {
      C1: { shape: "trigonal-planar", bondAngle: 120 }, C2: { shape: "trigonal-planar", bondAngle: 120 },
      C3: { shape: "trigonal-planar", bondAngle: 120 }, C4: { shape: "trigonal-planar", bondAngle: 120 },
      C5: { shape: "trigonal-planar", bondAngle: 120 }, C6: { shape: "trigonal-planar", bondAngle: 120 },
    }
  },
  {
    id: "glucose", name: "Glucose", formula: "C₆H₁₂O₆", molecularMass: 180.16,
    atoms: [
      { id: "C1", element: "C", x: 0, y: 0, z: 0, formalCharge: 0, lonePairs: 0 },
      { id: "C2", element: "C", x: 1.54, y: 0, z: 0, formalCharge: 0, lonePairs: 0 },
      { id: "C3", element: "C", x: 2.54, y: 1.0, z: 0, formalCharge: 0, lonePairs: 0 },
      { id: "C4", element: "C", x: 3.54, y: 1.0, z: 1.54, formalCharge: 0, lonePairs: 0 },
      { id: "C5", element: "C", x: 2.54, y: 1.0, z: 3.08, formalCharge: 0, lonePairs: 0 },
      { id: "C6", element: "C", x: 1.54, y: 0, z: 3.08, formalCharge: 0, lonePairs: 0 },
      { id: "O1", element: "O", x: -0.5, y: -1.0, z: 0, formalCharge: 0, lonePairs: 2 },
      { id: "O2", element: "O", x: 1.54, y: 0, z: -1.5, formalCharge: 0, lonePairs: 2 },
      { id: "O3", element: "O", x: 2.54, y: 2.0, z: 0, formalCharge: 0, lonePairs: 2 },
      { id: "O4", element: "O", x: 4.54, y: 1.0, z: 1.54, formalCharge: 0, lonePairs: 2 },
      { id: "O5", element: "O", x: 2.54, y: 2.0, z: 3.08, formalCharge: 0, lonePairs: 2 },
      { id: "O6", element: "O", x: 0.54, y: 0, z: 3.08, formalCharge: 0, lonePairs: 2 },
    ],
    bonds: [
      { from: "C1", to: "C2", type: "single" }, { from: "C2", to: "C3", type: "single" },
      { from: "C3", to: "C4", type: "single" }, { from: "C4", to: "C5", type: "single" },
      { from: "C5", to: "C6", type: "single" }, { from: "C6", to: "C1", type: "single" },
      { from: "C1", to: "O1", type: "single" }, { from: "C2", to: "O2", type: "single" },
      { from: "C3", to: "O3", type: "single" }, { from: "C4", to: "O4", type: "single" },
      { from: "C5", to: "O5", type: "single" }, { from: "C6", to: "O6", type: "single" },
    ],
    properties: { meltingPoint: 419, boilingPoint: 603, phaseAtSTP: "solid", color: "#FFFFFF", acidity: "neutral", polarity: "polar", solubilityInWater: "soluble", enthalpyOfFormation: -1273.3, entropy: 212.0, restricted: false, tags: ["sugar","carbohydrate","energy","biological"] },
    geometryHints: { C1: { shape: "tetrahedral", bondAngle: 109.5 }, C2: { shape: "tetrahedral", bondAngle: 109.5 } }
  },
  {
    id: "urea", name: "Urea", formula: "CO(NH₂)₂", molecularMass: 60.06,
    atoms: [
      { id: "C1", element: "C", x: 0, y: 0, z: 0, formalCharge: 0, lonePairs: 0 },
      { id: "O1", element: "O", x: 1.21, y: 0, z: 0, formalCharge: 0, lonePairs: 2 },
      { id: "N1", element: "N", x: -0.60, y: 1.04, z: 0, formalCharge: 0, lonePairs: 1 },
      { id: "N2", element: "N", x: -0.60, y: -1.04, z: 0, formalCharge: 0, lonePairs: 1 },
      { id: "H1", element: "H", x: -1.67, y: 1.04, z: 0, formalCharge: 0, lonePairs: 0 },
      { id: "H2", element: "H", x: -0.30, y: 1.67, z: 0.89, formalCharge: 0, lonePairs: 0 },
      { id: "H3", element: "H", x: -1.67, y: -1.04, z: 0, formalCharge: 0, lonePairs: 0 },
      { id: "H4", element: "H", x: -0.30, y: -1.67, z: 0.89, formalCharge: 0, lonePairs: 0 },
    ],
    bonds: [
      { from: "C1", to: "O1", type: "double" }, { from: "C1", to: "N1", type: "single" },
      { from: "C1", to: "N2", type: "single" }, { from: "N1", to: "H1", type: "single" },
      { from: "N1", to: "H2", type: "single" }, { from: "N2", to: "H3", type: "single" },
      { from: "N2", to: "H4", type: "single" },
    ],
    properties: { meltingPoint: 406.85, boilingPoint: 465, phaseAtSTP: "solid", color: "#FFFFFF", acidity: "neutral", polarity: "polar", solubilityInWater: "soluble", enthalpyOfFormation: -333.5, entropy: 104.6, restricted: false, tags: ["fertilizer","organic","nitrogen-source"] },
    geometryHints: { C1: { shape: "trigonal-planar", bondAngle: 120 }, N1: { shape: "trigonal-pyramidal", bondAngle: 107 }, N2: { shape: "trigonal-pyramidal", bondAngle: 107 } }
  },
  {
    id: "hydrogen-cyanide", name: "Hydrogen Cyanide", formula: "HCN", molecularMass: 27.03,
    atoms: [
      { id: "H1", element: "H", x: 0, y: 0, z: 0, formalCharge: 0, lonePairs: 0 },
      { id: "C1", element: "C", x: 1.06, y: 0, z: 0, formalCharge: 0, lonePairs: 0 },
      { id: "N1", element: "N", x: 2.27, y: 0, z: 0, formalCharge: 0, lonePairs: 1 },
    ],
    bonds: [{ from: "H1", to: "C1", type: "single" }, { from: "C1", to: "N1", type: "triple" }],
    properties: { meltingPoint: 259.85, boilingPoint: 298.85, phaseAtSTP: "gas", color: "#FFFFFF", acidity: "acid", polarity: "polar", solubilityInWater: "soluble", enthalpyOfFormation: 135.1, entropy: 201.8, restricted: true, tags: ["toxic","weak-acid","restricted-display-only"] },
    geometryHints: { C1: { shape: "linear", bondAngle: 180 } }
  },
  {
    id: "phosgene", name: "Phosgene", formula: "COCl₂", molecularMass: 98.92,
    atoms: [
      { id: "C1", element: "C", x: 0, y: 0, z: 0, formalCharge: 0, lonePairs: 0 },
      { id: "O1", element: "O", x: 1.21, y: 0, z: 0, formalCharge: 0, lonePairs: 2 },
      { id: "Cl1", element: "Cl", x: -0.60, y: 1.04, z: 0, formalCharge: 0, lonePairs: 3 },
      { id: "Cl2", element: "Cl", x: -0.60, y: -1.04, z: 0, formalCharge: 0, lonePairs: 3 },
    ],
    bonds: [
      { from: "C1", to: "O1", type: "double" }, { from: "C1", to: "Cl1", type: "single" },
      { from: "C1", to: "Cl2", type: "single" },
    ],
    properties: { meltingPoint: 155.15, boilingPoint: 280.65, phaseAtSTP: "gas", color: "#FFFFFF", acidity: "neutral", polarity: "polar", solubilityInWater: "slightly", enthalpyOfFormation: -220.1, entropy: 283.5, restricted: true, tags: ["toxic","war-gas","restricted-display-only"] },
    geometryHints: { C1: { shape: "trigonal-planar", bondAngle: 120 } }
  },
];

export const COMPOUND_MAP = new Map(COMPOUNDS.map(c => [c.id, c]));
