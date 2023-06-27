<script setup>
import { ref, reactive } from "vue";
import PropComponent from "./components/PropComponentClass.vue";
import MyFirstComponent from "./components/vueBasics/0-MyFirstComponent.vue";
import TextDirective from "./components/vueBasics/1-TextDirective.vue";
import HtmlDirective from "./components/vueBasics/2-HtmlDirective.vue";
import BindDirective from "./components/vueBasics/3-BindDirective.vue";
import ConditionalDirectives from "./components/vueBasics/4-ConditionalDirectives.vue";
import ConditionalEx from "./components/class-excercises/ConditionalDirectivesEx.vue";
import IterativeDirective from "./components/vueBasics/5-IterativeDirective.vue";
import FormDirective from "./components/vueBasics/6-FormDirective.vue";
import FormDirectiveEx from "./components/class-excercises/FormDirectiveEx.vue";
import Events from "./components/vueBasics/8-Events.vue";
import Computed from "./components/vueBasics/13-Computed.vue";
import Slots from "./components/vueBasics/10-Slots/Slots.vue";
import SlothComp from "./components/vueBasics/10-Slots/SlothComp.vue";

const footballTeamCompOne = ref("FC Barcelona");

const miFuncion = () => {
  alert("I have been clicked");
};
</script>

<template>
  <header>
    <div class="wrapper">
      <!-- <PropComponent msg="['hello', 'helloTwo']" /> -->
      <!-- <PropComponent msg="" :football-teams="footballTeamCompOne" /> -->
      <!-- <PropComponent msg="Vue Class - Test" />
      <PropComponent msg="Vue Class - Pizza" />
      <PropComponent msg="Vue Class - Music" /> -->
      <!-- <PropComponent msg="Computed Properties" /> -->
    </div>
  </header>
  <!-- Declarar los componentes creados de clase dentro del elemento "main" -->
  <main>
    <!-- <MyFirstComponent /> -->
    <!-- <TextDirective /> -->
    <!-- <HtmlDirective /> -->
    <!-- <BindDirective /> -->
    <!-- <ConditionalDirectives /> -->
    <!-- <IterativeDirective /> -->
    <!-- <FormDirective /> -->
    <!-- <Events /> -->
    <!-- <Computed /> -->
    <!-- <Slots /> -->
    <SlothComp
      title="Mi tarjeta"
      image="tarjeta.jpg"
      description="Esta es mi tarjeta personalizada"
    >
      <button>Hax click</button>
    </SlothComp>
    <SlothComp
      title="Mi tarjeta"
      image="tarjeta.jpg"
      description="Esta es mi tarjeta personalizada"
    >
      <h1>hello</h1>
    </SlothComp>
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
