---
title: "Cómo guardar una página web en PDF (sin que se rompa el diseño)"
seoTitle: "Cómo Guardar una Página Web en PDF (3 Métodos) | Marqly"
description: "Ctrl+P sirve hasta que las imágenes salen en blanco y el texto se corta. Tres formas de guardar una página web como PDF — y cómo conseguir una copia que parezca la página real."
pubDate: 2026-07-04
updatedDate: 2026-10-05
category: "Guías"
targetKeyword: "guardar pagina web en pdf"
tags:
  - "guardar pagina web en pdf chrome"
  - "convertir pagina web a pdf"
  - "imprimir pagina a pdf sin cortes"
  - "guardar pagina en pdf edge"
ctaUrl: "https://chromewebstore.google.com/detail/marqly-all-in-one-bookmar/kcadneobjofkppmekgadodnaojoehemc"
ctaLabel: "Instalar la extensión gratis"
lang: "es"
faqs:
  - q: "¿Cómo guardo una página web en PDF gratis?"
    a: "Pulsa Ctrl+P en Windows o Cmd+P en Mac, pon el destino en Guardar como PDF y haz clic en Guardar. Todos los navegadores principales lo traen de serie y no cuesta nada. Funciona bien en páginas de artículo simples. En páginas con mucho diseño espera formato roto, imágenes en blanco y contenido cortado, porque el navegador imprime una versión de estilo de impresión de la página, no lo que ves en pantalla."
  - q: "¿Por qué se cortan las páginas web al guardarlas como PDF?"
    a: "Porque el cuadro de impresión re-renderiza la página para papel, no para tu pantalla. Los sitios publican una hoja de estilos de impresión aparte, los elementos de ancho fijo no se reajustan para caber en la página, y todo lo más ancho que el área imprimible se recorta en el borde. Las herramientas que capturan el diseño de pantalla en lugar del de impresión — como la extensión de Marqly en Chrome y Edge — evitan el problema."
  - q: "¿Por qué las imágenes salen en blanco o faltan en el PDF guardado?"
    a: "Carga diferida. La mayoría de los sitios modernos solo cargan las imágenes cuando te acercas a ellas al hacer scroll, y el cuadro de impresión no hace scroll, así que todo lo que estaba debajo del pliegue nunca se cargó cuando corrió la captura. El arreglo rápido es hacer scroll hasta el final de la página antes de imprimir. El Guardar como PDF de Marqly desplaza la página por delante automáticamente, así que las imágenes de carga diferida ya están puestas cuando captura."
  - q: "¿Puedo guardar en PDF una página detrás de un login?"
    a: "Sí, si la captura ocurre en tu propio navegador. El cuadro de impresión y las extensiones ven la página exactamente como la renderiza tu sesión iniciada. Los conversores online no pueden — obtienen la URL desde sus propios servidores, que no han iniciado sesión, así que reciben la versión deslogueada o un muro de inicio de sesión. Para cualquier cosa privada, mantén la captura local."
  - q: "¿Cómo guardo una página web como PDF en Chrome sin que se vea rota?"
    a: "Instala la extensión de Marqly, abre el diálogo de guardado en la página y elige Guardar como PDF desde el menú de tres puntos. Captura el diseño de pantalla que Chrome está renderizando de verdad, desplaza por delante para que carguen las imágenes, y descarga el PDF a tu máquina — no se sube nada. La página se guarda como marcador a la vez, así que el enlace vivo y la copia congelada viajan juntos."
heroImage: ../../../assets/blog/save-webpage-as-pdf.png
heroAlt: "Cómo guardar una página web en PDF sin errores — ilustración"
ogImage: "https://www.marqly.com/og/save-webpage-as-pdf.png"
---

Para guardar una página web como PDF, pulsa **Ctrl+P** (**Cmd+P** en Mac) y elige **Guardar como PDF** como destino. Eso funciona para un apuro. Para una captura que se parezca a la página real — imágenes cargadas, nada cortado — usa una extensión de navegador que fotografíe el diseño de pantalla en lugar del diseño de impresión.

Esa segunda frase hace mucho trabajo. Todo el mundo conoce el truco de imprimir; la razón por la que lees esto es que el resultado tan a menudo se ve mal. Esta guía cubre las tres formas reales de convertir una página web a PDF — el cuadro integrado, los conversores online y una extensión — y es honesta sobre dónde se rompe cada una.

## ¿Cómo guardas una página web como PDF con el cuadro de impresión?

La forma integrada funciona en Chrome, Edge, Firefox y Safari, en cualquier sistema operativo, gratis:

1. Abre la página y deja que termine de cargar.
2. Pulsa **Ctrl+P** en Windows y Linux, o **Cmd+P** en Mac. (En Chrome es lo mismo que Menú → Imprimir.)
3. Pon el **Destino** en **Guardar como PDF**.
4. En **Más opciones**, activa **Gráficos de fondo** si la vista previa se ve lavada, y baja un poco la escala si el texto se recorta en los bordes.
5. Haz clic en **Guardar** y elige una ubicación.

Para una página de artículo simple — una columna, mayormente texto — esto es genuinamente correcto, y debería ser tu opción por defecto. Nada que instalar, nada que se suba a ningún sitio, y funciona detrás de un inicio de sesión porque captura tu propia sesión del navegador.

El lío empieza en páginas del mundo real. Cuatro modos de fallo aparecen todo el tiempo:

- **El diseño se rompe.** La página se renderiza en su estilo de «impresión», no en el que estabas mirando, así que las columnas colapsan y el espaciado se vuelve raro.
- **Las imágenes salen en blanco.** Todo lo que estuviera debajo del pliegue y no hubiera cargado aún se imprime como un recuadro vacío.
- **La basura se captura.** Banner de cookies, popups de newsletter y burbujas de chat aterrizan en medio de la captura.
- **El contenido se corta.** Tablas anchas, bloques de código y secciones de ancho fijo quedan recortados en el borde de la página.

Si la vista previa de impresión se ve bien, adelante con ella. Si no, ninguna cantidad de retoques de márgenes lo va a arreglar de forma fiable — el problema está en cómo se renderiza la página, no en tus ajustes.

## ¿Por qué las páginas se cortan o salen rotas como PDF?

Porque imprimir no captura la página que estás mirando — el navegador **reconstruye la página para papel** y captura esa reconstrucción. Tres cosas salen mal en la reconstrucción:

**Hojas de estilo de impresión.** Muchos sitios publican un segundo juego de reglas de diseño que solo aplica al imprimir. Fueron escritas una vez, hace años, normalmente para una versión más simple del sitio. En el momento en que pulsas Ctrl+P, la página que ves se intercambia por esta versión de impresión — y si está desactualizada o a medio terminar, el PDF hereda cada defecto.

**Carga diferida.** Los sitios modernos no cargan todas las imágenes de entrada; las cargan cuando te acercas a ellas con el scroll. El cuadro de impresión no hace scroll. Así que cualquier imagen por la que nunca desplazaste simplemente no existe todavía cuando corre la captura, e imprime como un recuadro en blanco o un marcador gris.

**Diseños dependientes del viewport.** Las páginas se dimensionan según tu ventana del navegador, que quizá tenga 1.400 píxeles de ancho. El papel es un lienzo fijo y más estrecho. Los elementos flexibles se reajustan para caber; los de ancho fijo — tablas, embeds, bloques de código — no. Lo que no pueda encogerse queda tajado en el borde imprimible. Ese es el problema de «página cortada» en una frase.

Los popups y banners de cookies son un cuarto problema, más tonto: las capas superpuestas son elementos de página como todos los demás, así que a menos que los cierres antes, también se imprimen.

El arreglo para todo esto es el mismo: capturar el **diseño de pantalla** — la página tal como tu navegador la está renderizando de verdad — en lugar de pedirle al navegador que la reconstruya para papel.

## ¿Deberías usar un conversor online de página-web-a-PDF?

Los sitios conversores te pegan una URL y descargas un PDF, sin instalar nada. Es un ajuste razonable para una captura puntual de una página **pública** — por ejemplo, en un ordenador de trabajo bloqueado donde no puedes añadir extensiones.

Vienen tres desventajas reales:

- **No pueden ver páginas que requieren inicio de sesión.** El servidor del conversor obtiene la URL desde cero, sin acceso a tu sesión — así que paneles privados, confirmaciones de pedido y contenido para miembros vuelven como un muro de inicio de sesión.
- **Estás subiendo la URL a un tercero.** Para cualquier cosa sensible, es un no rotundo.
- **Los planes gratis van llenos de anuncios**, y la calidad de salida varía enormemente de un sitio a otro.

Úsalos para capturas públicas, no sensibles y de una sola vez. Para lo demás, mantén la captura dentro de tu propio navegador.

## ¿Cómo guardas una página web como PDF que se parezca a la página real?

Usa la extensión de Marqly. Su Guardar como PDF captura la página **tal como se ve realmente en tu pantalla** — diseño de pantalla, no de impresión — lo que esquiva cada modo de fallo de arriba:

1. [Instala la extensión de Marqly](https://chromewebstore.google.com/detail/marqly-all-in-one-bookmar/kcadneobjofkppmekgadodnaojoehemc) (gratis).
2. En la página que quieras, haz clic en el icono de Marqly para abrir el diálogo de guardado.
3. Abre el **menú ⋯** del diálogo y elige **Guardar como PDF**.
4. Ajusta formato y opciones de diseño si quieres, o acepta los valores por defecto.
5. El PDF se descarga en tu máquina — y la página queda marcada en tu biblioteca de Marqly al mismo tiempo.

Por dentro, **desplaza la página por delante primero**, así que las imágenes de carga diferida están completamente cargadas antes de que corra la captura — nada de recuadros en blanco. Y como fotografía el renderizado de pantalla en lugar de una hoja de estilos de impresión, los diseños anchos salen tal como los viste en vez de quedar recortados.

Dos advertencias honestas. La captura de mayor fidelidad funciona en **Chrome y Edge**; en los demás navegadores la extensión cae al flujo estándar de impresión, así que obtienes el mismo resultado que con Ctrl+P. Y todo corre **localmente en tu navegador** — la página nunca se sube a ningún sitio — lo que también significa que funciona bien detrás de logins.

La parte que es fácil de infravalorar: el PDF y el marcador viajan juntos. Un PDF suelto en tu carpeta de Descargas es donde los documentos van a morir. Aquí, la copia congelada y el enlace vivo conviven en la misma entrada de biblioteca, así que seis meses después puedes encontrar cualquiera de los dos.

## ¿Qué método deberías usar?

| | Cuadro de impresión | Conversor online | Extensión de Marqly |
| --- | --- | --- | --- |
| ¿Se parece a la página real? | ⚠️ Diseño de impresión, se rompe a menudo | ⚠️ Afortunado o no | ✅ Diseño de pantalla (Chrome, Edge) |
| ¿Incluye imágenes de carga diferida? | ❌ En blanco bajo el pliegue | ⚠️ Depende del sitio | ✅ Desplaza por delante |
| ¿Funciona con páginas tras un inicio de sesión? | ✅ Sí | ❌ No | ✅ Sí |
| ¿Se queda con tu biblioteca? | ❌ Archivo suelto | ❌ Archivo suelto | ✅ Guardado como marcador automáticamente |

Versión corta: el cuadro de impresión para páginas de artículo simples, los conversores online para capturas públicas puntuales en máquinas que no controlas, y la extensión cuando el PDF tiene que parecerse a la página que viste.

## ¿Cuándo guardar un PDF en lugar de simplemente marcar la página?

Guarda un PDF cuando necesites **congelar un momento en el tiempo**. Un marcador apunta a una página viva; la página puede cambiar, ponerse de pago o desaparecer — la pudrición de enlaces se cobra cada año una porción asombrosa de la web. Un PDF es tu prueba de lo que la página decía el día que la guardaste.

Eso hace que los PDFs sean la decisión correcta para:

- **Recibos, facturas y confirmaciones de pedido**
- **Datos de reservas y registraciones**
- **Términos, políticas y páginas de precios** que quizá tengas que citar después
- **Cualquier cosa que esperes que sea editada o retirada**

Para todo lo demás — artículos, referencias, investigación — un marcador es mejor, porque sigue buscable y actualizado. Mejor aún: márcalo y [resalta las partes que de verdad importan](/es/blog/como-resaltar-texto-en-cualquier-web-2026), así conservas el insight sin acumular archivos. Si tu pila de guardados son sobre todo lecturas largas, una app de [lectura diferida](/es/blog/mejores-apps-para-leer-despues-2026) de verdad le saca kilómetras de ventaja a una carpeta de PDFs.

El flujo que aguanta a largo plazo: marcadores por defecto, PDF para lo irreemplazable, y ambos en un solo lugar buscable — ese es el núcleo aburrido y fiable de [organizar tus marcadores](/es/blog/organizar-marcadores-navegador) para que sean encontrables después, y el primer paso honesto hacia [construir un segundo cerebro](/es/blog/como-construir-un-segundo-cerebro-2026) en vez de un cajón de desastre.

## Guarda la página, conserva el enlace

Ctrl+P siempre estará ahí, y para un artículo sencillo es todo lo que necesitas. Pero el día que necesites una página capturada *exactamente* — imágenes cargadas, nada cortado, un banner de cookies colándose en la foto — el cuadro de impresión es la herramienta equivocada.

[Instala la extensión gratis de Marqly](https://chromewebstore.google.com/detail/marqly-all-in-one-bookmar/kcadneobjofkppmekgadodnaojoehemc), abre el menú ⋯ al guardar una página y pulsa Guardar como PDF. La copia congelada cae en tu máquina, el enlace vivo cae en tu biblioteca, y nada sale de tu navegador.

---

*Relacionado: [Cómo organizar marcadores para encontrarlos de verdad](/es/blog/organizar-marcadores-navegador) · [Las mejores apps de lectura diferida en 2026](/es/blog/mejores-apps-para-leer-despues-2026)*
