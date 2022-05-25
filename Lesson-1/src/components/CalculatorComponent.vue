<template>
<div>
  <div class="main">
    <label for="operand1">
      <input id="operand1" type="number" v-model.number="operand1">
    </label>
    <label for="operand2">
      <input id="operand2" type="number" v-model.number="operand2">
    </label>
    = {{ result }}
  </div>
  <div>
    <button @click="result = operand1 + operand2">+</button>
    <button @click="sub">-</button>
    <button @click="div">/</button>
    <button @click="mult">*</button>
    <button @click="pow">**</button>
    <button @click="integer">/</button>
  </div>
</div>
</template>

<script>
export default {
  name: 'CalculatorComponent',
  data() {
    return {
      operand1: 0,
      operand2: 0,
      result: 0,
    };
  },
  methods: {
    sub() {
      this.result = this.operand1 - this.operand2;
    },
    div() {
      this.result = this.operand1 / this.operand2;
    },
    mult() {
      this.result = this.operand1 * this.operand2;
    },
    pow() {
      this.result = this.operand1 ** this.operand2;
    },
    integer() {
      this.result = parseInt(this.operand1 / this.operand2, 10);
    },
  },
};
</script>
