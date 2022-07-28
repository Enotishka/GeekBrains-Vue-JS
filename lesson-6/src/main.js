import Vue from "vue";
import store from "./store";
import router from "./router";
import ModalWindow from "./plugins/ModalWindow";
import ContextMenuWindow from "./plugins/ContextMenuWindow";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
  router,
  ModalWindow,
  ContextMenuWindow,
}).$mount("#app");
