<!-- Copia este codigo por referencia -->
<template>
  <!-- Ex 001 -->
  <h1 :id="myCoolId">Wu Tang Clan</h1>
  <!-- Ex 002 -->
  <h2 :class="classBoolean ? 'j-cole' : 'j-cole-display-none'">J Cole</h2>
  <!-- Ex 003 -->
  <h3 :style="[objectOne, objectTwo]">Nas</h3>
  <!-- Ex 004 -->
  <!-- Ej.4: Creamos un <h4> con un binding de clase que contendrá un array. El primer elemento del array leerá una variable booleánica y solo si esta es true aplicará una clase 'red' que cambie el color a rojo. El segundo elemento del array leerá otra variable booleánica y, según si es verdadera o falsa, aisgnará un border al h4 o no. -->
  <h4 :class="[booleanOne && 'red-class', booleanTwo && 'border-class']">
    The Pharcyde
  </h4>
</template>

<script setup>
// Ejercicios Attribute Binding

// Creamos la estructura básica de un componente de vue en la que vamos a mostrar el resultado de los ejercicios. Recordad importar el componente donde sea necesario para poder ver el avance de vuestros ejercicios.

// Ej.1: Creamos un <h1> que tendrá un id bindeado. Dicho id tiene que tomar como referencia una variable que habréis creado en vuestro <script setup>. Apuntando al id en cuestión desde el <style> tag le daréis un poco de estilo (color, underline... lo que queráis).

// Ej.2: Creamos un <h2> con un binding de clase. Este binding debe asignar una clase u otra según una variable booleánica. Si la variable es verdadera el h2 debería verse de color verde. En caso contrario, NO deberíamos ver el h2 en el render.

// Ej.3: Cramos un <h3> con un binding de estilo. Este binding debe leer un array de variables que tendréis en vuestro <script setup>. Cada variable debería ser una variable reactiva con un valor de objeto que contenga diferentes estilos de CSS (los que queráis).

// Ej.4: Creamos un <h4> con un binding de clase que contendrá un array. El primer elemento del array leerá una variable booleánica y solo si esta es true aplicará una clase 'red' que cambie el color a rojo. El segundo elemento del array leerá otra variable booleánica y, según si es verdadera o falsa, aisgnará un border al h4 o no.
import { ref, reactive } from "vue";

// ex001
const myCoolId = ref("wu-tang");
// ex002
const classBoolean = ref(true);
//ex003
const objectOne = reactive({
  color: "purple",
  fontSize: "40px",
  textDecoration: "underline",
});
const objectTwo = reactive({
  marginLeft: "5rem",
  color: "gray",
});
// ex004
const booleanOne = ref(false);
const booleanTwo = ref(false);
</script>

<style scoped>
#wu-tang {
  color: green;
  font-size: 3rem;
}
.j-cole {
  color: green;
  text-decoration: line-through;
  font-size: 4rem;
}
.j-cole-display-none {
  display: none;
}
.red-class {
  color: red;
}
.border-class {
  border: 1px solid blue;
}
h4 {
  font-size: 3em;
}
</style>
