import type { SiteContent } from "@/content/types";
import { site } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon, ArrowIcon } from "@/components/ui/icons";

export function Assistant({ content }: { content: SiteContent }) {
  const { assistant } = content;
  const whatsappUrl = `https://wa.me/${site.assistantPhone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(site.assistantMessage)}`;
  const hasAssistant = Boolean(site.assistantPhone);

  return (
    <section id="assistant" className="scroll-mt-20 px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-4xl">
        <SectionHeading index="04" title={assistant.eyebrow} />

        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-border-strong bg-card p-8 sm:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/10 blur-3xl"
            />
            <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-md">
                <h3 className="text-2xl font-semibold tracking-tight">
                  {assistant.question}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {assistant.note}
                </p>
              </div>

              {hasAssistant ? (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-2.5 rounded-full bg-[#25D366]/15 px-6 py-3 text-sm font-semibold text-[#3ddc84] ring-1 ring-inset ring-[#25D366]/40 transition-colors hover:bg-[#25D366]/25"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  {assistant.cta}
                  <ArrowIcon className="h-4 w-4" />
                </a>
              ) : (
                <span className="inline-flex shrink-0 items-center gap-2.5 rounded-full border border-dashed border-border-strong px-6 py-3 text-sm font-medium text-muted">
                  <WhatsAppIcon className="h-5 w-5" />
                  {assistant.cta}
                </span>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
