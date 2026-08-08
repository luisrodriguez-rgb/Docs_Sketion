# Changelog

Track weekly updates and improvements on the Sketion platform.

---

## [0.9.5] - 2026-08-07

### Added
- Integrated minimap toggle button inside the right floating sidebar group.

### Improved
- Optimized Minimap rendering using `requestAnimationFrame` and `useMemo` caching to bypass React re-renders.
- Local Blob URL rendering for instant PDF imports (<50ms).
- Background Supabase Storage uploading for PDFs to prevent UI freezes.
- High-performance transparent PDF text selection overlay synced at 60fps.

---

## [0.9.0] - 2026-08-02

### Added
- Premium Template Library categorized in the Dashboard.
- Support for saving custom boards as templates on Supabase.
- Google Drive Picker integration to link cloud documents.
- KaTeX engine and Mermaid flowchart rendering.
- Flashcards and Study Mode.
