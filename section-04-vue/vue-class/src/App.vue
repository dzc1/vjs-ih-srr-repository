<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import MyFirstComponent from "./components/vueBasics/0-MyFirstComponent.vue";
import TextDirective from "./components/vueBasics/1-TextDirective.vue";
import HtmlDirective from "./components/vueBasics/2-HtmlDirective.vue";
import BindDirective from "./components/vueBasics/3-BindDirective.vue";
import ConditionalDirectives from "./components/vueBasics/4-ConditionalDirectives.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="Vue Class - conditional rendeing directives" />
    </div>
  </header>
  <!-- Declarar los componentes creados de clase dentro del elemento "main" -->
  <main>
    <!-- <MyFirstComponent /> -->
    <!-- <TextDirective /> -->
    <!-- <HtmlDirective /> -->
    <!-- <BindDirective /> -->
    <ConditionalDirectives />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
