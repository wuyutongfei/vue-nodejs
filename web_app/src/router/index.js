import Vue from 'vue'
import Router from 'vue-router'
import Vmain from '@/components/Vmain'
import Vnote from '@/components/Vnote'
import Vabout from '@/components/Vabout'
import Vmaking from '@/components/Vmaking'

//页面路由分配规则就设置在这里
Vue.use(Router)
export default new Router({
  //设置路由规则
  routes: [
    {
      path: '/',//路径
      name: 'Vmain',//名字
      component: Vmain//组件
    },
    {
      path: '/note',//路径
      name: 'Vnote',//名字
      component: Vnote//组件
    },
    {
      path: '/about',//路径
      name: 'Vabout',//名字
      component: Vabout//组件
    }
    ,
    {
      path: '/making',//路径
      name: 'Vmaking',//名字
      component: Vmaking//组件
    }
  ]
})
