import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "../globals.css";

import { locales, isLocale, type Locale } from "@/i18n/config";
import { getContent } from "@/content";
import { site } from "@/content/site";
import { themeStyle } from "@/lib/theme";
import { Backdrop } from "@/components/layout/Backdrop";
import { SmoothScroll } from "@/components/scroll/SmoothScroll";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const content = getContent(locale);

  const languages = Object.fromEntries(
    locales.map((l) => [l, `/${l}`]),
  ) as Record<string, string>;

  return {
    metadataBase: new URL(site.url),
    title: content.meta.title,
    description: content.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: { ...languages, "x-default": "/es" },
    },
    openGraph: {
      type: "website",
      title: content.meta.title,
      description: content.meta.description,
      url: `${site.url}/${locale}`,
      siteName: "Fernando Bermúdez",
      locale,
    },
    twitter: {
      card: "summary_large_image",
      title: content.meta.title,
      description: content.meta.description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const typedLocale = locale as Locale;
  const content = getContent(typedLocale);

  return (
    <html
      lang={typedLocale}
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      style={themeStyle}
      suppressHydrationWarning
    >
      <body className="min-h-svh">
        <Backdrop />
        <SmoothScroll>
          <Header content={content} locale={typedLocale} />
          <main>{children}</main>
          <Footer content={content} locale={typedLocale} />
        </SmoothScroll>
      </body>
    </html>
  );
}
