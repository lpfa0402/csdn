export default {
  data: [
    {
      path: '/testA', // 注册路由的路径
      key: '/testA', // 唯一值
      title: '测试组件分组', // 显示的路由名称
      icon: 'el-icon-s-check', // 图标
      children: [
        {
          path: '/testA/testA',
          key: '/testA/testA',
          title: '组件一',
        },
        {
          path: '/testA/testB',
          key: '/testA/testB',
          title: '组件二',
        }
      ]
    },
    {
      path: '/testC',
      key: '/testC',
      title: '组件C',
      icon: 'el-icon-s-check',
    }
  ]
};
