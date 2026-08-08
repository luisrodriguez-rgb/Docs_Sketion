# Estrategia Local-First

Sketion está diseñado en torno a una filosofía local-first, priorizando la persistencia local de los datos en el navegador del usuario.

---

## Almacenamiento Local (IndexedDB)
Toda interacción en el lienzo (dibujar una línea, crear una nota, mover un elemento) se persiste de inmediato y de forma local utilizando la base de datos IndexedDB del navegador:
- **Tolerancia a Fallos de Conexión**: Si el usuario pierde la conexión a Internet o se encuentra trabajando offline, el canvas sigue funcionando al 100% sin interrumpir el flujo.
- **Cero Tiempos de Carga Sincrónicos**: Los cambios se guardan localmente de manera asíncrona, evitando bloquear el hilo principal de renderizado de la UI.

---

## Flujo de Sincronización en la Nube
Una vez restablecida la conexión o al guardar cambios explícitos:
1. Sketion compara el timestamp de actualización local contra el de la base de datos en Supabase.
2. Si la versión local es más reciente, se realiza una petición de sincronización asíncrona en segundo plano para guardar el estado del lienzo en la nube.
3. Esto mantiene la portabilidad entre dispositivos de forma invisible para el usuario sin degradar el rendimiento del canvas.
