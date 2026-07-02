import type { Locale, SiteContent } from "./types";
import { es } from "./es";
import { ca } from "./ca";
import { en } from "./en";

export const dictionaries: Record<Locale, SiteContent> = { es, ca, en };

export function getContent(locale: Locale): SiteContent {
  return dictionaries[locale];
}

export type { Locale, SiteContent };
export { locales, defaultLocale } from "./types";
