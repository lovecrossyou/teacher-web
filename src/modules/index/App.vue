<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
html {
  height: 100%;
  padding: 0;
  margin: 0;
}
body {
  height: 100%;
  margin: 0;
  background-color: #EBEBEB;
}
#app {
  height: 100%;
}
* {
  touch-action: pan-y;
}
</style>
