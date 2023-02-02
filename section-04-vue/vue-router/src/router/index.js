import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../pages/HomeView.vue";
import CoolComponent from "../components/CoolComponent.vue";
import SublimePage from "../pages/BandPage.vue";
import PizzaPage from "../pages/PizzaPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // buenas praticas dictan que la ruta del "home" siempre se define asi "/"
      path: "/",
      // esta clave es solo descriptiva, es mas que todo referencial.
      name: "home",
      // IMPORTANTE - component key - define el componente que va a mostrar como pagina!
      component: CoolComponent,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../pages/AboutView.vue"),
    },
    {
      path: "/sublime",
      name: "Sublime Band Info Page",
      component: SublimePage,
    },
    {
      path: "/pizza",
      name: "Pizza Food Type Info Page",
      component: PizzaPage,
    },
  ],
});

export default router;
