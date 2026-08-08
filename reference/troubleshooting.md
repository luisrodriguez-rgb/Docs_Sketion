# Solución de Problemas

Guía rápida para diagnosticar y solucionar los problemas más comunes al usar Sketion.

---

## 1. El PDF no se carga o va lento
- **Causa**: El archivo PDF puede ser demasiado pesado (más de 50 páginas) o poseer imágenes escaneadas de muy alta resolución que saturan la memoria del navegador.
- **Solución**: Intenta optimizar o comprimir el PDF antes de importarlo. Carga el PDF en una pestaña de incógnito o limpia la caché de tu navegador para liberar la memoria IndexedDB.

## 2. No puedo seleccionar el texto del PDF
- **Causa**: La capa de texto (Overlay) aún se está procesando o el PDF es puramente una imagen escaneada (no contiene texto digital nativo).
- **Solución**: Espera un par de segundos tras la importación para que termine la indexación del texto. Si el PDF es escaneado, puedes utilizar una herramienta OCR externa para convertirlo a PDF de texto digital antes de arrastrarlo a Sketion.

## 3. Las ecuaciones LaTeX no se muestran o muestran error
- **Causa**: Hay un error de sintaxis en el código de tu ecuación.
- **Solución**: Comprueba la consola del navegador para ver si KaTeX arroja un error de parseo. Asegúrate de cerrar correctamente todas las llaves `{}` y símbolos de control de la sintaxis LaTeX.

## 4. Los diagramas Mermaid no aparecen
- **Causa**: El editor Mermaid contiene errores sintácticos o estás usando un tipo de diagrama no soportado.
- **Solución**: Asegúrate de declarar al inicio `flowchart TD` o similar. Revisa que las uniones de nodos utilicen flechas válidas (ej. `-->` o `---|texto|`).
