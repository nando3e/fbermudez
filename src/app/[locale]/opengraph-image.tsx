import { ImageResponse } from "next/og";
import { isLocale, defaultLocale, type Locale } from "@/i18n/config";
import { getContent } from "@/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Fernando Bermúdez — Desarrollo web, automatización e inteligencia artificial";

export default async function OgImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const resolved: Locale = isLocale(locale) ? locale : defaultLocale;
  const content = getContent(resolved);

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(120% 90% at 75% 10%, #12132b 0%, #050507 55%)",
          color: "#ededf2",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", color: "#8b9cff", fontSize: 30 }}>
          fbermudez.dev
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: "-0.03em" }}>
            Fernando Bermúdez
          </div>
          <div style={{ fontSize: 40, color: "#c4c4d0", maxWidth: 900 }}>
            {content.intro.role.replace(/\s*\|\s*/g, " · ")}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#9a9aa8" }}>
          Socio tecnológico en Solutia · Olot, La Garrotxa
        </div>
      </div>
    ),
    size,
  );
}
