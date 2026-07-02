import type { SiteContent } from "@/content/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Projects({ content }: { content: SiteContent }) {
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
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.08}>
          <p className="mt-8 text-sm text-muted/70">{projects.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
