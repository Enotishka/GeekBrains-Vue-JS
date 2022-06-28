<template>
  <div class="page-numbers">
    <div class="button" @click="handlePrevButton()">&lt;</div>  
    <div :class="{active: num === currentPageNumber}" class="button" @click="handleNumberButton(num)" v-for="num in pagesCount" :key="num">{{num}}</div>
    <div class="button" @click="handleNextButton()">&gt;</div>
  </div>
</template>

<script>
  export default {
    name: 'PaginationComponent',
    props: ["itemsPerPage", "itemsCount"],
    data() {
      return {
        currentPageNumber: 1,
      };
    },
    computed: {
      pagesCount() {
        if (this.itemsCount === 0) {
          return 1;
        } else {
          return Math.ceil(this.itemsCount / this.itemsPerPage);
        }
      }
    },
    methods: {
      handlePrevButton() {
        if (this.currentPageNumber === 1) {
          return;
        }
        this.currentPageNumber = this.currentPageNumber - 1;
        this.$emit('page-changed', this.currentPageNumber);
      },
      handleNextButton() {
        if (this.currentPageNumber === this.pagesCount) {
          return;
        }
        this.currentPageNumber = this.currentPageNumber + 1;
        this.$emit('page-changed', this.currentPageNumber);
      },
      handleNumberButton(num) {
        this.currentPageNumber = num;
        this.$emit('page-changed', this.currentPageNumber);
      }
    }
  }
</script>

<style scoped>
.page-numbers {
  display: flex;
  justify-content: center;
  border: 1px black solid;

}

.button {
  padding: 4px;
  cursor: pointer;
}

.active {
  font-weight: bold;
  color: rgb(7, 179, 15);
}
</style>