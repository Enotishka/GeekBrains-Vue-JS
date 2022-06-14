<template>
  <div>
    <form class="payment-form">
      <select v-model="category">
        <option v-for="option in getCategoryList" :value="option" :key="option">
          {{ option }}
        </option>
      </select>
      <input placeholder="Payment amount" type="text" v-model="amount">
      <input placeholder="Payment date" type="text" v-model="date">
      <button class="add" @click.prevent="add">ADD+</button>
    </form>
  </div>
  
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'EditCostsComponent',
  props: {
    initCategory: {
      required: false,
      default: ""
    },
    initAmount: {
      required: false,
      default: ""
    }
  },
  data() {
    return {
      category: this.initCategory,
      amount: this.initAmount,
      date: new Date().toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }),
    };
  },
  computed: {
    ...mapGetters(['getCategoryList'])
  },
  methods: {
    ...mapActions(['addNewCost', 'fetchCategories']), 
    add() {
      this.addNewCost({
        category: this.category, 
        value: this.amount, 
        date: this.date
      });
    }
  },
  created() {
    this.fetchCategories();
  }
}
</script>

<style scoped>
.payment-form {
  display: flex;
  flex-direction: column;
  width: 200px;
  margin-top: 20px;
}

.add {
  cursor: pointer;
  background-color: rgb(7, 179, 15);
  padding: 10px;
}
</style>