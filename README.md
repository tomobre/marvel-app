# Marvel app

Aplicacion interactiva que permite ver personajes de Marvel, los detalles de cada uno (nombres, descripciones y comics en los que participo), y seleccionar los favoritos para tu lista de favoritos o eliminarlos de la lista.

## Stack

Proyecto desarrollado con Javascript usando el Stack de Next.js para toda la estructura, Styled Components para los estilos, Use Debounce para la optimizacion en rendereo de busqueda de personajes y MD5 para generar el hash necesario para consumir la API.

## Estructura

El proyecto esta en su mayoria dentro de la carpeta src/app. Donde se realiza automaticamente con Next el enrutamiento. En el archivo /page de esa carpeta se encuentra la pagina principal con el maquetado.

### Componentes

Dentro de la carpeta /components se encuentran todos los componentes reutilizados para la pagina principal como para los detalles de los personajes o los favoritos.

### Layout

El layout del sitio web con su navbar.

### 404

Archivo sencillo que se muestra con una ruta inexistente.

### Favorites

La ruta de los personajes favoritos seleccionados. El maquetado en /page.

### Fetch

Las funciones necesarias para consumir la API

### Context

El estado general de la aplicacion para poder conservar la seleccion de favoritos del usuario

### ID

El router dinamico de Next js permite renderear cada uno de los personajes de Marvel en detalle en este subpagina

### Public

Por fuera de la carpeta /app en public podemos encontrar las pocas imagenes utilizadas para el sitio web de manera estatica.

## Marvel API

Para el uso y consumo de la informacion se utilizo la API de Marvel [Marvel ](https://developer.marvel.com/)

## Para comenzar

Descarga el proyecto e instala las dependencias con el siguiente comando:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Antes de poder correr el proyecto correctamente, el archivo .env.example indica las variables de entorno que seran necesarias, son las tres que requiere la API de Marvel para poder consumir la informacion correctamente. Se debe crear un usuario en Marvel, y luego seran indicadas las llaves necesarias para colocar en el archivo .env que se debe crear.
Una vez hecho esto, corre el siguiente comando:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Abri [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## Mas sobre Next js

- [Docs de Next.js](https://nextjs.org/docs).
