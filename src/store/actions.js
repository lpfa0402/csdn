// 接受组件通知触发mutatios调用间接更新状态方法的对象
// 引入mutation-types与mutations进行通信
import {TEST} from './mutation-types'
export default {
  VuexTest ({commit}, data) {
    commit(TEST, {data})
  }
}