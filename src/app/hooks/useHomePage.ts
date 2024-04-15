"use client";
import { useCallback } from "react";

export function useHomePage() {
  const handleTheme = useCallback(() => {
    window.document.documentElement.classList.toggle("dark");
  }, []);

  return { handleTheme };
}
