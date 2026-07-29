import type { SiteContent } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { site } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ContactPhone } from "@/components/ui/ContactPhone";
import { Downloads } from "@/components/ui/Downloads";
import { MailIcon } from "@/components/ui/icons";

// Los perfiles sociales (LinkedIn, GitHub) viven en el footer, no aquí:
// esta sección es solo contacto directo.
export function Contact({
  content,
  locale,
}: {
  content: SiteContent;
  locale: Locale;
}) {
  const { contact } = content;

  return (
    <section id="contact" className="scroll-mt-20 px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-4xl">
        <SectionHeading index="05" title={contact.title} intro={contact.text} />

        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${site.email}`}
              aria-label={contact.emailLabel}
              className="inline-flex items-center gap-2.5 rounded-full bg-foreground px-5 py-2.5 font-mono text-[14px] font-medium text-background transition-colors hover:bg-accent-strong"
            >
              <MailIcon className="h-4 w-4" />
              {site.email}
            </a>

            <ContactPhone
              label={contact.phoneLabel}
              callLabel={contact.callLabel}
              whatsappLabel={contact.whatsappLabel}
            />
          </div>

          <Downloads content={content} locale={locale} />

          {site.linkedin && (
            <p className="mt-12 text-sm text-muted">
              {contact.linkedinPrompt}{" "}
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent transition-colors hover:text-accent-strong"
              >
                {contact.linkedinCta}
              </a>
              .
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
