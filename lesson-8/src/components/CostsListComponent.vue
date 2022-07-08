<template>
  <v-container>
    <v-row class="text-h6">
      <v-col :cols="2">#</v-col>
      <v-col :cols="3">Date</v-col>
      <v-col :cols="4">Category</v-col>
      <v-col :cols="2">Value</v-col>
    </v-row>
    <v-row
      v-for="item in costsList"
      :key="item.id"
      align="center"
      justify="center"
    >
      <v-col :cols="2">{{ item.id }}</v-col>
      <v-col :cols="3">{{ item.date }}</v-col>
      <v-col :cols="4">{{ item.category }}</v-col>
      <v-col :cols="2">{{ item.value }}</v-col>
      <v-col :cols="1">
        <v-btn icon @click="menu(item, $event)">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CostsListComponent",
  props: ["costsList"],
  methods: {
    menu(item, event) {
      const bodyRect = document.body.getBoundingClientRect();
      const elemRect = event.target.getBoundingClientRect();

      this.$contextMenu.show("CostMenuComponent", {
        target: item,
        position: {
          x: elemRect.left - bodyRect.left,
          y: elemRect.bottom - bodyRect.top,
        },
      });
    },
  },
};
</script>

