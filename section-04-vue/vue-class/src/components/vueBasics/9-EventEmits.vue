<!-- Que son los emits en vue? 
"Emits" en Vue.js se utilizan para enviar eventos personalizados desde un componente hijo al componente padre. El componente padre puede luego escuchar estos eventos y responder a ellos según sea necesario.

Como se usan los emits en vue?
Para usar un "emit" en Vue.js con la API de composición, puedes definir un evento personalizado en el componente hijo y usar la función "emit" para activar el evento y pasar datos junto con él -->

<!-- SYNTAX  -->

<!-- Como se usa el emit keyword dentro del template?  -->
<!-- $emit() -->

<!-- Como se usa el emit keyword dentro del script?  -->
<!-- emit() -->

<!-- HTML HERE -->
<template>
  <!-- Simple Inline emit -->
  <div class="cool-btns">
    <button @click="$emit('sayHelloCl')">custom click</button>
    <button @dblclick="$emit('sayHelloDbl')">custom dblclick</button>
    <button @mouseenter="$emit('sayHelloMouse')">custom mouseeneter</button>
  </div>
  <hr />
  <!-- Using emits within the script tag - CORRECT FORM -->
  <div class="cool-btns">
    <button @click="emitClickFunc">custom click - function dependant</button>
  </div>
  <div class="cool-btns">
    <button @click="handleCountFunction">
      custom click - function dependant+ passing information
    </button>
    <p v-text="count"></p>
  </div>
</template>

<!-- JS HERE -->
<script setup>
import { ref, reactive } from "vue";

//defineEmits("sayHello");
const emits = defineEmits([
  "sayHelloCl",
  "sayHelloDbl",
  "sayHelloMouse",
  "emitInsideFunction",
  "emitInsideFunctionThatHoldsInfo",
]);

/// CUSTOME EVENTS INSIDE FUNCTIONS
// EXAMPLE 1
// Funcion pegada ael buton + un emit dentro de la funcion.
const emitClickFunc = () => {
  // primero - nos guardamos nuestros defineEmits() dentro de una variable para poder referenciarla dentro de nuestra funcion.
  //   emit() --- ESTO que tenemos aca (paso 1)
  // segundo - debido a que la variable que guarda el metodo defineEmits() tiene acceso a un metodo nativo de vue, dentro de lo parentesis refeenciamos ese emit que definimos y asi lo podemos usar correctamente dentro de una funcion :)
  emits("emitInsideFunction");
};

// EXAMPLE 2
const count = ref(0);
const handleCountFunction = () => {
  count.value++; // a sumar +1 a la variable que incialmente esta en 0
  emits("emitInsideFunctionThatHoldsInfo", count.value); // se encarga de emitir hacia arriba el uso del evento "click" mediante el evento custom "emitInsideFunctionThatHoldsInfo" y tambien se encarga de pasarle el valor actual de la variable count mediante el syntax "count.value"
};
// Funcion pegada al buton + un emit dentro de la funcion que contiene informacion enviada hacia arriba
// este doc === eventEmits --> Events.
</script>

<!-- CSS HERE -->
<style scoped>
.cool-btns {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.cool-btns button {
  margin: 1rem 0;
}
</style>
