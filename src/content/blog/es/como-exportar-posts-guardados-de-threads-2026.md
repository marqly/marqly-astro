---
title: "Cómo exportar tus publicaciones guardadas de Threads en 2026 (Centro de cuentas, paso a paso)"
seoTitle: "Cómo Exportar tus Guardados de Threads (2026) | Marqly"
description: "Threads no exporta tus guardados. Usa la descarga de datos del Centro de cuentas de Meta, comprueba qué incluye el archivo y reconstruye enlaces buscables."
pubDate: 2026-10-06
category: "Productividad"
targetKeyword: "exportar publicaciones guardadas de threads"
tags:
  - "exportar publicaciones guardadas threads"
  - "descargar datos de threads"
  - "exportar colecciones de threads"
  - "copia de seguridad threads"
  - "descargar información centro de cuentas meta"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Empieza gratis con Marqly"
lang: "es"
ogImage: "https://www.marqly.com/og/export-threads-posts.png"
faqs:
  - q: "¿Threads tiene un botón de exportación para las publicaciones guardadas?"
    a: "No. La vista de guardados (y las colecciones donde los organizas) no tiene exportación, ni «enviarme esta lista por correo», ni CSV. La única vía oficial para sacar cualquier dato de Threads es la herramienta Descargar tu información de Meta, compartida entre Instagram, Facebook y Threads a través del Centro de cuentas."
  - q: "¿Cómo descargo mis datos de Threads?"
    a: "En la app de Threads, abre Configuración y entra al Centro de cuentas (Threads funciona con tu inicio de sesión de Instagram), luego ve a Tu información y permisos, Descargar tu información, elige Threads, selecciona formato y rango de fechas, y envía. Meta envía por correo el enlace de descarga cuando el archivo está listo y dice que la preparación puede tardar hasta 30 días, aunque las solicitudes acotadas suelen llegar mucho antes."
  - q: "¿Mis publicaciones guardadas están dentro de la descarga de Threads?"
    a: "Trátalo como pregunta abierta y verifícalo contra tu propio archivo. El flujo de solicitud de Meta cubre el contenido que Threads guarda sobre ti, pero la documentación de ayuda alcanzable al momento de la investigación no itemiza si las publicaciones de otras personas que guardaste — frente a tus propias publicaciones y respuestas — aparecen en la salida. Ejecuta una solicitud y después busca los guardados en la carpeta de Threads descomprimida antes de dar por sentada la cobertura."
  - q: "¿Seguirán funcionando los enlaces de las publicaciones guardadas?"
    a: "Las publicaciones públicas de Threads en threads.com normalmente se abren en un navegador sin sesión iniciada, así que los enlaces exportados mantienen su sentido más tiempo que en plataformas con muro de inicio de sesión. Una publicación borrada por su autor desaparece de tu colección y no resuelve a nada en ninguna exportación que hayas hecho."
  - q: "¿Puedo importar publicaciones guardadas de Threads a Marqly?"
    a: "Solo a través de los enlaces. Marqly importa HTML de marcadores de navegador y CSV genérico, no archivos de datos de Threads, así que en medio hay un paso de conversión (o un resguardo manual de los imprescindibles). La importación no conserva las fechas de guardado originales — los elementos toman la fecha de importación — y el autoetiquetado de elementos importados es función Pro."
---

Threads te deja guardar publicaciones en colecciones y no te da ninguna forma de exportarlas. No hay botón en la pantalla de guardados ni solicitud de archivo. La salida oficial para cualquier cosa que Threads guarde es la herramienta Descargar tu Información compartida de Meta, a la que se llega por el Centro de cuentas — la misma maquinaria que respalda la [exportación de guardados de Instagram](/es/blog/como-exportar-publicaciones-guardadas-de-instagram-2026). Aquí está la ruta, una declaración honesta de lo que se confirma que contiene el archivo, y cómo llevar tus publicaciones guardadas a algo buscable.

## El estado de la situación (y lo que no se pudo verificar)

Threads es la app de texto de Instagram — las cuentas son cuentas de Instagram, y la documentación de ayuda de Threads vive dentro del ecosistema del Centro de cuentas de Meta. Dos hechos importan para cualquier plan de rescate:

1. **Los guardados existen pero están sellados.** Threads añadió la posibilidad de guardar publicaciones en colecciones, y esas colecciones no tienen vía de exportación, ni opción de enviarte la lista por correo, ni API a la que apuntarles.
2. **La documentación de Meta específica de Threads era inalcanzable mientras se escribía esta guía.** El dominio de ayuda de Threads no resolvió para nuestra investigación el 5 de octubre de 2026, así que esta guía afirma solo lo que el flujo compartido del Centro de cuentas de Meta y las páginas de producto de Threads respaldan, y marca todo lo demás para comprobación práctica.

## Tus vías de exportación de un vistazo

<table>
  <thead>
    <tr>
      <th>Vía</th>
      <th>Qué obtienes</th>
      <th>Formato</th>
      <th>Límites</th>
      <th>Trampa</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Centro de cuentas → Descargar tu información → Threads</td>
      <td>El archivo de Meta de tus datos de Threads (tus publicaciones, respuestas, actividad)</td>
      <td>JSON o HTML, según las opciones de la solicitud</td>
      <td>Meta dice hasta 30 días; el enlace caduca tras la entrega</td>
      <td>Si los guardados de publicaciones ajenas se itemizan no está confirmado en la documentación alcanzable</td>
    </tr>
    <tr>
      <td>Copiar el enlace manualmente por publicación guardada</td>
      <td>La URL de threads.com de una publicación</td>
      <td>Texto</td>
      <td>Una a la vez</td>
      <td>La única vía garantizada de capturar el contenido actual de tu colección</td>
    </tr>
    <tr>
      <td>Solicitud desde Instagram (mismo Centro de cuentas)</td>
      <td>Tu archivo de Instagram, publicaciones guardadas incluidas</td>
      <td>JSON o HTML</td>
      <td>La misma maquinaria de Meta</td>
      <td>Los guardados de Threads no son los de Instagram — pedir Instagram cubre una colección distinta</td>
    </tr>
    <tr>
      <td>Scrapers no oficiales de threads.com</td>
      <td>Lo que consigan antes de romperse</td>
      <td>Varía</td>
      <td>Ninguno documentado</td>
      <td>Contrarios al espíritu de las condiciones de la plataforma y a menudo a la letra; el riesgo de cuenta es tuyo</td>
    </tr>
  </tbody>
</table>

## Paso 1: presenta la solicitud en el Centro de cuentas

Threads te inicia sesión con Instagram, y sus controles a nivel de cuenta viven en el Centro de cuentas de Meta — la misma herramienta documentada para las descargas de datos de Instagram (a 5 de octubre de 2026, según el flujo descrito en https://help.instagram.com y ejecutado en accountscenter.instagram.com / accountscenter.facebook.com; la visión general del producto de Threads está en https://about.instagram.com/threads y la app en https://www.threads.com — «Inicia sesión con tu cuenta de Instagram»).

1. En la app de Threads: **Configuración** → pulsa el banner de tu **Centro de cuentas** (las etiquetas varían por versión).
2. Abre **Tu información y permisos** → **Descargar tu información**.
3. Inicia una solicitud nueva y elige **Threads** como producto.
4. Selecciona **Parte de tu información** si el flujo ofrece elección granular, y busca una opción de guardados/colecciones; si no, pide el conjunto completo de datos de Threads.
5. Elige **JSON** si piensas convertir, **HTML** si solo quieres recorrerlo.
6. Pon el rango de fechas en todo el histórico, envía y vigila el correo.

El peor caso que declara Meta para preparar el archivo es de hasta 30 días, y — como con Instagram — el enlace de descarga entregado caduca a los pocos días, así que baja el ZIP cuando aterrice en vez de dejarlo envejeciendo en tu bandeja. Si no aparece correo tras una semana, consulta el estado de la solicitud dentro del propio Centro de cuentas; las solicitudes completadas se listan ahí incluso cuando el correo se pierde.

## Paso 2: descubre qué recibiste de verdad

Descomprime y abre la carpeta **Threads**. Lo que Meta tiene documentado: el conjunto de datos de Threads cubre tu actividad — publicaciones y respuestas que escribiste, y los datos de cuenta detrás. Lo que no está documentado en ninguna página de ayuda de Threads alcanzable: una afirmación itemizada de que las publicaciones de otros usuarios que guardaste aparezcan, con marcas de tiempo, en un archivo dedicado.

Así que la instrucción honesta es: **busca tus guardados en el archivo, y no le creas ni al silencio de esta guía.**

- Busca una carpeta o archivo con nombre del estilo de `saved` o `collections` dentro del directorio de Threads; compara su número de elementos con tu colección dentro de la app.
- Si los guardados están, cada entrada será con toda probabilidad un **enlace a la publicación más una marca de tiempo de guardado** — Threads almacena el contenido ajeno como referencias, no como copias, igual que funciona el archivo `saved_posts` de Instagram.
- Si los guardados no están en tu archivo, el método de copiar enlaces es tu vía de captura, y presentar una **solicitud de derechos sobre tus datos** por el flujo de soporte del Centro de cuentas es la escalada si necesitas la lista completa bajo la ley de privacidad aplicable.

## Qué contiene de verdad el archivo (la parte confirmada)

Para las partes en las que puedes contar — tu propio contenido y actividad — espera JSON estructurado (o HTML navegable) describiendo publicaciones y respuestas de Threads con identificadores, texto, marcas de tiempo y referencias de medios. Si los guardados están en tu archivo, léelos como una **lista de enlaces**: URLs públicas de `threads.com/@usuario/post/...`. La buena noticia específica de Threads: las publicaciones públicas normalmente se renderizan para visitantes sin sesión en threads.com, así que los enlaces exportados mantienen su sentido mejor que en plataformas con muro de inicio de sesión — hasta que el autor borra, momento en el que el enlace se pudre igual que el de todas las demás.

Ese reloj de pudrición es el argumento para actuar ya. Threads es joven; sus usuarios borran y abandonan cuentas a las tasas de una plataforma joven.

## Convierte la lista en una biblioteca

**Si el archivo tiene tus guardados:** aplana los enlaces de publicación en un CSV con una columna de URL (un guion, o un asistente de IA al que le muestres la forma del archivo, lo hace en minutos). La importación de Marqly acepta CSV genérico más HTML estándar de marcadores de navegador — `.html`, `.htm`, `.csv`, hasta 10 MB gratis / 30 MB en Pro, 10.000 marcadores por archivo — y descarga e indexa lo que importa, así que las publicaciones públicas de threads.com vuelven con texto recuperable. Declara los límites sin rodeos: la importación **no carga tus fechas de guardado originales** — todo aterriza con la fecha de importación — y **el autoetiquetado es función Pro**; las importaciones del plan gratuito conservan sus propias etiquetas. Revisa un archivo convertido en el [visor de archivos de marcadores](/tools/bookmark-file-viewer) antes de importar.

**Si el archivo no los tiene (o mientras lo esperas):** triaje a mano. Abre tus colecciones del más reciente al más viejo y resguarda los imprescindibles desde el navegador con la [extensión de Marqly](/es/usos/gestor-marcadores-chrome) — Chrome, Edge, Firefox, Safari, más las apps de iOS y Android. Tedioso para cuatrocientos guardados; pero doscientos curados con tus etiquetas le ganan a un archivo completo que no puedes buscar, y es la misma lección que organizar cualquier otra acumulación ([cómo organizar tus marcadores](/es/blog/organizar-marcadores-navegador)).

**El arreglo del hábito:** sigue guardando en Threads por el feed, pero cuando una publicación sea material de referencia de verdad — el hilo sobre evaluación de prompts, la profesora que comparte un flujo de trabajo con fichas — mándala a un sitio con botón de exportación. El texto nativo de Threads es metadato muy fino para cualquier búsqueda futura; añade tu nota al momento de guardar para que la cosa sea encontrable por significado después ([encontrar un artículo que guardaste sin recordar el título](/faq/how-do-i-find-a-bookmark-i-forgot-the-title-of)). Si la mayoría de tus guardados son conversación y no contenido, la [guía de guardados de Reddit](/es/blog/como-exportar-publicaciones-guardadas-de-reddit-2026) es la hermana más cercana.

## Cuándo NO usar Marqly

- **El archivo en sí es el entregable.** Si estás tramitando una orden judicial, una entrega de cuenta o un registro de derechos de privacidad, el archivo bruto de Meta es el artefacto — no lo sustituyas por una biblioteca curada.
- **Vives en las respuestas.** Los *hilos* guardados (conversaciones que relees en contexto) pierden su sentido de árbol de respuestas como enlaces aislados; mantener la colección dentro de la app puede ser honestamente lo correcto.
- **Publicaciones con muchos medios.** Una publicación de imagen o video guardada como enlace se vuelve a renderizar, pero Marqly guarda páginas, no copias de los medios de otras personas. Para cualquier cosa que debas conservar aunque la publicación muera, captura una pantalla o guarda el archivo localmente primero.

## Preguntas frecuentes

**¿Threads tiene un botón de exportación para publicaciones guardadas?**
No. Los guardados y colecciones no tienen vía de exportación en la app; la única puerta oficial es Descargar tu Información de Meta a través del Centro de cuentas.

**¿Cómo descargo mis datos de Threads?**
Configuración de Threads → Centro de cuentas → Tu información y permisos → Descargar tu información → Threads → elige formato y rango de fechas. Meta cita hasta 30 días para la preparación; el enlace por correo caduca a los pocos días de la entrega. (Sigue el flujo compartido del Centro de cuentas de Meta; ver la nota de verificación más arriba para las etiquetas específicas de Threads.)

**¿Mis publicaciones guardadas están dentro de la descarga de Threads?**
No lo confirma ninguna documentación alcanzable — las guías de Meta describen tu actividad propia en detalle y dejan los guardados sin documentar. Ejecuta la solicitud, busca en la carpeta de Threads un archivo de guardados o colecciones, y compara conteos con tu app antes de confiar en cualquiera de los dos resultados.

**¿Los enlaces exportados seguirán funcionando después?**
Las publicaciones públicas de threads.com se renderizan sin sesión, así que los enlaces se mantienen legibles más tiempo que en plataformas con muro de inicio de sesión — hasta que un autor borra, momento en el que el enlace es una página muerta en todas las copias que tengas.

**¿Puedo importar publicaciones guardadas de Threads a Marqly?**
Convierte primero los enlaces a CSV o HTML de marcadores — Marqly importa esos, descarga las páginas públicas y no conserva las fechas de guardado originales. El autoetiquetado de importaciones es Pro; el plan gratuito conserva tus propias etiquetas y la biblioteca multiplataforma intacta ([leer después aquí](/es/usos/guardar-articulos-leer-despues)).

## Resumen rápido

1. **No hay exportación en los guardados** — la descarga del Centro de cuentas de Meta es la única vía oficial.
2. **Solicita los datos de Threads ya** (peor caso 30 días; baja el ZIP rápido — los enlaces caducan).
3. **Verifica la inclusión de guardados contra tu propio archivo** — la documentación no lo zanja.
4. **Aplana los enlaces imprescindibles a CSV/HTML** y ponlos donde funcione la búsqueda — como [Marqly](https://app.marqly.com) — o resguarda a mano mientras esperas.
