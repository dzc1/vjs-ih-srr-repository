<!-- HTML HERE -->
<template>
  <p>{{ popularSong }}</p>
</template>
<!-- JS HERE -->
<script setup>
import { ref, reactive } from "vue";

defineProps({
  popularSong: {
    type: String,
    required: true,
    default: "Some popular song from the band",
    // REMINDER - EL DEFAULT PODEMOS ACTUARLO COMO UNA FUNCION :) Y HACER LO QUE QUERAMOS
    // AKA WU TANG!
    default: () => {
      console.log(`Some popular song from the band`);
      //alert("Hello ");
    },
  },
});
</script>
