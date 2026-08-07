import { useState, useEffect } from "react";
import { UserLicense, LicenseTier } from "../types";

const DEFAULT_FREE_LICENSE: UserLicense = {
  tier: "free",
  features: {
    maxCompounds: 20,
    maxReactors: 2,
    allowSharing: false,
    allowExport: false,
    advancedVisuals: false,
    cloudSaves: false,
  },
};

export const useLicense = () => {
  const [license, setLicense] = useState<UserLicense>(DEFAULT_FREE_LICENSE);

  useEffect(() => {
    const stored = localStorage.getItem("aa-license");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setLicense(parsed);
        return;
      } catch { /* ignore */ }
    }
    setLicense(DEFAULT_FREE_LICENSE);
  }, []);

  const checkFeature = (feature: keyof UserLicense["features"]): boolean => {
    return license.features[feature];
  };

  const canUseReactor = (reactorCount: number): boolean => {
    return reactorCount < license.features.maxReactors;
  };

  const canUseCompound = (compoundCount: number): boolean => {
    return compoundCount < license.features.maxCompounds;
  };

  return { license, checkFeature, canUseReactor, canUseCompound, setLicense };
};
