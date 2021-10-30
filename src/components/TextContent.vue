<template>
  <div class="text_content">
    <h3 class="intelligence_title" style="text-align: center;" v-html="title"></h3>
          <p class="tab_text" v-for="para in content" :key="para.id" style="text-indent:2em;">{{para}}</p>
    <img v-for="item in imgs" :key="item.id" :src="item.src" alt="" class="intel_picture">
  </div>
</template>

<script>
export default {
  name: "TextContent",
  props: {
    title: String,
    content: Array,
    source: String,
    imgs: Array,
  },
  data() {
    return {
      activeName: 'first'
    };
  },
  methods: {
  },
}
</script>

<style scoped>
.text_content{
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: 10%;
}
.tab_text{
  margin: 1% 6%;
  line-height: 190%;
}
.intel_picture{
  margin: 3% 6%;
  max-width: 552px;
}
</style>