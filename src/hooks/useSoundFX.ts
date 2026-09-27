"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type SoundType = "hover" | "click" | "switch" | "terminal" | "success" | "error" | "tab";

interface UseSoundFXReturn {
  soundEnabled: boolean;
  toggleSound: () => void;
  setSoundEnabled: (enabled: boolean) => void;
  playSound: (type: SoundType) => void;
  playHover: () => void;
  playClick: () => void;
  playSwitch: () => void;
  playTerminal: () => void;
  playSuccess: () => void;
  playError: () => void;
  playTab: () => void;
}

export function useSoundFX(): UseSoundFXReturn {
  const [soundEnabled, setSoundEnabledState] = useState<boolean>(true);
  const audioCtxRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("yashin_portfolio_sound");
      if (saved !== null) {
        setSoundEnabledState(saved === "true");
      }
    } catch {
      // Storage unavailable or disabled
    }
  }, []);

  const setSoundEnabled = useCallback((enabled: boolean) => {
    setSoundEnabledState(enabled);
    try {
      localStorage.setItem("yashin_portfolio_sound", String(enabled));
    } catch {
      // Storage unavailable
    }
  }, []);

  const toggleSound = useCallback(() => {
    setSoundEnabledState((prev) => {
      const next = !prev;
      try {
        localStorage.setItem("yashin_portfolio_sound", String(next));
      } catch {
        // Storage unavailable
      }
      return next;
    });
  }, []);

  const getAudioContext = useCallback((): AudioContext | null => {
    if (typeof window === "undefined") return null;

    try {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;

      if (!AudioContextClass) return null;

      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContextClass();
      }

      if (audioCtxRef.current.state === "suspended") {
        audioCtxRef.current.resume().catch(() => {});
      }

      return audioCtxRef.current;
    } catch {
      return null;
    }
  }, []);

  const playSound = useCallback(
    (type: SoundType) => {
      if (!soundEnabled) return;

      const ctx = getAudioContext();
      if (!ctx) return;

      const now = ctx.currentTime;

      try {
        switch (type) {
          case "hover": {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = "sine";
            osc.frequency.setValueAtTime(780, now);
            osc.frequency.exponentialRampToValueAtTime(960, now + 0.035);

            gain.gain.setValueAtTime(0.025, now);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(now);
            osc.stop(now + 0.036);
            break;
          }

          case "click": {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = "triangle";
            osc.frequency.setValueAtTime(480, now);
            osc.frequency.exponentialRampToValueAtTime(140, now + 0.04);

            gain.gain.setValueAtTime(0.05, now);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(now);
            osc.stop(now + 0.041);
            break;
          }

          case "switch": {
            const osc1 = ctx.createOscillator();
            const osc2 = ctx.createOscillator();
            const gain = ctx.createGain();

            osc1.type = "sine";
            osc2.type = "sine";

            osc1.frequency.setValueAtTime(440, now);
            osc1.frequency.exponentialRampToValueAtTime(660, now + 0.08);

            osc2.frequency.setValueAtTime(660, now + 0.03);
            osc2.frequency.exponentialRampToValueAtTime(880, now + 0.08);

            gain.gain.setValueAtTime(0.04, now);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.085);

            osc1.connect(gain);
            osc2.connect(gain);
            gain.connect(ctx.destination);

            osc1.start(now);
            osc1.stop(now + 0.085);
            osc2.start(now + 0.03);
            osc2.stop(now + 0.085);
            break;
          }

          case "tab": {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = "sine";
            osc.frequency.setValueAtTime(520, now);
            osc.frequency.exponentialRampToValueAtTime(740, now + 0.05);

            gain.gain.setValueAtTime(0.03, now);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(now);
            osc.stop(now + 0.051);
            break;
          }

          case "terminal": {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            const filter = ctx.createBiquadFilter();

            osc.type = "square";
            osc.frequency.setValueAtTime(920, now);

            filter.type = "lowpass";
            filter.frequency.setValueAtTime(1400, now);

            gain.gain.setValueAtTime(0.02, now);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.025);

            osc.connect(filter);
            filter.connect(gain);
            gain.connect(ctx.destination);

            osc.start(now);
            osc.stop(now + 0.026);
            break;
          }

          case "success": {
            const notes = [523.25, 659.25, 783.99];
            notes.forEach((freq, idx) => {
              const noteStart = now + idx * 0.06;
              const osc = ctx.createOscillator();
              const gain = ctx.createGain();

              osc.type = "sine";
              osc.frequency.setValueAtTime(freq, noteStart);

              gain.gain.setValueAtTime(0.035, noteStart);
              gain.gain.exponentialRampToValueAtTime(0.0001, noteStart + 0.1);

              osc.connect(gain);
              gain.connect(ctx.destination);

              osc.start(noteStart);
              osc.stop(noteStart + 0.1);
            });
            break;
          }

          case "error": {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = "sawtooth";
            osc.frequency.setValueAtTime(220, now);
            osc.frequency.exponentialRampToValueAtTime(110, now + 0.12);

            gain.gain.setValueAtTime(0.04, now);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(now);
            osc.stop(now + 0.12);
            break;
          }
        }
      } catch {
        // Silently swallow any transient audio synthesis error
      }
    },
    [soundEnabled, getAudioContext]
  );

  const playHover = useCallback(() => playSound("hover"), [playSound]);
  const playClick = useCallback(() => playSound("click"), [playSound]);
  const playSwitch = useCallback(() => playSound("switch"), [playSound]);
  const playTerminal = useCallback(() => playSound("terminal"), [playSound]);
  const playSuccess = useCallback(() => playSound("success"), [playSound]);
  const playError = useCallback(() => playSound("error"), [playSound]);
  const playTab = useCallback(() => playSound("tab"), [playSound]);

  return {
    soundEnabled,
    toggleSound,
    setSoundEnabled,
    playSound,
    playHover,
    playClick,
    playSwitch,
    playTerminal,
    playSuccess,
    playError,
    playTab,
  };
}
