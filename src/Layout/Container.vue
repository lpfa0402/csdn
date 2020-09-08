<template>
  <el-container class="l_container">
    <el-aside width="200px">
      <SideMenu/>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <transition name="page-transition" mode="out-in">
          <router-view/>
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import SideMenu from './SideMenu/index'
export default {
  name: 'Container',
  components: {SideMenu}
}
</script>
<style scoped>
.l_container{
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
}
.page-transition-enter-active {
  transition: all 0.3s ease-in;
}
.page-transition-leave-active {
  transition: all 0.3s ease-out;
}
.page-transition-enter,
.page-transition-leave-to {
  opacity: 0;
}
</style>