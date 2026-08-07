import React, { useState } from "react";
import { Compound } from "../../types";
import { FormulaView } from "./FormulaView";
import { LewisView } from "./LewisView";
import { BallStick3D } from "./BallStick3D";

type ViewMode = "formula" | "lewis" | "3d";

interface Props {
  compound: Compound;
}

export const MoleculeViewer: React.FC<Props> = ({ compound }) => {
  const [mode, setMode] = useState<ViewMode>("3d");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
        {(["formula", "lewis", "3d"] as ViewMode[]).map(m => (
          <button
            key={m}
            onClick={() => setMode(m)}
            style={{
              padding: "8px 16px", borderRadius: "8px", border: "1px solid #333",
              background: mode === m ? "#3050F8" : "#1a1a2e",
              color: mode === m ? "#fff" : "#888", cursor: "pointer",
              fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px", transition: "all 0.2s",
            }}
          >
            {m === "3d" ? "Ball & Stick" : m === "lewis" ? "Lewis Structure" : "Formula"}
          </button>
        ))}
      </div>

      {mode === "formula" && <FormulaView compound={compound} />}
      {mode === "lewis" && <LewisView compound={compound} width={400} height={400} />}
      {mode === "3d" && <BallStick3D compound={compound} width={400} height={400} />}

      <div style={{
        background: "#111118", borderRadius: "12px", padding: "16px", border: "1px solid #222",
        fontSize: "0.85rem", color: "#aaa",
      }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
          <Property label="Phase (STP)" value={compound.properties.phaseAtSTP} />
          <Property label="Polarity" value={compound.properties.polarity} />
          <Property label="Acidity" value={compound.properties.acidity} />
          <Property label="Solubility (H₂O)" value={compound.properties.solubilityInWater} />
          <Property label="ΔH°f" value={`${compound.properties.enthalpyOfFormation} kJ/mol`} />
          <Property label="S°" value={`${compound.properties.entropy} J/(mol·K)`} />
          <Property label="MP" value={`${compound.properties.meltingPoint} K`} />
          <Property label="BP" value={`${compound.properties.boilingPoint} K`} />
        </div>
        {compound.properties.restricted && (
          <div style={{
            marginTop: "12px", padding: "8px",
            background: "rgba(255, 68, 68, 0.1)", border: "1px solid #ff4444",
            borderRadius: "6px", color: "#ff4444", fontSize: "0.8rem",
          }}>
            ⚠️ RESTRICTED: Display-only. This compound is included for educational reference but cannot be used in reactor simulations.
          </div>
        )}
      </div>
    </div>
  );
};

const Property: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div>
    <span style={{ color: "#555", fontSize: "0.75rem", textTransform: "uppercase" }}>{label}</span>
    <div style={{ color: "#ddd", fontWeight: 500 }}>{value}</div>
  </div>
);
