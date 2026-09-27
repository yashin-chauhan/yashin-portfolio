"use client";

import { create } from "zustand";
import { PersonaMode, PersonaConfig } from "@/types";
import { PERSONA_DATA } from "@/lib/data";

interface PersonaState {
  mode: PersonaMode;
  setMode: (mode: PersonaMode) => void;
}

export const usePersonaStore = create<PersonaState>((set) => ({
  mode: "hybrid",
  setMode: (mode: PersonaMode) => set({ mode }),
}));

/**
 * Main hook to consume persona state and derived configuration.
 */
export function usePersona() {
  const mode = usePersonaStore((state) => state.mode);
  const setMode = usePersonaStore((state) => state.setMode);

  // Normalize client -> agency for configuration lookup
  const normalizedKey: "hybrid" | "recruiter" | "agency" =
    mode === "client" ? "agency" : mode;

  const config: PersonaConfig =
    PERSONA_DATA[normalizedKey] || PERSONA_DATA.hybrid;

  const isRecruiter = mode === "recruiter";
  const isAgency = mode === "agency" || mode === "client";
  const isHybrid = mode === "hybrid";

  return {
    mode,
    setMode,
    persona: mode,
    setPersona: setMode,
    config,
    isRecruiter,
    isAgency,
    isHybrid,
  };
}

export default usePersona;
