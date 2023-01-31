<!-- ¿Qué es el conditional rendering?
Es un "if" que en caso de ser "true" muestra el HTML y en caso de ser "False" no muestra el HTML.

¿Para qué sirve?
Para ocultar o mostrar cosas en pantalla. 

Un ejemplo
El usuario está rellenando una contraseña. Si la contraseña es menor de 10 caracteres muestra un aviso de contraseña débil, si es igual o mayor muestra un aviso de contraseña válida. -->

<!-- Directives: -->
<!-- v-if -->
<!-- v-else -->
<!-- v-else-if  -->

<!-- v-show -->
<!-- Un poco diferente -->
<!-- v-show dentro del opening tag / elemento de apertura dentro denuestro <template></template> le aplicaremos la propieda de dislpay:none segun la condicion es false y se quita la propiedad de display:none segun la condicion es true-->

<!-- !!REGLAS: -->
<!-- v-else y v-else-if, estas dos directivas condicionales tienen que siempre tener un v-if asociado, si no lo tienes te saltara un error en pantalla -->

<!-- HTML HERE -->
<template>
  <h1>Conditional Directive Class</h1>

  <section id="part-1">
    <div id="simple-conditional-two-conditions">
      <!-- Approach sencillo utilizando un v-if -->
      <p class="some-ther-class" v-if="number === 0">
        Este numero es condicionado porque solo se muestra si la condicion
        equivale a 0 es decir number === 0
      </p>
      <p class="andoni" v-else>
        Impreme el valor de la variable number: {{ number }}
      </p>
    </div>
    <div id="condicionales-anidados">
      <h2 v-if="condicionalAnidado >= 0">
        <span v-if="condicionalAnidado >= 5"
          >Este num es mas grand o igual a 5</span
        >
        <span v-else="condicionalAnidado < 5"
          >Este num es mas pequeño que 5</span
        >
      </h2>
    </div>
    <div id="condicionales-anidados-operadores-logicos">
      <p v-if="condicionalAnidado === 0">Este numero es igual a 0</p>
      <p v-else-if="condicionalAnidado < 0">
        Este numero es un numero negativo
      </p>
      <p v-else-if="condicionalAnidado > 0 && condicionalAnidado >= 10">
        Este numero es un numero positivo igual o mayor que 10
      </p>
      <p v-else>esto nisiquiera es un numero....</p>
    </div>

    <input type="checkbox" :checked="alvaro" @click="functionClickMe" />
    <div id="class-example-artists" v-if="alvaro === true">
      <!-- Solution 01 -->
      <p v-if="displayArtists">Kendirck Lamar</p>
      <p v-if="displayArtists">Andre 3000</p>
      <p v-if="displayArtists">J Cole</p>
      <hr />
      <!-- Solution 02 -->
      <div v-if="displayArtists">
        <p>Kendirck Lamar</p>
        <p>Andre 3000</p>
        <p>J Cole</p>
      </div>
      <hr />
      <!-- Solution 03 -->
      <template v-if="displayArtists">
        <p>Kendirck Lamar</p>
        <p>Andre 3000</p>
        <p>J Cole</p>
      </template>
      <!-- Solution 04 -->
      <!-- V-SHOW DIRECTIVE SOLUTION -->
      <p v-show="displayArtists">Jay Z</p>
      <p v-if="displayArtists">Canserbero</p>
    </div>
    <p v-else>pleae click on checkbox</p>
  </section>
</template>

<!-- JS HERE -->
<script setup>
import { ref, reactive } from "vue";

const number = ref(0);

const booleanVal = ref(false);

const condicionalAnidado = ref(10);

const displayArtists = ref(true);

const alvaro = ref(true);

const functionClickMe = () => {
  alvaro.value = !alvaro.value;
  console.log(alvaro);
};
</script>

<!-- CSS HERE -->
<style scoped>
input {
  padding: 2rem;
  font-size: 2em;
  width: 4rem;
  height: 4rem;
}
</style>
