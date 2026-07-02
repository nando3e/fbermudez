import type { CSSProperties } from "react";

// Tema visual del sitio, elegido con la variable de entorno VIEW_MODE:
//   LIGHT  → claro con acento índigo
//   DARK1  → oscuro con acento azul-lavanda (el original, valor por defecto)
//   DARK2  → oscuro con acento dorado
// Las páginas son estáticas: VIEW_MODE se lee durante `next build`, así que
// cambiar el modo en producción = cambiar la variable en Dokploy y redesplegar.
export type ViewMode = "LIGHT" | "DARK1" | "DARK2";

type Theme = {
  colorScheme: "light" | "dark";
  background: string;
  foreground: string;
  muted: string;
  mutedStrong: string;
  border: string;
  borderStrong: string;
  card: string;
  cardHover: string;
  accent: string;
  accentStrong: string;
  /** Porcentaje de accent en el glow superior del backdrop. */
  glowStrength: string;
  /** Extremos del degradado de la imagen OG (ImageResponse no admite CSS vars). */
  ogFrom: string;
  ogTo: string;
};

const themes: Record<ViewMode, Theme> = {
  DARK1: {
    colorScheme: "dark",
    background: "#06070b",
    foreground: "#ededf2",
    muted: "#9a9aa8",
    mutedStrong: "#c4c4d0",
    border: "rgba(255, 255, 255, 0.08)",
    borderStrong: "rgba(255, 255, 255, 0.14)",
    card: "rgba(255, 255, 255, 0.025)",
    cardHover: "rgba(255, 255, 255, 0.045)",
    accent: "#8b9cff",
    accentStrong: "#b3c0ff",
    glowStrength: "12%",
    ogFrom: "#12132b",
    ogTo: "#050507",
  },
  LIGHT: {
    colorScheme: "light",
    background: "#fafafc",
    foreground: "#15161d",
    muted: "#5f6170",
    mutedStrong: "#40424f",
    border: "rgba(12, 14, 35, 0.1)",
    borderStrong: "rgba(12, 14, 35, 0.18)",
    card: "rgba(12, 14, 35, 0.03)",
    cardHover: "rgba(12, 14, 35, 0.055)",
    // Índigo más oscuro que el accent de DARK1: sobre fondo claro necesita
    // contraste AA como color de texto (eyebrows, enlaces).
    accent: "#4353d9",
    accentStrong: "#2f3ec2",
    glowStrength: "10%",
    ogFrom: "#dfe4fb",
    ogTo: "#f7f8fc",
  },
  DARK2: {
    colorScheme: "dark",
    background: "#06070b",
    foreground: "#ededf2",
    muted: "#9a9aa8",
    mutedStrong: "#c4c4d0",
    border: "rgba(255, 255, 255, 0.08)",
    borderStrong: "rgba(255, 255, 255, 0.14)",
    card: "rgba(255, 255, 255, 0.025)",
    cardHover: "rgba(255, 255, 255, 0.045)",
    accent: "#d8b26a",
    accentStrong: "#eace96",
    glowStrength: "12%",
    ogFrom: "#251d0f",
    ogTo: "#070604",
  },
};

function resolveMode(raw: string | undefined): ViewMode {
  const value = raw?.trim().toUpperCase();
  return value === "LIGHT" || value === "DARK2" ? value : "DARK1";
}

export const viewMode: ViewMode = resolveMode(process.env.VIEW_MODE);
export const theme: Theme = themes[viewMode];

// Variables CSS que consume globals.css. Se inyectan como estilo inline de
// <html> en cada documento (layout de locale y not-found raíz), de modo que
// este fichero es la única fuente de verdad de la paleta.
export const themeStyle = {
  colorScheme: theme.colorScheme,
  "--background": theme.background,
  "--foreground": theme.foreground,
  "--muted": theme.muted,
  "--muted-strong": theme.mutedStrong,
  "--border": theme.border,
  "--border-strong": theme.borderStrong,
  "--card": theme.card,
  "--card-hover": theme.cardHover,
  "--accent": theme.accent,
  "--accent-strong": theme.accentStrong,
  "--glow-strength": theme.glowStrength,
} as CSSProperties;
