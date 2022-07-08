<template>
  <v-menu
    :value="contextMenuWindow"
    rounded="lg"
    :position-x="position.x"
    :position-y="position.y"
    v-click-outside="hide"
  >
    <v-card>
      <component :is="contextMenuWindow" v-bind="contextMenuWindowProps" />
    </v-card>
  </v-menu>
</template>

<script>
import CostMenuComponent from "./CostMenuComponent";

export default {
  components: {
    CostMenuComponent,
  },
  props: {
    contextMenuWindow: String,
    contextMenuSettings: Object,
  },
  computed: {
    contextMenuWindowProps() {
      return {
        target: this.contextMenuSettings.target,
      };
    },
    position() {
      return {
        x: this.contextMenuSettings.position.x,
        y: this.contextMenuSettings.position.y,
      };
    },
  },
  methods: {
    hide() {
      this.$contextMenu.hide();
    },
  },
  mounted() {
    console.log("context menu mounted");
  },
};
</script>