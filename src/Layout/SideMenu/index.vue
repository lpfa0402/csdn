<template>
  <div class="l_menu_container">
    <logo/>
    <el-scrollbar style="height: calc(100vh - 60px);" :wrapStyle="[{'overflow-x':'hidden'}]">
      <el-menu
        router
        class="l_menu"
        default-active="2"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu index="1">
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="/testA/testA">testA</el-menu-item>
            <el-menu-item index="/testA/testB">testB</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="/testC">
          <i class="el-icon-menu"></i>
          <span slot="title">testC</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
import logo from './logo'
export default {
  name: 'SideMenu',
  components: {
    logo
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
.l_menu_container{
  position: relative;
  height: 100%;
  background-color: rgb(84, 92, 100);
}
.l_menu{
  width: 200px;
}
</style>