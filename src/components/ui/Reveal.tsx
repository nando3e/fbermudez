"use client";

import { createElement, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/lib/useReducedMotion";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Retardo en segundos para escalonar elementos hermanos. */
  delay?: number;
  as?: "div" | "li" | "section" | "article";
}

/**
 * Anima su contenido al entrar en viewport (fade + subida).
 * Con prefers-reduced-motion no anima: el contenido aparece ya visible.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;

    gsap.registerPlugin(ScrollTrigger);
    const anim = gsap.fromTo(
      el,
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      },
    );

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, [delay, reduced]);

  // createElement evita el conflicto de tipos del ref con un `as` polimórfico.
  // Sin animación arranca visible; con animación, GSAP fija el estado inicial.
  return createElement(
    as,
    {
      ref,
      className,
      style: reduced ? undefined : { opacity: 0 },
    },
    children,
  );
}
