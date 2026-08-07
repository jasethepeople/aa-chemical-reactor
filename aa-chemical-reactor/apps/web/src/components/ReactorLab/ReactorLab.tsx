import React, { useState, useCallback } from "react";
import { SubstanceQuantity, ReactionConditions, ReactionResult, ReactorType } from "../../types";
import { COMPOUNDS, COMPOUND_MAP } from "../../data/compounds";
import { REACTOR_CONFIGS } from "../../data/reactions";
import { ReactionEngine } from "../../engine/ReactionEngine";
import { MoleculeViewer } from "../MoleculeViewer/MoleculeViewer";
import "./ReactorLab.css";

export const ReactorLab: React.FC = () => {
  const [reactorType, setReactorType] = useState<ReactorType>("batch");
  const [temperature, setTemperature] = useState<number>(298);
  const [pressure, setPressure] = useState<number>(1.0);
  const [time, setTime] = useState<number>(60);
  const [catalysts, setCatalysts] = useState<string[]>([]);
  const [contents, setContents] = useState<SubstanceQuantity[]>([]);
  const [result, setResult] = useState<ReactionResult | null>(null);
  const [selectedCompound, setSelectedCompound] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState(false);

  const config = REACTOR_CONFIGS.find(r => r.type === reactorType)!;

  const addCompound = useCallback((compoundId: string) => {
    setContents(prev => {
      const existing = prev.find(c => c.compoundId === compoundId);
      if (existing) {
        return prev.map(c => c.compoundId === compoundId ? { ...c, moles: c.moles + 0.1 } : c);
      }
      return [...prev, { compoundId, moles: 0.1 }];
    });
  }, []);

  const removeCompound = useCallback((compoundId: string) => {
    setContents(prev => prev.filter(c => c.compoundId !== compoundId));
  }, []);

  const updateMoles = useCallback((compoundId: string, moles: number) => {
    setContents(prev => prev.map(c => c.compoundId === compoundId ? { ...c, moles } : c));
  }, []);

  const runReaction = useCallback(() => {
    if (contents.length === 0) return;
    setIsRunning(true);
    const conditions: ReactionConditions = { temperature, pressure, reactorType, catalysts, time };
    const engine = new ReactionEngine(conditions);
    contents.forEach(c => engine.addSubstance(c.compoundId, c.moles));
    setTimeout(() => {
      const res = engine.run();
      setResult(res);
      setIsRunning(false);
    }, 800);
  }, [contents, temperature, pressure, reactorType, catalysts, time]);

  const activeCompound = selectedCompound ? COMPOUND_MAP.get(selectedCompound) : null;

  return (
    <div className="reactor-lab">
      <div className="reactor-lab-grid">
        <div className="panel substance-library">
          <h3>Substance Library</h3>
          <div className="compound-list">
            {COMPOUNDS.filter(c => !c.properties.restricted).map(compound => (
              <div
                key={compound.id}
                className={`compound-card ${selectedCompound === compound.id ? "selected" : ""}`}
                onClick={() => setSelectedCompound(compound.id)}
              >
                <div className="compound-formula">{compound.formula}</div>
                <div className="compound-name">{compound.name}</div>
                <button className="add-btn" onClick={(e) => { e.stopPropagation(); addCompound(compound.id); }}>+ Add</button>
              </div>
            ))}
          </div>
          {activeCompound && (
            <div className="preview-panel">
              <MoleculeViewer compound={activeCompound} />
            </div>
          )}
        </div>

        <div className="panel reactor-panel">
          <h3>Reactor Control</h3>
          <div className="reactor-selector">
            {REACTOR_CONFIGS.map(r => (
              <button
                key={r.type}
                className={reactorType === r.type ? "active" : ""}
                onClick={() => setReactorType(r.type)}
                title={r.description}
              >
                {r.name}
              </button>
            ))}
          </div>

          <div className="reactor-visual" style={{
            background: isRunning ? "linear-gradient(135deg, #1a0a00, #0a0a1a)" : "#0a0a0f",
            transition: "background 0.5s",
          }}>
            <div className="reactor-vessel">
              {contents.length === 0 ? (
                <div className="empty-state">Add substances to begin</div>
              ) : (
                <div className="contents-list">
                  {contents.map(c => {
                    const comp = COMPOUND_MAP.get(c.compoundId);
                    return (
                      <div key={c.compoundId} className="content-item">
                        <span className="content-color" style={{ background: comp?.properties.color || "#888" }} />
                        <span className="content-name">{comp?.name}</span>
                        <input type="number" step="0.01" min="0" value={c.moles}
                          onChange={e => updateMoles(c.compoundId, parseFloat(e.target.value) || 0)} />
                        <span className="unit">mol</span>
                        <button className="remove-btn" onClick={() => removeCompound(c.compoundId)}>×</button>
                      </div>
                    );
                  })}
                </div>
              )}
              {result?.visualEffects.map((effect, i) => (
                <div key={i} className={`visual-effect ${effect.type}`} style={{
                  opacity: isRunning ? 1 : 0.3, animationDuration: `${effect.duration}ms`,
                }} />
              ))}
            </div>
          </div>

          <div className="conditions">
            <div className="condition-row">
              <label>Temperature (K)</label>
              <input type="range" min={50} max={config.maxTemperature} value={temperature}
                onChange={e => setTemperature(Number(e.target.value))} />
              <span className="value">{temperature} K</span>
              <span className="hint">({(temperature - 273.15).toFixed(1)} °C)</span>
            </div>
            <div className="condition-row">
              <label>Pressure (atm)</label>
              <input type="range" min={0.001} max={config.maxPressure} step={config.type === "vacuum" ? 0.001 : 0.1}
                value={pressure} onChange={e => setPressure(Number(e.target.value))} />
              <span className="value">{pressure} atm</span>
            </div>
            <div className="condition-row">
              <label>Time (s)</label>
              <input type="range" min={1} max={3600} value={time}
                onChange={e => setTime(Number(e.target.value))} />
              <span className="value">{time} s</span>
            </div>
          </div>

          <button className={`run-btn ${isRunning ? "running" : ""}`}
            onClick={runReaction} disabled={isRunning || contents.length === 0}>
            {isRunning ? "Reacting..." : "▶ Run Reaction"}
          </button>
        </div>

        <div className="panel results-panel">
          <h3>Reaction Log</h3>
          {result ? (
            <div className={`result-card ${result.success ? "success" : "failure"}`}>
              <div className="result-header">{result.success ? "✓ Reaction Complete" : "✗ Reaction Failed"}</div>
              <div className="energy-badge" style={{
                background: result.isExothermic ? "rgba(255, 69, 0, 0.2)" : "rgba(0, 150, 255, 0.2)",
                color: result.isExothermic ? "#ff8844" : "#44aaff",
              }}>
                {result.isExothermic ? "🔥 Exothermic" : "❄️ Endothermic"}
                <span className="energy-value">{result.energyChange.toFixed(1)} kJ</span>
              </div>
              <div className="log-section">
                <h4>Process Log</h4>
                {result.logs.map((log, i) => (
                  <div key={i} className="log-entry">{log}</div>
                ))}
              </div>
              {result.products.length > 0 && (
                <div className="products-section">
                  <h4>Products Formed</h4>
                  {result.products.map(p => {
                    const comp = COMPOUND_MAP.get(p.compoundId);
                    return (
                      <div key={p.compoundId} className="product-item">
                        <span>{comp?.name}</span><span>{p.moles.toFixed(3)} mol</span>
                      </div>
                    );
                  })}
                </div>
              )}
              {result.phaseChanges.length > 0 && (
                <div className="phase-section">
                  <h4>Phase Transitions</h4>
                  {result.phaseChanges.map((pc, i) => {
                    const comp = COMPOUND_MAP.get(pc.compoundId);
                    return <div key={i} className="phase-item">{comp?.name}: {pc.from} → {pc.to}</div>;
                  })}
                </div>
              )}
              {result.learningUnlocks.length > 0 && (
                <div className="learning-section">
                  <h4>📚 Chemistry Insight</h4>
                  {result.learningUnlocks.map((note, i) => (
                    <div key={i} className="learning-note">{note}</div>
                  ))}
                </div>
              )}
              {result.safetyFlags.length > 0 && (
                <div className="safety-section">
                  {result.safetyFlags.map((flag, i) => (
                    <div key={i} className="safety-flag">⚠️ {flag}</div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="empty-result">
              Run a reaction to see thermodynamic analysis, phase changes, and visual effects.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
