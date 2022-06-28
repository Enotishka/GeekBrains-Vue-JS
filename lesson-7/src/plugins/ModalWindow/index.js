import Vue from "vue";

const ModalWindow = {
  install(Vue) {
    if (this.installed) {
      return;
    }
    this.installed = true;

    Vue.prototype.$modal = {
      EventBus: new Vue(),
      show(name, settings) {
        this.EventBus.$emit("show", { name, ...settings });
      },
      hide() {
        this.EventBus.$emit("hide");
      },
    };
  },
};

Vue.use(ModalWindow);

export default ModalWindow;
