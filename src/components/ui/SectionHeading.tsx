import { Reveal } from "./Reveal";

export function SectionHeading({
  index,
  title,
  intro,
}: {
  index: string;
  title: string;
  intro?: string;
}) {
  return (
    <Reveal className="mb-12">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-sm text-accent">{index}</span>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
      </div>
      {intro && <p className="mt-3 max-w-xl text-muted">{intro}</p>}
    </Reveal>
  );
}
