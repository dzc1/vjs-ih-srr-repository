<!-- HTML HERE -->
<template>
  <img :src="bandImage" :alt="text" />
</template>
<!-- JS HERE -->
<script setup>
defineProps({
  bandImage: {
    type: String,
    required: true,
  },
  text: {
    type: String,
  },
});
</script>
<!-- CSS HERE -->
<style scoped>
img {
  width: 20%;
}
</style>
