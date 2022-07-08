import Vue from "vue";
import store from "./store";
import router from "./router";
import vuetify from "./plugins/vuetify";
import VueApexCharts from "vue-apexcharts";
import ModalWindow from "./plugins/ModalWindow";
import ContextMenuWindow from "./plugins/ContextMenuWindow";
import App from "./App.vue";

Vue.use(VueApexCharts);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
  router,
  vuetify,
  ModalWindow,
  ContextMenuWindow,
}).$mount("#app");
