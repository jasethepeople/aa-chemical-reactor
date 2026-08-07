import React, { useRef, useEffect } from "react";
import { Compound } from "../../types";
import { ELEMENTS } from "../../data/elements";

interface Props {
  compound: Compound;
  width?: number;
  height?: number;
}

export const LewisView: React.FC<Props> = ({ compound, width = 400, height = 400 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
    ctx.fillStyle = "#0a0a0f";
    ctx.fillRect(0, 0, width, height);

    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    compound.atoms.forEach(a => {
      minX = Math.min(minX, a.x); maxX = Math.max(maxX, a.x);
      minY = Math.min(minY, a.y); maxY = Math.max(maxY, a.y);
    });

    const padding = 40;
    const scale = Math.min(
      (width - padding * 2) / (maxX - minX || 1),
      (height - padding * 2) / (maxY - minY || 1)
    ) * 0.8;
    const offsetX = width / 2 - (minX + maxX) / 2 * scale;
    const offsetY = height / 2 - (minY + maxY) / 2 * scale;

    const toCanvas = (x: number, y: number) => ({ x: x * scale + offsetX, y: y * scale + offsetY });

    compound.bonds.forEach(bond => {
      const a1 = compound.atoms.find(a => a.id === bond.from);
      const a2 = compound.atoms.find(a => a.id === bond.to);
      if (!a1 || !a2) return;
      const p1 = toCanvas(a1.x, a1.y);
      const p2 = toCanvas(a2.x, a2.y);
      ctx.strokeStyle = "#cccccc";
      ctx.lineWidth = bond.type === "triple" ? 1.5 : bond.type === "double" ? 2 : 3;
      ctx.lineCap = "round";

      if (bond.type === "single") {
        ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
      } else if (bond.type === "double") {
        const dx = p2.x - p1.x, dy = p2.y - p1.y;
        const len = Math.sqrt(dx * dx + dy * dy);
        const nx = -dy / len * 4, ny = dx / len * 4;
        ctx.beginPath(); ctx.moveTo(p1.x + nx, p1.y + ny); ctx.lineTo(p2.x + nx, p2.y + ny); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(p1.x - nx, p1.y - ny); ctx.lineTo(p2.x - nx, p2.y - ny); ctx.stroke();
      } else if (bond.type === "triple") {
        const dx = p2.x - p1.x, dy = p2.y - p1.y;
        const len = Math.sqrt(dx * dx + dy * dy);
        const nx = -dy / len * 6, ny = dx / len * 6;
        ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(p1.x + nx, p1.y + ny); ctx.lineTo(p2.x + nx, p2.y + ny); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(p1.x - nx, p1.y - ny); ctx.lineTo(p2.x - nx, p2.y - ny); ctx.stroke();
      } else if (bond.type === "aromatic") {
        ctx.setLineDash([5, 3]);
        ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
        ctx.setLineDash([]);
      }
    });

    compound.atoms.forEach(atom => {
      const pos = toCanvas(atom.x, atom.y);
      const element = ELEMENTS[atom.element];
      const radius = element ? Math.max(14, element.radius / 5) : 14;
      const color = element ? element.color : "#888";

      ctx.beginPath();
      ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = atom.element === "H" ? "#000" : "#fff";
      ctx.font = `bold ${Math.max(10, radius * 0.7)}px sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(atom.element, pos.x, pos.y);

      if (atom.formalCharge !== 0) {
        ctx.fillStyle = atom.formalCharge > 0 ? "#ff4444" : "#4444ff";
        ctx.font = "bold 10px sans-serif";
        ctx.fillText(
          atom.formalCharge > 0 ? `+${atom.formalCharge}` : `${atom.formalCharge}`,
          pos.x + radius + 8, pos.y - radius
        );
      }

      if (atom.lonePairs > 0) {
        ctx.fillStyle = "#88ccff";
        for (let i = 0; i < atom.lonePairs; i++) {
          const angle = (i / atom.lonePairs) * Math.PI * 2 - Math.PI / 2;
          const lpx = pos.x + Math.cos(angle) * (radius + 10);
          const lpy = pos.y + Math.sin(angle) * (radius + 10);
          ctx.beginPath();
          ctx.arc(lpx, lpy, 3, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    });
  }, [compound, width, height]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width, height, borderRadius: "12px", border: "1px solid #333",
        boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
      }}
    />
  );
};
