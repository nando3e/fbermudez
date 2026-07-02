import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { legal } from "@/content/legal";
import { LegalArticle } from "@/components/ui/LegalArticle";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: legal[locale].notice.title,
    alternates: { canonical: `/${locale}/aviso-legal` },
  };
}

export default async function AvisoLegal({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const typedLocale = locale as Locale;
  return <LegalArticle page={legal[typedLocale].notice} locale={typedLocale} />;
}
