<template>
  <el-container class="l_container">
    <el-aside style="transition: width 0.3s; overflow: visible;" :width="!this.collapse ? '200px' : '64px'">
      <SideMenu :collapse="collapse"/>
    </el-aside>
    <el-container>
      <el-header>
        <HeaderMenu :collapse="collapse" :switchCollapse="this.switchCollapse"/>
      </el-header>
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
import HeaderMenu from './HeaderMenu/index'
export default {
  name: 'Container',
  components: {
    SideMenu,
    HeaderMenu
  },
  data() {
    return {
      collapse: false,
    }
  },
  methods: {
    switchCollapse(val) {
      this.collapse = val
      // 菜单收起测导航栏同步收起
    }
  }
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