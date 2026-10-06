---
title: "Qué hay realmente dentro de tu archivo de exportación de Pocket (y cómo usarlo)"
seoTitle: "Qué contiene tu exportación de Pocket (2026) | Marqly"
description: "¿Abriste tu exportación de Pocket y viste un CSV? Esto hay dentro: URLs, títulos, etiquetas, marcas de tiempo — qué falta y cómo importarlo sin romper nada."
pubDate: 2026-06-23
updatedDate: 2026-10-06
category: "Guías"
targetKeyword: "archivo de exportacion de pocket"
tags:
  - "archivo exportacion pocket"
  - "pocket export csv"
  - "abrir archivo pocket"
  - "recuperar datos pocket"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Empieza gratis con Marqly"
lang: "es"
faqs:
  - q: "¿Qué contiene realmente un archivo de exportación de Pocket?"
    a: "Una exportación de Pocket contiene tu lista de enlaces guardados más metadatos: la URL, el título, tus etiquetas, el momento en que añadiste cada elemento y si estaba sin leer o archivado. No contiene el texto completo de los artículos. Es un registro de qué guardaste, no una copia de lo que leíste, así que impórtalo mientras las páginas originales sigan en línea."
  - q: "¿Qué formato tiene un archivo de exportación de Pocket?"
    a: "La exportación final de Pocket es un archivo CSV, a veces entregado dentro de un ZIP. Las bibliotecas grandes pueden quedar divididas en varios CSV de unas diez mil filas cada uno. Las exportaciones antiguas eran en cambio un único archivo HTML de marcadores. En cualquier caso es texto plano que puedes abrir en cualquier hoja de cálculo o editor de texto."
  - q: "¿Cómo abro el CSV de una exportación de Pocket?"
    a: "Ábrelo en cualquier aplicación de hoja de cálculo — Excel, Google Sheets, Numbers o LibreOffice — o en un editor de texto plano. Si llegó como ZIP, descomprímelo primero. Verás una fila por elemento guardado con columnas de URL, título, etiquetas, fecha de añadido y estado. No lo edites y vuelvas a guardarlo antes de importarlo, porque puedes corromper el formato."
  - q: "¿La exportación de Pocket incluye el texto de los artículos o mis subrayados?"
    a: "No. La exportación trae enlaces y metadatos, no el texto de artículo que Pocket cacheaba en su lector. Los subrayados y anotaciones llegan limitados o simplemente no están en la exportación estándar. Para conservar la vista de lectura, importa en una herramienta que vuelva a descargar cada página de la web real mientras las URLs originales aún funcionen."
  - q: "¿Por qué mi exportación de Pocket tiene varios archivos?"
    a: "Para bibliotecas grandes, Pocket dividía la exportación en varios CSV de aproximadamente diez mil filas cada uno para mantener cada archivo manejable. Es normal: no falta nada. Al importar, añade todos los archivos, porque cada uno contiene un trozo distinto de tus guardados."
  - q: "¿Puedo conseguir aún un archivo de exportación de Pocket en 2026?"
    a: "No. Mozilla cerró Pocket el 8 de julio de 2025 y la eliminación de los datos comenzó el 12 de noviembre de 2025. Ya no hay forma de generar una exportación nueva. Si guardaste tu archivo antes de esa fecha, sigue sirviendo: ese archivo es la única copia de tu biblioteca que existe."
heroImage: ../../../assets/blog/what-is-in-your-pocket-export-file.png
heroAlt: "Qué hay dentro de tu archivo de exportación de Pocket — ilustración"
ogImage: "https://www.marqly.com/og/what-is-in-your-pocket-export-file.png"
---

**Un archivo de exportación de Pocket es tu lista de enlaces guardados más sus metadatos: URLs, títulos, etiquetas, la hora en que se añadió cada elemento y si estaba sin leer o archivado.** No es una copia de los artículos en sí. Suele ser un CSV (a veces comprimido, y repartido en varios archivos en bibliotecas grandes), y la conclusión práctica es importarlo mientras las páginas originales sigan vivas, porque el texto de los artículos nunca estuvo en el archivo.

Si exportaste tu biblioteca antes de que Mozilla cerrara el grifo, ahora tienes delante un archivo — quizá `pocket-export.csv`, quizá un ZIP, quizá una carpeta de CSV numerados — y te preguntas qué hay dentro de verdad y en quién confiar. Esta guía abre la caja: decodificamos cada columna, explicamos el formato y sus manías, marcamos las trampas en las que tropiezan las importaciones y te enseñamos a convertir ese archivo otra vez en una biblioteca utilizable y buscable. De hecho medimos qué archivos de Pocket se importan limpiamente y cuáles no — el [estudio de fidelidad de importación de marcadores](/research/bookmark-import-fidelity) tiene los números. Si solo quieres el mapa amplio de «¿adónde me mudo?», las [mejores alternativas a Pocket en 2026](/es/blog/alternativas-a-pocket-2026) cubren los destinos; este post va del archivo en sí.

## ¿Qué contiene un archivo de exportación de Pocket?

Una exportación de Pocket contiene una fila por cada elemento que guardaste nunca, y cada fila trae los mismos campos: el enlace, un título, tus etiquetas, la marca temporal de cuándo lo añadiste y su estado de lectura. Esa es toda la carga útil: una lista estructurada de *qué* guardaste y *cuándo*, no el contenido de las páginas. Piénsalo como el índice detallado de tu biblioteca, no como el contenido de la biblioteca.

Esto significa cada campo en lenguaje llano:

- **URL** — la dirección web que guardaste. Esta es la columna que carga con todo; el resto es metadata colgando de ella. Si la URL aún resuelve, el guardado puede reconstruirse; si devuelve 404, el enlace es un callejón muerto.
- **Title** — el título de página que Pocket captó en el momento del guardado. Normalmente el titular del artículo; a veces un nombre genérico del sitio cuando Pocket no conseguía parsear uno más limpio.
- **Tags** — las etiquetas que aplicaste, metidas en un solo campo separadas por un delimitador (normalmente una barra vertical `|` o una coma). Los elementos sin etiqueta simplemente tienen el campo vacío.
- **Time Added** — cuándo guardaste el elemento, almacenado como marca Unix (un número largo tipo `1709251200`, segundos desde 1970) y no como fecha legible. La hoja de cálculo lo muestra como entero gigante hasta que lo conviertes.
- **Status** — si el elemento estaba sin leer o archivado. La exportación de Pocket suele separar los guardados «sin leer» de los «archivados», así que distingues tu cola activa de lo que ya habías apartado.

Lo que *no* hay dentro importa igual de fuerte. El texto completo del artículo — la vista de lectura limpia y reformateada que Pocket cacheaba para ti — no está. Los subrayados y anotaciones llegan limitados o se tratan aparte, y en una exportación pelada muchas veces no sobreviven. O sea: el archivo es un registro fiel de tu historial de guardados, pero no es una copia offline de todo lo que guardaste para leer.

## ¿Qué formato tiene el archivo?

La exportación final de Pocket es un archivo **CSV** (valores separados por comas) — texto plano, una fila por guardado, columnas separadas por comas — y en bibliotecas grandes puede llegar **comprimido** y **repartido en varios CSV**. Las exportaciones antiguas de Pocket eran en cambio un único **archivo HTML de marcadores**, el mismo formato que usan los navegadores para sus copias de seguridad. Los dos son texto plano y los dos son portables; el CSV simplemente se lee mejor en una hoja de cálculo.

Detalles del formato que conviene saber antes de abrirlo:

1. **Envoltura ZIP.** Si descargaste un `.zip`, descomprímelo primero. Dentro suele haber uno o varios `.csv`, a veces separados en conjuntos de «sin leer» y «archivados».
2. **Archivos divididos en bibliotecas grandes.** Para mantener cada archivo manejable, las exportaciones grandes se trocean — normalmente en archivos de unas **diez mil filas**. Si ves `part_1`, `part_2` o CSV numerados parecidos, no falta nada: tus guardados están repartidos. Importarás todos los archivos, no solo el primero.
3. **Etiquetas delimitadas.** Las etiquetas de un elemento conviven en una celda unidas por un carácter separador. Es práctica normal de CSV para «muchos valores en un campo», pero también es donde los importadores tropiezan más (abajo).
4. **Marcas Unix.** Los valores de «time added» son enteros de segundos-desde-1970, no fechas. Un buen importador las convierte solo; la hoja de cálculo las muestra crudas hasta que apliques una fórmula de fecha.

El formato importa porque determina cuán limpiamente aterriza el archivo en tu siguiente herramienta. Un CSV se lee en todas partes, eso está bien — pero «se lee en todas partes» y «se interpreta igual en todas partes» no son la misma cosa, y ahí nacen precisamente las trampas.

## ¿Cuáles son las trampas habituales al importar una exportación de Pocket?

Las tres cosas que se tuercen más a menudo son **el formato de las etiquetas, las columnas inesperadas o extra, y el texto de artículo que falta** — y las tres son predecibles cuando conoces la forma del archivo. Ninguna significa que tu exportación esté rota; significan que distintos importadores leen el mismo archivo de distinta manera. Esto es lo que vigilar, planteado como hechos del archivo y no como promesas de ninguna herramienta:

- **Las etiquetas van empaquetadas en un campo.** Como todas las etiquetas de un elemento comparten una celda unidas por un delimitador, un importador que no parta por ese carácter exacto leerá `productividad|focus|deep-work` como una etiqueta gigante en vez de tres. Los datos están intactos; que aterricen como etiquetas separadas depende por completo de cómo el receptor analice ese campo.
- **Columnas extrañas o de más.** Las exportaciones de Pocket pueden incluir columnas que algunos importadores no esperan, y el orden o el nombrado varió entre versiones. Un importador estricto pegado a cabeceras concretas puede atragantarse con una columna desconocida o ignorarla en silencio. Abrir el CSV y mirar la fila de cabecera real te dice con qué trabajas.
- **Las marcas temporales parecen erróneas hasta convertirlas.** Unas marcas Unix crudas pueden verse como números enormes o como la fecha equivocada si una herramienta confunde la unidad (segundos vs milisegundos). Tus datos de «time added» son correctos; solo necesitan interpretación.
- **Sin texto de artículo, los enlaces muertos no se renderizan.** Como la exportación son enlaces y no contenido, toda herramienta que reconstruya la vista de lectura tiene que volver a descargar la página de la web viva. Para URLs que desde entonces se fueron al limbo, no hay nada que descargar: el guardado sobrevive como enlace, pero el artículo legible puede no volver.
- **No lo edites y lo resalves antes de importar.** Abrir el CSV en una hoja de cálculo y volver a guardarlo puede cambiar la codificación en silencio, estropear comas dentro de títulos o reformatear las marcas de tiempo. Si quieres inspeccionarlo, míralo — e importa el archivo original intacto.

El resumen honesto: una exportación de Pocket es un archivo limpio y bien estructurado, pero es una *lista*, y todas las manías anteriores derivan de eso. Conocerlas de antemano hace que leas una biblioteca a medio importar como «es el delimitador de etiquetas» en vez de «el importador está roto».

## ¿Cómo se usa de verdad un archivo de exportación de Pocket?

La jugada correcta es **importar el archivo en una herramienta de lectura diferida o de marcadores que resguarde cada enlace y reconstruya la vista de lectura desde la página en vivo — y hacerlo mientras los artículos sigan online.** Como la exportación trae URLs y no contenido cacheado, lo que recuperas depende de que esas URLs sigan resolviendo. Cada mes de espera pudre más. La secuencia práctica es corta:

1. **Localiza todos los archivos.** Revisa tu carpeta de Descargas y correos viejos en busca de la exportación. Si es un ZIP, descomprímelo; si está dividido en CSV numerados, reúnelos todos. Los datos de Pocket se borraron definitivamente el 12 de noviembre de 2025, así que este archivo es la única copia que existe — respáldalo antes de tocar nada más.
2. **Mira dentro (opcional).** Usa nuestro [Conversor de Exportaciones de Pocket](/tools/pocket-export-converter) o el [Visor de Archivos de Marcadores](/tools/bookmark-file-viewer) gratuitos, del [directorio de herramientas](/tools), para inspeccionar, buscar o convertir tu archivo CSV en HTML de navegador.
3. **Elige destino e importa.** Sigue nuestra [guía de migración de Pocket a Marqly](/migrate/pocket) paso a paso, o visita el [Centro de Migración](/migrate) universal. Abre la pantalla de importación de tu nueva herramienta y añade el archivo — todas las partes si está dividido. La herramienta lee tu lista de enlaces y los resguarda; luego descarga cada página de la web viva para reconstruir una vista legible. Este es también el paso que convierte etiquetas delimitadas y marcas Unix en algo utilizable, según la herramienta.
4. **Muestra y resguarda a los supervivientes.** Comprueba con una muestra que los guardados cruzaron. Todo enlace que dé 404 se fue de la web viva, no solo de tu biblioteca: si te importaba, caza una copia archivada y guárdala ya.

El paso a paso completo, incluido elegir destino y reconstruir tu hábito de guardado, está en [cómo exportar y migrar tus datos de Pocket](/es/blog/como-exportar-migrar-datos-pocket-2026). Si aún dudas entre destinos, vale la pena sopesar [las mejores apps de lectura diferida](/es/blog/mejores-apps-para-leer-despues-2026) y, si Instapaper está en tu lista corta, el recopilatorio de [alternativas a Instapaper](/es/blog/mejores-alternativas-a-instapaper-2026).

## ¿Qué hay en la exportación vs qué NO hay?

Cuando ajustas bien las expectativas, una importación no te defrauda. Esta es la raya limpia entre lo que el archivo lleva y lo que deja detrás:

| En la exportación | Fuera de la exportación |
|---|---|
| URLs guardadas (tus enlaces) | Texto completo del artículo / vista de lectura cacheada por Pocket |
| Títulos de página | Subrayados y anotaciones fiables |
| Etiquetas (delimitadas en un campo) | El diseño visual y carpetas de la app de Pocket |
| Fecha de añadido (marca Unix) | Copias vivas y funcionales de páginas ya offline |
| Estado leído/sin leer | Todo lo que guardaras *después* de tomar la exportación |

La columna de la izquierda es genuinamente la parte que merece conservarse — es el mapa de todo lo que te importó guardar. La columna de la derecha es la razón de importar cuanto antes en vez de tarde: el contenido legible no está *en* el archivo, así que hay que reconstruirlo desde URLs que se van pudriendo en la web viva.

## Devuelve el archivo a una biblioteca buscable

Decodificar la exportación es el paso uno; la oportunidad mayor es arreglar lo que Pocket nunca resolvió. La mayoría guardaba mucho más de lo que volvía a encontrar, porque la búsqueda por palabras clave y las carpetas no aguantan más allá de unos cientos de elementos — y un CSV de enlaces no cambia eso por sí solo.

Ese es el ángulo sobre el que está construido [Marqly](https://app.marqly.com). Importa tus enlaces guardados y los convierte en una biblioteca que puedes buscar **por significado**: describes lo que recuerdas («eso sobre la muerte del deep work») y aparece el guardado aunque hayas olvidado el título. Funciona en web, iOS y Chrome, así que guardar sigue siendo un toque cuando tu historial ya está dentro. (Para el cuerpo a cuerpo con Pocket en concreto, mira [Pocket vs Marqly](/es/comparar/marqly-vs-pocket).)

Una expectativa realista, porque toda esta guía va de calibrarlas: ninguna herramienta puede resucitar el texto de artículo que nunca estuvo en tu exportación, y cuán limpiamente aterricen etiquetas y fechas depende del archivo y del importador — ten en cuenta al respecto que al importar en Marqly los elementos reciben la fecha de importación, no la fecha original de guardado. Lo que recuperas es la *lista* de lo que guardaste — y con búsqueda semántica encima, esa lista por fin se convierte en algo utilizable de verdad.

[Empieza gratis con Marqly →](https://app.marqly.com) · [Guía de migración de Pocket](/migrate/pocket) · [Herramientas gratuitas para marcadores](/tools)
