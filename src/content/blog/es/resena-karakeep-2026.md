---
title: "Reseña de Karakeep 2026: la app de marcadores autoalojada con IA real"
seoTitle: "Reseña de Karakeep 2026 — Marcadores IA autoalojados"
description: "Análisis honesto de Karakeep en 2026: la app open source de marcadores con etiquetado por IA, soporte local con Ollama y precios en la nube — más lo que te cuesta tenerla en marcha."
pubDate: 2026-08-02
updatedDate: 2026-10-05
ogImage: "https://www.marqly.com/og/karakeep-review-2026.png"
category: "Reseñas"
targetKeyword: "resena karakeep 2026"
tags:
  - "resena karakeep"
  - "karakeep vs hoarder"
  - "gestor de marcadores autoalojado"
  - "marcadores open source"
  - "etiquetado ia ollama"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Empieza gratis con Marqly"
lang: "es"
faqs:
  - q: "¿Vale la pena Karakeep?"
    a: "Si te manejas con contenedores Docker, sí: Karakeep es el mejor gestor de marcadores autoalojado en funciones de IA — autoetiquetado, resúmenes, búsqueda semántica, OCR y archivado de páginas completas, todo gratis e ilimitado en tu propio hardware. Si no quieres ser tu propio administrador de sistemas, su plan Pro en la nube (4 USD/mes) es razonable, pero los competidores alojados están más pulidos por un dinero similar."
  - q: "¿Karakeep es gratis?"
    a: "Autoalojado, por completo: es código abierto, con marcadores y almacenamiento ilimitados en tu hardware; solo pagas el uso de API de IA que elijas, o nada si corres modelos locales con Ollama. Karakeep Cloud tiene un plan gratuito limitado a 10 marcadores y 20 MB (básicamente una demo) y un plan Pro de 4 USD/mes con 50.000 marcadores y 50 GB."
  - q: "¿Cuáles son las mejores alternativas a Karakeep?"
    a: "Linkwarden es la rival open source más cercana, más fuerte en archivado multiformato y colaboración en equipo pero más ligera en IA. Raindrop.io es el mejor gestor clásico alojado. Marqly es la opción alojada con IA por delante — búsqueda semántica, autoetiquetado y resúmenes sin configurar nada. Y los ex usuarios de Hoarder: Karakeep ES Hoarder, solo cambió de nombre."
  - q: "¿Puede Karakeep ejecutar sus funciones de IA en local?"
    a: "Sí — es una de sus capacidades estrella. Karakeep soporta modelos locales a través de Ollama para etiquetado automático y resúmenes, de modo que tus marcadores nunca salen de tu servidor. También puedes apuntarlo a APIs compatibles con OpenAI si prefieres cambiar privacidad por calidad de modelo y ahorrarte la GPU."
---

Karakeep es el mejor gestor de marcadores autoalojado para quien quiere funciones de IA de verdad — autoetiquetado, resúmenes e incluso búsqueda semántica — sin entregar su biblioteca a nadie; el precio de entrada es que te conviertes en el equipo de operaciones.

Divulgación: esta reseña la publica Marqly, un competidor alojado (y no autoalojable). Karakeep sirve a un público al que estructuralmente no podemos alcanzar — si «mis datos no salen de mi hardware» es un requisito, Karakeep es probablemente tu respuesta y el resto de esta reseña es detalle. Puntuado en sus propios términos, es excelente.

## ¿Qué es Karakeep?

Karakeep es una app open source de «guarda lo que sea» — enlaces, notas, imágenes y PDF — que corres tú, normalmente con Docker. Nació como Hoarder y en 2025 pasó a llamarse Karakeep; mismo proyecto, mismos mantenedores, nombre nuevo. Se ha convertido en una de las apps insignia del mundo self-hosting, con más de 28.000 estrellas en GitHub, más de 190 contribuidores y un ritmo de publicación estable (la v0.31.0 salió en febrero de 2026).

El argumento que lo separa de las viejas herramientas de marcadores autoalojadas: la IA viene integrada, no pegada con celo. Todo lo que guardas queda etiquetado y resumido automáticamente por un LLM — ya sea una API en la nube o un modelo local vía Ollama — y la búsqueda cubre tanto texto completo como coincidencia semántica.

También existe una opción gestionada, Karakeep Cloud (hoy en beta pública), para quien quiere el producto sin el servidor.

## Funciones clave

### Etiquetado y resúmenes con IA — en la nube o totalmente local

Guardas cualquier cosa y Karakeep la etiqueta automáticamente y puede resumirla. Lo distintivo es *dónde* corre la IA: apúntalo a APIs compatibles con OpenAI, o a Ollama en tu propio hardware para que nada salga jamás de tu red. Ningún competidor alojado puede ofrecer eso. La calidad del modelo local varía según lo que tu máquina pueda mover — las etiquetas de un modelo local pequeño son visiblemente más bastas que las de una API de frontera — pero que la opción exista ya es el argumento.

### Búsqueda de texto completo y semántica

Karakeep indexa el contenido completo de tus guardados y soporta búsqueda semántica junto a la coincidencia de palabras clave. La calidad de la recuperación depende de tu configuración y tus modelos, pero la arquitectura está claramente por delante de la mayoría de rivales autoalojados, que se quedan en la búsqueda por palabras.

### Archivado de páginas completas y vídeo

Las páginas se archivan con monolith para que tu copia sobreviva a la pudrición de enlaces, y los vídeos pueden archivarse automáticamente con yt-dlp. Combinado con OCR sobre imágenes (coleccionistas de capturas, regocijaos), Karakeep es una herramienta genuina para acaparar datos — el nombre antiguo describía bien el proyecto.

### Apps y extensiones por todas partes

Apps nativas para iOS y Android, extensiones para Chrome, Firefox y Safari, más CLI, API REST y webhooks. Para un proyecto open source, la cobertura de clientes es notable — supera a varios productos comerciales, incluido el nuestro.

### Motor de reglas y RSS

Un motor de automatización basado en reglas (archivar solo, etiquetar solo, actuar sobre coincidencias) e ingesta de RSS para atesorar feeds. Los importadores cubren Chrome, Pocket, Linkwarden y Omnivore, más sincronización de marcadores del navegador vía Floccus. Entre las reglas, la API y los webhooks, Karakeep es inusualmente automatizable — de esas herramientas donde la comunidad comparte recetas, no solo capturas.

## Precios

Verificado en agosto de 2026:

| Opción | Precio | Límites |
| --- | --- | --- |
| **Autoalojado** | Gratis (código abierto) | Marcadores y almacenamiento ilimitados; tu hardware, tus costes de API de IA (o gratis con Ollama) |
| **Cloud Free** | 0 USD | 10 marcadores, 20 MB — una demo, no un plan |
| **Cloud Pro** | 4 USD/mes (facturación anual con ~17 % de descuento) | 50.000 marcadores, 50 GB de almacenamiento, etiquetado con IA, búsqueda de texto completo |
| **Corporate** | A medida | SSO, despliegue personalizado, soporte prioritario |

Los planes de pago en la nube incluyen garantía de devolución de 7 días, y la exportación está disponible cuando quieras. El precio real de autoalojarse, claro, se mide en noches: una máquina siempre encendida, actualizaciones de Docker, copias de seguridad que de verdad pruebas, y el cambio disruptivo ocasional — Karakeep sigue siendo software pre-1.0.

## Lo que Karakeep hace bien

- **La mejor historia de IA del bookmarking autoalojado.** Autoetiquetado, resúmenes y búsqueda semántica, con opción totalmente local. Nada más en el espacio self-hosted iguala esa combinación.
- **Propiedad real de los datos.** Tus enlaces, notas, imágenes, archivos de páginas e incluso el procesamiento de IA pueden vivir íntegramente en hardware que controlas.
- **Ilimitado y gratis en el nivel autoalojado.** Los únicos costes son el hardware y las llamadas a API opcionales.
- **Cobertura de clientes seria.** Apps móviles nativas y tres extensiones de navegador son lujios raros en el código abierto.
- **Impulso.** Más de 28k estrellas, mantenedores activos, releases casi mensuales, documentación real y una comunidad que sobrevivió entera a un cambio de nombre.

## Donde Karakeep se queda corto

- **El sysadmin eres tú.** La instalación es fácil si Docker es tu zona de confort y un muro si no. Actualizaciones, copias de seguridad, crecimiento del almacenamiento (los archivos de páginas suman rápido) y la seguridad del proxy inverso son tu trabajo para siempre.
- **Software pre-1.0.** El número de versión 0.x es honesto: las actualizaciones a veces requieren pasos de migración, y la estabilidad, aunque buena, no viene garantizada a nivel comercial.
- **La calidad de la IA depende de tu montaje.** Con una API de pago, los resultados son sólidos. Con un modelo local pequeño en una Raspberry Pi, etiquetas y resúmenes se vuelven bastos. La flexibilidad es una función; la varianza es su coste.
- **El nivel gratuito de la nube es una demo.** Diez marcadores no te dicen nada sobre vivir con el producto; en realidad eliges entre autoalojarte y 4 USD/mes.
- **Brecha de pulido.** La interfaz es buena — de verdad —, pero codo a codo con apps comerciales maduras se notan las costuras: aristas en la vista de lectura, fallos ocasionales de parseo, apps móviles que van por detrás de la web.

## Cómo se compara con Marqly

| | Karakeep | Marqly |
| --- | --- | --- |
| Autoalojo / propiedad de datos | **Sí — toda su razón de ser** | No |
| Precio (todo incluido) | **Gratis autoalojado; nube 4 USD/mes** | Plan gratuito; Pro 72 USD/año (≈6 USD/mes) |
| Configuración necesaria | Docker, ajustes, mantenimiento | **Ninguna — regístrate y guarda** |
| App de Android | **Sí** | **Sí** |
| IA local/privada | **Sí, vía Ollama** | No — servicio alojado |
| API / CLI / webhooks | **Sí** | Sin API pública |
| Autoetiquetado con IA | Sí (calidad según modelo) | **Sí, consistente, sin configuración** |
| Búsqueda semántica | Sí, depende de la configuración | **Función central, ajustada, sin configuración** |
| Resúmenes con IA | Sí | Sí |
| YouTube | Archiva vídeos (yt-dlp) | **Resumen, chat y transcripción en la página del vídeo** |
| Captura de página | Archivo monolith | Guardar como PDF, fiel al diseño en pantalla |
| Quién lo mantiene | **Tú** | Marqly |

Este es honestamente simple: la fila decisiva es la última. Karakeep te da todo por lo que Marqly cobra, gratis, más una propiedad de datos que Marqly no puede ofrecer — a cambio de tus noches y tu tiempo de actividad. Marqly te da la experiencia de marcadores con IA — búsqueda semántica, autoetiquetado, resúmenes, [herramientas de YouTube](/es/blog/mejores-gestores-marcadores-ia-2026) — funcionando igual de bien en el minuto uno que en el millón, sin nadie a quien mantener. Los self-hosters no necesitan que les digamos cuáles son. Si solo te pica la curiosidad por autoalojarte, haz la cuenta de lo que cuesta de verdad una máquina siempre encendida más tu tiempo, frente a un [plan gratuito](https://app.marqly.com) y 6 USD/mes si luego quieres Pro.

## ¿Para quién es Karakeep?

- **Aficionados del homelab y self-hosters** — es discutiblemente el mejor valor de toda la categoría de marcadores si la infraestructura ya existe.
- **Usuarios de privacidad primero** que quieren funciones de IA sin ninguna nube de por medio.
- **Acaparadores de datos** — archivos de páginas, archivos de vídeo, capturas con OCR, ingesta RSS. Está en el ADN.
- **Tinkerers y desarrolladores** que de verdad usarán la API, la CLI y el motor de reglas.
- **Ex usuarios de Pocket cómodos con Docker** — mira cómo se bate con la otra opción en nuestra [guía de alternativas autoalojadas a Pocket](/es/blog/mejores-alternativas-autoalojadas-a-pocket-2026), o el recopilatorio más amplio de [alternativas a Pocket](/es/blog/alternativas-a-pocket-2026) si autoalojarse es negociable.

Quién no debería: cualquiera que haya leído «proxy inverso» arriba y sentido sueño. No hay vergüenza — el mantenimiento es un coste real, y pagar 4 USD/mes a alguien para que desaparezca es un intercambio racional.

## Veredicto

Karakeep es el gestor de marcadores autoalojado más completo disponible en 2026 y el único donde la IA se siente nativa y no injertada. Sus principales contrapartidas son las que toda herramienta autoalojada impone — instalación, mantenimiento, turbulencias pre-1.0 y una calidad de IA que depende de qué le des — pero nada de eso disuadirá lo más mínimo a su público real. Si quieres la experiencia de IA de Karakeep sin el servidor, [Marqly es la versión alojada de esa misma idea](https://app.marqly.com) — con plan gratuito, sin tarjeta, funcionando en los próximos dos minutos.
