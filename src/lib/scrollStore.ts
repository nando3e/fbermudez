// Estado de scroll compartido entre Lenis (que lo actualiza) y la escena WebGL
// (que lo lee en cada frame). Evita re-renders de React: es un ref mutable.
export const scrollState = {
  progress: 0, // 0..1 a lo largo de toda la página
  velocity: 0, // velocidad instantánea de Lenis
};
