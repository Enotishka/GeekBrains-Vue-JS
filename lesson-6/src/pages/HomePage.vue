<template>
  <div class="home-page">
    <CostsListComponent :costsList="getCosts(firstDisplayedCostIndex, costsPerPage)" @costs-list-add-cost="isEditCost = !isEditCost" @costs-list-add-category="isEditCategory = !isEditCategory"/>
    <PaginationComponent :itemsPerPage="costsPerPage" :itemsCount="getCostsCount()" @page-changed="firstDisplayedCostIndex = costsPerPage * ($event - 1)"/>
    <EditCostsComponent v-if="isEditCost" />
    <AddCategoryComponent v-if="isEditCategory" />
  </div>
  
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import CostsListComponent from '../components/CostsListComponent.vue';
import EditCostsComponent from '../components/EditCostsComponent.vue';
import PaginationComponent from '../components/PaginationComponent.vue';
import AddCategoryComponent from '../components/AddCategoryComponent.vue';

export default {
  name: 'HomePage',
  components: {
    CostsListComponent,
    EditCostsComponent,
    PaginationComponent,
    AddCategoryComponent
  },
  data() {
    return {
      costsList: [],
      nextId: 0,
      isEditCost: false,
      isEditCategory: false,
      firstDisplayedCostIndex: 0,
      costsPerPage: 5,
    };
  },
  computed: {
    ...mapGetters(['getCosts', 'getCostsCount']),
  },
  methods: {
    ...mapActions(['fetchCosts']),
  },
  created() {
    this.fetchCosts();
  },
}
</script>

<style>
.home-page {
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
