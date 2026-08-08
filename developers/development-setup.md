# Configuración de Desarrollo

Sigue estos pasos para configurar tu entorno de desarrollo local y empezar a trabajar en la base de código de Sketion.

---

## Prerrequisitos
- Node.js v22 o superior.
- Yarn v1.22.x o npm.

---

## 1. Clonar el Repositorio e Instalar Dependencias
Clona el repositorio e instala los paquetes necesarios en la raíz de los workspaces:
```bash
git clone https://github.com/luisrodriguez-rgb/Sketion.git
cd Sketion
yarn install
```

---

## 2. Configurar Variables de Entorno
Crea un archivo `.env.development` en la subcarpeta `excalidraw/` del proyecto y define las credenciales del cliente de Supabase:
```text
VITE_SUPABASE_URL=https://[tu-proyecto].supabase.co
VITE_SUPABASE_ANON_KEY=[tu-anon-key-de-supabase]
```

---

## 3. Iniciar Servidores Locales

### Iniciar Aplicación Web (Excalidraw client)
```bash
cd excalidraw
npm run start
```
La aplicación cliente estará disponible en `http://localhost:3000`.

### Iniciar Servidor de Colaboración (Socket.IO)
En otra terminal en la raíz del proyecto:
```bash
node collab-server.js
```
El servidor de socket escuchará en el puerto 5001.

### Iniciar Portal de Documentación (VitePress)
En otra terminal en la raíz del proyecto:
```bash
cd docs
npm run docs:dev
```
La documentación estará activa en `http://localhost:5173`.
