import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: () => import("../pages/HomePage"),
    },
    {
      path: "/add/payment/:category?",
      name: "PaymentPage",
      component: () => import("../pages/PaymentPage"),
      props: (route) => ({
        category: route.params.category,
        amount: route.query.value,
      }),
    },
  ],
});
