import React from "react";
import { Compound } from "../../types";

interface Props {
  compound: Compound;
}

export const FormulaView: React.FC<Props> = ({ compound }) => {
  const renderFormula = (formula: string) => {
    const parts: React.ReactNode[] = [];
    let i = 0;
    while (i < formula.length) {
      const char = formula[i];
      if (char >= "0" && char <= "9") {
        let num = "";
        while (i < formula.length && formula[i] >= "0" && formula[i] <= "9") {
          num += formula[i];
          i++;
        }
        parts.push(<sub key={i} style={{ fontSize: "0.75em" }}>{num}</sub>);
      } else if (char === "(" || char === ")") {
        parts.push(<span key={i} style={{ fontWeight: 500 }}>{char}</span>);
        i++;
      } else {
        parts.push(<span key={i}>{char}</span>);
        i++;
      }
    }
    return parts;
  };

  return (
    <div style={{
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      padding: "40px", background: "#0a0a0f", borderRadius: "12px", border: "1px solid #333", minHeight: "200px",
    }}>
      <div style={{
        fontSize: "3rem", fontWeight: 300, letterSpacing: "2px", color: "#e0e0e0",
        fontFamily: '"Times New Roman", serif',
      }}>
        {renderFormula(compound.formula)}
      </div>
      <div style={{ marginTop: "16px", fontSize: "1.1rem", color: "#888", textAlign: "center" }}>
        {compound.name}
      </div>
      <div style={{ marginTop: "8px", fontSize: "0.85rem", color: "#555", fontFamily: "monospace" }}>
        M = {compound.molecularMass.toFixed(2)} g/mol
      </div>
    </div>
  );
};
