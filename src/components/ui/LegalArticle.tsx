import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { LegalPage } from "@/content/legal";
import { ArrowIcon } from "@/components/ui/icons";

/** Maqueta común de las páginas legales: título, fecha y secciones. */
export function LegalArticle({
  page,
  locale,
}: {
  page: LegalPage;
  locale: Locale;
}) {
  return (
    <article className="px-6 pt-32 pb-24 sm:px-10">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {page.title}
        </h1>
        <p className="mt-3 font-mono text-xs text-muted">{page.updated}</p>

        <div className="mt-12 space-y-10">
          {page.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-lg font-semibold tracking-tight">
                {section.heading}
              </h2>
              {section.paragraphs?.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-3 leading-relaxed text-muted"
                >
                  {paragraph}
                </p>
              ))}
              {section.list && (
                <ul className="mt-3 space-y-1.5 text-muted">
                  {section.list.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden className="text-accent">
                        ·
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <Link
          href={`/${locale}`}
          className="mt-14 inline-flex items-center gap-2 text-sm text-accent transition-colors hover:text-accent-strong"
        >
          <ArrowIcon className="h-4 w-4 rotate-180" />
          {page.back}
        </Link>
      </div>
    </article>
  );
}
