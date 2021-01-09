import Vue from 'vue';
import VueRouter from 'vue-router';
import prRoutes from './pc/index';
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import("@/layout/layout")
  },
  ...prRoutes
  // {
      // path: '/teacher',
      // name: 'teacher',
      // component: teacher,
      // meta: {
      //     title: '主页'
      // },
      // children: [

          // 匹配不存在的路径页面
          // {
              // path: '*',
              // component: noFound
              // 重定向
              // redirect: '/'
              // redirect: {
              //     path: '/'
              // }
              // 动态设置重定向的目标,to目标路由对象，就是访问的路径的路由信息
              // redirect:(to)=>{
              //     // if(to.path == '/123'){
              //     //     return '/'
              //     // }else if(to.path == '456'){
              //     //     return { path: '/first' }
              //     // }else {
              //     //     return { name: 'index' }
              //     // }
              //     return '/'
              // }
          // },
      // ]
  // }
]

const router = new VueRouter({
    routes,
    mode: 'hash'
})

export default router;