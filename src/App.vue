<template>
  <div id="app">
    <NavigationTop></NavigationTop>
    <router-view></router-view>
  </div>
</template>

<script>


import NavigationTop from "@/components/NavigationTop";
export default {
  name: 'App',
  components: {
    NavigationTop

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
}
</style>
