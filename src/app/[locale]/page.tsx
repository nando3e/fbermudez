import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getContent } from "@/content";
import { site } from "@/content/site";
import { FlowRail } from "@/components/layout/FlowRail";
import { Intro } from "@/components/sections/Intro";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Assistant } from "@/components/sections/Assistant";
import { Contact } from "@/components/sections/Contact";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const content = getContent(locale as Locale);

  // El raíl solo tiene sentido en la home: sus anclas viven en esta página.
  const railSections = [
    { id: "top", label: content.nav.about },
    { id: "skills", label: content.nav.skills },
    { id: "projects", label: content.nav.projects },
    { id: "education", label: content.nav.education },
    { id: "assistant", label: content.assistant.eyebrow },
    { id: "contact", label: content.nav.contact },
  ];

  // Datos estructurados para buscadores (Person).
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Fernando Bermúdez",
    alternateName: "Nando Bermúdez",
    jobTitle: content.intro.role.replace(/\s*\|\s*/g, " · "),
    email: site.email,
    telephone: site.phone,
    url: `${site.url}/${locale}`,
    worksFor: {
      "@type": "Organization",
      name: "Solutia",
      legalName: "RBImprove, S.L.",
      url: site.solutia,
    },
    knowsAbout: content.skills.groups.map((g) => g.name),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FlowRail sections={railSections} />
      <Intro content={content} />
      <Skills content={content} />
      <Projects content={content} locale={locale as Locale} />
      <Education content={content} />
      <Assistant content={content} />
      <Contact content={content} />
    </>
  );
}
