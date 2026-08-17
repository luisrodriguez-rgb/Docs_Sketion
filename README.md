Este directorio contiene el código fuente y los archivos de contenido del portal de documentación de Sketion, desarrollado utilizando **VitePress**.

* **Sitio Web Principal (Landing)**: [sketion-home.vercel.app](https://sketion-home.vercel.app)
* **Aplicación Web (App)**: [sketion.vercel.app](https://sketion.vercel.app)
* **Repositorio de GitHub**: [github.com/luisrodriguez-rgb/Sketion](https://github.com/luisrodriguez-rgb/Sketion)

## Estructura del Proyecto

```text
docs/
├── .vitepress/          # Configuración y temas de VitePress
│   ├── config.mts       # Enlaces, barras laterales, locales (i18n) y metadatos (favicon/OG)
│   └── theme/
│       ├── index.ts     # Registro del tema personalizado
│       └── custom.css   # Tipografías Outfit/Inter e integración nativa de Light/Dark mode
├── public/              # Archivos estáticos públicos (logos e imágenes del portal)
├── getting-started/     # Guías iniciales e introducción (Español)
├── guides/              # Manuales de características individuales (Español)
├── workflows/           # Guías de casos de uso prácticos paso a paso (Español)
├── templates/           # Documentación de plantillas (Español)
├── developers/          # Documentación técnica, setup local y contribución (Español)
├── reference/           # Atajos, límites del sistema y changelog (Español)
├── en/                  # Copia localizada del contenido traducido (English)
├── crop_logo.py         # Utilidad en Python para refinar el logo de la documentación
└── package.json         # Dependencias, scripts de desarrollo e invalidación (overrides)
```

---

## Comandos de Desarrollo

Asegúrate de estar en el directorio `docs/` antes de ejecutar cualquiera de estos comandos:

### 1. Instalar Dependencias
Instala los paquetes necesarios, incluyendo las versiones seguras de `vite` y `esbuild` declaradas en el bloque de overrides:
```bash
npm install
```

### 2. Iniciar Servidor de Desarrollo Local
Ejecuta la documentación en un servidor local con recarga en caliente en `http://localhost:5173`:
```bash
npm run docs:dev
```

### 3. Compilar para Producción
Genera la build estática optimizada en el directorio `.vitepress/dist` lista para ser desplegada en Vercel u otros servidores:
```bash
npm run docs:build
```

### 4. Probar la Build de Producción Localmente
Levanta un servidor local para previsualizar los archivos estáticos compilados en producción:
```bash
npm run docs:preview
```

---

## Soporte Multi-idioma (i18n)

La documentación soporta localización nativa para Español (idioma por defecto en la raíz `/`) e Inglés (dentro de la carpeta `/en/`). 

Para añadir una traducción o una nueva página traducida:
1. Crea el correspondiente archivo `.md` dentro de la subcarpeta `docs/en/` respetando la misma estructura de rutas.
2. Si es necesario, edita la barra de navegación o sidebar en inglés dentro del objeto `locales.en` en `docs/.vitepress/config.mts`.

---

## Identidad Visual y Recursos de Marca

Los recursos vectoriales e imágenes oficiales de Sketion se encuentran en el directorio `public/`:
* `public/Sketion_blaco.svg`: Logotipo oficial vectorial utilizado en la barra de navegación, favicon y Open Graph de la documentación.
* `public/Sketion_negro.svg`: Variante del logotipo con fondo oscuro y trazos claros.
* `public/Sketion_principal.svg`: Isotipo principal con paleta de gradientes y detalles de interfaz.

### Configuración en VitePress
La configuración del logo, favicon e imagen Open Graph se gestiona en `.vitepress/config.mts`:
- **Logo del Navbar**: Configurado en `themeConfig.logo: "/Sketion_blaco.svg"`.
- **Favicon**: Enlace en cabecera con `rel="icon"` apuntando a `/Sketion_blaco.svg`.
- **Hero Image**: Configurado en el frontmatter de `index.md` y `en/index.md`.
