<script setup>
import NavComponent from "./components/NavComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import IterationTwo from "./components/Iteration2.vue";
import IterationThree from "./components/Iteration3.vue";
import IterationFour from "./components/Iteration4.vue";
import IterationFive from "./components/Iteration5.vue";
</script>

<template>
  <NavComponent />
  <!-- Iteraciones aca: -->
  <IterationTwo />
  <hr />
  <IterationThree />
  <hr />
  <IterationFour />
  <hr />
  <IterationFive />
  <!-- final de iteraciones -->
  <FooterComponent />
</template>

<style>
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 2em;
}
p {
  font-size: 1.5em;
}
</style>
