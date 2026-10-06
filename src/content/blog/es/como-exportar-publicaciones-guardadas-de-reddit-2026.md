---
title: "Cómo exportar tus publicaciones guardadas de Reddit en 2026 (solicitud de datos, paso a paso)"
seoTitle: "Cómo Exportar Guardados de Reddit (2026) | Marqly"
description: "Exporta tus guardados de Reddit con la solicitud oficial de datos: pasos exactos, qué trae el CSV, el límite de 1.000 guardados y cómo volver a usarlos."
pubDate: 2026-08-02
updatedDate: 2026-10-05
ogImage: "https://www.marqly.com/og/export-reddit-saved-posts.png"
category: "Guías"
targetKeyword: "exportar publicaciones guardadas de reddit"
tags:
  - "exportar publicaciones guardadas reddit"
  - "solicitud de datos reddit"
  - "limite guardados reddit"
  - "copia de seguridad reddit"
  - "exportacion gdpr reddit"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Empieza gratis con Marqly"
lang: "es"
faqs:
  - q: "¿Cómo exporto mis publicaciones guardadas de Reddit?"
    a: "Entra en reddit.com/settings/data-request desde un navegador de escritorio, inicia sesión, elige el historial completo de tu cuenta y envía la solicitud. Reddit prepara un ZIP con archivos CSV —incluidos saved_posts.csv y saved_comments.csv— y te manda un enlace de descarga a tu bandeja de Reddit y a tu email verificado. Es la única exportación oficial que existe."
  - q: "¿Cuánto tarda una solicitud de datos a Reddit?"
    a: "Reddit declara hasta 30 días, pero la mayoría de las exportaciones llegan mucho antes: a menudo en horas o pocos días. Solo puedes enviar una solicitud cada 30 días, así que pide el historial completo desde el principio en lugar de un rango de fechas estrecho."
  - q: "¿Qué contiene realmente saved_posts.csv?"
    a: "Solo dos columnas por fila: un ID de publicación y un enlace permanente. Sin títulos, sin texto, sin nombres de subreddit y sin fechas de guardado. Para convertir esos enlaces desnudos en algo navegable necesitas un segundo paso: un script de código abierto que obtenga los datos, o importarlos a un gestor de marcadores que obtenga títulos y etiquetas por ti."
  - q: "¿La exportación de Reddit incluye guardados más allá del límite de 1.000?"
    a: "Normalmente sí. La app y la API de Reddit solo muestran aproximadamente tus 1.000 guardados más recientes, pero la solicitud de datos se construye desde los registros almacenados de Reddit, no desde el feed en vivo, y muchos usuarios recuperan su historial completo. Es tu mejor —y en la práctica única— oportunidad para los guardados antiguos, así que no esperes para pedirla."
---

La única forma oficial de exportar tus publicaciones guardadas de Reddit es una solicitud de datos: entra en **reddit.com/settings/data-request**, elige el historial completo de tu cuenta y Reddit te envía un ZIP con archivos CSV —incluido `saved_posts.csv`— en un máximo de 30 días (suele tardar mucho menos). La trampa: el CSV contiene enlaces pelados, sin títulos ni contenido, y la interfaz de Reddit solo muestra tus ~1.000 guardados más recientes. Aquí está el proceso completo, los límites que nadie menciona y cómo convertir la exportación en algo que de verdad puedas usar.

## Por qué molestarse en exportar

La lista de guardados de Reddit es, por diseño, una calle sin salida. No hay botón de exportar, no hay búsqueda dentro de los guardados en la mayor parte del historial de las apps y —el detalle que sorprende a todo el mundo— **la interfaz y la API solo muestran aproximadamente tus 1.000 elementos guardados más recientes.** El guardado número 1.001 no borra nada, pero tu guardado más antiguo desaparece en silencio de la lista visible. La mayoría de los redditors de siempre tienen años de guardados a los que ya no pueden volver con el scroll.

La solicitud de datos es la excepción: se genera desde los registros almacenados de Reddit amparándose en leyes de privacidad como el RGPD y la CCPA, no desde el feed en vivo, así que puede alcanzar guardados que la app ya no te muestra. Eso la convierte menos en "una copia de seguridad simpática" y más en "la única copia que queda". El [cierre de Pocket](/es/blog/como-exportar-migrar-datos-pocket-2026) lo demostró de la peor manera: los guardados que viven dentro de una plataforma solo duran tanto como la plataforma quiera mantenerlos.

## Paso 1: enviar la solicitud de datos

1. Abre **reddit.com/settings/data-request** en un navegador de escritorio e inicia sesión. (En la interfaz antigua de Reddit la ruta es Settings → Privacy → Request your data.)
2. En el rango de fechas, elige la opción de **historial completo de la cuenta**, no un rango personalizado. Esto es lo que incluye los guardados antiguos, y como solo tienes una solicitud cada 30 días, no la desperdicies en una porción.
3. Selecciona los datos que quieres (todo es la opción segura) y envía la solicitud.

Cualquier persona puede solicitarla, no solo los residentes de la UE: Reddit extiende el mecanismo a todas las cuentas. Verás una confirmación de que la solicitud está en cola.

## Paso 2: esperar y descargar el ZIP

Reddit dice oficialmente "hasta 30 días". En la práctica, la mayoría de las exportaciones llegan en horas o pocos días. Cuando esté lista:

1. Recibirás un mensaje en tu **bandeja de Reddit** (y en tu email verificado, si tienes uno) con el enlace de descarga.
2. Descarga el ZIP en cuanto puedas y guarda una copia en un lugar seguro — trátalo como lo que es: una copia de seguridad.

Recuerda el límite: **una solicitud cada 30 días.** Si te das cuenta de que elegiste un rango de fechas estrecho, tocará esperar un mes para corregirlo.

Si no aparece nada tras un par de semanas, comprueba que tu cuenta tenga un email verificado (Settings → Account), revisa la carpeta de spam de tu correo buscando un remitente reddit.com y vuelve a mirar la pestaña de mensajes de tu bandeja de Reddit en lugar de las notificaciones. Si pasa la marca de los 30 días sin nada entregado, envía la solicitud otra vez: para entonces el enfriamiento se habrá restablecido.

## Paso 3: entender qué has recibido realmente

Descomprime el archivo y encontrarás una pila de CSV: tus publicaciones, comentarios, votos, historial de chats — y los dos que venías a buscar, `saved_posts.csv` y `saved_comments.csv`.

Abre `saved_posts.csv` con las expectativas templadas. Cada fila contiene exactamente dos cosas:

- un **ID de publicación**
- un **enlace permanente (permalink)**

Eso es todo. **Sin títulos. Sin texto. Sin nombres de subreddit. Sin fechas.** Las filas están ordenadas por ID de publicación, no por cuándo las guardaste. La exportación de Reddit cumple el requisito legal — aquí tienes un registro de lo que guardaste — sin ser ni remotamente navegable. Mil filas de enlaces `https://www.reddit.com/r/.../comments/...` no te dicen cuál era aquel hilo brillante sobre cómo arreglar tu masa madre.

Mientras estás en el ZIP, merece la pena conservar unos vecinos: `saved_comments.csv` (el mismo formato pelado, para comentarios guardados), además de tus propios `posts.csv` y `comments.csv` — la única copia existente de lo que *tú* escribiste fuera de Reddit. Archivea el ZIP completo, no solo los guardados.

Así que la exportación por sí sola no es la meta. Necesitas el paso 4.

## Paso 4: convertir enlaces pelados en una biblioteca utilizable

Dos vías viables, según tu perfil técnico:

### Opción A: scripts de código abierto (para técnicos)

Herramientas como **export-saved-reddit** y **reddit-saved-to-csv** en GitHub obtienen tus guardados vía la API de Reddit y los enriquecen con títulos, subreddits y URLs; export-saved-reddit incluso genera un **archivo HTML de marcadores** estándar que cualquier gestor puede importar. Dos advertencias honestas:

- Las herramientas basadas en la API chocan con el mismo **límite de paginación de ~1.000 elementos** que la app: no ven tus guardados antiguos. Para esos, la exportación de la solicitud de datos es la fuente de verdad.
- Requieren crear una credencial de la API de Reddit y ejecutar Python en local. Perfecto para desarrolladores, un muro para todos los demás.

Algunos scripts (tipo reddit-stash) funcionan al revés: toman la lista de IDs de tu exportación GDPR y obtienen los detalles de cada enlace, lo que esquiva el límite de 1.000. Más configuración, resultado más completo.

### Opción B: importar a un gestor de marcadores (para el resto)

Si un script te dio un archivo HTML de marcadores, impórtalo directamente en un gestor: Marqly ingiere HTML de marcadores estándar igual que con las [exportaciones de marcadores de Chrome](/es/blog/exportar-marcadores-chrome), luego visita cada página y deja que la IA la etiquete e indexe (la etiqueta automática es una función Pro). Tus enlaces permanentes anónimos vuelven a la vida como entradas con título, etiquetadas y buscables.

Para ser honestos con los límites: Marqly no analiza el `saved_posts.csv` pelado de Reddit directamente — el puente es un archivo HTML de marcadores, o guardar uno a uno los enlaces que te importan. Y ningún importador puede resucitar un guardado cuyo mensaje fue borrado: un enlace muerto es un enlace muerto en cualquier herramienta.

### Opción C: el repaso manual (colecciones pequeñas)

Si tu lista de guardados tiene unas pocas docenas de elementos, olvídate del instrumental. Abre tus guardados en el navegador, recorre la lista y guarda los valiosos con un clic directamente en tu gestor de marcadores desde su extensión. Veinte minutos, sin scripts ni arqueología de CSV — y como estás tocando cada elemento de todos modos, la poda sale gratis. También es la alternativa correcta mientras esperas a que llegue la exportación oficial.

## Paso 5: triaje, no acúmulo

Antes o después de importar, haz un repaso rápido a la lista. Años de guardados son años de "igual me sirve" que nunca llegó. Un filtro práctico: si no recuerdas por qué lo guardaste y el título no te dice nada, suéltalo. Lo que sobrevive al triaje es tu biblioteca de referencia real — suele ser un 20-30 % de la lista bruta — y una biblioteca más pequeña y deliberada gana a un archivo completo pero inservible. (Más sobre cómo hacer una biblioteca buscable en [cómo organizar tus marcadores](/es/blog/organizar-marcadores-navegador).)

## Arregla el hábito, no solo el backlog

La exportación resuelve el pasado. El mismo problema empieza a reconstruirse en el momento en que pulsas Guardar en el siguiente hilo, porque el botón de guardado de Reddit seguirá siendo una lista sin búsqueda, con tope y hostil a la exportación también el año que viene.

El patrón duradero tiene dos niveles:

- **Sigue usando el botón de guardar de Reddit** como bandeja rápida mientras haces scroll.
- **Saca los valiosos a tu propia biblioteca** en cuanto los reconozcas. Con la extensión de un gestor de marcadores es un clic en el hilo: Marqly guarda el enlace y, con la IA de Pro, lo etiqueta y lo hace recuperable luego describiendo lo que recuerdas — "ese hilo donde un fontanero explicaba los ánodos del termos" — sin título, subreddit ni nombre de usuario. Eso es la búsqueda semántica haciendo lo que la lista de guardados de Reddit nunca pudo, y es la columna vertebral de un [segundo cerebro que de verdad recupera cosas](/es/blog/como-construir-un-segundo-cerebro-2026).

Reddit sigue siendo tu feed de descubrimiento. Tu biblioteca vive en un sitio con botón de exportar.

## Resumen rápido

1. **reddit.com/settings/data-request** → historial completo → enviar.
2. **Descarga el ZIP** desde el enlace de tu bandeja (hasta 30 días; normalmente mucho menos).
3. **Espera enlaces pelados** — `saved_posts.csv` son solo IDs y enlaces permanentes.
4. **Enriquece e importa**: script de código abierto → HTML de marcadores → a un gestor como [Marqly](https://app.marqly.com).
5. **Cambia el hábito**: guardados de Reddit como bandeja, un clic a tu propia biblioteca para lo valioso.

Solicita la exportación hoy mismo aunque no la vayas a procesar esta semana — es la única copia de tus guardados anteriores al límite de 1.000 que existe, y te cuesta dos minutos.
