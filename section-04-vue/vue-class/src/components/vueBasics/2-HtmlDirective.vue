<!-- ¿Qué es una directiva HTML?
Es una forma de darle órdenes a vue usando el HTML

¿Para qué se usan?
Para muchas cosas muy distintas que iremos viendo. Todas empiezan por v-loquesea. Por ejemplo, v-bind, v-html, v-if...

Ejemplo
ya veremos :) -->
<template>
  <div v-html="rubensFavBand"></div>
  <div>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis illo tempore
    ex accusamus consequatur consequuntur aut neque eius nisi perferendis.
    Dolores ab totam deserunt similique debitis, provident perferendis dolor
    itaque.
  </div>
</template>
<script setup>
import { ref } from "vue";
let rubensFavBand = ref(`
<div>
    <h2>Mago de oz</h2>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolor
      magnam veritatis libero maxime dolore quod obcaecati esse! Hic cum ratione
      nemo cumque dolore perspiciatis inventore unde impedit harum similique.
    </p>
    <h4>Location</h4>
    <p>Galicia, España ??</p>
  </div>

`);
</script>
<style scoped></style>
