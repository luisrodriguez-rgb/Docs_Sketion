# Documentos PDFs

<span class="badge badge-available">✓ Available</span>
<span class="badge badge-beta">◐ Beta</span> (Extracción de texto)

Sketion permite importar documentos en formato PDF y trabajar con ellos directamente sobre el canvas infinito.

---

## Importación Local-First
Cuando importas un archivo PDF a través del botón de importación de la barra lateral:
1. **Renderizado Instantáneo**: Las páginas se renderizan de forma inmediata en el navegador mediante imágenes optimizadas usando URLs locales (`Blob`). Esto evita que el navegador se congele y te permite ver el PDF en menos de 50ms.
2. **Carga Asíncrona**: En segundo plano, las imágenes de las páginas se suben de forma silenciosa al bucket `excalidraw-files` de Supabase Storage. Al completarse, la URL local se reemplaza automáticamente por la URL del storage para garantizar la colaboración persistente.

---

## Interacción y Selección de Texto
Durante la importación, Sketion analiza e indexa el contenido del texto de cada página:
- **Capa de Selección**: Se dibuja una capa flotante de texto transparente (impulsada por PDF.js) alineada sobre la imagen de la página.
- **Copiar y Pegar**: Puedes seleccionar texto con el mouse directamente sobre la página del PDF, copiarlo (Cmd+C / Ctrl+C) e insertarlo en tus notas de Sketion o en cualquier otra aplicación externa.

---

## Limitaciones Conocidas
- Los PDFs extensos (de más de 50 páginas) pueden consumir una cantidad significativa de memoria en el navegador, especialmente en dispositivos con recursos limitados.
- El texto es seleccionable y copiable, pero no editable de forma directa. Para realizar anotaciones, se deben sobreponer notas o trazos vectoriales en el lienzo.
