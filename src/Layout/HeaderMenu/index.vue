<template>
  <div class="l_header">
    <!-- 打开收起侧边栏图标 -->
    <span class="l_collapse" @click="clickHandler">
      <i :class="[isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold']" />
    </span>
  </div>
</template>
<script>
export default {
  name: 'HeaderMenu',
  props: {
    collapse: { // 设置侧边栏默认是打开还是收起
      type: Boolean,
      default: false
    },
    switchCollapse: {
      type: Function,
      default: () => {}
    }
  },
  components: {},
  data() {
    return {
      isCollapse: this.collapse
    };
  },
  methods: {
    clickHandler() {
      this.isCollapse = !this.isCollapse
      this.switchCollapse(this.isCollapse)
    },
  }
}
</script>
<style lang="less" scoped>
.l_header{
  margin: 0 -20px;
  height: 60px;
  background-color: #fff;
  border-bottom: 1px solid #dedede;
  position: relative;
  z-index: 3;
}
.l_collapse {
  display: inline-block;
  font-size: 24px;
  line-height: 60px;
  padding: 0 20px;
  cursor: pointer;
  transition: color 0.3s ease;
  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
}
</style>