<template>
  <div id="chart">
    <apexchart
      height="300"
      type="donut"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import { mapGetters } from "vuex";
export default {
  name: "DiagramComponent",
  components: {
    apexchart: VueApexCharts,
  },
  computed: {
    ...mapGetters(["getCategoryList", "getAllCosts"]),
    series() {
      const categories = this.getCategoryList();
      const costs = this.getAllCosts();
      return categories.map((category) =>
        costs
          .filter((cost) => cost.category === category)
          .reduce((sum, cost) => sum + cost.value, 0)
      );
    },

    chartOptions() {
      return {
        labels: this.getCategoryList(),
        dataLabels: {
          enabled: false,
        },
      };
    },
  },
};
</script>

<style scoped>
</style>

