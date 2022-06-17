<template>
  <div id="app">
    <header class="header">
      <router-link :to="{name:'HomePage'}">Home</router-link>
      <router-link :to="{name:'PaymentPage'}">Add payment</router-link>
    </header>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  gap: 20px;
  align-self: center;
}
</style>
