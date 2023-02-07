import { ref, reactive, computed } from "vue";
import { defineStore } from "pinia";

export const useSongsStore = defineStore("songs", () => {
  let mySongs = reactive([]);

  // Funcion que empuja nuevas canciones mediante el metodo push() al array de mySongs :)
  const addSong = (newSong) => mySongs.push(newSong);

  // Funcion que elimina todas las poicisiones del array 'mySongs' :)
  const emptySongsArray = () => {
    mySongs = [];
    // mySongs.length = 0;
  };

  return { mySongs, addSong, emptySongsArray };
});

// Ej. 1: En el repo de proyecto donde estéis trabajando nos creamos una carpeta "stores". Dentro creamos una store de Pinia llamada songs.js. Este archivo debe tener la estructura que hemos visto de una Pinia Store. Dentro de la store, en el state, vamos a incluir una key "mySongs" y setearla en un array vacío.

// 2 cosas dentro extra dentro de la tienda ?
// 1 funcion para add songs
// 1 funcion para limpiar el array o eliminar las canciones

// FUNCTION ONE
// tendremos que generar un input+boton, el boton tiene que conectarse con una funcion que llame a la tienda y tal cual como dijo ester, vamos a usar el metodo push(),  v-model.

// FUNCTION TWO
