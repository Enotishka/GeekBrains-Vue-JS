<template>
  <div class="home-page">
    <CostsListComponent
      :costsList="getCosts(firstDisplayedCostIndex, costsPerPage)"
    />
    <PaginationComponent
      :itemsPerPage="costsPerPage"
      :itemsCount="getCostsCount()"
      @page-changed="firstDisplayedCostIndex = costsPerPage * ($event - 1)"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CostsListComponent from "../components/CostsListComponent.vue";
import PaginationComponent from "../components/PaginationComponent.vue";

export default {
  name: "HomePage",
  components: {
    CostsListComponent,
    PaginationComponent,
  },
  data() {
    return {
      costsList: [],
      nextId: 0,
      firstDisplayedCostIndex: 0,
      costsPerPage: 5,
    };
  },
  computed: {
    ...mapGetters(["getCosts", "getCostsCount"]),
  },
  methods: {
    ...mapActions(["fetchCosts"]),
  },
  created() {
    this.fetchCosts();
  },
};
</script>

<style scoped>
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
