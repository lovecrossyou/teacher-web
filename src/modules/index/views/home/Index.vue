<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
     <h5>数据录入~~</h5>
    <ManagerForm msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import ManagerForm from './components/ManagerForm.vue'

export default {
  name: 'app',
  components: {
    ManagerForm
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 20px;
}
</style>
