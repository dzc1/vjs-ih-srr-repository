<!-- HTML aca -->
<template>
  <!-- Reactividad + Interpolacion Texto  -->
  <section>
    <!-- HTML - puesto a pelo -->
    <div>
      <p>Mi nombre es Diego, naci en Venezuela y tengo 31 años.</p>

      <!-- Ejemplo de dato no reactivo -->
      <p>
        Ejemplo de un dato interpolado no reactivo -
        <span>{{ myNameTwo }}</span>
      </p>
    </div>

    <!-- HTML - puesto con interpolacion de texto - mejor conocido como nuestro claudators de bigote!!! aka the saba approach! -->
    <div>
      <!-- Usando datos primitivos - ref() -->
      <p>
        Mi nombre es {{ myName }}, naci en {{ countryOfBirth }} y tengo
        {{ age }} años.
        <br />
        answer is : {{ 2 * 2 + 4 - 3 }} expression are not supposed to be used
        like this: <br />
        <!-- {{ let a = "Diego" }} -->
      </p>
      <!-- Dato primitivo - null value -->
      <p>{{ nullValue }}</p>
      <!-- Usando datos no primitivos - reactive() -->
      <p>
        Mi nombre es {{ myInfo.myName }}, naci en {{ myInfo.countryOfBirth }} y
        tengo {{ myInfo.age }} años.
      </p>
    </div>
  </section>
  <!-- Ejemplo de reactividad + interpolacion + funciones  -->
  <!-- Ejemplo funcional con un contador -->
  <section>
    <div class="counter">
      <button @click="decreaseCounter">-</button>
      <p>{{ counter.count }}</p>
      <button @click="increaseCounter">+</button>
    </div>
  </section>
  <!-- Excercise 001 -->
  <section>
    <div>
      <p>
        Mi nombre es {{ myInfoEx.myName }} y tengo {{ myInfo.age }} y naci el
        {{ myInfoEx.dob }} y me gustan los siguientes hobbies:
      </p>
      <ul>
        <!-- <li>{{ myInfoEx.hobbies }}</li> -->
        <li>{{ myInfoEx.hobbies[0] }}</li>
        <li>{{ myInfoEx.hobbies[1] }}</li>
        <li>{{ myInfoEx.hobbies[2] }}</li>
        <li>{{ myInfoEx.hobbies[3] }}</li>
        <li>{{ myInfoEx.hobbies[4] }}</li>
        <li>{{ myInfoEx.hobbies[5] }}</li>
      </ul>
      <p>Educacion:</p>
      <ul>
        <li>{{ myInfoEx.education.primary }}</li>
        <li>{{ myInfoEx.education.secondary }}</li>
        <li>{{ myInfoEx.education.university }}</li>
      </ul>
      <p>
        Me encanta la pelicula {{ myMovieEx }} y me la he disfrutado
        {{ timesWatchedEx }} veces mientras como mi comida preferida que es:
        {{ favoriteFoodEx }}
      </p>
    </div>
  </section>
</template>

<!-- JS - Logica aca -->
<script setup>
// Si queremos trabajar con datos primitivos o no primitivos dentro de nuestro script con el composition API tenemos que activar nuestra reactividad. Esta reactividad por defecto se usan 2 tipos de metodos nativos al framework para poder trabajar de una manera reactiva.
// Un metodo se llama ref()
// Un metodo se llama rective()

// PASOS - REFERENCIEN ESTO
// 1er paso
import { ref, reactive } from "vue";

// declaracion de dato primitivo NO REACTIVO para que vean diff entre datos reactivos
const myNameTwo = "Diego";

//2do paso
// declaramos el tipo de dato reactivo mediante el metodo ref o reactive

// Tipos de datos primitivos - ref() - strings, numeros, booleanos, nulos===null
const myName = ref("Diegooo");
const countryOfBirth = ref("Venezuela");
const age = ref(31);
const nullValue = ref(null);

// Tipos de datos no primitivos - reactive() - arrays y los objetos
const myInfo = reactive({
  myName: "Diego",
  countryOfBirth: "Venezuela",
  age: 31,
});

/// EJEMPLO FUNCIONAL - CONTADOR
const counter = reactive({
  count: 0,
  title: "My Counter",
});

// Funcion que suma +1
const increaseCounter = () => {
  // apuntamos a el dato no primitivo con encadenacion apuntamos al valor de count y usando el operador ++ le sumamos 1 a la cuenta
  counter.count++;
  console.log("wu tang ++");
};

// Funcion que resta -1
const decreaseCounter = () => {
  // apuntamos a el dato no primitivo con encadenacion apuntamos al valor de count y usando el operador -- le restamos 1 a la cuenta
  counter.count--;
  console.log("wu tang  --");
};

// EJERCICIO 001
// Van a crear 4 variables
// 3 de ellas seran ref()
// 1 de ellas sera reactive()
// reactive === quiero que se creen un objeto con las siguientes keys/claves, ["name", ageNUMERO, "dob", hobbies[ARRAY], educacion{objeto, 3 claves[primaria, secundaria, unviserdiad]}, "Su grupo favorito de musica"]
// ref ==== pelicula preferida
// ref === # cantidad de veces que se han visto esta pelicula
// ref === comida preferida
const myInfoEx = reactive({
  myName: "Diego Zito",
  age: 31,
  dob: "May 16th, 1991",
  hobbies: [
    "Surfing",
    "Coding",
    "Guitar",
    "Cooking",
    "Snowboarding",
    "Stoicism",
  ],
  education: {
    primary: "Liceo Camoruco",
    secondary: "Cypress Bay High School",
    university: "Florida International University",
  },
  favoriteGroup: "Red Hot Chilli Peppers",
});
const myMovieEx = ref("Pandillas de Nueva York");
const timesWatchedEx = ref(31);
const favoriteFoodEx = ref("Comida Mexicana");
</script>

<!-- Css Estilos aca -->
<style scoped>
section .counter,
counter {
  display: flex;
  margin: 1rem 0;
}
section .counter button {
  padding: 2rem;
  font-size: 2em;
}
section .counter p {
  font-size: 3em;
  padding: 0 2rem;
}
</style>
