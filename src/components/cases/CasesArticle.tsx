import type { SiteContent } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { Reveal } from "@/components/ui/Reveal";
import { CaseGallery } from "./CaseGallery";
import { ArrowIcon } from "@/components/ui/icons";

/**
 * Página /casos: los destacados desarrollados (texto + galería de capturas),
 * y debajo el resto en rejilla compacta agrupada por tipo de solución. Todo
 * visible sin desplegables; cada destacado tiene ancla (/casos#id).
 */
export function CasesArticle({
  content,
  locale,
}: {
  content: SiteContent;
  locale: Locale;
}) {
  const { cases } = content;

  return (
    <div className="px-6 pb-24 pt-32 sm:px-10">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <nav aria-label="Breadcrumb" className="font-mono text-[12px]">
            <ol className="flex items-center gap-2">
              <li>
                <a
                  href={`/${locale}`}
                  className="text-muted transition-colors hover:text-foreground"
                >
                  {cases.breadcrumbHome}
                </a>
              </li>
              <li aria-hidden className="text-muted/50">
                /
              </li>
              <li aria-current="page" className="text-accent">
                {cases.eyebrow}
              </li>
            </ol>
          </nav>
          <h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
            {cases.title}
          </h1>
          <p className="mt-4 max-w-2xl text-muted">{cases.intro}</p>
        </Reveal>

        <div className="mt-16 flex flex-col gap-14">
          {cases.featured.map((item, i) => (
            <article
              key={item.id}
              id={item.id}
              className="scroll-mt-24 border-t border-border pt-12"
            >
              <Reveal>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="eyebrow">{item.sector}</span>
                  <span className="font-mono text-sm text-muted/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                  {item.title}
                </h2>
                <div className="mt-4 flex max-w-2xl flex-col gap-3">
                  {item.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-[15px] leading-relaxed text-muted"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-border px-2 py-0.5 font-mono text-[11px] text-muted-strong"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <CaseGallery
                captures={item.captures}
                prevLabel={cases.galleryPrev}
                nextLabel={cases.galleryNext}
                pendingLabel={cases.capturePending}
                closeLabel={cases.lightboxClose}
              />
            </article>
          ))}
        </div>

        <section className="mt-20 border-t border-border pt-12">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight">
              {cases.othersTitle}
            </h2>
          </Reveal>

          <ul className="mt-8 flex flex-col divide-y divide-border border-y border-border">
            {cases.others.map((item, i) => (
              <Reveal key={item.title} as="li" delay={i * 0.04} className="py-7">
                <span className="eyebrow">{item.category}</span>
                <h3 className="mt-2.5 text-base font-semibold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-border px-2 py-0.5 font-mono text-[11px] text-muted-strong"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ul>
        </section>

        <Reveal>
          <div className="mt-16 border-t border-border pt-10">
            <a
              href={`/${locale}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-strong"
            >
              <ArrowIcon className="h-4 w-4 rotate-180" />
              {cases.backHome}
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
