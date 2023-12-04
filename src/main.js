import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createWebHistory, createRouter } from "vue-router";

import inicio from "./components/inicio.vue";
import DrinkDetail from "./components/DrinkDetail.vue";

const routes = [
  {
    path: "/",
    name: "inicio",
    component: inicio,
  },
  {
    path: "/cocktail/:idDrink",
    name: "Drink",
    component: DrinkDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

createApp(App).use(router).mount("#app");
