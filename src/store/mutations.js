// 包含多个由action触发直接更新状态方法的对象
// 引入mutation-types内定义的常量用于和mutation通信
import {TEST} from './mutation-types'
export default {
  [TEST] (state, {data}) {
    state.list = data
    console.log(data)
  },
}