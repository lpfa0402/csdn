<script>
import { mapState } from 'vuex';
export default {
  name: 'Tabs',
  props: {},
  components: {},
  data() {
    return{
      activeKey: null,
      visible: false,
      position:{
        x: 0,
        y: 0
      },
      closePath: null
    }
  },
  computed: {
    ...mapState(['RoutingPathData']),
  },
  mounted() {
    // 刷新页面，获取当前路由
    let data = {
        path: this.$route.fullPath,
        keepAlive: this.$route.meta.keepAlive,
        title: this.$route.meta.title
      };
    this.$store.dispatch('addRoutingPathData', data);
    this.activeKey = this.$route.fullPath;
    // 绑定dom节点，用于鼠标右击操作
    this.bindRightClick()
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
      if (item.name !== this.activeKey){
        this.$router.push({ path: item.name})
      }
    },
    removeTab(targetName) {
      // 关闭标签删除vuex内对应的路由
      this.$store.dispatch('removeRoutingPathData', targetName)
      // 判断如果是关闭的当前页标签，路由跳转到最后一个标签对应的页面,并选中对应的标签
      if (targetName == this.activeKey) {
        this.$router.push({ path: this.RoutingPathData[this.RoutingPathData.length - 1].path})
        this.activeKey = this.RoutingPathData[this.RoutingPathData.length - 1].path
      }
    },
    // 右键菜单
    // 绑定点击右击事件
    bindRightClick() {
      this.$refs.tabs.$el.addEventListener('contextmenu', (e)=>{
        e.preventDefault(); // 阻止鼠标右击浏览器默认事件
        let classNames = [...e.target.classList]; // 获取触发右键事件的所有元素的class
        // 判断classNames内是否包含tabs__item，确定点击到的是标签卡
        if(classNames.includes('el-tabs__item')) {
          // 获取点击元素的id， 因为el-tabs直接用“tab-”加路由路径给每个选项卡id赋值，截取可获取当前点击的页卡对应的路由路径
          let path = e.target.getAttribute('id').replace(/^tab-/, '');
          this.closePath = path
          // 给右键菜单的位置赋值
          this.position.x = e.clientX || e.pageX;
          this.position.y = e.clientY || e.pageY;
          this.visible = true;
        }
      })
      // 鼠标左击任意位置关闭菜单
      document.body.addEventListener('click', ()=>{
        this.visible = false;
      })
    },
    // 点击关闭对应选项卡
    closeTabs(val) {
      // 判断当前关闭的菜单，重新定位路由
      if(this.activeKey !== this.closePath){
        let closeIndex = null;
        let activeIndex = null;
        this.RoutingPathData.map((item, index) => {
          if (item.path == this.closePath){
            closeIndex = index
          }
          if (item.path == this.activeKey){
            activeIndex = index
          }
        });
        if (val == 'left' && closeIndex > activeIndex) {
          this.$router.push({ path: this.RoutingPathData[this.RoutingPathData.length - 1].path})
          this.activeKey = this.RoutingPathData[this.RoutingPathData.length - 1].path
        }
        if (val == 'right' && closeIndex < activeIndex) {
          this.$router.push({ path: this.RoutingPathData[closeIndex].path})
          this.activeKey = this.RoutingPathData[closeIndex].path
        }
        if (val == 'Others') {
          this.$router.push({ path: this.RoutingPathData[closeIndex].path})
          this.activeKey = this.RoutingPathData[closeIndex].path
        }
      }
      let data = {
        path: this.closePath,
        option: val
      };
      this.$store.dispatch('CloseRoutingPathData', data);
    }
  },
  render() {
    return (
      <div class="l_tabs_wrap">
        <el-tabs ref="tabs" type="card" value={this.activeKey} on-tab-click={this.switchTab} on-tab-remove={this.removeTab} closable={this.RoutingPathData.length > 1}>
          {this.createTab()}
        </el-tabs>
        {this.visible&&this.RoutingPathData.length > 1 ? (
          <div class="l_dropdown_wrapper" style={{ left: `${this.position.x + 10}px`, top: `${this.position.y + 2}px` }}>
            <el-dropdown-item nativeOnClick={() => this.closeTabs('left')}>关闭左侧</el-dropdown-item>
            <el-dropdown-item nativeOnClick={() => this.closeTabs('right')}>关闭右侧</el-dropdown-item>
            <el-dropdown-item nativeOnClick={() => this.closeTabs('Others')}>关闭其他</el-dropdown-item>
          </div>
        ) : null}
      </div>
    )
  }
}
</script>
<style lang="less" scoped>
.l_tabs_wrap{
  height: 40px;
  position: absolute;
  left: 64px;
  right: 10px;
  bottom: 0px;
}
.l_dropdown_wrapper{
  list-style: none;
  min-width: 90px;
  background: #FFF;
  z-index: 9999;
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  position: fixed;
}
</style>