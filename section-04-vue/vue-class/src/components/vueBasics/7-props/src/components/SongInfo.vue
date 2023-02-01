<!-- HTML HERE -->
<template>
  <p>{{ songInfo }}</p>
</template>
<!-- JS HERE -->
<script setup>
import { ref, reactive } from "vue";
//prop bueno - esto es un prop definido con un objeto para pasarle algunas reglas ['type', 'required', ]
defineProps({
  songInfo: String,
});
</script>
