<!-- HTML HERE -->
<template>
  <!-- ex 001 -->
  <section>
    <!-- Ex 001  - V01 -->
    <div>
      <!-- Click to toggle -->
      <button @click="toggleTextExcerciseOne">Click to toggle</button>
      <p v-text="ejercicioUno"></p>
      <!-- long syntax -->
      <h1 v-if="ejercicioUno === true">
        I'm showing up beacuse our reactive data is true!
      </h1>
      <!-- short syntax -->
      <h1 v-if="ejercicioUno">
        I'm showing up beacuse our reactive data is true!
      </h1>
      <h1 v-else>
        I'm the option anytime our reactive data cannot be read as true
      </h1>
    </div>
    <hr />
    <!-- Ex001 - V02 -->
    <!-- Using a reactive data method -->
    <div>
      <!-- Click to toggle -->
      <button @click="toggleTextExcerciseOneReactive">Click to toggle</button>
      <p v-text="ejercicioUnoReactive.isTrue"></p>
      <h1 v-if="ejercicioUnoReactive.isTrue">
        I'm showing up beacuse our reactive data is true!
      </h1>
      <h1 v-else>
        I'm the option anytime our reactive data cannot be read as true
      </h1>
    </div>
  </section>
  <!-- ex 002 -->
  <section>
    <!-- ex 002 -->
    <div>
      <p v-if="language === 'HTML'">Today we are learning {{ language }}</p>
      <p v-else-if="language === 'CSS'">Today we are learning {{ language }}</p>
      <p v-else-if="language === 'JS'">Today we are learning {{ language }}</p>
      <p v-else>
        Today we are not learning anything, we are listening to the WU TANG!
      </p>
    </div>
  </section>
  <!-- ex 003 -->
  <hr />
  <section>
    <template v-if="show">
      <h1 v-text="bio.name"></h1>
      <div>
        <p v-if="bio.age >= 18">I am an adult! :)</p>
        <p v-else-if="bio.age < 18">I am still a minor :)</p>
      </div>
      <div>
        <p v-if="bio.hasCodedBefore">
          This is not my first time at the javascript and vue rodeo
        </p>
        <p v-else>
          I am still a newbie to code but I'm learning fast, also I died back in
          1971 so there is no chance....
        </p>
      </div>
    </template>
  </section>
</template>
<!-- JS HERE -->
<script setup>
import { ref, reactive } from "vue";

// Ej.1: Creamos dos <h1> diferentes, uno que diga "I'm showing up beacuse our reactive data is true!" y el otro que diga "I'm the option anytime our reactive data cannot be read as true". Como vemos, los dos dependerán de una variable reactiva en vuestro script y, según si esta es true or false, enseñaréis uno u otro.

const ejercicioUno = ref(false);
const ejercicioUnoReactive = reactive({
  isTrue: false,
  isFalse: false,
});
const toggleTextExcerciseOne = () => {
  ejercicioUno.value = !ejercicioUno.value;
};

const toggleTextExcerciseOneReactive = () => {
  ejercicioUnoReactive.isTrue = !ejercicioUnoReactive.isTrue;
};

// Ej.2: Creamos cuatro <p> tags. Los cuatro se renderizarán condicionalmente mirando a una misma variable que llamaremos "language". Esta variable podrá tener tres valores distintos: "HTML", "CSS" o "JS". En nuestro template deberemos leer dicha variable y enseñar un <p> u otro según su valor. Cada uno de los <p> tags a su vez contendrá el texto "Today we are learing" seguido del valor de la variable que imprimiréis en pantalla usando la moustache syntax. El último <p> tag se encargará de aparecer cuando el valor de "language" no sea ninguno de los tres mencionado anteriormente, y contendrá el texto "Today there's no class!".

// CSS - HTML - JS
const language = ref("HTML");

// Ej.3***: Creamos una variable reactiva que contenga un objeto con vuestro nombre (string), vuestra edad (number) y una key hasCodedBefore (boolean) la cual será true or false dependiendo de si antes del bootcamp habíais picado código o no. Después creamos otra variable reactiva booleánica que podéis llamar show, por ejemplo. Según si show está en true or false, en vuestro template deberíais enseñar o no una pequeña biografía. Esta biografía, a su vez, constará primero de vuestro nombre como título. Después tendrá un <p> que se renderizará de manera condicional. En caso de que vuestra edad sea superior a 18 enseñaremos la frase "I am an adult! :)"; en caso contrario, enseñaremos "I'm still a minor :(". Finalmente, según si hasCodedBefore es true or false también renderizaréis "I am still a newbie to code but I'm learning fast" o "This is not my first time at the javascript and vue rodeo".
const bio = reactive({
  name: "Jim Morrison",
  age: 27,
  hasCodedBefore: false,
});
const show = ref(true);
</script>
<!-- CSS HERE -->
<style scoped></style>
