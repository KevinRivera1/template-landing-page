# Landing Page Template en Astrojs

¡Bienvenido a la Landing Page Template! Este proyecto es una plantilla lista para usar, ideal para crear páginas web de aterrizaje (landing pages) de forma rápida y sencilla. Está diseñada para que cualquier usuario pueda personalizarla y desplegarla con facilidad.

![Vista previa de la landing page](ruta/a/tu-imagen-de-vista-previa.png)

## Tabla de Contenidos

- [Características](#características)
- [Demo](#demo)
- [Instalación](#instalación)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Uso](#uso)
- [Cómo Personalizar la Información](#cómo-personalizar-la-información)
- [Comandos](#comandos)
- [Personalización](#personalización)
- [Contribuciones](#contribuciones)

## Características

- **Fácil de usar:** Plantilla lista para ser personalizada sin complicaciones.
- **Responsive:** Diseño adaptable a dispositivos móviles, tabletas y escritorio.
- **Optimizada para SEO:** Estructura semántica y buenas prácticas para posicionamiento.
- **Integraciones:** Compatible con herramientas y frameworks modernos.
- **Despliegue sencillo:** Instrucciones claras para desplegar tu landing page en producción.

## Demo

Puedes ver una demo en vivo de la landing page en el siguiente enlace:

[Ver Demo](https://tu-demo-url.com)

## Instalación

Para comenzar, clona el repositorio y sigue los pasos a continuación:

### Con Bun

```sh
bun create astro@latest -- --template basics
```
### Estructura del Proyecto

```
└── 📁src
    └── 📁assets
        └── 📁svg
            └── arrow-up.svg
            └── book.svg
            └── check.svg
            └── delivered.svg
            └── facebook.svg
            └── layer.svg
            └── linkedIn.svg
            └── logo.svg
            └── message.svg
            └── quality.svg
            └── radar.svg
            └── reddit.svg
            └── x.svg
    └── 📁components
        └── 📁Landing
            └── 📁containers
                └── LandingContainer.astro
            └── 📁presentational
                └── Articles.astro
                └── Footer.astro
                └── Hero.astro
                └── Navbar.astro
                └── SEO.astro
                └── Services.astro
    └── 📁data
        └── cards.ts
        └── footer.ts
        └── hero.ts
        └── menu.ts
        └── service.ts
        └── site.json
    └── 📁layouts
        └── Layout.astro
    └── 📁pages
        └── index.astro
    └── 📁styles
        └── global.css
```
### Uso

Descripción de Carpetas y Archivos:

* **src/assets:**
Contiene archivos de recursos, en este caso, íconos en formato SVG. Estos archivos se usan en los componentes para enriquecer la interfaz gráfica del usuario.

* **src/components:**
Contiene los componentes reutilizables del template:

* **Landing/containers:** Componente principal que agrupa la estructura de la Landing Page.

* **Landing/presentational:** Componentes de presentación específicos, como el Hero, Footer, Navbar, entre otros, que se encargan de renderizar secciones concretas de la página.

* **src/data:**
Aquí se almacenan los archivos de datos (cards.ts, footer.ts, hero.ts, menu.ts, service.ts, site.json) que determinan la información mostrada en el sitio. Para personalizar el contenido, basta con modificar estos archivos:

* **cards.ts:** Configuración e información para tarjetas o secciones destacadas.

* **footer.ts:** Datos y enlaces que se muestran en el pie de página.

* **hero.ts:** Configuración del área principal o “hero” de la página.

* **menu.ts:** Elementos del menú de navegación.

* **service.ts:** Información sobre los servicios o características ofrecidas.

* **site.json:** Configuración global y metadatos del sitio (por ejemplo, título, descripción, etc.).

* **src/layouts:**
Contiene el layout general del sitio (Layout.astro), el cual se utiliza para envolver las páginas y aplicar una estructura consistente en todo el proyecto.

* **src/pages:**
Contiene las páginas del sitio. El archivo index.astro representa la página de inicio del proyecto.

* **src/styles:**
Incluye los estilos globales del proyecto (global.css), donde se definen las reglas CSS que afectan a toda la aplicación.

### Cómo Personalizar la Información
El template está diseñado para que la mayor parte de la información se mantenga en la carpeta **src/data.** Esto permite a los usuarios modificar los datos sin necesidad de alterar directamente los componentes o la lógica del proyecto.

1. Identificar el Archivo de Datos a Modificar
Revisa la carpeta **src/data** para localizar el archivo que contiene la información que deseas cambiar:

    - Por ejemplo, si deseas cambiar el contenido del Hero, edita el archivo **hero.ts**.

2. Modificar la Información

Abre el archivo correspondiente y ajusta los valores o agrega nuevos elementos según sea necesario.

```TS
export const hero = [
	{
		_id: 'hero_1',
		title: 'Bienvenido a Astro Landing',
		subtitle: 'Una plantilla totalmente personalizable y lista para usar.',
		image:
			'https://image.lexica.art/full_webp/29368fc4-9edb-4f4d-bbe3-9e6ef5412a87',
		cta: {
			text: 'Empezar Ahora',
			link: '#features',
		},
	},
];
```

3. Personalización Adicional

Para modificar otros aspectos del sitio, sigue el mismo proceso con los archivos cards.ts, footer.ts, menu.ts, service.ts o site.json, dependiendo de la sección que desees actualizar.

### Comandos

Todos los comandos se ejecutan desde la raiz del proyecto en tu terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| bun install               | Instala las dependencias del proyecto                     |
| bun dev                   | Inicia el servidor de desarrollo local en localhost:4321  |
| bun build                 | Compila el sitio para producción (./dist/)                |
| bun preview               | Previsualiza la compilación antes de desplegar            |
| bun astro ...             | Ejecuta comandos de la CLI de Astro (ej. astro add)       |
| bun astro -- --help       | Muestra la ayuda de la CLI de Astro                       |

### Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar esta plantilla, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama con tu nueva funcionalidad (git checkout -b feature/nueva-funcionalidad).
3. Realiza tus cambios y haz commit (git commit -m 'Añadir nueva funcionalidad').
4. Envía un pull request.

Agradecemos cualquier sugerencia o mejora.