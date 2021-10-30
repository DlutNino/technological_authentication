<template>
  <div class="title">
    <router-link tag="div" to="/" class="router_link">OurEDA</router-link>
  </div>
</template>

<script>
export default {
  name: "Title"
}
</script>

<style scoped>
.title{
  color: white;
  font-family: Haettenschweiler;
  font-weight: lighter;
  cursor: pointer;
  font-size: 2.5em;
  line-height: 60px;
  text-align: center;
}
</style>