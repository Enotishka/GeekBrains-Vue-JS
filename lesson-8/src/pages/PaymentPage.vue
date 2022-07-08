<template>
  <EditCostsComponent :initCategory="category" :initAmount="amount" />
</template>

<script>
import EditCostsComponent from "../components/EditCostsComponent.vue";

export default {
  name: "PaymentPage",
  components: {
    EditCostsComponent,
  },
  props: ["category", "amount"],
};
</script>