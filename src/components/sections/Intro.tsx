import { Fragment } from "react";
import Image from "next/image";
import type { SiteContent } from "@/content/types";
import { site } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowIcon } from "@/components/ui/icons";

/* "Solutia" se enlaza dofollow a solutia.cat: al compartir IP con este sitio,
   a Google le queda más claro con el enlace explícito. */
function linkSolutia(text: string) {
  const marker = "Solutia";
  const idx = text.indexOf(marker);
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <a
        href={site.solutia}
        target="_blank"
        rel="noopener"
        className="text-accent transition-colors hover:text-accent-strong"
      >
        {marker}
      </a>
      {text.slice(idx + marker.length)}
    </>
  );
}

export function Intro({ content }: { content: SiteContent }) {
  const { intro } = content;

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center px-6 pt-28 pb-20 sm:px-10"
    >
      <div className="mx-auto grid w-full max-w-4xl items-center gap-12 md:grid-cols-[1fr_260px] md:gap-16">
        <div>
          <Reveal>
            {/* El rol usa "|" como separador interno (el "·" chocaría con la
               ela geminada catalana); aquí se pinta como "·" en blanco. */}
            <p className="eyebrow text-center md:text-left">
              {intro.role.split("|").map((part, i, parts) => (
                <Fragment key={i}>
                  {part.trim()}
                  {i < parts.length - 1 && (
                    <span className="text-foreground">{" · "}</span>
                  )}
                </Fragment>
              ))}
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-[18px] text-center text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-left">
              {intro.name}
            </h1>
          </Reveal>

          <div className="mt-7 space-y-4 text-base leading-relaxed text-muted sm:text-[17px]">
            {intro.bio.map((paragraph, i) => (
              <Reveal key={i} delay={0.12 + i * 0.06} as="div">
                <p className={i === 0 ? "text-muted-strong" : undefined}>
                  {linkSolutia(paragraph)}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-accent-strong"
              >
                {intro.ctaProjects}
                <ArrowIcon className="h-4 w-4" />
              </a>
              <a
                href="#assistant"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/30 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:bg-accent/15 hover:text-accent-strong"
              >
                {intro.ctaAssistant}
                <ArrowIcon className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Foto estática, sin animación ni efectos: imagen normal con el borde
            difuminado hacia el color de fondo. */}
        <div className="order-first mx-auto w-44 md:order-none md:w-full">
          <div className="photo-fade relative aspect-square w-full">
            {site.photo ? (
              <Image
                src={site.photo}
                alt="Fernando Bermúdez"
                fill
                sizes="(max-width: 768px) 176px, 260px"
                className="object-cover object-top"
                priority
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-card">
                <span className="font-mono text-5xl font-semibold text-muted-strong">
                  FB
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
