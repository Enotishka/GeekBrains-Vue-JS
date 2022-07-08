<template>
  <v-card class="text-left pa-8">
    <v-select
      v-model="category"
      label="Category"
      :items="getCategoryList()"
    ></v-select>
    <v-text-field v-model.number="amount" label="Value"></v-text-field>
    <v-menu v-model="isDatePickerVisible">
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          :value="date"
          label="Date"
          readonly
          v-on="on"
          v-bind="attrs"
        ></v-text-field>
      </template>
      <v-date-picker
        v-model="isoDate"
        @input="isDatePickerVisible = false"
      ></v-date-picker>
    </v-menu>
    <v-btn color="teal" dark @click="add">SAVE</v-btn>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import moment from "moment";

export default {
  name: "EditCostsComponent",
  props: {
    initId: {
      required: false,
      default: "",
    },
    initCategory: {
      required: false,
      default: "",
    },
    initAmount: {
      required: false,
      default: "",
    },
    initDate: {
      required: false,
      default: "",
    },
  },
  data() {
    return {
      id: this.initId,
      category: this.initCategory,
      amount: this.initAmount,
      isoDate: this.initDate
        ? this.convertDateCustomToISO(this.initDate)
        : moment().format("YYYY-MM-DD"),
      isDatePickerVisible: false,
    };
  },
  computed: {
    ...mapGetters(["getCategoryList"]),
    date() {
      return this.convertDateISOtoCustom(this.isoDate);
    },
  },
  methods: {
    ...mapActions(["addNewCost"]),
    add() {
      this.addNewCost({
        id: this.id,
        category: this.category,
        value: this.amount,
        date: this.date,
      });
    },
    convertDateISOtoCustom(date) {
      return moment(date, "YYYY-MM-DD").format("DD.MM.YYYY");
    },
    convertDateCustomToISO(date) {
      return moment(date, "DD.MM.YYYY").format("YYYY-MM-DD");
    },
  },
};
</script>