// 包含多个由action触发直接更新状态方法的对象
// 引入mutation-types内定义的常量用于和mutation通信
import {ROUTINGPATHDATA} from './mutation-types'
export default {
  // 路由路径
  [ROUTINGPATHDATA] (state, {data}) {
    // 判断RoutingPathData内是否存在新的路由不存在则插入
    if (JSON.stringify(state.RoutingPathData).indexOf(JSON.stringify(data)) < 0) {
      state.RoutingPathData.push(data)
    }
  }
}