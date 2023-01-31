<!-- HTML HERE -->
<template></template>
<!-- JS HERE -->
<script setup>
import { ref, reactive } from "vue";

// Ejercicios Iterating Elements

// Creamos la estructura básica de un componente de vue en la que vamos a mostrar el resultado de los ejercicios. Recordad importar el componente donde sea necesario para poder ver el avance de vuestros ejercicios.

// Ej.1: Creamos una variable reactiva que contenga un array con vuestras cinco películas preferidas. En el template pondremos un título de My favorite Movies y después una <ol>. Dentro de la ordered list recorreremos el array de películas y crearemos un <li> para cada una que nos las printee en pantalla. A cada <li> le daremos el index del elemento en el array como key.

// Ej.2:  Creamos una variable reactiva que contenga un objeto con cinco keys: favoriteFood, favoriteDrink, favoriteSport, favoriteCountry y favoriteArrayMethod. En el template vamos a recorrer el objeto para mostrar cada key y su valor en una unoredered list (en pantalla deberíamos ver algo como "favoriteFood: Sushi").

// Ej.3***: Creamos una variable reactiva students que contenga un array con al menos tres objetos. Cada objeto representará uno de vuestros compañeros y tendrá las keys name (string), age(number) y favoriteLanguages(array de strings). Tendremos que recorrer el array en el template y para cada objeto printear el nombre de vuestro compañero. Según si su edad es mayor o menor a 18 printearemos "I can go for a few drinks with NAME after class" o "NAME is still too young, they'll have to go home tonight". Finalmente, loopeamos el array de sus lenguajes de programación favoritos dentro de una unordered list.
</script>
<!-- CSS HERE -->
<style scoped></style>
