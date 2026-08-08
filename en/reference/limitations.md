# Capabilities & Limitations

This page details the development status of our features, what Sketion can do today, and the technical limits in the current version.

---

## Status Roadmap

### ✓ Available
Stable features ready for production use:
- PDF page import as optimized images.
- Basic text notes and vector shapes.
- LaTeX mathematical rendering (KaTeX).
- Import files using Google Drive Picker.
- Local and shared template library.

### ◐ Experimental (Beta)
Functional features under optimization or with partial support:
- Interactive overlay for text selection and copying inside PDFs.
- Mermaid code conversion to canvas shapes (limited to basic flowcharts).
- Basic study card (Flashcards) creation and review.

### ○ Planned
Features on our upcoming roadmap:
- Automated AI workspace generation.
- Automated AI-assisted PDF summaries.
- Template Marketplace.

---

## Capabilities (What Sketion does today)

### PDF
- Import PDF pages as canvas images.
- Interactive text selection layer.
- Background uploads to Supabase Storage.

### LaTeX
- Insert and preview complex mathematical formulas.
- High-resolution SVG rendering for equations.

### Mermaid
- Import flowchart syntax (`flowchart` or `graph` TD/LR).
- Convert nodes to editable individual canvas elements.

### Tables & CSV
- Parse and import CSV files.
- Convert pasted Excel/Sheets cells into aligned editable text blocks.

---

## Limitations

### PDF
- **Memory usage**: Large PDFs (more than 50 pages) can consume significant RAM, causing sluggishness on lower-end devices or mobile browsers.
- **No direct editing**: PDF text is selectable and copiable, but cannot be edited directly on the board.

### LaTeX
- **Replace to edit**: Equations are rendered as static vector SVGs. To edit a formula, double-click it to open the LaTeX editor, modify the code, and insert it again.

### Mermaid
- **Restricted syntax**: Only flowcharts are fully supported. Mind maps (`mindmap`), sequence diagrams, or class diagrams are not fully translated to Excalidraw shapes yet.

### Tables
- **Static structures**: CSV cells are injected as independent text blocks aligned spatially. They do not behave like reactive spreadsheets.
