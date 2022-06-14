import Vue from "vue";
import Router from "vue-router";
import HomePage from "../pages/HomePage";
import PaymentPage from "../pages/PaymentPage";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    },
    {
      path: "/add/payment/:category?",
      name: "PaymentPage",
      component: PaymentPage,
      props: (route) => ({
        category: route.params.category,
        amount: route.query.value,
      }),
    },
  ],
});
