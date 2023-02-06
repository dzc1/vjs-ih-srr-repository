<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ useCounterStore().myName }}</p>
    <p>{{ useCounterStore().count }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useCounterStore } from "../stores/counter";
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
