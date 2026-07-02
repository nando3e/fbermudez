import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getContent } from "@/content";
import { CasesArticle } from "@/components/cases/CasesArticle";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const content = getContent(locale);
  return {
    title: content.cases.metaTitle,
    description: content.cases.metaDescription,
    alternates: { canonical: `/${locale}/casos` },
  };
}

export default async function Casos({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const typedLocale = locale as Locale;
  const content = getContent(typedLocale);
  return <CasesArticle content={content} locale={typedLocale} />;
}
