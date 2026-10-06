---
title: "Cómo exportar tus publicaciones guardadas de Instagram en 2026 (Descarga de tu información, paso a paso)"
seoTitle: "Cómo Exportar Guardados de Instagram (2026) | Marqly"
description: "Instagram no tiene botón de exportación para tus guardados. Aquí va la vía «Descargar tu información», qué hay dentro de saved_posts.json y cómo hacerlos útiles."
pubDate: 2026-08-16
updatedDate: 2026-10-05
category: "Guías"
targetKeyword: "exportar publicaciones guardadas de instagram"
tags:
  - "exportar publicaciones guardadas instagram"
  - "descargar tu información instagram"
  - "saved_posts json"
  - "copia de seguridad instagram"
  - "exportar datos instagram"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Empieza gratis con Marqly"
lang: "es"
ogImage: "https://www.marqly.com/og/export-instagram-saved-posts.png"
faqs:
  - q: "¿Puedo exportar mis publicaciones guardadas directamente desde la app de Instagram?"
    a: "No. No hay botón de exportación en la pantalla de Guardados ni forma de enviarte una colección por correo. La única vía oficial es la herramienta Descargar tu información de Meta, a la que se llega desde Ajustes → Centro de cuentas → Tu información y permisos → Descargar tu información. Produce un archivo que incluye un fichero saved_posts con la lista de todo lo que guardaste."
  - q: "¿Dónde está saved_posts.json dentro del archivo de Instagram?"
    a: "Dentro del ZIP, bajo tu actividad de Instagram, en una carpeta saved — el archivo se llama saved_posts.json (o saved_posts.html si elegiste HTML). Las colecciones que creaste aparecen aparte como saved_collections. Los nombres exactos de carpeta han cambiado entre versiones del archivo, así que si no lo ves, busca «saved» en la carpeta descomprimida."
  - q: "¿La exportación incluye las fotos y vídeos que guardé?"
    a: "No. Las publicaciones guardadas pertenecen a otras cuentas, así que el archivo guarda un enlace y una marca de tiempo por cada una, no los medios. Las fotos y vídeos de tu archivo son los que publicaste tú. Si una publicación guardada se borra después o su cuenta se vuelve privada, el enlace de tu exportación deja de funcionar y nada lo devuelve."
  - q: "¿Cuánto tarda una descarga de datos de Instagram?"
    a: "Meta dice hasta 30 días, pero una solicitud solo de Guardados suele llegar en horas o un par de días. Recibes un correo con el enlace de descarga cuando está lista, y el enlace caduca a los pocos días — descarga el ZIP en cuanto puedas en vez de dejarlo durmiendo en tu bandeja."
  - q: "¿Debería elegir JSON o HTML?"
    a: "HTML si solo quieres recorrer tus guardados a clic en un navegador; JSON si piensas convertir la lista en otra cosa, como un archivo de marcadores importable. JSON es el punto de partida más útil para construir una biblioteca de verdad, porque son datos estructurados y no una página con estilos."
---

Instagram te deja guardar una publicación con un toque y jamás te deja llevarte esos guardados a ninguna parte. No hay botón de exportación en la pantalla de Guardados, ni enlace para compartir una colección, ni CSV. La única salida oficial es la herramienta **Descargar tu información** de Meta — y lo que devuelve es una lista de enlaces y marcas de tiempo, no las publicaciones. Aquí está la ruta exacta, qué hay de verdad en el archivo, y cómo convertir una lista pelada de enlaces en algo buscable.

## ¿Para qué exportar guardados que ya puedes ver?

La pantalla de Guardados de Instagram funciona bien hasta que no. Tres cosas se rompen a medida que crece la colección:

- **No hay búsqueda dentro de tus guardados.** Puedes crear colecciones, pero no buscarlas por texto. Pasados unos cientos de elementos, encontrar «eso de la pasta» significa scrollear una rejilla de miniaturas.
- **Los guardados mueren en silencio.** Cuando un creador borra una publicación o pone su cuenta en privado, el elemento desaparece de tu rejilla. No te notifican, y no te enteras hasta que lo buscas.
- **Todo vive dentro de una sola app.** Las recetas, las referencias de diseño, las recomendaciones de equipo, la inspiración de pisos — nada de eso puede tirarse hacia lo que sea que uses para pensar.

Ese último punto es la lección del [cierre de Pocket](/es/blog/como-exportar-migrar-datos-pocket-2026) aplicada a una plataforma que no corre peligro de cerrar: los guardados dentro de la app de otro son solo tan accesibles como esa app decida. Instagram decide «apenas». Lo mismo vale para los [marcadores de X](/es/blog/como-exportar-marcadores-de-twitter-x-2026) y los [guardados de Reddit](/es/blog/como-exportar-publicaciones-guardadas-de-reddit-2026) — es un patrón, no una rareza.

## Paso 1: Solicita la descarga

La herramienta se mudó al Centro de cuentas de Meta, así que las instrucciones viejas que encontrarás por ahí están obsoletas. La ruta actual:

1. Abre Instagram → **Configuración** (o **Configuración y actividad**).
2. Pulsa **Centro de cuentas** arriba.
3. Entra en **Tu información y permisos**.
4. Pulsa **Descargar tu información** e inicia una solicitud nueva.

También puedes llegar a la misma herramienta en accountscenter.instagram.com desde un navegador de escritorio, que es más cómodo si vas a andar descomprimiendo archivos.

Después toma tres decisiones:

- **Cuánto:** elige «Parte de tu información» y marca **Guardado** dentro de tu actividad de Instagram. Pedirlo todo también funciona, pero tarda más en prepararse y produce un ZIP mucho mayor que rebusacar.
- **Formato:** **JSON** o **HTML**. HTML te da una página que recorrer a clic; JSON te da datos estructurados que convertir. Si piensas sacarle una biblioteca real, elige JSON.
- **Rango de fechas:** todo el histórico.

Envía, y Meta te manda un correo con el enlace de descarga cuando el archivo esté listo.

## Paso 2: Espera el correo y descarga rápido

La línea oficial de Meta es hasta 30 días. En la práctica, una solicitud acotada como Guardado suele llegar en horas o un par de días.

Lo que quema a la gente: **el enlace de descarga caduca** a los pocos días, y dejarlo vencer significa volver a empezar. Cuando llegue el correo, coge el ZIP y ponlo donde guardarías un documento de impuestos, no en Descargas.

Si no aparece nada tras una semana, revisa spam de un remitente de Meta y consulta el estado de la solicitud en el Centro de cuentas — los descargos completados se listan ahí incluso cuando el correo se pierde.

## Paso 3: Encuentra saved_posts.json y mira qué has recibido

Descomprime el archivo y busca bajo tu actividad de Instagram una carpeta **saved**. El archivo por el que estás aquí es:

- **`saved_posts.json`** — todo aquello a lo que diste a Guardar.
- **`saved_collections.json`** — las colecciones en las que organizaste guardados, si usas.

(¿Elegiste HTML? Mismos nombres, extensión `.html`. Los nombres de carpeta han variado entre versiones del archivo; si las rutas no coinciden, busca «saved» en la carpeta descomprimida.)

Abre `saved_posts.json` y templa las expectativas. Cada entrada te da aproximadamente:

- la **cuenta** cuya publicación guardaste,
- un **permalink** a la publicación,
- una **marca de tiempo** de cuándo la guardaste.

Ese es todo el registro. **Sin pie de foto. Sin imagen. Sin vídeo. Sin nota de por qué lo guardaste.** Lo cual tiene sentido — los medios pertenecen a cuentas ajenas, así que Meta exporta un puntero, no una copia. Tus fotos y vídeos propios están en otra parte del archivo; tus guardados son una lista de enlaces.

Dos consecuencias que conviene asimilar ya:

1. **Una publicación borrada se fue.** Tu exportación preserva la URL de algo que ya no existe — un argumento para exportar cuanto antes en vez de tarde. Para guardados de cuentas públicas, [cómo archivar contenido de Instagram](https://viewinsta.com/blog/how-to-archive-instagram-content) cubre qué es recuperable todavía cuando un enlace muere — y qué no lo es de verdad.
2. **Una lista de enlaces no es una biblioteca.** Dos mil URLs de `instagram.com/p/...` con marcas de tiempo no te dicen cuál era el método de masa madre que funcionaba.

Así que la exportación es materia prima. El paso 4 es donde se vuelve útil.

## Paso 4: Convierte la lista de enlaces en algo buscable

Tres rutas, según volumen y apetito de herramientas.

### Opción A: triaje a mano (la mayoría, y honestamente el mejor resultado)

Abre `saved_posts.html` — o el JSON en un editor de texto — y recorre la lista del más reciente al más viejo. Por cada elemento que merezca quedarse, ábrelo y guárdalo en un gestor de marcadores de verdad con la extensión del navegador, uno a uno.

Suena tedioso y es la opción con más papeletas de dejarte mejor parado, porque las listas de guardados son 80 % impulso y tocar cada elemento es la PODA. Una hora con una lista de mil te deja los doscientos que de verdad recuperarías, ya etiquetados y buscables, en vez de un archivo completo que no abres jamás. (Más sobre ese intercambio en [cómo organizar tus marcadores](/es/blog/organizar-marcadores-navegador).)

### Opción B: convertir el JSON a un archivo de marcadores (técnica)

`saved_posts.json` es estructurado, así que un guion corto — o un asistente de IA con la forma del archivo — puede convertirlo en un **archivo HTML estándar de marcadores**, el mismo formato `<DT><A HREF=...>` que exportan todos los navegadores. Ese es el formato universal de importación, y cuando tengas uno puedes revisarlo en un [visor de archivos de marcadores](/tools/bookmark-file-viewer) antes de importarlo donde sea.

Desde ahí se importa como una [exportación de marcadores de Chrome](/es/blog/exportar-marcadores-chrome): Marqly ingiere HTML estándar de navegador, descarga cada página y después la etiqueta e indexa (el autoetiquetado de importaciones es función Pro). Un límite, dicho sin rodeos — Marqly no parsea el `saved_posts.json` de Instagram directamente, e Instagram resiste la descarga automatizada, así que lo que vuelve es más delgado que una importación de artículos normal.

### Opción C: reconstruir la colección a propósito

Si tus guardados eran sobre todo referencias visuales — diseño, interiores, outfits, fotografía de producto — trata la exportación como una lista de comprobación y no como una importación, y reconstruye las partes buenas en un [swipe file](/swipe-file) bajo tu control: enlace de origen más tu propia nota de por qué está ahí. Esa nota es lo que tus guardados de Instagram nunca tuvieron, y es lo que hace una colección de referencias utilizable dentro de años.

## Arregla el hábito, no solo la acumulación

Exportar resuelve el pasado. El siguiente millar de guardados reconstruye el mismo problema, porque el botón de Guardar de Instagram seguirá siendo una rejilla no buscable el año que viene.

El patrón que aguanta:

- **Sigue usando el botón Guardar de Instagram** como bandeja rápida dentro del feed. Para eso es bueno.
- **Saca los keeper fuera** cuando los reconozcas. Comparte la publicación a tu navegador o ábrela y guárdala en un clic — el enlace, más una etiqueta, más una frase tuya. Después, [describe lo que recuerdes](/faq/how-do-i-find-a-bookmark-i-forgot-the-title-of) y vuelve: «el vídeo de arreglar una bisagra que chirría» lo encuentra sin pie de foto, sin usuario y sin hashtag. Eso es la [búsqueda semántica](/es/blog/que-es-la-busqueda-semantica) haciendo el trabajo que la rejilla de guardados de Instagram nunca pudo.

Instagram se queda como tu feed de descubrimiento. Las cosas que querrás dentro de cinco años viven en un sitio con botón de exportación.

## Resumen rápido

1. **Configuración → Centro de cuentas → Tu información y permisos → Descargar tu información.**
2. Selecciona **Guardado**, elige **JSON**, todo el histórico, envía.
3. **Descarga el ZIP rápido** — el enlace caduca en pocos días.
4. Encuentra **`saved_posts.json`**: solo enlaces y marcas de tiempo, sin medios, sin pies de foto.
5. **Haz triaje y resguarda** los keeper en una biblioteca que puedas buscar — como [Marqly](https://app.marqly.com).

Pídelo hoy aunque no lo proceses este mes. La solicitud son dos minutos, y cada semana que esperas son unos cuantos guardados borrados en silencio bajo tus pies.
