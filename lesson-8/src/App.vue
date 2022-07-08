<template>
  <v-app>
    <v-app-bar app flat>
      <v-btn plain :ripple="false" :to="{ name: 'HomePage' }">Home</v-btn>
      <v-btn plain :ripple="false" :to="{ name: 'PaymentPage' }"
        >Add payment</v-btn
      >
    </v-app-bar>
    <v-main>
      <router-view />
      <ModalWindow
        v-if="modalWindow"
        :modalWindow="modalWindow"
        :modalWindowSettings="modalWindowSettings"
      />
      <ContextMenuWindow
        v-if="contextMenuWindow"
        :contextMenuWindow="contextMenuWindow"
        :contextMenuSettings="contextMenuSettings"
      />
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";

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
    ...mapActions(["fetchCosts", "fetchCategories"]),
    onModalShow(settings) {
      this.modalWindow = settings.name;
      this.modalWindowSettings = settings;
    },
    onModalHide() {
      this.modalWindow = "";
      this.modalWindowSettings = {};
    },
    onContextMenuShow(settings) {
      this.contextMenuWindow = settings.name;
      this.contextMenuSettings = settings;
    },
    onContextMenuHide() {
      this.contextMenuWindow = "";
      this.contextMenuSettings = {};
    },
  },
  mounted() {
    this.fetchCosts();
    this.fetchCategories();

    this.$modal.EventBus.$on("show", this.onModalShow);
    this.$modal.EventBus.$on("hide", this.onModalHide);
    this.$contextMenu.EventBus.$on("show", this.onContextMenuShow);
    this.$contextMenu.EventBus.$on("hide", this.onContextMenuHide);
  },
};
</script>
