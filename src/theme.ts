import { useEffect, useState } from "react";

export type ThemeMode = "light" | "dark" | "system";

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
  root.setAttribute("data-theme-mode", mode);
  // Ensure libraries that read data-theme get the resolved value
  root.setAttribute("data-theme", resolved);
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

  return [mode, setMode];
}

export const cycleTheme = (mode: ThemeMode): ThemeMode =>
  mode === "light" ? "dark" : mode === "dark" ? "system" : "light";
