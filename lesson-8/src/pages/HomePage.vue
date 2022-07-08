<template>
  <v-container>
    <div class="text-left text-h5 text-sm-h3 mb-13">My personal costs</div>
    <v-row class="mb-5">
      <v-btn class="mr-5" color="teal" dark @click="addNewCost">
        ADD NEW COST <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn color="teal" dark @click="addNewCategory">
        ADD NEW CATEGORY <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-row>
    <v-row>
      <v-col>
        <CostsListComponent
          :costsList="getCosts(firstDisplayedCostIndex, costsPerPage)"
        />
        <v-pagination
          color="teal"
          dark
          v-model="page"
          :length="pagesCount"
          @input="firstDisplayedCostIndex = costsPerPage * (page - 1)"
        ></v-pagination>
      </v-col>
      <v-col>
        <DiagramComponent />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import CostsListComponent from "../components/CostsListComponent.vue";
import DiagramComponent from "../components/DiagramComponent.vue";

export default {
  name: "HomePage",
  components: {
    CostsListComponent,
    DiagramComponent,
  },
  data() {
    return {
      costsList: [],
      nextId: 0,
      firstDisplayedCostIndex: 0,
      page: 1,
      costsPerPage: 5,
    };
  },
  computed: {
    ...mapGetters(["getCosts", "getCostsCount"]),
    pagesCount() {
      const costsCount = this.getCostsCount();
      if (costsCount === 0) {
        return 1;
      } else {
        return Math.ceil(costsCount / this.costsPerPage);
      }
    },
  },
  methods: {
    addNewCost() {
      this.$modal.show("EditCostsComponent", { header: "Edit cost" });
    },
    addNewCategory() {
      this.$modal.show("AddCategoryComponent", { header: "Add category" });
    },
  },
};
</script>
