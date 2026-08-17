import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Sketion Docs",
  description: "Visual Knowledge Workspace para estudiantes e ingenieros",

  // 1. Multi-language Support (Locales)
  locales: {
    root: {
      label: "Español",
      lang: "es",
      themeConfig: {
        logo: "/Sketion_blaco.svg",
        nav: [
          { text: "Guías", link: "/getting-started/what-is-sketion" },
          { text: "Flujos de Trabajo", link: "/workflows/studying" },
          { text: "Desarrolladores", link: "/developers/architecture" },
          { text: "Changelog", link: "/reference/changelog" },
          { text: "Abrir Sketion ↗", link: "https://sketion.vercel.app" }
        ],
        sidebar: [
          {
            text: "Getting Started",
            items: [
              { text: "¿Qué es Sketion?", link: "/getting-started/what-is-sketion" },
              { text: "Filosofía del Producto", link: "/getting-started/philosophy" },
              { text: "Inicio Rápido", link: "/getting-started/quick-start" },
              { text: "Tu Primer Espacio", link: "/getting-started/first-workspace" },
              { text: "La Interfaz", link: "/getting-started/interface" }
            ]
          },
          {
            text: "Guides",
            items: [
              { text: "Canvas Infinito", link: "/guides/canvas" },
              { text: "Documentos PDFs", link: "/guides/pdfs" },
              { text: "Notas Flotantes", link: "/guides/notes" },
              { text: "Expresiones LaTeX", link: "/guides/latex" },
              { text: "Diagramas Mermaid", link: "/guides/diagrams" },
              { text: "Tablas y Datos", link: "/guides/tables" },
              { text: "Tarjetas de Estudio", link: "/guides/flashcards" },
              { text: "Google Drive", link: "/guides/google-drive" },
              { text: "Plantillas", link: "/guides/templates" }
            ]
          },
          {
            text: "Workflows",
            items: [
              { text: "Estudio Universitario", link: "/workflows/studying" },
              { text: "Ingeniería y Análisis", link: "/workflows/engineering" },
              { text: "Arquitectura de Software", link: "/workflows/software-architecture" },
              { text: "Investigación Científica", link: "/workflows/research" },
              { text: "Asistencia con IA", link: "/workflows/ai" }
            ]
          },
          {
            text: "Templates",
            items: [
              { text: "Explorar Plantillas", link: "/templates/browse" },
              { text: "Uso de Plantillas", link: "/templates/using-templates" },
              { text: "Crear una Plantilla", link: "/templates/creating-templates" }
            ]
          },
          {
            text: "Developers",
            items: [
              { text: "Arquitectura General", link: "/developers/architecture" },
              { text: "Estrategia Local-First", link: "/developers/local-first" },
              { text: "Persistencia y Base de Datos", link: "/developers/data-storage" },
              { text: "Colaboración en Tiempo Real", link: "/developers/realtime" },
              { text: "Configuración de Desarrollo", link: "/developers/development-setup" },
              { text: "Cómo Contribuir", link: "/developers/contributing" }
            ]
          },
          {
            text: "Reference",
            items: [
              { text: "Atajos de Teclado", link: "/reference/shortcuts" },
              { text: "Formatos Soportados", link: "/reference/supported-formats" },
              { text: "Capacidades y Limitaciones", link: "/reference/limitations" },
              { text: "Historial de Cambios", link: "/reference/changelog" },
              { text: "Atribuciones de Código Abierto", link: "/reference/open-source" }
            ]
          }
        ]
      }
    },
    en: {
      label: "English",
      lang: "en",
      link: "/en/",
      themeConfig: {
        logo: "/Sketion_blaco.svg",
        nav: [
          { text: "Guides", link: "/en/getting-started/what-is-sketion" },
          { text: "Workflows", link: "/en/workflows/studying" },
          { text: "Developers", link: "/en/developers/architecture" },
          { text: "Changelog", link: "/en/reference/changelog" },
          { text: "Open Sketion ↗", link: "https://sketion.vercel.app" }
        ],
        sidebar: [
          {
            text: "Getting Started",
            items: [
              { text: "What is Sketion?", link: "/en/getting-started/what-is-sketion" },
              { text: "Product Philosophy", link: "/en/getting-started/philosophy" },
              { text: "Quick Start", link: "/en/getting-started/quick-start" },
              { text: "Your First Workspace", link: "/en/getting-started/first-workspace" },
              { text: "The Interface", link: "/en/getting-started/interface" }
            ]
          },
          {
            text: "Guides",
            items: [
              { text: "Infinite Canvas", link: "/en/guides/canvas" },
              { text: "PDF Documents", link: "/en/guides/pdfs" },
              { text: "Sticky Notes", link: "/en/guides/notes" },
              { text: "LaTeX Expressions", link: "/en/guides/latex" },
              { text: "Mermaid Diagrams", link: "/en/guides/diagrams" },
              { text: "Tables & Data", link: "/en/guides/tables" },
              { text: "Flashcards", link: "/en/guides/flashcards" },
              { text: "Google Drive", link: "/en/guides/google-drive" },
              { text: "Templates", link: "/en/guides/templates" }
            ]
          },
          {
            text: "Workflows",
            items: [
              { text: "University Study", link: "/en/workflows/studying" },
              { text: "Engineering & Analysis", link: "/en/workflows/engineering" },
              { text: "Software Architecture", link: "/en/workflows/software-architecture" },
              { text: "Scientific Research", link: "/en/workflows/research" },
              { text: "AI Assistance", link: "/en/workflows/ai" }
            ]
          },
          {
            text: "Templates",
            items: [
              { text: "Browse Templates", link: "/en/templates/browse" },
              { text: "Using Templates", link: "/en/templates/using-templates" },
              { text: "Create a Template", link: "/en/templates/creating-templates" }
            ]
          },
          {
            text: "Developers",
            items: [
              { text: "General Architecture", link: "/en/developers/architecture" },
              { text: "Local-First Strategy", link: "/en/developers/local-first" },
              { text: "Persistence & Database", link: "/en/developers/data-storage" },
              { text: "Realtime Collaboration", link: "/en/developers/realtime" },
              { text: "Development Setup", link: "/en/developers/development-setup" },
              { text: "How to Contribute", link: "/en/developers/contributing" }
            ]
          },
          {
            text: "Reference",
            items: [
              { text: "Keyboard Shortcuts", link: "/en/reference/shortcuts" },
              { text: "Supported Formats", link: "/en/reference/supported-formats" },
              { text: "Capabilities & Limitations", link: "/en/reference/limitations" },
              { text: "Changelog", link: "/en/reference/changelog" },
              { text: "Open Source Attribution", link: "/en/reference/open-source" }
            ]
          }
        ]
      }
    }
  },

  // 2. Head Tags (Favicon & Open Graph metadata)
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/Sketion_blaco.svg" }],
    ["meta", { name: "theme-color", content: "#121214" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: "Sketion Docs" }],
    ["meta", { property: "og:description", content: "Visual Knowledge Workspace para estudiantes e ingenieros" }],
    ["meta", { property: "og:image", content: "/Sketion_blaco.svg" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }]
  ],

  // 3. Global theme settings
  themeConfig: {
    socialLinks: [
      { icon: "github", link: "https://github.com/luisrodriguez-rgb/Sketion" }
    ],
    search: {
      provider: "local"
    }
  }
});
