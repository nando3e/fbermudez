import { ImageResponse } from "next/og";

import { theme } from "@/lib/theme";

// Favicon generado en build: el logo "FB." del header, en miniatura.
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: theme.background,
          borderRadius: 14,
          color: theme.foreground,
          fontSize: 32,
          fontWeight: 700,
          letterSpacing: "-0.05em",
        }}
      >
        FB<span style={{ color: theme.accent }}>.</span>
      </div>
    ),
    size,
  );
}
