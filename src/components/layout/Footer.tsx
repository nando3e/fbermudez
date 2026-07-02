import Link from "next/link";
import type { SiteContent } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { site } from "@/content/site";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";

export function Footer({
  content,
  locale,
}: {
  content: SiteContent;
  locale: Locale;
}) {
  const socials = [
    site.github && { href: site.github, label: "GitHub", Icon: GitHubIcon },
    site.linkedin && {
      href: site.linkedin,
      label: "LinkedIn",
      Icon: LinkedInIcon,
    },
  ].filter(Boolean) as { href: string; label: string; Icon: typeof GitHubIcon }[];

  const legalLinks = [
    { href: `/${locale}/aviso-legal`, label: content.footer.legalNotice },
    { href: `/${locale}/privacidad`, label: content.footer.privacy },
  ];

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-5 py-10 text-sm text-muted sm:flex-row sm:px-8">
        <p>© 2026 Fernando Bermúdez</p>

        <nav className="flex items-center gap-5">
          {legalLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-foreground transition-colors"
            >
              {label}
            </Link>
          ))}

          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
