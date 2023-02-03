<script setup>
import { ref, reactive } from "vue";
// nombre del metodo
//defineProps()
// metodo autoimportado,, cuando trabajamos con el <script setUp ></setup>, tenemos accesso a muchos metodos autoImportados como este por ejemplo.

//prop bueno - esto es un prop definido con un objeto para pasarle algunas reglas ['type', 'required', ]
// defineProps({
//   msg: {
//     type: String,
//     required: true,
//   },
// });

//prop sin regla
// se define mediante un array no como un objeto como vemos arriba.
defineProps(["msg", "footballTeams"]);
// const miFuncion = () => {
//   alert("I have been clicked");
// };
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h1 class="green">{{ footballTeams }}</h1>
    <h3>Diego Zito</h3>
    <!-- <button @click="miFuncion">click me</button> -->
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>

<!-- Que son los props?
Props en Vue son entradas a nivel de componente que permiten que los datos se pase de componente padre a componente hijo.

Para que usamos props?
Los props se utilizan en Vue para hacer que los componentes sean reutilizables y para permitir la comunicación entre componentes. Al utilizar props, un componente padre puede pasar datos a su componente hijo, permitiéndole al componente hijo renderizar dinámicamente los datos y actualizar su comportamiento basado en los datos recibidos.

En términos simples, los props son como variables que se pasan de un componente Vue a otro, permitiendo a los componentes compartir datos e interactuar entre sí. -->
