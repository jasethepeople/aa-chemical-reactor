const API_BASE = import.meta.env.VITE_API_URL || "";

class ApiClient {
  private token: string | null = null;

  constructor() {
    this.token = localStorage.getItem("aa-token");
  }

  private async fetch(path: string, options: RequestInit = {}) {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      ...((options.headers as Record<string, string>) || {}),
    };
    if (this.token) headers["Authorization"] = `Bearer ${this.token}`;
    const res = await fetch(`${API_BASE}${path}`, { ...options, headers });
    if (!res.ok) {
      const err = await res.text();
      throw new Error(err);
    }
    return res.json();
  }

  login(email: string, password: string) {
    return this.fetch("/api/auth/login", { method: "POST", body: JSON.stringify({ email, password }) });
  }

  saveRecipe(recipe: unknown) {
    return this.fetch("/api/recipes", { method: "POST", body: JSON.stringify(recipe) });
  }

  getRecipes() {
    return this.fetch("/api/recipes");
  }

  getLicense() {
    return this.fetch("/api/license");
  }

  logAudit(entry: unknown) {
    this.fetch("/api/audit", { method: "POST", body: JSON.stringify(entry) }).catch(() => {});
  }
}

export const api = new ApiClient();
