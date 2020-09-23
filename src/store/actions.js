// 接受组件通知触发mutatios调用间接更新状态方法的对象
// 引入mutation-types与mutations进行通信
import {ADDROUTINGPATHDATA, REMOVEROUTINGPATHDATA, CLOSEROUTINGPATHDATA} from './mutation-types'
export default {
  // 存储路由路径
  addRoutingPathData ({commit}, params) {
    commit(ADDROUTINGPATHDATA, {params})
  },
  // 删除路由路径
  removeRoutingPathData ({commit}, params) {
    commit(REMOVEROUTINGPATHDATA, {params})
  },
  // 批量删除路由路径
  CloseRoutingPathData({commit}, params) {
    commit(CLOSEROUTINGPATHDATA, {params})
  }
}