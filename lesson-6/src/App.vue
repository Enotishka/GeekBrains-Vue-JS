<template>
  <div id="app">
    <header class="header">
      <router-link :to="{ name: 'HomePage' }">Home</router-link>
      <router-link :to="{ name: 'PaymentPage' }">Add payment</router-link>
    </header>
    <router-view />
    <transition name="fade">
      <ModalWindow
        v-if="modalWindow"
        :modalWindow="modalWindow"
        :modalWindowSettings="modalWindowSettings"
      />
    </transition>
    <ContextMenuWindow
      v-if="contextMenuWindow"
      :contextMenuWindow="contextMenuWindow"
      :contextMenuSettings="contextMenuSettings"
    />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    ModalWindow: () => import("./components/ModalWindow"),
    ContextMenuWindow: () => import("./components/ContextMenuWindow"),
  },
  data() {
    return {
      modalWindow: "",
      modalWindowSettings: {},
      contextMenuWindow: "",
      contextMenuSettings: {},
    };
  },
  methods: {
    onModalShow(settings) {
      this.modalWindow = settings.name;
      this.modalWindowSettings = settings;
    },
    onContextMenuShow(settings) {
      this.contextMenuWindow = settings.name;
      this.contextMenuSettings = settings;
    },
    onModalHide() {
      this.modalWindow = "";
      this.modalWindowSettings = {};
    },
    onContextMenuHide() {
      this.contextMenuWindow = "";
      this.contextMenuSettings = {};
    },
  },
  mounted() {
    this.$modal.EventBus.$on("show", this.onModalShow);
    this.$modal.EventBus.$on("hide", this.onModalHide);
    this.$contextMenu.EventBus.$on("show", this.onContextMenuShow);
    this.$contextMenu.EventBus.$on("hide", this.onContextMenuHide);
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  gap: 20px;
  align-self: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
