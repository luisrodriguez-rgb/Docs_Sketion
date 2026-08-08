# Capacidades y Limitaciones

Esta página detalla de manera transparente el estado de desarrollo de las características, qué puede hacer Sketion hoy y cuáles son las limitaciones técnicas identificadas.

---

## Estado de Disponibilidad (Status)

### ✓ Disponible (Available)
Funcionalidades estables listas para su uso en producción:
- Importación de PDFs en formato de imagen optimizada.
- Notas de texto y formas vectoriales básicas.
- Renderizado de ecuaciones matemáticas LaTeX (KaTeX).
- Importación de archivos mediante Google Drive Picker.
- Sistema de plantillas locales y compartidas.

### ◐ Experimental (Beta)
Funcionalidades funcionales pero bajo optimizaciones o con soporte parcial:
- Capa flotante interactiva para selección y copiado de texto en PDFs.
- Conversión de código Mermaid a formas del canvas (limitado a diagramas de flujo).
- Creación y repaso básico de tarjetas de estudio (Flashcards).

### ○ Planificado (Planned)
Características de nuestro roadmap a futuro:
- Generación de espacios de trabajo automáticos mediante Inteligencia Artificial.
- Extracción automatizada de resúmenes de PDFs asistida por IA.
- Tienda comunitaria de plantillas (Template Marketplace).

---

## Qué puede hacer Sketion hoy (Capabilities)

### PDF
- Importación de páginas de PDFs como imágenes en el canvas.
- Capa flotante interactiva de selección de texto.
- Subida de archivos en segundo plano a Supabase Storage.

### LaTeX
- Inserción y previsualización de ecuaciones matemáticas complejas.
- Escalabilidad vectorial de fórmulas en formato SVG.

### Mermaid
- Importación de diagramas de flujo básicos (`flowchart` o `graph` TD/LR).
- Conversión de nodos Mermaid en formas vectoriales editables individuales en la pizarra.

### Tablas y CSV
- Parseo e importación de archivos CSV.
- Conversión de celdas pegadas desde Excel/Sheets en rejillas de texto vectoriales editables.

---

## Limitaciones actuales (Limitations)

### PDF
- **Rendimiento de memoria**: Cargar archivos PDF grandes (de más de 50 páginas) o múltiples PDFs simultáneos puede consumir mucha memoria RAM en el navegador, provocando ralentización en computadoras de bajos recursos o dispositivos móviles.
- **Sin edición directa**: El texto de las páginas del PDF es seleccionable y copiable, pero no puede ser editado o modificado directamente en la pizarra.

### LaTeX
- **Edición por reemplazo**: Las fórmulas se insertan como imágenes vectoriales estáticas. Para realizar modificaciones en el código de una ecuación ya insertada, debes hacer doble clic para abrir el editor, modificar la sintaxis LaTeX e insertarla de nuevo.

### Mermaid
- **Sintaxis restringida**: Actualmente solo se da soporte completo a la sintaxis de diagramas de flujo básicos. Los mapas mentales (`mindmap`), diagramas de secuencia (`sequenceDiagram`) o diagramas de clases no se autotraducen correctamente a formas de Excalidraw todavía.

### Tablas
- **Estructura estática**: Al importar un CSV, las celdas se inyectan como elementos de texto vectoriales independientes alineados espacialmente. No son una hoja de cálculo reactiva o interactiva (los cambios en una celda no recalculan fórmulas de otras celdas).
