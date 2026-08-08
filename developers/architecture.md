# Arquitectura General

Esta guía detalla la arquitectura técnica de Sketion para desarrolladores.

---

## Estructura del Monorepo

Sketion se organiza como un monorepo que unifica el cliente, el servidor de colaboración y la documentación en un solo repositorio de Git:
- **`excalidraw/`**: Contiene la aplicación web del cliente (React, TypeScript, Vite) en la subcarpeta `excalidraw-app/`, así como las librerías principales de renderizado.
- **`docs/`**: El portal de documentación estática y guías (VitePress).
- **`collab-server.js`**: Un servidor ligero basado en Node.js y Socket.IO para gestionar las salas de colaboración en tiempo real de forma auto-hospedada.

---

## Interacción de Componentes

```text
               Navegador del Usuario
  ┌───────────────────────────────────────────────┐
  │                 Sketion App                   │
  │  ┌───────────────┐          ┌──────────────┐  │
  │  │  Drawing     │          │  Local Db    │  │
  │  │  Engine      │◄────────►│  (IndexedDB) │  │
  │  │  (Excalidraw)│          └──────┬───────┘  │
  │  └──────┬────────┘                 │          │
  └─────────┼──────────────────────────┼──────────┘
            │                          │
            ▼                          ▼
      Socket.IO (Collab)       Supabase (Sync & Storage)
      (collab-server.js)       (auth, postgres, buckets)
```

1. **Drawing Engine**: Basado en el core de Excalidraw, gestiona el renderizado vectorial 2D, selecciones, zoom y coordenadas de la cámara.
2. **Local Db**: IndexedDB almacena de manera inmediata y asíncrona cada cambio en el estado del lienzo, garantizando que la aplicación sea local-first y tolerante al estado offline.
3. **Supabase**: Proporciona los servicios de autenticación de usuarios, la base de datos Postgres (sincronización de tableros y metadatos) y el almacenamiento de objetos (Supabase Storage para archivos PDF e imágenes).
4. **Socket.IO**: Gestiona la transmisión de eventos efímeros del puntero y cambios de selección en salas de colaboración activas en tiempo real.
