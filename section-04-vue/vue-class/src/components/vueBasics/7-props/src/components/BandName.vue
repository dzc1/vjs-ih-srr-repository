<!-- HTML HERE -->
<template>
  <h1>{{ bandName }}</h1>
  <!-- <h1>{{ bandNameValidator }}</h1> -->
</template>
<!-- JS HERE -->
<script setup>
import { ref, reactive } from "vue";
//prop bueno - esto es un prop definido con un objeto para pasarle algunas reglas ['type', 'required', ]
defineProps({
  bandName: {
    type: String,
  },
  // Usando props con funciones de validacion usando el metodo subNativo de los props llamado validator() - declarado con syntax convencional validator() {}
  bandNameValidator: {
    validator(value) {
      return ["testOne", "testTwo"].includes(value);
    },
  },
});
</script>
