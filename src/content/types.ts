export const locales = ["es", "ca", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

export interface SkillGroup {
  name: string;
  description: string;
}

export interface ProjectCase {
  sector: string;
  title: string;
  description: string;
  stack: string[];
}

export interface EducationItem {
  name: string;
  org: string;
  detail?: string;
}

export interface SiteContent {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    skills: string;
    projects: string;
    education: string;
    contact: string;
    /** Etiqueta accesible del botón hamburguesa (móvil). */
    menu: string;
  };
  intro: {
    name: string;
    role: string;
    bio: string[];
    ctaProjects: string;
    ctaAssistant: string;
  };
  skills: {
    title: string;
    groups: SkillGroup[];
  };
  projects: {
    title: string;
    intro: string;
    note: string;
    cases: ProjectCase[];
  };
  education: {
    title: string;
    items: EducationItem[];
  };
  assistant: {
    eyebrow: string;
    question: string;
    note: string;
    cta: string;
  };
  contact: {
    title: string;
    text: string;
    emailLabel: string;
    phoneLabel: string;
    callLabel: string;
    whatsappLabel: string;
    linkedinPrompt: string;
    linkedinCta: string;
  };
  footer: {
    legalNotice: string;
    privacy: string;
  };
}
