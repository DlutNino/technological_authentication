<template>
  <el-col :span="12" class="navi_aside">
    <el-menu
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#448CBB"
        text-color="#fff"
        active-text-color="#ffd04b"
        :default-active="default_index">
        <el-menu-item v-for="item in menu_items" :key="item.index" :index="item.index" style="font-weight: bold">
          <router-link tag="div" :to="item.dest" class="router_link">{{item.title}}</router-link>
        </el-menu-item>
    </el-menu>
  </el-col>
</template>

<script>
export default {
  name: "NavigationAside",
  props: {
    menu_items: Array,
  },
  data(){
    return {
      default_index: '1',
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
.navi_aside{
  width: 25%;
  text-align: center;
  height: 100vh;
}
.el-menu-vertical-demo{
  height: 100vh;
}
</style>