<!-- 

// Ejercicios Computed Properties

// Creamos la estructura básica de un componente de vue en la que vamos a mostrar el resultado de los ejercicios. Recordad importar el componente donde sea necesario para poder ver el avance de vuestros ejercicios.

// Ej.1: Creamos un <h1>. Este debe leer una variable computada myName que, a su vez, lea dos variable reactivas name y lastName. Les daréis un valor default a cada una con vuestro nombre y vuestro apellido. Debajo del h1 creamos un pequeño form con dos inputs, uno que sobreescriba name y el otro lastName. Si todo está bien vinculado, cuando modifiquéis el input el h1 debería modificarse a la vez, incluso antes de hacer submit.

// Ej.2 - Hard: Creamos una variable reactiva myWatchlist que contenga un array de objetos. Cada objeto representa una serie o película que queráis ver en el futuro, y debería contar con las keys title (string), year (number) y whereToWatch (array de Strings). En el browser deberíais printear, para cada uno de los obejtos, un <h1> con el title, un <h2> con el year y una unordered list para los servicios de streaming (Netflix, HBO, etc.). Después deberíamos tener una variable computada watchOnNetflix que filtre el array de myWatchlist según si la key whereToWatch incluye la string "Netflix". En el template también deberíamos renderizar watchOnNetflix con un título para separar las dos listas.

// Después creamos un formulario con inputs para introducir un title, un year y una opción múltiple de servicios de streaming. Cuando hagamos submit del formulario deberíamos crear un objeto con toda la info inputada por el user y añadirlo a myWatchlist. En caso de que esta nueva serie o película se pueda ver en Netflix, la lista de watchOnNetflix también debería actualizarse al momento. -->

script setup>
import { ref, computed, reactive } from 'vue';

// Ex 1:
const name = ref('Belén');
const lastName = ref('Alonso');
const newName = ref('');
const myFullName = computed({
  get() {
    return `${name.value} ${lastName.value}`;
  },
  set(value) {
    const newName = value;
    name.value = newName;
    lastName.value = newName;
  }  
});

const myFullName2 = computed(() => `${name.value} ${lastName.value}`);

// Ex.2:
const myWatchlist = reactive([
  {
    title: 'The Last Of Us',
    year: 2023,
    whereToWatch: ['HBO']
  },
  {
    title: 'Tár',
    year: 2023,
    whereToWatch: ['Netflix', 'Filmin']
  },
  {
    title: 'The Godfather',
    year: 1980,
    whereToWatch: ['HBO', 'Netflix', 'Prime']
  },
]);

const watchOnNetflix = computed(() => {
  return myWatchlist.filter((element) => element.whereToWatch.includes('Netflix'));
});

const title = ref('');
let year = ref('');
const whereToWatch = reactive({
  streamApp: []
});

const addSerie = () => {
  myWatchlist.push({
    title: title.value,
    year: year.value,
    whereToWatch: whereToWatch.streamApp
  });

  title.value = '';
  year.value = '';
  whereToWatch.streamApp = [];
};

</script>

<template>
  <h1>Exercise 1</h1>
  <h1>{{ myFullName }}</h1>
  <h1>{{ myFullName2 }}</h1>
  <form action="">
    <input type="text" v-model="name">
    <input type="text" v-model="lastName">
    <button @click.prevent="name = newName">Change name</button>
  </form>

  <h1>Exercise 2</h1>
  <div v-for="(movie, index) in myWatchlist" :key="index">
    <h3>{{ movie.title }}</h3>
    <h3>{{  movie.year }}</h3>
    <ul>
      <li v-for="(item, index) in movie.whereToWatch" :key="index">{{ item }}</li>
    </ul>
  </div>

  <h1>Watch on netflix</h1>
  <div v-for="(movie, index) in watchOnNetflix" :key="index">
    <h1>{{ movie.title }}</h1>
    <h2>{{  movie.year }}</h2>
    <ul>
      <li v-for="(item, index) in movie.whereToWatch" :key="index">{{ item }}</li>
    </ul>
  </div>
  <form>
    <input type="text" v-model="title">
    <input type="text" v-model="year">
    <label for="streaming">Choose a Streaming platform:</label><br />
        <input
          type="checkbox"
          name="streaming"
          value="Disney+"
          v-model="whereToWatch.streamApp"
        />
        Disney +<br />
        <input
          type="checkbox"
          name="streaming"
          value="Netflix"
          v-model="whereToWatch.streamApp"
        />
        Netflix<br />
        <input
          type="checkbox"
          name="streaming"
          value="HBO"
          v-model="whereToWatch.streamApp"
        />
        HBO<br />
        <button @click.prevent="addSerie">Submit</button>
  </form>
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