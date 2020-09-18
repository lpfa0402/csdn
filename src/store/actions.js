// 接受组件通知触发mutatios调用间接更新状态方法的对象
// 引入mutation-types与mutations进行通信
import {ROUTINGPATHDATA} from './mutation-types'
export default {
  // 存储路由路径
  RoutingPathData ({commit}, data) {
    commit(ROUTINGPATHDATA, {data})
  }
}