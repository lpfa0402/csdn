<template>
  <div class="l_menu_container">
    <logo/>
    <el-scrollbar style="height: calc(100vh - 60px);" :wrapStyle="[{'overflow-x':'hidden'}]">
      <Menu
        @open="open"
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
  methods: {
    open(key, keyPath) {
      console.log(key, keyPath)
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