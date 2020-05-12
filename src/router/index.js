import Vue from 'vue'
import VueRouter from 'vue-router'
/* Layout */
import Layout from '@/views/layout/index'
Vue.use(VueRouter)
const _import = require("./_import_" + process.env.NODE_ENV)
export const constantRouterMap = [
  {
    path: '/redirect',
    component: Layout,
    meta: { hidden: true},
    children: [
      {
        path: '/redirect/:path*',
        component: _import('redirect/index')
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: 'dashboard',
    name: 'dashboard',
    meta: { title: 'Dashboard', icon: 'gs-icon-home2', hidden: false},
    children: [
      {
        path: 'dashboard',
        component: _import('dashboard/index'),
        name: 'dashboard',
        meta: { title: 'Dashboard', icon: 'gs-icon-home2', affix: true, hidden: false},
      }
    ]
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    meta: { title: '404', hidden: true},
  },
  { path: '*', redirect: '/404', meta: { hidden: true} }
]
export const asyncRouterMap = []
const router =  new VueRouter({
  mode: 'history', // require service support
  // scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
});
router.$addRoutes = (params) => {
  router.matcher = new Router({ // 重置路由规则
    mode: 'history', // require service support
    routes: constantRouterMap
  }).matcher;
  router.addRoutes(params) // 添加路由
};
export default router
