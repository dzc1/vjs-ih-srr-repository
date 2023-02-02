import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

// use() metodo que habilita el uso del router dentro de nuestra appliacion
// router === importacion de archivo router/index.js y dentro de este archivo hay una variable que nos traemos
app.use(router);

app.mount("#app");
