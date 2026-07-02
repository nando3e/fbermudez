import { locales, defaultLocale, type Locale } from "@/content/types";

export { locales, defaultLocale };
export type { Locale };

const localeNames: Record<Locale, string> = {
  es: "Español",
  ca: "Català",
  en: "English",
};

export function localeName(locale: Locale): string {
  return localeNames[locale];
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/**
 * Elige el mejor idioma a partir de la cabecera Accept-Language.
 * Devuelve el defaultLocale si no hay coincidencia.
 */
export function matchLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return defaultLocale;

  const ranked = acceptLanguage
    .split(",")
    .map((part) => {
      const [tag, q = "q=1"] = part.trim().split(";");
      const quality = parseFloat(q.replace("q=", "")) || 0;
      return { tag: tag.toLowerCase(), quality };
    })
    .sort((a, b) => b.quality - a.quality);

  for (const { tag } of ranked) {
    const base = tag.split("-")[0];
    if (isLocale(base)) return base;
  }
  return defaultLocale;
}
