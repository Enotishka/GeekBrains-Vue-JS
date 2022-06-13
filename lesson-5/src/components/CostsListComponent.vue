<template>
  <div class="costs-list">
    <div class="buttons">
      <button class="button" @click.prevent="addNewCost">ADD NEW COST+</button>
      <button class="button" @click.prevent="addNewCategory">ADD NEW CATEGORY+</button>
    </div>  
    <div class="table-row table-header">
      <div>#</div>
      <div>Date</div>
      <div>Category</div>
      <div>Value</div>
    </div>
    <div class="table-row" v-for="item in costsList" :key="item.id">
      <div>{{ item.id }}</div>
      <div>{{ item.date }}</div>
      <div>{{ item.category }}</div>
      <div>{{ item.value }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CostsListComponent',
  props: ["costsList"],
  methods: {
    addNewCost() {
      this.$emit('costs-list-add-cost');
    },
    addNewCategory() {
      this.$emit('costs-list-add-category')
    }
  }
}
</script>

<style scoped>
.costs-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 250px;
}

.buttons {
  display: flex;
  gap: 25px;
}

.button {
  cursor: pointer;
  background-color: rgb(7, 179, 15);
  padding: 10px;
}

.table-row {
  display: grid;
  grid-template-columns: repeat(4, 200px);
  border-bottom: 1px  rgba(133, 133, 133, 0.233) solid;
}

.table-header {
  font-weight: bold;
}

</style>

