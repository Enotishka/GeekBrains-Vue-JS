<template>
  <v-dialog v-model="modalWindow" @click:outside="onClose">
    <v-toolbar color="teal" dark>
      <v-toolbar-title>{{ modalWindowSettings.header }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon dark @click="onClose">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card>
      <component
        :is="modalWindow"
        v-if="modalWindow"
        v-bind="modalWindowProps"
      />
    </v-card>
  </v-dialog>
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
    onClose() {
      this.$modal.hide();
    },
  },
};
</script>