import type { SiteContent } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowIcon } from "@/components/ui/icons";

export function Projects({
  content,
  locale,
}: {
  content: SiteContent;
  locale: Locale;
}) {
  const { projects } = content;

  return (
    <section id="projects" className="scroll-mt-20 px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-4xl">
        <SectionHeading index="02" title={projects.title} intro={projects.intro} />

        <div className="flex flex-col gap-4">
          {projects.cases.map((project, i) => (
            <Reveal key={project.title} delay={0.04} as="article">
              <div className="rounded-2xl border border-border bg-card p-6 transition-colors hover:bg-card-hover sm:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="max-w-2xl">
                    <span className="eyebrow">{project.sector}</span>
                    <h3 className="mt-3 text-xl font-semibold tracking-tight">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted">
                      {project.description}
                    </p>
                  </div>
                  <span className="hidden shrink-0 font-mono text-sm text-muted/40 sm:block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-border px-2 py-0.5 font-mono text-[11px] text-muted-strong"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <a
                  href={`/${locale}/casos#${project.id}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-strong"
                >
                  {projects.caseMore}
                  <ArrowIcon className="h-3.5 w-3.5" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.06}>
          <div className="mt-10">
            <a
              href={`/${locale}/casos`}
              className="inline-flex items-center gap-2 rounded-full border border-foreground/30 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:bg-accent/15 hover:text-accent-strong"
            >
              {projects.viewAll}
              <ArrowIcon className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
