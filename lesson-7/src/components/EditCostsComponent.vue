<template>
  <div>
    <form class="payment-form">
      <select class="category" v-model="category">
        <option v-for="option in getCategoryList" :value="option" :key="option">
          {{ option }}
        </option>
      </select>
      <input
        class="amount"
        placeholder="Payment amount"
        type="text"
        v-model="amount"
      />
      <input
        class="date"
        placeholder="Payment date"
        type="text"
        v-model="date"
      />
      <button class="add" @click.prevent="add">SAVE</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

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
      date:
        this.initDate ||
        new Date().toLocaleDateString("ru-RU", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
    };
  },
  computed: {
    ...mapGetters(["getCategoryList"]),
  },
  methods: {
    ...mapActions(["addNewCost", "fetchCategories"]),
    add() {
      this.addNewCost({
        id: this.id,
        category: this.category,
        value: this.amount,
        date: this.date,
      });
    },
  },
  created() {
    this.fetchCategories();
  },
};
</script>

<style scoped>
.payment-form {
  display: flex;
  flex-direction: column;
  width: 200px;
}

.add {
  cursor: pointer;
  background-color: rgb(7, 179, 15);
  padding: 10px;
}
</style>