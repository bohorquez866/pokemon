# 🎯 Prueba técnica para un proceso de selección de Gestionet

Este repositorio describe la prueba técnica para un proceso de selección de programación web. El objetivo es desarrollar una single-page application completa, con su frontend, su backend y su capa de datos, que permite buscar pokémons. Para ello se deben seguir las siguientes directrices:

1. El frontend debe estar desarrollado en **Vue.js 3**
1. El backend debe estar desarrollado en **Node.js** y **Express.js**.
1. Los datos de la aplicación pueden estar en **MongoDB** o en **MySQL/MariaDB**, a elección de el/la candidato/a.
1. El código fuente puede utilizar todas las **librerías estandar** deseadas, siempre y cuando éstas no sean desarrollos particulares de el/la candidato/a, puesto que esto dificultaría la evaluación de la prueba técnica.
1. El código fuente y demás recursos de la aplicación (variables, funciones, carpetas, tablas, ficheros...) deben estar en **inglés**.
1. Cuantas más **buenas prácticas** para el desarrollo de software siga lo creado, mejor.

## 🎨 Interfaz de usuario de la aplicación

El frontend consta de una única página web que lista los pokémon guardados en la base de datos de la aplicación y permite filtrarlos por su nombre. Imagen orientativa:

![](/images/design.jpg)

El listado debe tener un efecto `:hover` de forma que el pokémon que tenga el foco se muestre resaltado. Por ejemplo como el pokémon CHARMANDER en la imagen orientativa.

La aplicación también ofrece la opción de actualizar los datos de la aplicación desde la PokéAPI.

En la carpeta `/images` está el logotipo de la aplicación.

✨ **Tarea EXTRA:** Opcionalmente se puede incluir una paginación cuando la lista sea muy larga.

## 📝 API de la aplicación

El backend de la aplicación ofrecerá dos o tres endpoints sin autentificación a los que llamará el frontend.

Una de los endpoints limpiará todos los datos alamacenados por la aplicación, llamará a la PokéAPI y guardará en la capa de datos de la aplicación la información que esta aplicación necesita de los pokémon.

El otro endpoint o endpoints servirá para que el frontend obtenga la información que debe mostrar en la página web de la aplicación.

✨ **Tarea EXTRA:** Opcionalmente se puede hacer que los endpoints sí tengan autentificación.

## 🔍 PokéAPI

La API REST de Pokémon: [pokeapi.co](https://pokeapi.co/)

### ➡️ Lista de pokémons

```json
// ENDPOINT => https://pokeapi.co/api/v2/generation/1
{
  "pokemon_species": [
    {
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon-species/1/"
    }
  ]
}
```
La que nos interesa es la lista `pokemon_species`. El número que viene al final de cada URL es el `id` del pokémon.

### ➡️ Datos de un pokémon

```json
// ENDPOINT => https://pokeapi.co/api/v2/pokemon-species/1/
{
  "order": 1,
  "name": "bulbasaur",
  "color": {
    "name": "green"
  }
}
```
Los atributos que nos interesan son `name`, `order` y `color` (color que más predomina en ese pokémon y que usaremos para el diseño de las cards).

La aplicación no descarga las imágenes de los pokémon, las enlaza directamente desde su fuente. Por ejemplo desde aquí: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg

## 📦 Entrega de la prueba técnica

La entrega de lo desarrollado se puede hacer de varias formas:

* Creando un respositorio de Git y haciéndolo público.
* Enviando un fichero comprimido por email con el código fuente y el resto de materiales que puedan ser necesarios para poner en marcha la aplicación desarrollada.

Para la capa de datos, debe entregarse un fichero que contenga la estructura y los datos utilizados en la prueba.
