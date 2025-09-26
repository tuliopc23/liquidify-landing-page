import { useEffect, useState } from "react";

export type ThemeMode = "light" | "dark" | "system";

// Broadcast channel for theme changes within the same window
const THEME_EVENT = "ui.theme.change" as const;

const STORAGE_KEY = "ui.theme";

const getSystemTheme = (): "light" | "dark" =>
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

export const getStoredTheme = (): ThemeMode | null => {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v === "light" || v === "dark" || v === "system") return v;
    return null;
  } catch {
    return null;
  }
};

export const setStoredTheme = (mode: ThemeMode) => {
  try {
    localStorage.setItem(STORAGE_KEY, mode);
  } catch {
    /* noop */
  }
};

export const resolveTheme = (mode: ThemeMode): "light" | "dark" =>
  mode === "system" ? getSystemTheme() : mode;

export const applyTheme = (mode: ThemeMode) => {
  const resolved = resolveTheme(mode);
  const root = document.documentElement;
  if (resolved === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
  const reduce = false; // DEBUG: force full motion
  root.classList.toggle("reduce-motion", reduce);
  root.setAttribute("data-theme-mode", mode);
  root.setAttribute("data-theme", resolved);
  try {
    window.dispatchEvent(
      new CustomEvent(THEME_EVENT, { detail: { mode, resolved } }),
    );
  } catch {
    // no-op in non-browser contexts
  }
};

export function useTheme(): [ThemeMode, (m: ThemeMode) => void] {
  const initial: ThemeMode =
    (typeof window !== "undefined" && getStoredTheme()) || "system";
  const [mode, setMode] = useState<ThemeMode>(initial);

  // Apply on mount and when changes
  useEffect(() => {
    applyTheme(mode);
    setStoredTheme(mode);
  }, [mode]);

  // React to system changes when in 'system' mode
  useEffect(() => {
    if (mode !== "system") return;
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => applyTheme("system");
    try {
      mql.addEventListener("change", handler);
    } catch {
      mql.addListener(handler);
    }
    return () => {
      try {
        mql.removeEventListener("change", handler);
      } catch {
        mql.removeListener(handler);
      }
    };
  }, [mode]);

  // Listen for theme changes dispatched elsewhere in the app (same window)
  useEffect(() => {
    type ThemeEvent = CustomEvent<{
      mode: ThemeMode;
      resolved: "light" | "dark";
    }>;
    const onTheme = (e: Event) => {
      const ev = e as ThemeEvent;
      const next: ThemeMode | undefined = ev?.detail?.mode;
      if (!next) return;
      if (next !== mode) setMode(next);
    };
    try {
      window.addEventListener(THEME_EVENT, onTheme as EventListener);
    } catch {
      /* noop */
    }
    return () => {
      try {
        window.removeEventListener(THEME_EVENT, onTheme as EventListener);
      } catch {
        /* noop */
      }
    };
  }, [mode]);

  return [mode, setMode];
}

export const cycleTheme = (mode: ThemeMode): ThemeMode =>
  mode === "light" ? "dark" : mode === "dark" ? "system" : "light";
