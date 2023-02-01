<!-- HTML HERE -->
<template>
  <div class="wu-tang">
    <h1>Simple Form Ex - WU TANG CONCERT</h1>
    <img :src="myUrl.link" :alt="myUrl.alt" />
    <form @submit.prevent="handleSubmit">
      <!-- Name Input -->
      <div>
        <label for="formName">Enter your name:</label>
        <input type="text" id="formName" v-model="myInfo.name" />
      </div>
      <!-- Age Input -->
      <div>
        <label for="formAge">Enter your Age:</label>
        <input type="number" id="formAge" v-model="myInfo.age" />
      </div>
      <!-- DOB Input -->
      <div>
        <label for="formDob">Enter your Date of Birth:</label>
        <input type="date" id="formDob" v-model="myInfo.dob" />
      </div>

      <input type="submit" value="Submit Form" />
    </form>
  </div>
</template>
<!-- JS HERE -->
<script setup>
import { ref, reactive } from "vue";

// Ejercicios Two Way Binding

// Creamos la estructura básica de un componente de vue en la que vamos a mostrar el resultado de los ejercicios. Recordad importar el componente donde sea necesario para poder ver el avance de vuestros ejercicios.

// Ej.1: Creamos un formulario en vuestro template. El formulario debe tener un evento de submit que bloquee el default behavior del evento y llame a la función handleSubmit. Dentro del formulario debemos tener diversos inputs que nos permitan entrar la siguiente info: name, age, date of birth. Cada uno de los inputs debe estar vinculado a su propia variable reactiva.

// Una vez le demos a submit deberíamos encargarnos de imprimir en una alerta un texto con el nombre que le hayáis inputado, un texto con la edad y un texto con vuestra date de birth.

// approach 1 - guardan cada dato en su variable propia name, age y dob
// approach 2 - guardan los 3 datos dentro de 1 variable que sea un objeto :)

// breakdown

// datos relacionados
// aprovechamos el objeto para guardar estos 3 datos como subDatos de un dato :)
// objeto === vue metodo reactivo ? === "REACTIVE()"
// 3 tipos datos === "strings"
// 1 funcion
// formulario en html
// v-model
//
// ex001
const myInfo = reactive({
  name: "",
  age: 0,
  dob: "",
});

const myUrl = reactive({
  link: "https://cdn.freebiesupply.com/logos/large/2x/wu-tang-clan-logo-png-transparent.png",
  alt: "Wu Tang Clan Logo In Red - GLOBAL",
});

const handleSubmit = () => {
  console.log("it works!!!!");
  alert(`
    Thank your for using my cool form! 
    Here is your info: 
    Name: ${myInfo.name}
    Age: ${myInfo.age}
    Dob:  ${myInfo.dob}
  `);
};
</script>

<!-- CSS HERE -->
<style scoped>
.wu-tang {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

img {
  width: 40%;
  height: 40%;
}
form div {
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
}
label {
  margin: 0 2rem 0 0;
  font-size: 2.5em;
}
input {
  padding: 1rem;
  font-size: 3em;
  width: 100%;
}
input[type="submit"] {
  margin-top: 4rem;
}
</style>
