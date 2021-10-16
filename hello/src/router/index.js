import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import About1 from "../views/About1.vue";
import About2 from "../views/About2.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },{
    path: "/about1",
    name: "About1",
    component: About1,
    props:true
  },
  {
    path: "/subject/:id",
    name: "About2",
    component: About2,
    props:true
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
