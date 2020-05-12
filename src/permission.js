import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
import { getToken } from '@/utils/auth'
import permission from "./store/modules/permission"; // getToken from cookie

NProgress.configure({ showSpinner: false })// NProgress Configuration

// permission judge function
function hasPermission(roles, permissionRoles) {
  if (roles.indexOf('superuser') >= 0) return true // admin permission passed directly
  if (!permissionRoles) return true
  return roles.some(role => permissionRoles.indexOf(role) >= 0)
}

const whiteList = ['/login', '/auth_wechat','/404','/401'];// no redirect whitelist
router.onReady(async ()=>{
  const accessRoutes =  await store.dispatch('GenerateRoutes');
  router.addRoutes(accessRoutes?accessRoutes:[]);
});
router.beforeEach(async(to, from, next) => {
  NProgress.start(); // start progress bar
  if (getToken()) { // determine if there has token
    /* has token*/
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
    } else {
      // const accessRoutes =  await store.dispatch('GenerateRoutes');
      // router.addRoutes(accessRoutes);
      // generate accessible routes map based on roles
      // const permission_routers = JSON.parse(localStorage.getItem("addRouters"));

      // console.log(accessRoutes);
      // dynamically add accessible routes
      next();
      // const permission_routers = localStorage.getItem("addRouters");
      // if(permission_routers){
      //   next();
      // }else{
      //       store.dispatch('FedLogOut').then(() => {
      //         Message.error('权限失效，请重新登录');
      //         next({ path: '/' });
      //       })
      // }
      //判断用户信息
      // if (store.getters.user.realname == undefined || store.getters.user.realname=='') { // 判断当前用户是否已拉取完user_info信息
      //   store.dispatch('GetUserInfo').then(() => { // 拉取user_info
      //     store.dispatch('GenerateRoutes').then(() => { // 根据roles权限生成可访问的路由表
      //       router.addRoutes(store.getters.addRouters); // 动态添加可访问路由表
      //       next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
      //     })
      //   }).catch((err) => {
      //     store.dispatch('FedLogOut').then(() => {
      //       Message.error(err)
      //       next({ path: '/' })
      //     })
      //   })
      // } else {
      //   // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
      //   hasPermission([],[])
      //   // if (hasPermission(store.getters.roles, to.roles)) {
      //   next()
      //   // } else {
      //   //   next({ path: '/401', replace: true, query: { noGoBack: true }})
      //   // }
      //   // 可删 ↑
      // }
    }
  } else {
    /* has no token*/
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    }else {
      next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
      NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
    }
  }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
