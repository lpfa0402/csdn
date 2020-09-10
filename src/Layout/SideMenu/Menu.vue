<script>
// 引入模拟路由数组
import RouterList from '@/mock/RouterList.js';
export default {
  name: 'Menu',
  props: {
    collapse: { // 是否收起菜单
      type: Boolean,
      default: false,
    },
    KeepAlive: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      defaultActive: '', // 控制刷新页面后打开当前菜单
    };
  },
  created() {
    this.defaultActive = this.$route.path;
  },
  methods: {
    createMenu(arr) {
      return arr.map((item) => {
        // 如果存在子集
        if (Array.isArray(item.children)) {
          return (
            <el-submenu index={item.path}>
              <template slot="title">
                {item.icon && <i class={item.icon} />}
                <span title={item.title}>{item.title}</span>
              </template>
              {this.createMenu(item.children)}
            </el-submenu>
          );
        } else {
          return (
            <el-menu-item index={item.key}>
              <template slot="title">
                {item.icon && <i class={item.icon} />}
                <span title={item.title}>{item.title}</span>
              </template>
            </el-menu-item>
          );
        }
      })
    },
    open(key, keyPath) {
      this.$emit('open', key, keyPath)
    }
  },
  render() {
    const MenuAttribute = {
      props: {
        router: true,
        backgroundColor: 'rgb(84, 92, 100)',
        textColor: '#FFF',
        collapse: this.collapse
      },
      on: {
        open: this.open
      }
    }
    if (this.KeepAlive) {
      MenuAttribute.props.defaultActive = this.defaultActive
    }
    return (
      <div>
        <el-menu style="width: 100%" {...MenuAttribute}>{this.createMenu(RouterList.data)}</el-menu>
      </div>
    );
  },
  watch: {
    $route({ path }) {
      this.defaultActive = path;
    },
  },
}
</script>