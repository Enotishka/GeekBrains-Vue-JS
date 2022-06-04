<template>
  <div>
    <form class="payment-form">
      <input placeholder="Payment description" type="text" v-model="description">
      <input placeholder="Payment amount" type="text" v-model="amount">
      <input placeholder="Payment date" type="text" v-model="date">
      <button class="add" @click.prevent="add">ADD+</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EditCostsComponent',
  data() {
    return {
     description: "",
     amount: "",
     date: "",
    };
  },
  methods: {
    add() {
      this.$emit('add-cost', {
        description: this.description, 
        amount: this.amount, 
        date: this.date
      })
    }
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