<!-- DIRECTIVOS DE ITERACION

¿Que es un elemento iterativo?
Un sistema que tiene vue para recorrer arrays/objetos! 

¿Para qué sirve?
Para repetir varias veces una operación similar. Es una versión adaptada a VUE del bucle for. 

Un ejemplo
Tengo un array con mi nombre y el de mis hermanos. Quiero que para cada nombre haya un h2 que indique el nombre, un p que indique la biografía y otro p indicando 
la fecha de nacimiento. Todo extraido de una base de datos.  -->

<!-- V-FOR DIRECTIVE -->

<!-- SYNTAX ESPECIAL que se llama v-for, este directive tal cual como funciona
    este bucle dentro de vanillaJS, acepta un paramtero que viene siendo la
    lista o la data que queremos iterar, el otro parametro que podemos pasarle
    viene siendo un parametro que nosotros mismos nombramos :), aparte de estos
    2 paraemtros podemos pasarle un tercer parametro que es el key el key es un
    elemento unico dentro de cada iteracion de la lista para asegurarnos de no
    tener ningun tipo de inconsistencia dentro de la data :) -->

<!-- ATTRIBUTE "key" dentro del v-for directivo -->

<!-- Cuando Vue está actualizando una lista de elementos renderizados con v-for, por defecto usa una estrategia de "parche in-place". Si el orden de los elementos de datos ha cambiado, en lugar de mover los elementos DOM para que coincidan con el orden de los elementos, Vue parcheará cada elemento in-place y se asegurará de que refleje lo que debería ser renderizado en ese índice en particular.

Este modo predeterminado es eficiente, pero solo es adecuado cuando la salida de renderizado de su lista no depende del estado de componente hijo o del estado temporal DOM (por ejemplo, valores de entrada de formularios).

Para darle una pista a Vue para que pueda realizar un seguimiento de la identidad de cada nodo y, por lo tanto, reutilizar y reordenar elementos existentes, debe proporcionar un atributo de clave única para cada elemento:" -->

<!-- HTML HERE -->
<template>
  <h1>Iterative Directives</h1>
  <div id="iterando-arrays">
    <!-- ejemplo 001 -  usando el paramtero individual que nos creamos noostors "worldCupTeams" como key para iterar correctamente dentro de la lista  -->
    <!-- En este caso:   -->
    <!-- 1. "team" === una palabra descriptiva que nosotros nos creamos para basicamente segmentar cada iteracion individual del array/lista/objeto -->
    <!-- 2. "in" === palabra reservada para poder accionar el iterador del directivo v-for -->
    <!-- 3. "worldCupTeams" === variable que contiene el array de equipos de futbol -->
    <!-- 4. "{{ team }}" ===  el uso de una expression {{  }} que dentro contiene el valor indivudal de cada equipo de la lista  -->
    <div id="simple-directive-v-for">
      <h4>World Cup Teams</h4>
      <ul>
        <li v-for="team in worldCupTeams">
          {{ team }}
        </li>
      </ul>
    </div>
    <hr />
    <div id="directive-v-for-with-key-attribute">
      <h4>NFL Teams</h4>
      <ul>
        <li v-for="(americanFootBallTeam, index) in nflTeams" :key="index">
          {{ americanFootBallTeam }} -
          {{ index }}
        </li>
      </ul>
    </div>
  </div>
  <hr />
  <div id="iterando-objetos">
    <div id="iterando-lista-de-array-de-objetos-de-comidas">
      <ul>
        <h2>My Favorite Food's</h2>
        <li v-for="(arrayDeComida, indice) in foodTypes" :key="indice">
          <div class="food-types">
            <h6 v-text="arrayDeComida.name"></h6>
            <p v-text="arrayDeComida.countryOrigin"></p>
            <p v-text="arrayDeComida.rating"></p>
          </div>
        </li>
      </ul>
    </div>

    <div id="iterando-lista-de-array-de-objetos-anidados-de-actores-con-pelis">
      <ul>
        <h2>Actors and Movies</h2>
        <li v-for="actor in actors">
          <div class="actors">
            <h6 v-text="actor.name"></h6>
            <ul>
              <li
                v-for="(pelicula, indiceEjemploWU) in actor.movies"
                :key="indiceEjemploWU"
              >
                {{ pelicula }} - {{ indiceEjemploWU }}
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<!-- JS HERE -->
<script setup>
import { ref, reactive } from "vue";

/// ARRAYS
/// ----
/// ----
/// ----
/// ----
/// ----
/// ----
/// ----

const worldCupTeams = reactive([
  "Argentina",
  "Francia",
  "España",
  "Japon",
  "Alemania",
]);

const nflTeams = reactive([
  "Miami Dolphins",
  "New England Patrios",
  "New York Jets",
  "San Francisco 49'ers",
  "Green Bay Packers",
]);

// En esencia queremos hacer esto dentro del template
// for (let i = 0; i <= worldCupTeams.length; i++) {
//   console.log(`hola pablo ${worldCupTeams[i]}`);
// }

/// ARRAY DE OBJETOS
/// ----
/// ----
/// ----
/// ----
/// ----
/// ----
/// ----
// Iterating array of objects
const foodTypes = reactive([
  { name: "Pizza", countryOrigin: "Italia", rating: "5/5" },
  { name: "Sushi", countryOrigin: "Japan", rating: "5/5" },
  { name: "Fajitas", countryOrigin: "Mexico", rating: "15/5" },
  { name: "Paella", countryOrigin: "Spain", rating: "5/5" },
]);

// Iterating an array of an array within an object
const actors = reactive([
  {
    name: "Robert De Niro",
    movies: ["The Godfather II", "Casino", "Goodfellas"],
  },
  {
    name: "Daniel Day Lewis",
    movies: [
      "There will be blood",
      "The Last of the Mohicans",
      "Gangs of New York",
    ],
  },
  {
    name: "Merryl Streep",
    movies: ["The Devil wears prada", "Kramer vs Kramer", "Sophies Choice"],
  },
]);
</script>

<!-- CSS HERE -->
<style scoped>
h4 {
  font-size: 1.5em;
}
ul li h6 {
  font-size: 2em;
}
hr {
  margin: 1rem 0;
}
.food-types,
.actors {
  padding: 1rem;
  border: 1px solid green;
  margin: 1rem 0;
}
.actors li {
  font-size: 2em;
}
</style>
