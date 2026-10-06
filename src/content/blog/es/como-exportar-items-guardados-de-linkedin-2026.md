---
title: "Cómo exportar tus elementos guardados de LinkedIn en 2026 (Descargar tus datos, paso a paso)"
seoTitle: "Cómo Exportar tus Guardados de LinkedIn (2026) | Marqly"
description: "LinkedIn exporta tus elementos guardados solo con fecha y URL. Aquí está la ruta de descarga, qué guarda el archivo y cómo volverlos buscables."
pubDate: 2026-10-06
category: "Productividad"
targetKeyword: "exportar elementos guardados de linkedin"
tags:
  - "exportar elementos guardados linkedin"
  - "descargar tus datos de linkedin"
  - "exportar artículos guardados linkedin"
  - "exportar datos linkedin csv"
  - "copia de seguridad newsletters linkedin"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Empieza gratis con Marqly"
lang: "es"
ogImage: "https://www.marqly.com/og/export-linkedin-saved-items.png"
faqs:
  - q: "¿Cómo exporto mis elementos guardados en LinkedIn?"
    a: "Haz clic en el icono Yo, entra en Configuración y privacidad, abre Privacidad de datos en el menú izquierdo y usa Descargar tus datos dentro de la sección «Cómo usa LinkedIn tus datos». Selecciona la categoría Elementos guardados y solicita el archivo; el artículo de ayuda de LinkedIn dice que una solicitud de categoría específica llega por correo en minutos y que el enlace sigue útil durante 72 horas."
  - q: "¿La exportación de LinkedIn incluye el contenido de lo que guardé?"
    a: "No. La descripción oficial de LinkedIn de la categoría Elementos guardados dice que contiene la fecha de guardado y la URL de una publicación, artículo u otro contenido — nada más. El artículo también deja claro que LinkedIn solo proporciona tus datos personales, no los de otros miembros, así que las publicaciones y artículos que guardaste llegan como enlaces."
  - q: "¿Puedo exportar los newsletters de LinkedIn que sigo?"
    a: "La lista publicada de categorías exportables de LinkedIn no incluye ninguna categoría de newsletters. Los Seguimientos de empresas te dan las empresas que sigues con fechas, y los Seguimientos de miembros a las personas, pero los números de los newsletters que sigues no son una exportación itemizada. Lo que no esté cubierto cae en el formulario de Solicitud de Acceso a Datos de LinkedIn."
  - q: "¿Por qué parte de mi archivo de LinkedIn llegó antes que el resto?"
    a: "LinkedIn escalona la entrega por categorías: una lista de categorías está disponible a los 10 minutos de la solicitud, otra a las 48 horas, y una descarga grande de todas las categorías tarda hasta 24 horas solo en llegar al correo de solicitud. Elementos guardados está en el lote más lento."
  - q: "¿Puedo importar mis elementos guardados de LinkedIn a Marqly?"
    a: "Tras una conversión ligera, sí. Los datos de elementos guardados son una tabla de fechas y URLs; vuelca las URLs en un CSV simple con una columna de URL y la importación CSV genérica de Marqly lo acepta (el HTML de marcadores de navegador también funciona). La importación no conserva tus fechas de guardado originales de LinkedIn — los elementos quedan sellados con la fecha de importación — y el autoetiquetado de elementos importados es función Pro."
---

LinkedIn tiene una sola exportación oficial para los guardados: Configuración y privacidad → Privacidad de datos → Descargar tus datos, con una categoría propia llamada **Elementos guardados** (Saved Items). Es exactamente lo que el nombre sugiere: por cada artículo o publicación al que le diste al marcador, recibes **la fecha de guardado y la URL**, nunca el contenido. Aquí está la ruta verificada, qué incluye y qué no incluye el archivo (newsletters: prácticamente nada), y cómo convertir una tabla de dos columnas en una biblioteca de investigación.

## Qué significa «guardado» realmente en LinkedIn

El botón Guardar de LinkedIn se convirtió sin ruido en una de las exportaciones más útiles que puedes pedir, porque la categoría Elementos guardados incluye marca de tiempo. La trampa está en el alcance:

- **Enlaces, no copias.** Una publicación guardada es dato de otro miembro; LinkedIn dice sin rodeos que solo proporcionará tus datos personales y no los de otros miembros (a 5 de octubre de 2026, según https://www.linkedin.com/help/linkedin/answer/a1339364). Las publicaciones borradas se pudren en el archivo igual que en tu pantalla de Guardados.
- **Las ofertas de trabajo van aparte.** Los trabajos guardados, las alertas de trabajo guardadas y las solicitudes tienen sus propias categorías — Guardados es artículos/publicaciones, no todo el concepto de «guardado».
- **Los newsletters son el agujero.** Los newsletters que sigues no son una categoría exportable, y los números que guardaste como leídos tampoco se itemizan. Más abajo.

Si tus Guardados le han quedado grandes a la vista dentro de la app — el mismo modo de fallo que los [marcadores de X](/es/blog/como-exportar-marcadores-de-twitter-x-2026) — así es como los sacas.

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
      <td>Privacidad de datos → Descargar tus datos → Elementos guardados</td>
      <td>Fecha de guardado + URL por elemento</td>
      <td>Archivos de datos por categoría en el archivo</td>
      <td>Correo en minutos (categoría concreta) hasta 48 horas; enlace válido 72 horas</td>
      <td>Solo en escritorio; sin contenido, solo enlaces</td>
    </tr>
    <tr>
      <td>La misma herramienta → Trabajos guardados / Alertas guardadas / Solicitudes</td>
      <td>Fecha de guardado, título, empresa, URL de la publicación</td>
      <td>Archivos de datos por categoría</td>
      <td>Categoría rápida (lote de 10 minutos)</td>
      <td>Las URLs de trabajo hospedadas por LinkedIn caducan cuando cierra la oferta</td>
    </tr>
    <tr>
      <td>La misma herramienta → Seguimientos de empresas / de miembros</td>
      <td>A quién y qué sigues, con fechas</td>
      <td>Archivos de datos por categoría</td>
      <td>Solo seguimientos, no su contenido</td>
      <td>No es un archivo de newsletters; no se exporta ningún número</td>
    </tr>
    <tr>
      <td>Manual: abrir un artículo guardado y guardarlo con el navegador</td>
      <td>La página real, título incluido</td>
      <td>Lo que almacene tu gestor</td>
      <td>Un elemento a la vez</td>
      <td>En su mayoría son artículos externos, así que se descargan limpio — la vía de mayor fidelidad para los imprescindibles</td>
    </tr>
    <tr>
      <td>Miembros de UE/EEE/Suiza: APIs de Portabilidad de Miembros</td>
      <td>Acceso programático a tus datos de LinkedIn</td>
      <td>Salida de API</td>
      <td>Elegibilidad regional</td>
      <td>Vía para desarrolladores; documentada en el artículo de ayuda de LinkedIn sobre Member Portability APIs</td>
    </tr>
  </tbody>
</table>

## Paso a paso: solicita la exportación de Elementos guardados

El artículo de ayuda de LinkedIn «Descargar tus datos» detalla la ruta actual (a 5 de octubre de 2026, según https://www.linkedin.com/help/linkedin/answer/a1339364):

1. En linkedin.com, haz clic en el icono **Yo** en la parte superior de tu página de inicio.
2. Selecciona **Configuración y privacidad** (también accesible directo en https://www.linkedin.com/psettings/data-privacy/).
3. Haz clic en **Privacidad de datos** en el menú izquierdo.
4. Dentro de la sección **Cómo usa LinkedIn tus datos**, haz clic en **Descargar tus datos**.
5. Elige **Seleccionar los datos que buscas**, marca **Elementos guardados** — añade **Trabajos guardados**, **Seguimientos de empresas** o **Contactos** si los quieres en la misma tanda.
6. Haz clic en **Solicitar archivo**, abre el correo y descarga dentro de **72 horas**.

Tres reglas que el artículo establece, que valen la pena repetir porque sorprenden: la descarga debe hacerse desde una **computadora personal** — la función no está disponible en móvil; una solicitud de categoría específica llega por correo **en minutos** mientras que una descarga completa de todas las categorías tarda hasta **24 horas**; y las categorías llegan en relojes distintos, con Elementos guardados en el lote de **48 horas**. Solo recibes las categorías que aplican a tu cuenta — sin archivo de certificaciones si nunca listaste certificaciones, y sin archivo de elementos guardados si tus Guardados están vacíos.

## Qué contiene de verdad el archivo

Según las descripciones de categorías de LinkedIn:

- **Elementos guardados** — «la fecha de guardado y la URL de una publicación, artículo u otro contenido».
- **Trabajos guardados** — fecha de guardado, título del puesto, nombre de la empresa y la URL de la oferta en LinkedIn.
- **Alertas de trabajo guardadas** — la frase de búsqueda y la fecha.
- **Artículos** — URLs de los artículos que *tú* publicaste (no los que guardaste).
- **Seguimientos de empresas / de miembros** — nombres y fechas de seguir/dejar de seguir.
- **Reacciones, comentarios, compartidos** — fechas y URLs de tu interacción, si los marcas.

Así que la exportación de Guardados es una verdad de dos columnas: **cuándo lo guardaste, y a dónde apuntaba**. Dos consecuencias prácticas:

1. **Las URLs de publicaciones de LinkedIn tienen muro de inicio de sesión.** Un enlace guardado de `linkedin.com/posts/...` no resolverá para nadie que no haya iniciado sesión, y los descargadores de terceros obtienen un esquema vacío — tu propio archivo guardará enlaces que no podrás reabrir dentro de diez años. Los guardados de artículos externos (los que redirigen a editoriales) son los duraderos.
2. **Los enlaces de trabajo son perecederos.** Las URLs de ofertas en LinkedIn caducan cuando el puesto se cierra; exporta tus Trabajos guardados a tus registros el día que aún los necesitas, no cuando te pidan referencias.

Y el hueco honesto: los **newsletters**. Puedes seguir newsletters y guardar sus publicaciones, pero la lista publicada de categorías exportables de LinkedIn no tiene fila de newsletters. Los seguimientos (empresas, miembros) cubren a quién sigues; los números en sí no son un conjunto de datos exportable. Para todo lo que quede fuera de las categorías listadas, LinkedIn te remite a su formulario de Solicitud de Acceso a Datos (a 5 de octubre de 2026, según https://www.linkedin.com/help/linkedin/ask/TS-DCR) — lento, y sin promesa de estructura. Los miembros de UE/EEE/Suiza tienen además la vía programática que documentan en https://www.linkedin.com/help/linkedin/answer/a6214075.

## Convierte la tabla en una biblioteca

La exportación es una lista de URLs con sello de fecha: materia prima, no base de conocimiento.

**El resultado bueno más rápido: triaje y resguardo.** Trabaja la mitad reciente de la lista de elementos guardados. Todo lo que sea en realidad un artículo externo — el post del sector, el benchmark de contratación, el ensayo — ábrelo y guárdalo de verdad con el [gestor de marcadores de tu navegador](/es/usos/gestor-marcadores-chrome) (Chrome, Edge, Firefox y Safari están cubiertos, más las apps de iOS y Android). Obtienes el título, la página completa y tu propia etiqueta, en el sitio donde de verdad lo buscarás después.

**Vía en lote: convertir e importar.** Pasa el archivo de elementos guardados a un guion o a un asistente de IA y que escriba un CSV simple con una columna de URL (guarda la columna de fechas para tus propios registros — mira por qué abajo). Marqly importa CSV genérico, HTML de marcadores de navegador, HTML de Raindrop y el list.csv de Pocket, como `.html`, `.htm` o `.csv`, hasta 10 MB gratis / 30 MB en Pro, 10.000 marcadores por archivo; los enlaces importados se descargan e indexan, lo que significa que los guardados de artículos externos vuelven como entradas tituladas y legibles — mientras que los enlaces de `linkedin.com/posts` se importarán delgados, por la razón del muro de inicio de sesión mencionada arriba. Declara los límites sin rodeos: **tus fechas de guardado de LinkedIn no sobreviven a la importación** — cada elemento toma la fecha en que importas — y **el autoetiquetado de elementos importados es función Pro**; el plan gratuito conserva las etiquetas que tú escribas en el archivo. Revisa un archivo convertido con el [visor de archivos de marcadores](/tools/bookmark-file-viewer) antes de una tanda completa.

**Por qué la reconstrucción gana al archivo:** el sentido de rescatar guardados profesionales es volver a encontrarlos en frío. «Ese artículo de la cadena de suministro del tercer trimestre» debería aparecer a partir de una descripción, no de tu memoria de cuándo lo guardaste — para eso existe [buscar marcadores con IA](/es/blog/que-es-la-busqueda-semantica), y aplica el doble para investigadores sentados sobre listas de elementos guardados de varios cientos de enlaces (ver la [página para investigadores](/es/usos/investigadores)). Para la mitad de cola de lectura de tus guardados, la [ruta de alternativa a Pocket](/es/alternativas/pocket) cubre la misma pregunta de conversión desde el otro lado.

## Cuándo NO usar Marqly

- **Copias de cumplimiento.** Si la exportación es para una solicitud de registros o portabilidad GDPR (la Política de Privacidad de LinkedIn cubre los derechos: https://www.linkedin.com/legal/privacy-policy), conserva el archivo intacto de LinkedIn — una biblioteca curada no es el mismo artefacto.
- **Datos de networking.** Contactos, mensajes e invitaciones son datos con forma de persona con sus propias herramientas y ética; un gestor de marcadores es el hogar equivocado para ellos.
- **Pipeline de búsqueda de trabajo.** Si gestionas trabajos guardados de forma activa, la experiencia de Empleos de LinkedIn supera a cualquier resguardo; usa la exportación para cerrar búsquedas viejas, no para correr las actuales.

## Preguntas frecuentes

**¿Cómo exporto mis elementos guardados en LinkedIn?**
Icono Yo → Configuración y privacidad → Privacidad de datos → Descargar tus datos → marca Elementos guardados → Solicitar archivo. Las solicitudes de categoría concreta llegan por correo en minutos; el enlace de descarga dura 72 horas. Solo en escritorio (a 5 de octubre de 2026, según https://www.linkedin.com/help/linkedin/answer/a1339364).

**¿La exportación incluye el contenido de lo que guardé?**
No — la fecha de guardado y la URL de una publicación, artículo u otro contenido. LinkedIn explícitamente no exporta datos de otros miembros, así que las publicaciones guardadas llegan como enlaces.

**¿Puedo exportar los newsletters que sigo?**
No hay categoría de newsletters en la lista publicada. Los seguimientos (empresas, miembros) son exportables; los números de newsletters no. Fuera de la lista, es territorio del formulario de Solicitud de Acceso a Datos, con salida lenta y sin especificar.

**¿Por qué mi archivo llegó a pedazos?**
Las categorías salen en dos relojes — un lote de 10 minutos y uno de 48 horas — y una descarga de cuenta completa solo envía correo hasta 24 horas después de presentarla. Elementos guardados está en el lote lento.

**¿Puedo importar el archivo de elementos guardados a Marqly?**
Conviértelo primero a un CSV con columna de URL — Marqly acepta CSV genérico, HTML de marcadores, Pocket y HTML de Raindrop. Las fechas de guardado no se conservan (los elementos toman la fecha de importación), y el autoetiquetado de importaciones es Pro. Para el [paso a paso de importación](/es/blog/exportar-marcadores-chrome), la mecánica es la misma.

## Resumen rápido

1. **Configuración y privacidad → Privacidad de datos → Descargar tus datos**, marca **Elementos guardados**, solicita desde una computadora personal.
2. Espera una **tabla de fecha + URL**, correo en minutos si la solicitud es acotada, **72 horas** para descargar.
3. **Sin contenido, sin exportación de newsletters**; los enlaces de publicaciones de LinkedIn se pudren tras el inicio de sesión, así que haz triaje temprano.
4. Convierte los imprescindibles a CSV, impórtalos a una biblioteca buscable y multiplataforma — como [Marqly](https://app.marqly.com) — y sabe que la importación sella la fecha de hoy, no tus fechas de guardado.
