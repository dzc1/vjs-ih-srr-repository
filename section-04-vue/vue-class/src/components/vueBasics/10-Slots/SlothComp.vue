<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <img :src="image" alt="" />
    <p>{{ description }}</p>
  </div>
  <slot></slot>
</template>

<script setup>
defineProps({
  title: String,
  image: String,
  description: String,
});
</script>

<!-- En este ejemplo, definimos un componente Card con un título, una imagen y una descripción como propiedades. Dentro del template, tenemos la etiqueta <slot></slot>, que actúa como un espacio reservado. Cuando usamos este componente Card, podemos insertar contenido o componentes personalizados dentro de las etiquetas de slot.  -->
