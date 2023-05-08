import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FormView from "../views/FormView.vue";
import SummaryView from "../views/SummaryView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/step2",
      name: "step 2",
      component: FormView,
      beforeEnter: (to, from) => {
        if (from.name == "home" || from.name == "summary") return true;

        // redirect home
        return { name: "home" };
      },
    },
    {
      path: "/summary",
      name: "summary",
      component: SummaryView,
      beforeEnter: (to, from) => {
        if (from.name == "step 2") return true;

        // redirect home
        return { name: "home" };
      },
    },
    // instead of 404
    {
      path: "/:pathMatch(.*)*",
      redirect() {
        return { path: "/" };
      },
    },
  ],
});

export default router;
