import type { SiteContent } from "@/content/types";
import { localeName, type Locale } from "@/i18n/config";
import { getDoc, type DocDownload, type DocId } from "@/lib/docs";
import { DownloadIcon } from "@/components/ui/icons";

interface DownloadItem {
  id: DocId;
  label: string;
  doc: DocDownload;
}

/* Bloque de PDFs descargables (pie de Contacto y cierre de /casos). Cada
   tarjeta sirve el idioma que el visitante está leyendo y ofrece las otras
   traducciones debajo; los idiomas que aún no tienen fichero en public/docs
   simplemente no aparecen. Las etiquetas de los documentos son siempre las de
   contact.downloads: el rótulo y la entradilla los pone quien lo usa. */
export function Downloads({
  content,
  locale,
  ids = ["cv", "portfolio"],
  title,
  text,
  className = "mt-14 border-t border-border pt-8",
}: {
  content: SiteContent;
  locale: Locale;
  /** Documentos a mostrar, en este orden. */
  ids?: DocId[];
  /** Rótulo del bloque; por defecto el de Contacto. */
  title?: string;
  /** Frase opcional bajo el rótulo. */
  text?: string;
  className?: string;
}) {
  const { downloads } = content.contact;
  const labels: Record<DocId, string> = {
    cv: downloads.cv,
    portfolio: downloads.portfolio,
  };

  const items = ids
    .map((id) => {
      const doc = getDoc(id, locale);
      return doc ? { id, label: labels[id], doc } : null;
    })
    .filter((item): item is DownloadItem => item !== null);

  if (items.length === 0) return null;

  return (
    <div className={className}>
      <h3 className="eyebrow">{title ?? downloads.title}</h3>
      {text && <p className="mt-3 max-w-xl text-[15px] text-muted">{text}</p>}

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {items.map(({ id, label, doc }) => (
          <div key={id}>
            <a
              href={doc.main.href}
              download
              hrefLang={doc.main.locale}
              aria-label={`${downloads.downloadAction} ${label} (PDF, ${localeName(doc.main.locale)})`}
              className="group flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 transition-colors hover:border-border-strong hover:bg-card-hover"
            >
              <DownloadIcon className="h-5 w-5 shrink-0 text-accent transition-transform group-hover:translate-y-0.5" />
              <span className="min-w-0">
                <span className="block truncate text-[15px] font-medium">
                  {label}
                </span>
                <span className="mt-0.5 block font-mono text-[11px] text-muted">
                  PDF · {doc.main.size} · {localeName(doc.main.locale)}
                </span>
              </span>
            </a>

            {doc.others.length > 0 && (
              <p className="mt-2 pl-1 text-[13px] text-muted">
                {downloads.alsoIn}{" "}
                {doc.others.map((version, i) => (
                  <span key={version.locale}>
                    {i > 0 && <span className="text-muted/50"> · </span>}
                    <a
                      href={version.href}
                      download
                      hrefLang={version.locale}
                      aria-label={`${downloads.downloadAction} ${label} (PDF, ${localeName(version.locale)})`}
                      className="text-accent transition-colors hover:text-accent-strong"
                    >
                      {localeName(version.locale)}
                    </a>
                  </span>
                ))}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
