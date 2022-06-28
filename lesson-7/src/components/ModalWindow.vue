<template>
  <div class="wrapper">
    <div class="modal">
      <div class="header">
        <div class="title">{{ modalWindowSettings.header }}</div>
        <button class="close-btn" @click="onCloseClick">X</button>
      </div>
      <div class="content">
        <component
          :is="modalWindow"
          v-if="modalWindow"
          v-bind="modalWindowProps"
        />
      </div>
    </div>
  </div>
</template>
<script>
import EditCostsComponent from "./EditCostsComponent";
import AddCategoryComponent from "./AddCategoryComponent";

export default {
  components: {
    EditCostsComponent,
    AddCategoryComponent,
  },
  props: {
    modalWindow: String,
    modalWindowSettings: Object,
  },
  computed: {
    modalWindowProps() {
      if (this.modalWindow === "EditCostsComponent") {
        return {
          initId: this.modalWindowSettings.id,
          initCategory: this.modalWindowSettings.category,
          initAmount: this.modalWindowSettings.amount,
          initDate: this.modalWindowSettings.date,
        };
      }
      return {};
    },
  },
  methods: {
    onCloseClick() {
      this.$modal.hide();
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  border: 2px solid rgb(1, 51, 1);
  border-radius: 10px;
  background-color: rgb(225, 236, 183);
}

.header {
  display: flex;
}

.title {
  flex-grow: 1;
  font-size: 25px;
  font-weight: bold;
}

.close-btn {
  align-self: start;
}
</style>