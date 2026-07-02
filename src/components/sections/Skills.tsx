import type { SiteContent } from "@/content/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Skills({ content }: { content: SiteContent }) {
  const { skills } = content;

  return (
    <section id="skills" className="scroll-mt-20 px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-4xl">
        <SectionHeading index="01" title={skills.title} />

        <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {skills.groups.map((group, i) => (
            <Reveal key={group.name} delay={(i % 2) * 0.06}>
              <h3 className="text-base font-medium tracking-tight text-foreground">
                {group.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {group.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
