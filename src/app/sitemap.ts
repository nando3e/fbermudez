import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const home: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${site.url}/${locale}`,
    changeFrequency: "monthly",
    priority: locale === "es" ? 1 : 0.8,
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [l, `${site.url}/${l}`]),
      ),
    },
  }));

  const legalPages: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    ["aviso-legal", "privacidad"].map((slug) => ({
      url: `${site.url}/${locale}/${slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.2,
    })),
  );

  return [...home, ...legalPages];
}
