# Diagramas Mermaid

<span class="badge badge-available">✓ Available</span> (Flowcharts básicos)
<span class="badge badge-coming-soon">→ Coming soon</span> (Otros tipos de diagramas)

Sketion permite construir diagramas lógicos estructurados escribiendo código descriptivo Mermaid.

---

## Cómo Crear un Diagrama
1. Haz clic en el icono de **Mermaid** en la barra lateral derecha para abrir el editor descriptivo.
2. Escribe tu código usando la sintaxis de diagramas de flujo. Por ejemplo:
   ```text
   flowchart TD
       A[Inicio] --> B(Proceso)
       B --> C{¿Éxito?}
       C -- Sí --> D[Fin]
       C -- No --> B
   ```
3. Haz clic en **"Generar"**.
4. Sketion traducirá automáticamente tu código a elementos vectoriales individuales conectados en el canvas.

---

## Características Actuales
- Los nodos y las líneas se inyectan en el lienzo como figuras nativas de la pizarra. Esto significa que puedes mover cada nodo por separado, cambiar los colores de relleno del cuadro o editar el texto del nodo directamente una vez insertado.
- El soporte actual está optimizado para la sintaxis de diagramas de flujo (`flowchart` o `graph`).
