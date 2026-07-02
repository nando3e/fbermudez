export const locales = ["es", "ca", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

export interface SkillGroup {
  name: string;
  description: string;
}

export interface ProjectCase {
  /** Enlaza la tarjeta de la landing con su versión detallada (/casos#id). */
  id: string;
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

export interface CaseCapture {
  /** Ruta bajo /public (p.ej. "/casos/descargas-01.png"). Vacío = hueco pendiente. */
  src?: string;
  caption: string;
}

export interface FeaturedCase {
  /** Ancla de la URL (/casos#id). Igual en los tres idiomas. */
  id: string;
  sector: string;
  title: string;
  /** Párrafos: problema → solución → resultado. */
  paragraphs: string[];
  stack: string[];
  captures: CaseCapture[];
}

export interface MiniCase {
  sector: string;
  title: string;
  description: string;
  stack: string[];
}

export interface CaseGroup {
  name: string;
  items: MiniCase[];
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
    cases: ProjectCase[];
    /** Botón al final de la sección que lleva a /casos. */
    viewAll: string;
    /** Enlace "Ver más" de cada tarjeta hacia su detalle en /casos. */
    caseMore: string;
  };
  cases: {
    metaTitle: string;
    metaDescription: string;
    /** Etiqueta del enlace a la home en el breadcrumb. */
    breadcrumbHome: string;
    eyebrow: string;
    title: string;
    intro: string;
    othersTitle: string;
    /** Etiquetas accesibles de las flechas de las galerías. */
    galleryPrev: string;
    galleryNext: string;
    /** Texto del hueco de captura pendiente. */
    capturePending: string;
    /** Etiqueta accesible del botón de cerrar el lightbox. */
    lightboxClose: string;
    featured: FeaturedCase[];
    groups: CaseGroup[];
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
