import { SubstanceQuantity } from "../types";
import { COMPOUND_MAP } from "../data/compounds";

export class SafetyGuard {
  static validateReaction(
    reactants: SubstanceQuantity[],
    products: SubstanceQuantity[]
  ): { allowed: boolean; flags: string[] } {
    const flags: string[] = [];
    for (const r of reactants) {
      const compound = COMPOUND_MAP.get(r.compoundId);
      if (!compound) continue;
      if (compound.properties.restricted) {
        flags.push(`RESTRICTED: ${compound.name} is display-only and cannot be used in reactions.`);
      }
    }
    for (const p of products) {
      const compound = COMPOUND_MAP.get(p.compoundId);
      if (!compound) continue;
      if (compound.properties.restricted) {
        flags.push(`BLOCKED: Reaction would produce ${compound.name}, which is restricted.`);
        return { allowed: false, flags };
      }
    }
    if (flags.length > 0) return { allowed: false, flags };
    return { allowed: true, flags };
  }

  static auditLog(action: string, details: Record<string, unknown>): void {
    const entry = {
      timestamp: new Date().toISOString(),
      action,
      details,
      sessionId: this.getSessionId(),
    };
    const queue = JSON.parse(localStorage.getItem("aa-audit-queue") || "[]");
    queue.push(entry);
    localStorage.setItem("aa-audit-queue", JSON.stringify(queue.slice(-100)));
    if (import.meta.env.DEV) {
      console.log("[AUDIT]", entry);
    }
  }

  private static getSessionId(): string {
    let id = sessionStorage.getItem("aa-session-id");
    if (!id) {
      id = crypto.randomUUID();
      sessionStorage.setItem("aa-session-id", id);
    }
    return id;
  }
}
