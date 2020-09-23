// 包含多个由action触发直接更新状态方法的对象
// 引入mutation-types内定义的常量用于和mutation通信
import {ADDROUTINGPATHDATA, REMOVEROUTINGPATHDATA, CLOSEROUTINGPATHDATA} from './mutation-types'
export default {
  // 路由路径
  [ADDROUTINGPATHDATA] (state, {params}) {
    // 判断RoutingPathData内是否存在新的路由不存在则插入
    let flag = true
    for (let i=0; i<state.RoutingPathData.length; i++) {
      if (state.RoutingPathData[i].path == params.path) {
        flag = false
        break
      }
    }
    if (flag) {
      state.RoutingPathData.push(params)
    }
  },
  // 删除路由路径
  [REMOVEROUTINGPATHDATA] (state, {params}) {
    state.RoutingPathData.map((item, index) => {
      if (item.path == params) {
        state.RoutingPathData.splice(index,1)
      }
    })
  },
  // 批量删除
  [CLOSEROUTINGPATHDATA] (state, {params}) {
    state.RoutingPathData.map((item, index) => {
      if (item.path == params.path) {
        if(params.option == 'left'){
          state.RoutingPathData.splice(0,index)
        } else if(params.option == 'right') {
          state.RoutingPathData.splice(index + 1, state.RoutingPathData.length-index)
        }else if(params.option == 'Others') {
          state.RoutingPathData = [item]
        }
      }
    })
  },
}