<template>
  <div class="l_menu_container">
    <logo/>
    <el-scrollbar style="height: calc(100vh - 60px);" :wrapStyle="[{'overflow-x':'hidden'}]">
      <Menu
        :collapse="collapse"
      />
    </el-scrollbar>
  </div>
</template>
<script>
import logo from './logo'
import Menu from './Menu'
export default {
  name: 'SideMenu',
  components: {
    logo,
    Menu
  },
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    $route(key){
      let data = {
          path: key.fullPath,
          keepAlive: key.meta.keepAlive,
          title: key.meta.title
        }
      this.$store.dispatch('RoutingPathData', data)
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
</style>