<template>
  <div
    ref="contentDiv"
    class="content"
    :style="style"
    tabindex="0"
    @blur="hide"
  >
    <component :is="contextMenuWindow" v-bind="contextMenuWindowProps" />
  </div>
</template>
<script>
import Vue from "vue";
import CostMenuComponent from "./CostMenuComponent";

export default {
  components: {
    CostMenuComponent,
  },
  props: {
    contextMenuWindow: String,
    contextMenuSettings: Object,
  },
  data() {
    return {
      width: 0,
    };
  },
  computed: {
    contextMenuWindowProps() {
      return {
        target: this.contextMenuSettings.target,
      };
    },
    style() {
      return {
        left: this.contextMenuSettings.elemPosition.x + 20 - this.width + "px",
        top: this.contextMenuSettings.elemPosition.y + 8 + "px",
      };
    },
  },
  methods: {
    hide() {
      this.$contextMenu.hide();
    },
  },
  mounted() {
    this.width = this.$refs.contentDiv?.clientWidth || 0;
    Vue.nextTick(() => this.$el.focus());
  },
};
</script>

<style scoped>
.content {
  box-sizing: border-box;
  position: absolute;
  z-index: 1;
  padding: 5px;
  border: 2px solid rgb(1, 51, 1);
  border-radius: 5px;
  background-color: rgb(225, 236, 183);
}
</style>