# Colaboración en Tiempo Real

Sketion hereda la arquitectura descentralizada de colaboración de Excalidraw, adaptándola para salas auto-hospedadas.

---

## El Servidor de Colaboración (Socket.IO)
La comunicación efímera en tiempo real está a cargo de `collab-server.js`:
- El servidor gestiona conexiones Websocket persistentes a través de la librería Socket.IO.
- Coordina el envío y retransmisión de las posiciones del cursor de los usuarios colaboradores activos, así como selecciones de objetos momentáneos.
- El servidor de colaboración no almacena los datos de los tableros de forma persistente; actúa meramente como un hub de transmisión rápida (retransmisión de datos efímeros).

---

## Flujo de Transmisión
Cuando dos usuarios entran a co-editar un tablero compartido:
1. Se unen a una sala (room) en el servidor de Websockets cuyo ID corresponde al ID único del tablero.
2. Cada cambio de dibujo local se serializa de manera cifrada y se transmite a los demás sockets conectados a la sala.
3. El estado final consolidado del tablero es sincronizado asíncronamente en la base de datos central de Postgres (Supabase).
