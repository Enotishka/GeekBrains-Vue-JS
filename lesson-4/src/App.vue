<template>
  <div id="app">
    <CostsListComponent :costsList="displayedCostsList" @costs-list-add="isEdit = !isEdit" />
    <PaginationComponent :itemsPerPage="costsPerPage" :itemsCount="costsList.length" @page-changed="firstDisplayedCostIndex = costsPerPage * ($event - 1)"/>
    <EditCostsComponent v-if="isEdit" @add-cost="addCost(nextId++, $event.date, $event.description, $event.amount)" />
  </div>

</template>

<script>
import CostsListComponent from './components/CostsListComponent.vue';
import EditCostsComponent from './components/EditCostsComponent.vue';
import PaginationComponent from './components/PaginationComponent.vue';

export default {
  name: 'App',
  components: {
    CostsListComponent,
    EditCostsComponent,
    PaginationComponent
  },
  data() {
    return {
      costsList: [],
      nextId: 0,
      isEdit: false,
      firstDisplayedCostIndex: 0,
      costsPerPage: 5,
    };
  },
  computed: {
    displayedCostsList() {
      return this.costsList.slice(this.firstDisplayedCostIndex, this.firstDisplayedCostIndex + this.costsPerPage);
    }
  },
  methods: {
    addCost(id, date, category, value) {
      this.costsList.push({id, date, category, value});
    }
  },
}
</script>

<style>
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
</style>
