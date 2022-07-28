<template>
  <div class="menu">
    <div class="menu-item" @click="edit">Edit</div>
    <div class="menu-item" @click="remove">Remove</div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "CostMenuComponent",
  props: ["target"],
  methods: {
    ...mapMutations(["removeCosts"]),
    edit() {
      this.$contextMenu.hide();
      this.$modal.show("EditCostsComponent", {
        header: "Edit cost",
        id: this.target.id,
        category: this.target.category,
        amount: this.target.value,
        date: this.target.date,
      });
    },
    remove() {
      this.removeCosts(this.target.id);
    },
  },
};
</script>

<style scoped>
.menu {
  display: flex;
  flex-direction: column;
}

.menu-item {
  padding: 0 10px;
  cursor: pointer;
}

.menu-item:hover {
  background-color: aliceblue;
}
</style>