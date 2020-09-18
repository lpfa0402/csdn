<script>
export default {
  name: 'Tabs',
  props: {},
  components: {},
  data() {
    return{}
  },
  created () {
    // 创建时获取当前路由，给缓存路由组件使用
    console.log(this.$route, 'this.$route---------')
  },
  methods: {
    removeTab(targetName) {
      console.log(targetName)
      // let tabs = this.editableTabs;
      // let activeName = this.editableTabsValue;
      // if (activeName === targetName) {
      //   tabs.forEach((tab, index) => {
      //     if (tab.name === targetName) {
      //       let nextTab = tabs[index + 1] || tabs[index - 1];
      //       if (nextTab) {
      //         activeName = nextTab.name;
      //       }
      //     }
      //   });
      // }
      
      // this.editableTabsValue = activeName;
      // this.editableTabs = tabs.filter(tab => tab.name !== targetName);
    }
  },
  render() {
    return (
      <div class="l_multi_wrap">
        <el-tabs type="card" value="用户管理" closable={true} on-tab-remove={this.removeTab}>
          <el-tab-pane label="用户管理"></el-tab-pane>
          <el-tab-pane label="1" ></el-tab-pane>
          <el-tab-pane label="1"></el-tab-pane>
          <el-tab-pane label="1"></el-tab-pane>
          <el-tab-pane label="1"></el-tab-pane>
          <el-tab-pane label="1"></el-tab-pane>
          <el-tab-pane label="1"></el-tab-pane>
          <el-tab-pane label="1"></el-tab-pane>
          <el-tab-pane label="1"></el-tab-pane>
          <el-tab-pane label="1"></el-tab-pane>
          <el-tab-pane label="1"></el-tab-pane>
          <el-tab-pane label="1"></el-tab-pane>
          <el-tab-pane label="1"></el-tab-pane>
          <el-tab-pane label="1"></el-tab-pane>
          <el-tab-pane label="1"></el-tab-pane>
          <el-tab-pane label="1"></el-tab-pane>
          <el-tab-pane label="1"></el-tab-pane>
          <el-tab-pane label="1"></el-tab-pane>
          <el-tab-pane label="1"></el-tab-pane>
          <el-tab-pane label="1"></el-tab-pane>
          <el-tab-pane label="1"></el-tab-pane>
        </el-tabs>
      </div>
    )
  }
}
</script>
<style lang="less" scoped>
.l_multi_wrap{
  height: 40px;
  position: absolute;
  left: 64px;
  right: 10px;
  bottom: 0px;
}
</style>