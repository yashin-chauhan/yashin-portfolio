"use client";

import { create } from "zustand";

interface TerminalState {
  isOpen: boolean;
  activeCommand: string | null;
  openTerminal: (initialCmd?: string) => void;
  closeTerminal: () => void;
  toggleTerminal: () => void;
}

export const useTerminal = create<TerminalState>((set) => ({
  isOpen: false,
  activeCommand: null,
  openTerminal: (initialCmd?: string) =>
    set({ isOpen: true, activeCommand: initialCmd || null }),
  closeTerminal: () => set({ isOpen: false }),
  toggleTerminal: () =>
    set((state) => ({ isOpen: !state.isOpen, activeCommand: null })),
}));
