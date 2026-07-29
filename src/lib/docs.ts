import { statSync } from "node:fs";
import path from "node:path";
import { locales, type Locale } from "@/content/types";

/* Los PDFs viven en public/docs con el idioma en el nombre del fichero:
   añadir una traducción es dejar el fichero ahí, sin tocar código. */
const baseNames = {
  cv: "cv-fernando-bermudez",
  portfolio: "portfolio-tecnico-fernando-bermudez",
} as const;

export type DocId = keyof typeof baseNames;

export interface DocVersion {
  locale: Locale;
  href: string;
  /** Tamaño ya formateado para el idioma en curso ("2,9 MB"). */
  size: string;
}

export interface DocDownload {
  /** Versión del botón principal: la del idioma activo si existe. */
  main: DocVersion;
  /** Resto de idiomas disponibles, en el orden de `locales`. */
  others: DocVersion[];
}

const docsDir = path.join(process.cwd(), "public", "docs");

function formatSize(bytes: number, locale: Locale): string {
  if (bytes >= 1_000_000) {
    const mb = new Intl.NumberFormat(locale, {
      maximumFractionDigits: 1,
    }).format(bytes / 1_000_000);
    return `${mb} MB`;
  }
  return `${Math.round(bytes / 1000)} KB`;
}

function readVersion(
  id: DocId,
  fileLocale: Locale,
  displayLocale: Locale,
): DocVersion | null {
  const file = `${baseNames[id]}-${fileLocale}.pdf`;
  try {
    const { size } = statSync(path.join(docsDir, file));
    return {
      locale: fileLocale,
      href: `/docs/${file}`,
      size: formatSize(size, displayLocale),
    };
  } catch {
    return null; // Ese idioma todavía no está subido.
  }
}

/**
 * Resuelve un documento para el idioma activo. Si aún no existe traducido,
 * el botón principal cae al primer idioma disponible. Devuelve null cuando no
 * hay ningún fichero: la tarjeta entonces no se pinta.
 */
export function getDoc(id: DocId, locale: Locale): DocDownload | null {
  const versions = locales
    .map((l) => readVersion(id, l, locale))
    .filter((v): v is DocVersion => v !== null);

  if (versions.length === 0) return null;

  const main = versions.find((v) => v.locale === locale) ?? versions[0];
  return { main, others: versions.filter((v) => v !== main) };
}
