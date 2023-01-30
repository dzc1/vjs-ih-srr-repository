<!-- HTML aca -->
<template>
  <!-- Reactividad + Interpolacion Texto - SABA APPROACH -->
  <section>
    <!-- HTML - puesto a pelo -->
    <div>
      <p>Mi nombre es Diego, naci en Venezuela y tengo 31 años.</p>

      <!-- Ejemplo de dato no reactivo -->
      <p>{{ myNameTwo }}</p>
    </div>

    <!-- HTML - puesto con interpolacion de texto - mejor conocido como nuestro claudators de bigote!!! aka the saba approach! -->
    <div>
      <!-- Usando datos primitivos - ref() -->
      <p>
        Mi nombre es {{ myName }}, naci en {{ countryOfBirth }} y tengo
        {{ age }} años.
      </p>
      <!-- Dato primitivo - null value -->
      <p>{{ nullValue }}</p>
      <!-- Usando datos no primitivos - reactive() -->
      <p>
        Mi nombre es {{ myInfo.myName }}, naci en {{ myInfo.countryOfBirth }} y
        tengo {{ myInfo.age }} años.
      </p>
    </div>
  </section>
  <!-- Ejemplo de reactividad + interpolacion + funciones  -->
  <!-- Ejemplo funcional con un contador -->
  <section>
    <div class="counter">
      <button @click="decreaseCounter">-</button>
      <p>{{ counter.count }}</p>
      <button @click="increaseCounter">+</button>
    </div>
  </section>
</template>

<!-- JS - Logica aca -->
<script setup>
// Si queremos trabajar con datos primitivos o no primitivos dentro de nuestro script con el composition API tenemos que activar nuestra reactividad. Esta reactividad por defecto se usan 2 tipos de metodos nativos al framework para poder trabajar de una manera reactiva.
// Un metodo se llama ref()
// Un metodo se llama rective()

// PASOS - REFERENCIEN ESTO
// 1er paso
import { ref, reactive } from "vue";

// declaracion de dato primitivo NO REACTIVO para que vean diff entre datos reactivos
const myNameTwo = "Diego";

//2do paso
// declaramos el tipo de dato reactivo mediante el metodo ref o reactive

// Tipos de datos primitivos - ref() - strings, numeros, booleanos, nulos===null
const myName = ref("Diegooo");
const countryOfBirth = ref("Venezuelaaa");
const age = ref(31);
const nullValue = ref(null);

// Tipos de datos no primitivos - reactive() - arrays y los objetos
const myInfo = reactive({
  myName: "Diego",
  countryOfBirth: "Venezuela",
  age: 31,
});

/// EJEMPLO FUNCIONAL - CONTADOR
const counter = reactive({
  count: 0,
  title: "My Counter",
});

// Funcion que suma +1
const increaseCounter = () => {
  // apuntamos a el dato no primitivo con encadenacion apuntamos al valor de count y usando el operador ++ le sumamos 1 a la cuenta
  counter.count++;
  console.log("wu tang ++");
};

// Funcion que resta -1
const decreaseCounter = () => {
  // apuntamos a el dato no primitivo con encadenacion apuntamos al valor de count y usando el operador -- le restamos 1 a la cuenta
  counter.count--;
  console.log("wu tang  --");
};

// EJERCICIO 001
// Van a crear 4 variables
// 3 de ellas seran ref()
// 1 de ellas sera reactive()
// reactive === quiero que se creen un objeto con las siguientes keys/claves, ["name", ageNUMERO, "dob", hobbies[ARRAY], educacion{objeto, 3 claves[primaria, secundaria, unviserdiad]}, "Su grupo favorito de musica"]
// ref ==== pelicula preferida
// ref === # cantidad de veces que se han visto esta pelicula
// ref === comida preferida
</script>

<!-- Css Estilos aca -->
<style scoped>
section .counter,
counter {
  display: flex;
  margin: 2rem 0;
}
section .counter button {
  padding: 2rem;
  font-size: 2em;
}
section .counter p {
  font-size: 3em;
  padding: 0 2rem;
}
</style>
