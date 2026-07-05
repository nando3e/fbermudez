"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import type { CaseCapture } from "@/content/types";
import { ArrowIcon, CloseIcon } from "@/components/ui/icons";
import { useReducedMotion } from "@/lib/useReducedMotion";

/**
 * Slider de capturas: una a la vista, flechas < > en escritorio, deslizar
 * con el dedo en móvil (scroll-snap nativo) y bolitas debajo que indican
 * cuántas capturas hay y en cuál estás. El pie de la captura actual se
 * muestra bajo las bolitas. Las capturas sin src pintan un hueco placeholder;
 * las reales se amplían en un lightbox al clicarlas.
 */
export function CaseGallery({
  captures,
  prevLabel,
  nextLabel,
  pendingLabel,
  closeLabel,
}: {
  captures: CaseCapture[];
  prevLabel: string;
  nextLabel: string;
  pendingLabel: string;
  closeLabel: string;
}) {
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  // Zoom del lightbox: escala + desplazamiento (pan) cuando la imagen se amplía.
  const [zoom, setZoom] = useState({ scale: 1, x: 0, y: 0 });
  const [gesturing, setGesturing] = useState(false);
  const reduced = useReducedMotion();

  // Índices de capturas con imagen real: el lightbox solo navega entre ellas.
  const srcIndices = useMemo(
    () => captures.map((c, i) => (c.src ? i : -1)).filter((i) => i >= 0),
    [captures],
  );
  const goLightbox = useCallback(
    (dir: number) => {
      setZoom({ scale: 1, x: 0, y: 0 });
      setLightboxIndex((cur) => {
        if (cur === null) return cur;
        const pos = srcIndices.indexOf(cur);
        const next = pos + dir;
        return next >= 0 && next < srcIndices.length ? srcIndices[next] : cur;
      });
    },
    [srcIndices],
  );
  const imgBoxRef = useRef<HTMLDivElement>(null);
  const pinchRef = useRef<{ dist: number; scale: number } | null>(null);
  const panRef = useRef<{
    x: number;
    y: number;
    tx: number;
    ty: number;
    startX: number;
    moved: boolean;
  } | null>(null);
  const lastTapRef = useRef(0);
  const pointerWasTouch = useRef(false);

  // Limita el pan para que la imagen ampliada no se salga de su marco.
  const clampZoom = (z: { scale: number; x: number; y: number }) => {
    const rect = imgBoxRef.current?.getBoundingClientRect();
    if (!rect) return z;
    const maxX = (rect.width * (z.scale - 1)) / 2;
    const maxY = (rect.height * (z.scale - 1)) / 2;
    return {
      scale: z.scale,
      x: Math.min(maxX, Math.max(-maxX, z.x)),
      y: Math.min(maxY, Math.max(-maxY, z.y)),
    };
  };
  const dist2 = (
    a: { clientX: number; clientY: number },
    b: { clientX: number; clientY: number },
  ) => Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);

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

  // Con el lightbox abierto: Escape cierra y el fondo no hace scroll.
  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      else if (e.key === "ArrowRight") goLightbox(1);
      else if (e.key === "ArrowLeft") goLightbox(-1);
    };
    window.addEventListener("keydown", onKeyDown);
    const html = document.documentElement;
    const previousOverflow = html.style.overflow;
    html.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      html.style.overflow = previousOverflow;
    };
  }, [lightboxIndex, goLightbox]);

  const lightboxCapture =
    lightboxIndex === null ? null : captures[lightboxIndex];
  const lightboxPos =
    lightboxIndex === null ? -1 : srcIndices.indexOf(lightboxIndex);

  const arrowClasses =
    "absolute top-1/2 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/70 text-muted backdrop-blur transition-colors hover:border-accent/50 hover:text-accent disabled:pointer-events-none disabled:opacity-30 md:flex";
  const lightboxArrow =
    "absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/70 text-muted backdrop-blur transition-colors hover:border-accent/50 hover:text-accent disabled:pointer-events-none disabled:opacity-30";

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
              {capture.src ? (
                <button
                  type="button"
                  onClick={() => {
                    setZoom({ scale: 1, x: 0, y: 0 });
                    setLightboxIndex(i);
                  }}
                  aria-label={capture.caption}
                  className="relative block aspect-[16/10] w-full cursor-zoom-in overflow-hidden rounded-xl border border-border bg-card"
                >
                  <Image
                    src={capture.src}
                    alt={capture.caption}
                    fill
                    sizes="(min-width: 896px) 832px, 100vw"
                    className="object-contain"
                  />
                </button>
              ) : (
                <div className="flex aspect-[16/10] flex-col items-center justify-center gap-2 rounded-xl border border-border bg-card">
                  <span className="font-mono text-2xl text-muted/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted/50">
                    {pendingLabel}
                  </span>
                </div>
              )}
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

      {lightboxCapture?.src && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightboxCapture.caption}
          data-lenis-prevent
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-[90] flex flex-col bg-background/90 backdrop-blur-xl"
        >
          <div
            ref={imgBoxRef}
            className="relative flex-1 cursor-zoom-out touch-none select-none overflow-hidden p-4 sm:p-10"
            onClick={(e) => {
              // En táctil, tocar la imagen no cierra (deja sitio al doble tap).
              if (pointerWasTouch.current) {
                pointerWasTouch.current = false;
                e.stopPropagation();
              }
            }}
            onTouchStart={(e) => {
              pointerWasTouch.current = true;
              setGesturing(true);
              if (e.touches.length === 2) {
                pinchRef.current = {
                  dist: dist2(e.touches[0], e.touches[1]),
                  scale: zoom.scale,
                };
                panRef.current = null;
              } else {
                const t = e.touches[0];
                panRef.current = {
                  x: t.clientX,
                  y: t.clientY,
                  tx: zoom.x,
                  ty: zoom.y,
                  startX: t.clientX,
                  moved: false,
                };
              }
            }}
            onTouchMove={(e) => {
              if (pinchRef.current && e.touches.length === 2) {
                const d = dist2(e.touches[0], e.touches[1]);
                const scale = Math.min(
                  4,
                  Math.max(1, (pinchRef.current.scale * d) / pinchRef.current.dist),
                );
                setZoom((z) => clampZoom({ ...z, scale }));
              } else if (panRef.current && e.touches.length === 1) {
                const pan = panRef.current;
                const t = e.touches[0];
                const dx = t.clientX - pan.x;
                const dy = t.clientY - pan.y;
                if (Math.abs(t.clientX - pan.startX) > 10) pan.moved = true;
                // Ampliada: el dedo hace pan; en tamaño normal no mueve la imagen.
                if (zoom.scale > 1) {
                  setZoom((z) =>
                    clampZoom({ scale: z.scale, x: pan.tx + dx, y: pan.ty + dy }),
                  );
                }
              }
            }}
            onTouchEnd={(e) => {
              if (e.touches.length < 2) pinchRef.current = null;
              if (e.touches.length > 0) return;
              setGesturing(false);
              const pan = panRef.current;
              panRef.current = null;
              if (!pan) return;
              const dx = e.changedTouches[0].clientX - pan.startX;
              if (pan.moved) {
                // Deslizar cambia de imagen solo en tamaño normal.
                if (zoom.scale === 1 && Math.abs(dx) > 50)
                  goLightbox(dx < 0 ? 1 : -1);
                return;
              }
              // Toque sin movimiento: detectar doble tap.
              const now = Date.now();
              if (now - lastTapRef.current < 300) {
                lastTapRef.current = 0;
                setZoom((z) =>
                  z.scale > 1
                    ? { scale: 1, x: 0, y: 0 }
                    : { scale: 2, x: 0, y: 0 },
                );
              } else {
                lastTapRef.current = now;
              }
            }}
          >
            <div
              className="relative h-full w-full"
              style={{
                transform: `translate(${zoom.x}px, ${zoom.y}px) scale(${zoom.scale})`,
                transition: gesturing ? "none" : "transform 0.2s ease",
              }}
            >
              <Image
                src={lightboxCapture.src}
                alt={lightboxCapture.caption}
                fill
                sizes="100vw"
                draggable={false}
                className="object-contain"
              />
            </div>
          </div>

          {srcIndices.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goLightbox(-1);
                }}
                disabled={lightboxPos <= 0}
                aria-label={prevLabel}
                className={`${lightboxArrow} left-3 sm:left-5`}
              >
                <ArrowIcon className="h-5 w-5 rotate-180" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goLightbox(1);
                }}
                disabled={lightboxPos >= srcIndices.length - 1}
                aria-label={nextLabel}
                className={`${lightboxArrow} right-3 sm:right-5`}
              >
                <ArrowIcon className="h-5 w-5" />
              </button>
            </>
          )}

          <div className="px-6 pb-6 text-center">
            {srcIndices.length > 1 && (
              <span className="mb-1 block font-mono text-[11px] text-muted/60">
                {lightboxPos + 1} / {srcIndices.length}
              </span>
            )}
            <p className="text-[13px] leading-snug text-muted">
              {lightboxCapture.caption}
            </p>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(null);
            }}
            aria-label={closeLabel}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/70 text-muted backdrop-blur transition-colors hover:border-accent/50 hover:text-accent"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
}
