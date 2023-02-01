<!-- HTML HERE -->
<template>
  <!-- example001 -->
  <div id="v-if-v-else">
    <p v-if="exampleOne">
      Mostrar un elemento dependiendo de su valor boolean puesto en "true"
    </p>
    <p v-else>
      Mostrar un elemento dependiendo de su valor boolean puesto en "false"
    </p>
  </div>
  <!-- example002 -->
  <div id="v-show">
    <p v-show="exampleTwo">
      Mostrar un elemento dependiendo de su valor boolean independiente de su
      valor ["true" || "false"], utilizando el directivo v-show, recuerdense que
      esto lo que le aplica es la propiedad de "display:none"
    </p>
    <p v-show="exampleTwo === true">
      Mostrar un elemento dependiendo de su valor boolean independiente de su
      valor ["true" || "false"], utilizando el directivo v-show, recuerdense que
      esto lo que le aplica es la propiedad de "display:none"
    </p>
  </div>
  <!-- example003 -->
  <div id="v-if-conditional-with-logical-expression">
    <p v-if="exmplaeThree === true">
      Mostrar un elemento dependiendo de su valor boolean, dentro del directivo
      con un poco extra de logica de JS para "verificar" mediante el operador de
      asignacion "===" si el valor de la variable sera "true" || "false"
    </p>
    <!-- no usare ningun v-else  ningun v-else-if, porque chicos porque como tal cual funcionan estos condicional en JS, en VUE podemos darle el mismo comportamiento -->
  </div>
</template>
<!-- JS HERE -->
<script setup>
import { ref, reactive } from "vue";

// example001
const exampleOne = ref(true); //falso o verdadero
//example002
const exampleTwo = ref(true); // true o false
//example003
const exmplaeThree = ref(false);
</script>
