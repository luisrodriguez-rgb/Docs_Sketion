# Cómo Contribuir

Aprende las directrices para proponer mejoras, reportar fallos y contribuir al desarrollo de Sketion.

---

## Flujo de Trabajo para Contribuir

1. **Crear una Rama**: Crea una rama descriptiva de tu feature o corrección partiendo de la rama de desarrollo activa.
   ```bash
   git checkout -b feature/mi-optimizacion
   ```
2. **Realizar tus Cambios**: Escribe código TypeScript estructurado, manteniendo la coherencia de estilo y respetando los lints del proyecto.
3. **Verificar el Código**: Ejecuta la comprobación de tipos antes de confirmar tus cambios:
   ```bash
   cd excalidraw
   npm run test:typecheck
   ```
4. **Enviar Pull Request**: Sube tu rama a GitHub y abre una Pull Request detallando los cambios introducidos y cómo probarlos de forma manual.
