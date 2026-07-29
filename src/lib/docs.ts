import { existsSync } from "node:fs";
import path from "node:path";
import { locales, type Locale } from "@/content/types";

/* Los PDFs viven en public/docs con el idioma en el nombre del fichero:
   añadir una traducción es dejar el fichero ahí, sin tocar código. */
const baseNames = {
  cv: "cv-fernando-bermudez",
  portfolio: "portfolio-tecnico-fernando-bermudez",
} as const;

export type DocId = keyof typeof baseNames;

const docsDir = path.join(process.cwd(), "public", "docs");

function hrefIfExists(id: DocId, locale: Locale): string | null {
  const file = `${baseNames[id]}-${locale}.pdf`;
  return existsSync(path.join(docsDir, file)) ? `/docs/${file}` : null;
}

/**
 * Ruta del PDF en el idioma que se está visualizando. Si ese idioma todavía no
 * está traducido cae al primero disponible; null cuando no hay ninguno, y
 * entonces la tarjeta no se pinta.
 */
export function getDocHref(id: DocId, locale: Locale): string | null {
  for (const candidate of [locale, ...locales]) {
    const href = hrefIfExists(id, candidate);
    if (href) return href;
  }
  return null;
}
