<template>
  <el-menu
      class="el-menu-demo"
      id="navigation_top"
      mode="horizontal"
      @select="handleSelect"
      background-color="#305B9D"
      text-color="#fff"
      active-text-color="#ffd04b"
      :default-active="default_index">
    <Title></Title>
    <el-menu-item index="1" class="el_menu_item">
      <router-link to="/team_introduction/survey" class="router_link">队伍介绍</router-link>
    </el-menu-item>
    <el-menu-item index="2" class="el_menu_item">
      <router-link to="/function_display" class="router_link">功能展示</router-link>
    </el-menu-item>
    <el-menu-item index="3" class="el_menu_item">
      <router-link to="/system_introduction/software" class="router_link">软硬件系统介绍</router-link>
    </el-menu-item>
  </el-menu>
</template>

<script>
import Title from "./Title";
export default {
  name: "NavigationTop",
  components: {
    Title,
  },
  data(){
    return {
      default_index: '1',
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
#navigation_top{
  display: flex;
  justify-content: space-around;
}
.el_menu_item{
  font-size: 1em;
  font-weight: bold;
}
</style>