<!-- HTML HERE -->
<template>
  <div
    class="container"
    :class="colorVariableBool ? 'color-red' : 'color-orange'"
  >
    <p>Toggle el color del background de este elemento usando un ternario</p>
    <button v-on:click="changeColorOne">Click me - using a function</button>
    <!-- <button v-on:click="colorVariableBool = !colorVariableBool">
      Click me - inline
    </button> -->
  </div>
</template>

<!-- JS HERE -->
<script setup>
import { ref, reactive } from "vue";

// ex001
// var boolean
const colorVariableBool = ref(true);
// const myName = ref("Diego");
// funct que se encarge de cambiar el valor booleano de la variable coolorVariableBool
const changeColorOne = () => {
  // colorVariableBool
  //   console.log(colorVariableBool.value);
  //     console.log(myName.value);
  colorVariableBool.value = !colorVariableBool.value;
  console.log("I have Been Clicked");
  console.log(colorVariableBool.value);
};
</script>

<style scoped>
/* container general */
.container {
  min-height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.color-red {
  background-color: red;
}
.color-orange {
  background-color: orange;
}
</style>
