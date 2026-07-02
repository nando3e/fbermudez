import { NextResponse, type NextRequest } from "next/server";
import { locales, matchLocale } from "@/i18n/config";

const PUBLIC_FILE = /\.[^/]+$/;

// Next 16 renombró el "middleware" a "proxy". Detecta el idioma y redirige
// la raíz (o rutas sin locale) a /es, /ca o /en según el navegador.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/icon" || // favicon generado (app/icon.tsx), sin extensión
    pathname.startsWith("/-/") || // rutas de metadata generadas por Next
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return NextResponse.next();

  const locale = matchLocale(request.headers.get("accept-language"));
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
