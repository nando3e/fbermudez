import type { SiteContent } from "@/content/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Education({ content }: { content: SiteContent }) {
  const { education } = content;

  return (
    <section id="education" className="scroll-mt-20 px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-4xl">
        <SectionHeading index="03" title={education.title} />

        <ul className="flex flex-col divide-y divide-border border-y border-border">
          {education.items.map((item, i) => (
            <Reveal
              key={item.name}
              as="li"
              delay={i * 0.05}
              className="flex flex-col gap-1.5 py-6 sm:flex-row sm:items-start sm:justify-between sm:gap-10"
            >
              <div className="min-w-0 sm:max-w-2xl">
                <h3 className="font-medium tracking-tight text-foreground">
                  {item.name}
                </h3>
                {item.detail && (
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.detail}
                  </p>
                )}
              </div>
              <span className="shrink-0 font-mono text-xs uppercase tracking-wider text-accent sm:pt-1">
                {item.org}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
