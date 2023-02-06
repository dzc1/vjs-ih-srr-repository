import { ref, computed, onUpdated } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  // tenemos una var declarada con nombre count que es un ref, puesto como numero
  const count = ref(0);
  const myName = ref("jarko");
  // tenemos una var declarada con nombre  doubleCount que es una propiedad computada que lo que hace es multiplica el valor de count *2
  const doubleCount = computed(() => count.value * 2);
  // tenemos una var declarada con nombre increment que contiene una funcon tipo flecha que lo que es apuntar al vlor de la var count y mediante el oeprador de asignacion ++ sumarle +1 a la var count
  const increment = () => count.value++;
  const decrement = () => count.value--;
  // llamamos al hook iinUpdated para monitorear el valor de count y multiplicarlo *4 y registrar ese valor a la consola, para plasmar la info desde el hook.
  onUpdated(() => console.log(count.value * 4));
  // retornamos siempre lo que queremos de manera implicita y destructurado dentro de un objeto
  return { count, doubleCount, increment, myName, decrement };
});
