"use client";

import { useEffect, useRef, useState } from "react";

export interface RailSection {
  id: string;
  label: string;
}

/**
 * Raíl de flujo: índice vertical a la izquierda (lg+) que se rellena con el
 * scroll y enciende cada sección al llegar — un pipeline del perfil.
 * En móvil se reduce a una barra de progreso fina bajo el header.
 */
export function FlowRail({ sections }: { sections: RailSection[] }) {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);
  const raf = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = sections.findIndex((s) => s.id === entry.target.id);
            if (idx >= 0) setActive(idx);
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <>
      {/* Barra de progreso superior (móvil / tablet). */}
      <div className="fixed inset-x-0 top-14 z-40 h-px bg-transparent lg:hidden">
        <div
          className="h-full origin-left bg-accent/70"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      {/* Raíl vertical (desktop). */}
      <nav
        aria-label="Secciones"
        className="fixed left-8 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
      >
        <div className="relative flex flex-col gap-7">
          {/* Track y relleno. */}
          <span
            aria-hidden
            className="absolute left-[3.5px] top-1 bottom-1 w-px bg-border-strong"
          />
          <span
            aria-hidden
            className="absolute left-[3.5px] top-1 w-px origin-top bg-accent transition-transform duration-300"
            style={{
              height: "calc(100% - 8px)",
              transform: `scaleY(${progress})`,
            }}
          />

          {sections.map((section, i) => {
            const reached = i <= active;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="group relative flex items-center gap-3"
              >
                <span
                  className={`z-10 h-2 w-2 shrink-0 rounded-full border transition-colors ${
                    i === active
                      ? "border-accent bg-accent"
                      : reached
                        ? "border-accent/60 bg-accent/60"
                        : "border-border-strong bg-background"
                  }`}
                />
                <span
                  className={`text-[11.5px] uppercase tracking-[0.18em] transition-colors ${
                    i === active
                      ? "text-foreground"
                      : "text-muted/50 group-hover:text-muted"
                  }`}
                >
                  {section.label}
                </span>
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
}
