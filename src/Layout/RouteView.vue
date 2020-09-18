<script>
// 引入vueX内存储的路径数据，给include赋值实现指定路由组件缓存
import { mapState } from 'vuex';
export default {
  name: 'RouteView',
  data() {
    return {
    };
  },
  computed: {
    ...mapState(['RoutingPathData']),
    // 获取需要缓存的路由
    includeData() {
      let data = '';
      this.RoutingPathData.map((item, index) => {
        if (item.keepAlive && item.keepAlive == true) {
          let itemdata = item.key.split('/')
          if (index == this.RoutingPathData.length - 1) {
            data += itemdata[itemdata.length - 1]
          } else {
            data += itemdata[itemdata.length - 1] + ','
          }
        }
      });
      console.log(data, 'data------')
      return data
    }
  },
  render() {
    return (
      <keep-alive include={this.includeData}>
        <router-view />
      </keep-alive>
    );
  }
};
</script>
