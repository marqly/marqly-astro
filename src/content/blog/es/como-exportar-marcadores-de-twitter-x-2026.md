---
title: "Cómo exportar tus marcadores de X (Twitter) en 2026 (todas las vías que funcionan)"
seoTitle: "Cómo exportar marcadores de X (Twitter) en 2026 | Marqly"
description: "El archivo oficial de datos de X no incluye tus marcadores. Así exportar tus marcadores de X (Twitter) en 2026, paso a paso, y evitar que vuelva a pasar."
pubDate: 2026-08-02
updatedDate: 2026-10-05
category: "Guías"
targetKeyword: "exportar marcadores de twitter x"
tags:
  - "exportar marcadores de twitter"
  - "marcadores de x"
  - "limite de marcadores twitter"
  - "copia de seguridad twitter"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Empieza gratis con Marqly"
lang: "es"
faqs:
  - q: "¿El archivo de datos de X (Twitter) incluye los marcadores?"
    a: "No. El archivo oficial que solicitas desde Configuración → Tu cuenta → Descargar un archivo de tus datos contiene tus publicaciones, me gusta, mensajes directos y listas de seguidores, pero no tus marcadores. Es una decisión de producto deliberada, no un error. Para exportar los marcadores necesitas una herramienta de exportación basada en el navegador o la API de pago de X."
  - q: "¿Cuántos marcadores puedo ver realmente en X?"
    a: "En la práctica, aproximadamente los 800-1.000 más recientes. X no publica un límite oficial, pero la página de marcadores deja de cargar elementos antiguos alrededor de ese punto y la API se agota por paginación en un número similar. Los marcadores anteriores no se muestran en ninguna parte de la interfaz, y esa es justo la razón por la que exportar los que aún alcanzas importa tanto."
  - q: "¿Las carpetas de marcadores y la búsqueda en marcadores de X son gratuitas?"
    a: "No. Crear carpetas de marcadores y buscar dentro de tus marcadores exige una suscripción a X Premium. Las cuentas gratuitas obtienen una única lista cronológica inversa sin búsqueda: tu única opción es desplazarte. Ninguna de las dos funciones eleva el techo práctico de visualización sobre los marcadores antiguos."
  - q: "¿Cuál es la mejor forma de mantener los marcadores de X buscables a largo plazo?"
    a: "Sacar de X, en el momento en que los guardas, los que merecen la pena. Un gestor de marcadores como Marqly guarda el enlace con un clic desde tu navegador, lo etiqueta automáticamente y lo hace encontrable por significado más tarde, así que «ese hilo sobre psicología de precios» aparece aunque hayas olvidado quién lo publicó. X sigue siendo tu bandeja de entrada; tu biblioteca vive en un sitio que controlas tú."
ogImage: "https://www.marqly.com/og/export-twitter-x-bookmarks.png"
---

Aquí está la incómoda verdad, por delante: **el archivo oficial de datos de X no incluye tus marcadores.** Puedes descargar tus publicaciones, tus «me gusta», tus mensajes directos y tus listas de seguidores, pero los marcadores que has ido acumulando durante años quedan deliberadamente fuera. Para exportarlos en 2026 necesitas una herramienta de exportación basada en el navegador, la API de pago de X o un triaje manual. Esta guía cubre cada vía, sus límites y el único cambio que evita que el problema se repita.

## Por qué exportar los marcadores de X es más difícil de lo que debería

Tres decisiones de plataforma se apilan en tu contra:

- **El archivo de datos omite los marcadores.** Todos los demás tipos de datos mayores están en la exportación oficial. Los marcadores no, y nunca lo estuvieron.
- **Hay un techo práctico de unos 800-1.000 marcadores visibles.** X no documenta un límite oficial, pero la página de marcadores deja de cargar elementos antiguos alrededor de ese punto y la API se agota por paginación en un número parecido. Los marcadores anteriores a eso son inalcanzables de facto: ninguna herramienta puede exportar lo que la plataforma ya no sirve.
- **Las carpetas y la búsqueda de marcadores son solo de Premium.** Las cuentas gratuitas obtienen una lista larga cronológica inversa sin buscador. Premium añade carpetas y una barra de búsqueda, pero ninguna de las dos devuelve los elementos que ya se cayeron del techo.

La conclusión práctica: exporta lo que todavía alcanzas y deja de tratar los marcadores de X como almacenamiento a largo plazo. Si el cierre de Pocket le enseñó algo a quien guarda enlaces, es que [los guardados que viven dentro de la plataforma de otro están siempre en riesgo](/es/blog/como-exportar-migrar-datos-pocket-2026).

## Paso 1: pide el archivo oficial igualmente (para todo menos los marcadores)

Aunque no contenga marcadores, el archivo merece la pena: es la única copia de seguridad oficial de tus publicaciones, me gusta y mensajes directos.

1. En x.com, abre **Configuración y privacidad → Tu cuenta → Descargar un archivo de tus datos**.
2. Verifica tu contraseña (y la doble autenticación si la tienes activa).
3. Pulsa **Solicitar archivo**. X indica que la preparación puede tardar 24 horas o más; recibirás una notificación y un correo cuando esté listo.
4. Descarga el ZIP desde esa misma página de configuración. El enlace no sigue vivo indefinidamente, así que cógelo en cuanto puedas.

Dentro encontrarás tus publicaciones, me gusta, mensajes directos, listas de seguidores y seguidos, y datos de publicidad en JSON, y ningún `bookmarks.js`. Es lo esperado. Ahora, las vías que de verdad sacan tus marcadores.

## Paso 2: exporta con una extensión de navegador (la vía que más gente usa)

Como no hay exportación oficial, existe un pequeño ecosistema de extensiones extractoras. Todas funcionan igual: abres tu página de marcadores con tu sesión iniciada, la extensión recorre la página haciendo scroll en tu propia sesión de navegador y escribe lo que encuentra en un archivo, normalmente CSV, JSON, Markdown o un HTML de marcadores.

El flujo genérico:

1. **Instala una extensión exportadora** desde Chrome Web Store (busca «export X bookmarks»: hay varias opciones gratuitas y de pago).
2. **Abre x.com/i/bookmarks** en ese navegador, con tu sesión iniciada.
3. **Lanza la exportación** desde la extensión. Hace scroll automático por la página, recogiendo cada publicación marcada conforme se carga. Una biblioteca grande tarda unos minutos.
4. **Descarga el archivo** y guarda una copia en un sitio seguro: es tu copia de seguro.

Advertencias honestas antes de elegir una:

- **Estas herramientas extraen el contenido de la página (scraping), así que se rompen cuando X cambia su maquetado.** Revisa la fecha de última actualización y las reseñas recientes de la extensión antes de confiar en ella.
- **Solo pueden exportar lo que X todavía muestra**, los ~800-1.000 elementos más recientes. Nada recupera marcadores que ya se cayeron de la lista.
- **Lee los permisos.** Una exportadora necesita acceso a x.com; no necesita acceso a todas las webs que visitas. Sé exigente.
- **Exporta el texto, no la experiencia.** Obtienes el texto, el autor y el enlace de cada publicación. Los hilos, las imágenes y los vídeos suelen ser solo enlaces de vuelta a X: si la publicación se borra, el enlace muere con ella.

También existen servicios gestores de marcadores específicos de X (Dewey y Tweetsmash son los nombres establecidos) que sincronizan tus marcadores de forma continua y ofrecen exportación a CSV o Markdown. Son sólidos si los marcadores de X son tu biblioteca principal, pero son de pago y heredan el mismo techo de visibilidad que todo el mundo.

### ¿Qué formato de exportación deberías elegir?

Si la herramienta ofrece elección, lleva **dos formatos**: un **archivo HTML de marcadores** si lo ofrece —que es el que los gestores de marcadores importan directamente, el mismo estándar que exportan los navegadores— y **CSV o JSON** como archivo bruto, porque conservan más campos (texto de la publicación, autor, fecha, enlace). Markdown es agradable para pegar en apps de notas, pero el peor punto de partida para importar en ninguna parte. El disco es barato: exporta una vez en los dos y no tienes que repetir nunca el scroll.

## Paso 3: la vía de la API de X (solo para desarrolladores)

La API v2 de X tiene un endpoint de marcadores, pero está detrás de los niveles de pago para desarrolladores, y la paginación se seca en unos 800 marcadores por usuario. Salvo que ya tengas acceso de pago a la API y te guste escribir bucles de paginación, esta vía cuesta más esfuerzo y dinero que una extensión para el mismo resultado. Existe; casi seguro que no la necesitas.

## Paso 4: triaje manual (solo bibliotecas pequeñas)

Si tienes menos de ~100 marcadores, olvida las herramientas. Abre x.com/i/bookmarks, desplázate y guarda los que merecen la pena directamente en el gestor que vayas a usar a partir de ahora: un clic cada uno con una extensión de navegador. Pesado pasado el centenar, pero doble como purga: la mayoría de la gente descubre que la mitad de sus marcadores ya no importan.

## ¿No arregla esto X Premium?

Parcialmente, y solo dentro de las paredes. Premium añade **carpetas** de marcadores y una **barra de búsqueda** en la página de marcadores, genuinamente útil para los guardados que todavía puedes ver. Pero no cambia nada del problema de fondo: el techo de visualización sigue ahí, las carpetas no devuelven los elementos que ya caducaron fuera de la lista y sigue sin haber un botón de exportación en ningún nivel de suscripción. Premium reorganiza tus marcadores recientes; no te da la propiedad de ellos. Pagar por organización dentro de una plataforma que no deja salir los datos es tratar el síntoma.

## Paso 5: coloca la exportación en un sitio útil

Un CSV en tu carpeta de Descargas es una copia de seguridad, no una biblioteca. No vas a abrirlo y no puedes buscarlo desde el navegador. Dos opciones:

- **Conserva el archivo bruto como archivo histórico.** Está bien como seguro: la misma lógica que guardar el archivo de exportación de Pocket.
- **Importa a un gestor de marcadores de verdad.** Si tu exportadora puede sacar un **HTML** de marcadores estándar, herramientas como Marqly lo importan directamente —el mismo importador que maneja las [exportaciones de marcadores de Chrome](/es/blog/exportar-marcadores-chrome)—. Tus publicaciones guardadas pasan a ser entradas buscables, con el etiquetado automático de la IA como función de Marqly Pro, en lugar de filas en una hoja de cálculo.

Una nota de honestidad: Marqly no tiene una importación nativa de «conecta tu cuenta de X». El puente es un archivo HTML de marcadores desde tu exportadora, o guardar los enlaces uno a uno. Lo que nos lleva al arreglo que de verdad importa.

## El arreglo duradero: no dejes que X guarde tu única copia

Cada vía de exportación de arriba es un parche para el mismo diseño: los marcadores de X están hechos para volver a algo de la semana pasada, no para mantener una biblioteca de referencia. El techo, la exportación ausente, la búsqueda tras el muro de Premium: nada de eso va a cambiar a tu favor.

El patrón que funciona a largo plazo es un sistema de dos niveles:

1. **Sigue marcando en X libremente.** Es la forma más rápida de señalar algo a media lectura. Trátalo como una bandeja de entrada.
2. **Saca los que merecen la pena de inmediato.** Cuando un hilo es genuinamente conservable, guarda su enlace en tu gestor de marcadores en ese mismo momento: con la extensión de Marqly es un clic en la página, sin decisión de archivado. La IA lo etiqueta automáticamente y la búsqueda semántica lo encuentra luego por significado: escribe «ese hilo sobre psicología de precios» y aparece, aunque lleves tiempo sin recordar quién lo publicó. Ese recuperar-describiendo es el núcleo de por qué [organizar por carpetas no sobrevive al volumen real de guardado](/es/blog/deja-de-organizar-marcadores-carpetas-obsoletas-2026).

La bandeja de entrada sigue siendo desechable; la biblioteca se vuelve permanente, buscable e independiente de la plataforma. Si X cambia sus límites otra vez —y su política de marcadores solo se ha estrechado con el tiempo—, no pierdes nada que importara.

## Resumen rápido

1. **Pide el archivo oficial** por publicaciones, me gusta y mensajes directos, y acepta que los marcadores no están en él.
2. **Exporta los marcadores con una extensión de navegador** mientras X todavía los muestra; guarda el archivo en un sitio seguro.
3. **Salta la vía de la API** salvo que ya seas un desarrollador que paga.
4. **Importa la exportación a un gestor de marcadores** (vía HTML de marcadores) en lugar de dejarla como un CSV muerto.
5. **Cambia el hábito**: X para hacer scroll, [Marqly](https://app.marqly.com) para conservar. Un clic por guardado valioso, buscable para siempre.

Tus marcadores sobrevivieron a tu interés por la mayoría de ellos. Asegúrate de que los buenos sobrevivan también a la paciencia de la plataforma.
