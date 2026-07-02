import Link from "next/link";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

import { themeStyle } from "@/lib/theme";

// El layout raíz vive bajo /[locale], así que el 404 global define su propio documento.
export default function NotFound() {
  return (
    <html
      lang="es"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      style={themeStyle}
    >
      <body className="flex min-h-svh flex-col items-center justify-center gap-6 px-6 text-center">
        <p className="font-mono text-sm text-accent">404</p>
        <h1 className="text-2xl font-semibold tracking-tight">
          Esta página no existe
        </h1>
        <Link
          href="/es"
          className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-accent-strong"
        >
          Volver al inicio
        </Link>
      </body>
    </html>
  );
}
