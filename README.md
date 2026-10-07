# aa-chemical-reactor

An incomplete TypeScript scaffold for a virtual chemistry-lab web app with a reaction simulation engine.

## Features

The source that exists (under `aa-chemical-reactor/apps/web/src/`) covers:

- **Reaction engine** (`engine/ReactionEngine.ts`) — rule-based reaction runner: adds reactants by compound ID, checks reactor temperature/pressure limits, matches reaction rules, and returns results with logs, visual effects, phase changes, and learning unlocks.
- **Thermodynamics and safety checks** (`engine/Thermodynamics.ts`, `engine/SafetyGuard.ts`) alongside the engine.
- **Molecule viewers** (`components/MoleculeViewer/`) — BallStick3D, FormulaView, LewisView, and a MoleculeViewer wrapper component.
- **ReactorLab UI** (`components/ReactorLab/`) — a React lab component with CSS.
- **Data tables** (`data/`) — elements, compounds, and reaction rules/constants.
- **Auth and license hooks** (`hooks/useAuth.ts`, `hooks/useLicense.ts`) and an API client stub (`lib/api.ts`).

## Tech stack

TypeScript, React (.tsx components). No other dependencies are pinned in the repo.

## Project structure

```
aa-chemical-reactor/apps/web/src/
├── components/MoleculeViewer/   # BallStick3D, FormulaView, LewisView, MoleculeViewer
├── components/ReactorLab/       # ReactorLab UI + CSS
├── data/                        # elements.ts, compounds.ts, reactions.ts
├── engine/                      # ReactionEngine, Thermodynamics, SafetyGuard
├── hooks/                       # useAuth, useLicense
├── lib/                         # api.ts
└── types/                       # shared types
```

## Status

Incomplete scaffold. The repo contains only the 16 TypeScript source files listed above — there is no `package.json`, no app entry point (no `index.html` or root `App`/`main`), no build config, and no README or run instructions. It is not runnable as checked in.
