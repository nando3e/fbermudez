// Fondo del sitio: near-black + un glow superior muy sutil. Todo CSS, sin
// puntos ni WebGL. Fijo detrás del contenido.
export function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-background" />
      <div className="backdrop-glow absolute inset-x-0 top-0 h-[70vh]" />
    </div>
  );
}
