"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import type { CaseCapture } from "@/content/types";
import { ArrowIcon } from "@/components/ui/icons";
import { useReducedMotion } from "@/lib/useReducedMotion";

/**
 * Slider de capturas: una a la vista, flechas < > en escritorio, deslizar
 * con el dedo en móvil (scroll-snap nativo) y bolitas debajo que indican
 * cuántas capturas hay y en cuál estás. El pie de la captura actual se
 * muestra bajo las bolitas. Las capturas sin src pintan un hueco placeholder.
 */
export function CaseGallery({
  captures,
  prevLabel,
  nextLabel,
  pendingLabel,
}: {
  captures: CaseCapture[];
  prevLabel: string;
  nextLabel: string;
  pendingLabel: string;
}) {
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();

  const clamp = (i: number) => Math.max(0, Math.min(captures.length - 1, i));

  // El índice se deriva del scroll real: así swipe, flechas y bolitas
  // nunca se desincronizan.
  const onScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const slides = el.children;
    const step =
      slides.length > 1
        ? (slides[1] as HTMLElement).offsetLeft -
          (slides[0] as HTMLElement).offsetLeft
        : el.clientWidth;
    setIndex(clamp(Math.round(el.scrollLeft / step)));
  };

  const goTo = (i: number) => {
    const el = scrollerRef.current;
    const slide = el?.children[clamp(i)] as HTMLElement | undefined;
    if (!el || !slide) return;
    el.scrollTo({ left: slide.offsetLeft, behavior: reduced ? "auto" : "smooth" });
  };

  const arrowClasses =
    "absolute top-1/2 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/70 text-muted backdrop-blur transition-colors hover:border-accent/50 hover:text-accent disabled:pointer-events-none disabled:opacity-30 md:flex";

  return (
    <div className="mt-8">
      <div className="relative">
        <ul
          ref={scrollerRef}
          onScroll={onScroll}
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto"
        >
          {captures.map((capture, i) => (
            <li key={capture.caption} className="w-full shrink-0 snap-center">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-card">
                {capture.src ? (
                  <Image
                    src={capture.src}
                    alt={capture.caption}
                    fill
                    sizes="(min-width: 896px) 832px, 100vw"
                    className="object-contain"
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-2">
                    <span className="font-mono text-2xl text-muted/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted/50">
                      {pendingLabel}
                    </span>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => goTo(index - 1)}
          disabled={index === 0}
          aria-label={prevLabel}
          className={`${arrowClasses} left-3`}
        >
          <ArrowIcon className="h-4 w-4 rotate-180" />
        </button>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          disabled={index === captures.length - 1}
          aria-label={nextLabel}
          className={`${arrowClasses} right-3`}
        >
          <ArrowIcon className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {captures.map((capture, i) => (
          <button
            key={capture.caption}
            type="button"
            onClick={() => goTo(i)}
            aria-label={capture.caption}
            aria-current={i === index}
            className={`h-2 rounded-full transition-colors ${
              i === index
                ? "w-5 bg-accent"
                : "w-2 bg-muted/30 hover:bg-muted/60"
            }`}
          />
        ))}
      </div>

      <p aria-live="polite" className="mt-3 text-center text-[13px] leading-snug text-muted">
        {captures[index]?.caption}
      </p>
    </div>
  );
}
