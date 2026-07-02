"use client";

import { useEffect, useState } from "react";
import type { SiteContent } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { LocaleSwitcher } from "@/components/ui/LocaleSwitcher";

export function Header({
  content,
  locale,
}: {
  content: SiteContent;
  locale: Locale;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Rutas absolutas con locale para que la navegación también funcione desde
  // las páginas legales; en la home el navegador salta al ancla igualmente.
  const links = [
    { href: `/${locale}#top`, label: content.nav.about },
    { href: `/${locale}#skills`, label: content.nav.skills },
    { href: `/${locale}#projects`, label: content.nav.projects },
    { href: `/${locale}#education`, label: content.nav.education },
    { href: `/${locale}#contact`, label: content.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5 sm:px-8">
        <a href={`/${locale}#top`} className="font-mono text-[1.4rem] font-medium tracking-tight">
          FB<span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <LocaleSwitcher current={locale} />
      </div>
    </header>
  );
}
