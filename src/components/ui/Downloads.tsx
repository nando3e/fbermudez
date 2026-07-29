import type { SiteContent } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { getDocHref, type DocId } from "@/lib/docs";
import { DownloadIcon } from "@/components/ui/icons";

/* Bloque de PDFs descargables (pie de Contacto y cierre de /casos). Cada
   tarjeta sirve el idioma que el visitante está leyendo. Las etiquetas de los
   documentos son siempre las de contact.downloads: el rótulo lo pone quien lo
   usa. */
export function Downloads({
  content,
  locale,
  ids = ["cv", "portfolio"],
  title,
  className = "mt-14 border-t border-border pt-8",
}: {
  content: SiteContent;
  locale: Locale;
  /** Documentos a mostrar, en este orden. */
  ids?: DocId[];
  /** Rótulo del bloque; por defecto el de Contacto. */
  title?: string;
  className?: string;
}) {
  const { downloads } = content.contact;
  const labels: Record<DocId, string> = {
    cv: downloads.cv,
    portfolio: downloads.portfolio,
  };

  const items = ids
    .map((id) => ({ id, label: labels[id], href: getDocHref(id, locale) }))
    .filter((item) => item.href !== null);

  if (items.length === 0) return null;

  return (
    <div className={className}>
      <h3 className="eyebrow">{title ?? downloads.title}</h3>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {items.map(({ id, label, href }) => (
          <a
            key={id}
            href={href as string}
            download
            aria-label={`${downloads.downloadAction} ${label} (PDF)`}
            className="group flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 transition-colors hover:border-border-strong hover:bg-card-hover"
          >
            <DownloadIcon className="h-5 w-5 shrink-0 text-accent transition-transform group-hover:translate-y-0.5" />
            <span className="min-w-0">
              <span className="block truncate text-[15px] font-medium">
                {label}
              </span>
              <span className="mt-0.5 block font-mono text-[11px] text-muted">
                PDF
              </span>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
