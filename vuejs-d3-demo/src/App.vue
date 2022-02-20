<template>
  <div id="app">
    <img alt="Vue logo" class="logo" src="./assets/logo.png">
    <img alt="Vue logo" class="middle-logo" src="./assets/handshake.png">
    <img alt="Vue logo" class="logo" src="./assets/d3.png">
    <CircleChart msg="Combining D3.js with Vue.js"/>
  </div>
</template>

<script>
import CircleChart from './components/CircleChart.vue'

export default {
  name: 'app',
  components: {
    CircleChart
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.logo {
  width: 100px;
}
.middle-logo {
  height: 50px;
}
</style>
