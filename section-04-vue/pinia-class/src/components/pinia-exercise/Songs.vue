<!-- HTML HERE -->
<template>
  <section>
    <div class="empty-song-div" v-if="songStore.mySongs.length === 0">
      <p>Todavía no hay canciones en la store</p>
    </div>
    <div v-else class="song-div">
      <ul>
        <li v-for="(song, index) in songStore.mySongs" :key="index">
          {{ song }} ----- {{ index }}
        </li>
      </ul>
    </div>
    <div class="song-input-div">
      <label for="song-name">Enter a song</label>
      <input
        type="text"
        id="song-name"
        placeholder="Enter a song"
        v-model="newSong"
      />
      <button @click="addSong">Add Song</button>
      <button @click="emptySongArray">Remove All Songs</button>
    </div>
  </section>
</template>
<!-- JS HERE -->
<script setup>
import { ref, reactive } from "vue";
import { useSongsStore } from "../../stores/songs";

const songStore = useSongsStore();

// var to store new song from input
const newSong = ref("");

// function declared to connect to function from the store :)
const addSong = () => {
  songStore.addSong(newSong.value);
  console.log(songStore.mySongs);
  // limpiar el input
  newSong.value = "";
};
// function declared to connect to function from store that removes/empties the information from the array.
const emptySongArray = () => {
  songStore.emptySongsArray();
  console.log("I have been clicked");
  console.log(songStore.mySongs);
};
</script>
<!-- CSS HERE -->
<style scoped>
div .song-div {
  padding: 2rem;
  background: lightblue;
  color: black;
  font-size: 2em;
}

div .empty-song-div {
  font-size: 2em;
}
div .song-input-div {
  padding: 2rem;
  background: lightcoral;
  color: white;
}
div .song-input-div input {
  padding: 2rem 1rem;
  width: 100%;
  font-size: 1.5em;
  border-radius: 16px;
}
div .song-input-div label {
  font-size: 1.5em;
  padding-bottom: 1rem;
}
div .song-input-div button:nth-of-type(odd) {
  font-size: 1.5em;
  padding: 1rem;
  width: 100%;
  background: lightseagreen;
  border-radius: 16px;
  margin-top: 1rem;
}
div .song-input-div button:nth-of-type(even) {
  font-size: 1.5em;
  padding: 1rem;
  width: 100%;
  background: lightslategrey;
  border-radius: 16px;
  margin-top: 1rem;
  color: white;
}
</style>

<!-- // Componente
// tendremos que loopear, en esencia las canciones dentro del array de la tienda. - v-for
// tendremos que condicionar 2 elementos, 1 que muestre un texto que diga que el array de las canciones este vacio. v-if
// tendremos que condicionar 2 elementos, 1 que muestre las canciones del array en el caso opuesto. v-else
// tendremos que generar un input+boton para que? enviar la info al array de canciones. v-model
// tendremos que generar un input+boton, el boton tiene que conectarse con una funcion que llame a la tienda y tal cual como dijo ester, vamos a usar el metodo push(),  v-model.
// tenderemos que generar un boton que se encarge de borrar todas las canciones de la tienda! -->
