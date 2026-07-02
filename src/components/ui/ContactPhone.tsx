"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import { PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";

/**
 * Botón de teléfono que abre un popover para elegir entre llamar o WhatsApp.
 * El número sale de site.phone (formato +34...). wa.me quiere el número sin "+".
 */
export function ContactPhone({
  label,
  callLabel,
  whatsappLabel,
}: {
  label: string;
  callLabel: string;
  whatsappLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const tel = site.phone;
  const wa = `https://wa.me/${site.phone.replace(/[^0-9]/g, "")}`;

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={label}
        className="inline-flex items-center gap-2.5 rounded-full border border-foreground/30 px-5 py-2.5 font-mono text-[14px] font-medium text-foreground transition-colors hover:border-accent/50 hover:bg-accent/15 hover:text-accent-strong"
      >
        <PhoneIcon className="h-4 w-4" />
        {site.phoneDisplay}
      </button>

      {open && (
        <div
          role="menu"
          className="absolute left-0 top-full z-50 mt-2 w-44 overflow-hidden rounded-xl border border-border-strong bg-background/95 p-1 shadow-xl backdrop-blur-xl"
        >
          <a
            role="menuitem"
            href={`tel:${tel}`}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-card-hover"
          >
            <PhoneIcon className="h-4 w-4 text-accent" />
            {callLabel}
          </a>
          <a
            role="menuitem"
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-card-hover"
          >
            <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
            {whatsappLabel}
          </a>
        </div>
      )}
    </div>
  );
}
