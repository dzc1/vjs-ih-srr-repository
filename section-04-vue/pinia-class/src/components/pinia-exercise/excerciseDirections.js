// Ej. 1: En el repo de proyecto donde estéis trabajando nos creamos una carpeta "stores". Dentro creamos una store de Pinia llamada songs.js. Este archivo debe tener la estructura que hemos visto de una Pinia Store. Dentro de la store, en el state, vamos a incluir una key "mySongs" y setearla en un array vacío.

// Creamos un componente Songs.vue. Este componente lo que hará es loopear el valor de songs que tenemos en songs.js y renderizar el nombre de la canción. Si no hay nada dentro del array, lo que enseñaréis es un <p>Todavía no hay canciones en la store</p>. Debajo del loop/<p>, pondréis un input type text y un botón. Vuestro objetivo es que desde el botón y el input de Songs.vue podáis acceder a una función que habréis declarado en la store de songs.js y que se encargue de añadir el valor del input dentro del array del state.

// Después de eso haced otro botón que os parmita vacíar el array que tenemos en la store.

// 2 cosas dentro extra dentro de la tienda ?
// 1 funcion para add songs
// 1 funcion para limpiar el array o eliminar las canciones

// Componente
// tendremos que loopear, en esencia las canciones dentro del array de la tienda. - v-for
// tendremos que condicionar 2 elementos, 1 que muestre un texto que diga que el array de las canciones este vacio. v-if
// tendremos que condicionar 2 elementos, 1 que muestre las canciones del array en el caso opuesto. v-else
// tendremos que generar un input+boton para que? enviar la info al array de canciones. v-model
// tendremos que generar un input+boton, el boton tiene que conectarse con una funcion que llame a la tienda y tal cual como dijo ester, vamos a usar el metodo push(),  v-model.
// tenderemos que generar un boton que se encarge de borrar todas las canciones de la tienda!
