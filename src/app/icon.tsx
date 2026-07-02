import { ImageResponse } from "next/og";

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
          background: "#06070b",
          borderRadius: 14,
          color: "#ededf2",
          fontSize: 32,
          fontWeight: 700,
          letterSpacing: "-0.05em",
        }}
      >
        FB<span style={{ color: "#8b9cff" }}>.</span>
      </div>
    ),
    size,
  );
}
