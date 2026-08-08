# Conceptos Clave

Para comprender el flujo de trabajo de Sketion, es fundamental entender los términos y metáforas estructurales de la plataforma.

---

## Workspace (Espacio de Trabajo)
Un Espacio de Trabajo es la unidad organizativa principal. Agrupa una colección de tableros dedicados a un tema específico (por ejemplo, una materia universitaria, un proyecto de desarrollo, o una investigación). Los espacios de trabajo se pueden sincronizar y compartir con otros colaboradores en tiempo real.

## Board (Tablero)
Un Tablero es un lienzo bidimensional infinito. Dentro de él, puedes insertar notas, PDFs, dibujos vectoriales, código LaTeX y diagramas. Cada tablero cuenta con su propia cámara (coordenadas de zoom y paneo) independiente de los demás.

## Element (Elemento)
Todo objeto visible en el canvas es un Elemento. Un elemento puede ser una figura geométrica básica (rectángulo, círculo), una línea de conexión, una nota de texto, una página de un PDF, o una fórmula matemática renderizada. Cada elemento tiene propiedades de estilo individuales y metadatos.

## Connection (Conexión)
Una Conexión representa el enlace semántico entre dos elementos en la pizarra. Sketion permite interconectar notas, PDFs y diagramas para construir un grafo visual del conocimiento, facilitando la navegación entre conceptos relacionados.

## Local-First (Local Primero)
Una filosofía de arquitectura de software que prioriza el almacenamiento de tus datos y la ejecución de la lógica del producto localmente en tu navegador web. La red (base de datos Supabase) actúa en segundo plano como capa de respaldo y sincronización secundaria, asegurando que tu trabajo empiece al instante y funcione offline.
