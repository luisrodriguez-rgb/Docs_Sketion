# Historial de Cambios

Sigue el progreso y las actualizaciones semanales de la plataforma Sketion.

---

## [0.9.5] - 2026-08-07

### Added
- Integración del botón de alternancia del minimapa en el grupo de botones flotantes de la barra lateral derecha.

### Improved
- Optimización del rendimiento del Minimapa utilizando `requestAnimationFrame` y cálculo mediante `useMemo` para evitar re-renderizados innecesarios de React.
- Carga optimistic de PDFs usando URLs de Blobs locales temporales para visualización instantánea (<50ms).
- Sincronización en segundo plano de PDFs a Supabase Storage para evitar congelamiento de pantalla.
- Implementación de la capa flotante interactiva de selección de texto sobre las páginas de PDFs mediante DOM directo a 60fps.

---

## [0.9.0] - 2026-08-02

### Added
- Biblioteca de Plantillas Premium categorizadas en el Dashboard y la pizarra.
- Soporte para guardar pizarras personalizadas como plantillas en Supabase y compartirlas con el equipo.
- Integración de Google Drive Picker para enlazar documentos en la nube.
- Motor de renderizado LaTeX KaTeX y soporte Mermaid para diagramas de flujo.
- Tarjetas de estudio (Flashcards) y Modo de Estudio.
