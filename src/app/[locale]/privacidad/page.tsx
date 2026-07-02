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
    title: legal[locale].privacy.title,
    alternates: { canonical: `/${locale}/privacidad` },
  };
}

export default async function Privacidad({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const typedLocale = locale as Locale;
  return (
    <LegalArticle page={legal[typedLocale].privacy} locale={typedLocale} />
  );
}
