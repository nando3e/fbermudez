"use client";

import { useEffect, useState } from "react";

/**
 * Devuelve true si el usuario pide movimiento reducido.
 * Empieza en `false` para que SSR y primer render coincidan; se corrige tras montar.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);

    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return reduced;
}
