<template>
<div>
  <div class="main">
      <!-- eslint-disable-next-line -->
      <input id="operand1" type="number" v-model.number="operand1">
      <!-- eslint-disable-next-line -->
      <input id="operand2" type="number" v-model.number="operand2">
    = {{ result }}
  </div>
  <div class="operators">
    <button @click="result = operand1 + operand2">+</button>
    <button @click="sub">-</button>
    <button @click="div">/</button>
    <button @click="mult">*</button>
    <button @click="pow">**</button>
    <button @click="integer">/</button>
  </div>
  <div>
    <label for="checkbox">
      <input type="checkbox" name="checkbox" v-model="checked">
      Отобразить экранную клавиатуру
    </label>
  </div>
  <div v-if="checked">
    <div class="keyboard" >
      <button v-for="num in 10" @click="keyboard(num - 1)" :key="num">{{num - 1}}</button>
      <button @click="back">🠔</button>
    </div>
    <div>
      <label for="one">
        <input type="radio" id="one" value="Один" v-model="picked">
        Операнд1
      </label>
      <label for="two">
        <input type="radio" id="two" value="Два" v-model="picked">
        Операнд2
      </label>
    </div>
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
      checked: false,
      picked: 'Один',
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
    keyboard(num) {
      if (this.picked === 'Один') {
        this.operand1 = this.operand1 * 10 + num;
      } else {
        this.operand2 = this.operand2 * 10 + num;
      }
    },
    back() {
      if (this.picked === 'Один') {
        this.operand1 = parseInt(this.operand1 / 10, 10);
      } else {
        this.operand2 = parseInt(this.operand2 / 10, 10);
      }
    },
  },
};

</script>

<style scoped>
.operators {
  margin-bottom: 50px;
}
</style>
