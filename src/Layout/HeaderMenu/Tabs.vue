<script>
import { mapState } from 'vuex';
export default {
  name: 'Tabs',
  props: {},
  components: {},
  data() {
    return{
      activeKey: null,
    }
  },
  computed: {
    ...mapState(['RoutingPathData']),
  },
  created() {
    // 刷新页面，获取当前路由
    let data = {
        path: this.$route.fullPath,
        keepAlive: this.$route.meta.keepAlive,
        title: this.$route.meta.title
      }
    this.$store.dispatch('RoutingPathData', data)
    this.activeKey = this.$route.fullPath
  },
  watch: {
    // 监视路由，获取当前路由给选项卡赋当前选中值
    $route(key){
      this.activeKey = key.fullPath
    }
  },
  methods: {
    // 根据vuex内的路由列表创建Tabs标签
    createTab() {
      return(
        this.RoutingPathData.map(item => {
          return <el-tab-pane key={item.path} name={item.path} label={item.title} />
        })
      )
    },
    // 点击跳转到对应标签及页面
    switchTab(item) {
      this.$router.push({ path: item.name})
    },
    removeTab(targetName) {
      // 关闭标签删除vuex内对应的路由
      this.$store.dispatch('removeRoutingPathData', targetName)
      // 判断如果是关闭的当前页标签，路由跳转到最后一个标签对应的页面,并选中对应的标签
      if (targetName == this.activeKey) {
        this.$router.push({ path: this.RoutingPathData[this.RoutingPathData.length - 1].path})
        this.activeKey = this.RoutingPathData[this.RoutingPathData.length - 1].path
      }
    }
  },
  render() {
    return (
      <div class="l_multi_wrap">
        <el-tabs type="card" value={this.activeKey} closable={true} on-tab-click={this.switchTab} on-tab-remove={this.removeTab} closable={this.RoutingPathData.length > 1}>
          {this.createTab()}
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