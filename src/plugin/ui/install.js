import Vue from 'vue'
import Ant from './ant-ui'
import 'ant-design-vue/dist/antd.css'
// 注册组件
;[...Ant.components].forEach((i) => Vue.use(i))

// 注册指令服务
// Ant.serve.forEach((i) => Vue.use(i.directive))

// 注册挂载方法
// Ant.methods.forEach((i) => (Vue.prototype[`$${i.name}`] = i.action))
