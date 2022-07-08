<template>
  <v-card class="text-left pa-8">
    <v-text-field v-model="category" label="Сategory name"></v-text-field>
    <v-btn color="teal" dark @click="add">ADD</v-btn>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddCategoryComponent",
  data() {
    return {
      category: "",
    };
  },
  methods: {
    ...mapActions(["addNewCategories"]),
    add() {
      this.addNewCategories(this.category);
    },
  },
};
</script>