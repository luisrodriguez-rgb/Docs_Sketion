# Persistencia y Base de Datos

Esta sección describe el modelo de base de datos Postgres y el sistema de almacenamiento en la nube provisto por Supabase.

---

## Modelo de Datos (Postgres)
La base de datos relacional de Supabase cuenta con las siguientes tablas principales:
- **`profiles`**: Almacena información del perfil del usuario (nombre de usuario, email, foto, fecha de creación).
- **`workspaces`**: Agrupa colecciones de tableros lógicos. Cada workspace pertenece a un usuario (`owner_id`) y soporta compartir con otros colaboradores.
- **`boards`**: Almacena los tableros individuales. Contiene la clave `elements` (JSONB conteniendo la lista de elementos serializados de Excalidraw, coordenadas, estilos y metadatos) y `app_state` (JSONB con la posición de la cámara).
- **`templates`**: Almacena las plantillas del sistema y las personalizadas creadas por los usuarios.
- **`files`**: Contiene metadatos de archivos importados.

---

## Almacenamiento de Archivos (Supabase Storage)
Las imágenes y las páginas de los PDFs importados por el usuario no se incrustan en formato Base64 dentro del JSON de los tableros (lo que saturaría la memoria de la base de datos). En su lugar:
1. Los archivos se suben al bucket público `excalidraw-files`.
2. Las referencias de las imágenes en Excalidraw se actualizan dinámicamente utilizando el enlace HTTPS público del storage:
   `https://[project-id].supabase.co/storage/v1/object/public/excalidraw-files/[file-path]`
