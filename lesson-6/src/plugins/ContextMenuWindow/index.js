import Vue from "vue";

const ContextMenuWindow = {
  install(Vue) {
    if (this.installed) {
      return;
    }
    this.installed = true;

    Vue.prototype.$contextMenu = {
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

Vue.use(ContextMenuWindow);

export default ContextMenuWindow;
