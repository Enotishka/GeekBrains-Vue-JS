<template>
  <div class="add-new-category">
    <input placeholder="Category name" type="text" v-model="category">
    <button class="add" @click.prevent="add">ADD</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AddCategoryComponent',
  data() {
    return {
     category: "",
    };
  },
  methods: {
     ...mapActions(['addNewCategories']),
    add() {
      this.addNewCategories(this.category);
    }
  }
}
</script>

<style scoped>
.add-new-category {
  display: flex;
  margin-top: 25px;
}

.add {
  cursor: pointer;
  background-color: rgb(7, 179, 15);
  padding: 5px;
}
</style>