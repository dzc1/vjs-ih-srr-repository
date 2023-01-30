<!-- 
  ¿Qué es v-text? 
  Muestra un valor determinado en el HTML 
  ¿Para qué sirve? 
  Para mostrar datos, principalmente en forma de texto, en el HTML. Esos datos se
  habrán extraido desde código. 
  Un ejemplo 
    Mostrar datos provenientes de una base
  de datos. 
 -->
<template>
  <!-- Usando el directivo v-text -->
  <p v-text="favoriteBand"></p>

  <!-- Usando interpolacion de texto -->
  <p>{{ favoriteBand }}</p>
</template>
<script setup>
import { ref } from "vue";

//dato primitivo
let favoriteBand = ref("una de mis bandas preferidas es Soda Stereo");
</script>
<style scoped></style>
