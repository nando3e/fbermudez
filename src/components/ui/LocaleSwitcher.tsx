"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, localeName, type Locale } from "@/i18n/config";

export function LocaleSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(locale: Locale) {
    // Sustituye el primer segmento (el locale) por el nuevo.
    const segments = pathname.split("/");
    segments[1] = locale;
    router.push(segments.join("/") || `/${locale}`);
  }

  return (
    <div className="flex items-center gap-1 text-xs" role="group" aria-label="Idioma">
      {locales.map((locale, i) => (
        <span key={locale} className="flex items-center">
          {i > 0 && <span className="text-border px-1" aria-hidden>·</span>}
          <button
            type="button"
            onClick={() => switchTo(locale)}
            aria-current={locale === current ? "true" : undefined}
            className={
              locale === current
                ? "text-foreground font-medium"
                : "text-muted hover:text-foreground transition-colors"
            }
            title={localeName(locale)}
          >
            {locale.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}
