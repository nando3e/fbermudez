"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollState } from "@/lib/scrollStore";
import { useReducedMotion } from "@/lib/useReducedMotion";

/**
 * Smooth scroll con Lenis, sincronizado con GSAP ScrollTrigger.
 * Con prefers-reduced-motion no instancia Lenis: scroll nativo, sin inercia.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (reduced) {
      // Aun así alimentamos scrollState por si algún efecto discreto lo lee.
      const onScroll = () => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        scrollState.progress = max > 0 ? window.scrollY / max : 0;
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
      return () => window.removeEventListener("scroll", onScroll);
    }

    // lerp en vez de duration: la duración fija hacía que el contenido
    // "persiguiera" a la rueda con retardo. 0.18 = suave pero con respuesta;
    // valores más altos (se probó 0.28) pierden la inercia sin ganar tacto.
    const lenis = new Lenis({
      lerp: 0.18,
      smoothWheel: true,
    });

    lenis.on("scroll", ({ progress, velocity }: Lenis) => {
      scrollState.progress = progress;
      scrollState.velocity = velocity;
      ScrollTrigger.update();
    });

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, [reduced]);

  return <>{children}</>;
}
