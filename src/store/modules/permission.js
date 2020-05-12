import {constantRouterMap,asyncRouterMap} from '@/router'
import {getRouters} from '@/api/role'
import {getToken} from '@/utils/auth'

/* Layout */
import Layout from '@/views/layout/index'

const _import = require('../../router/_import_' + process.env.NODE_ENV)

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表,暂未使用
 * @param routes asyncRouterMap
 * @param roles
 */
function filterAsyncRouter(routes, roles) {
    const res = []

    routes.forEach(route => {
        const tmp = {...route}
        if (hasPermission(roles, tmp)) {
            if (tmp.children) {
                tmp.children = filterAsyncRouter(tmp.children, roles)
            }
            res.push(tmp)
        }
    })

    return res
}

/**
 * 递归过滤异步路由表
 * @param routes asyncRouterMap
 * @param roles
 */
function asyncRouter(routes) {
    const res = []
    routes.forEach(route => {
        const tmp = {...route}
        if (tmp.component != undefined) {
            if (tmp.component == 'Layout') {
                tmp.component = Layout
            } else {
                try {
                    tmp.component = _import(route.component)
                }catch (e) {
                    tmp.component = null
                }
            }
        }
        if (tmp.children) {
            tmp.children = asyncRouter(tmp.children)
        }
        res.push(tmp)
    })
    return res
}

function setChildren(parentId,allList) {
    var children = [];
    allList.forEach(element=>{
        if(element.parentId == parentId){
            var childRoute = {
                path:element.path,
                name:element.name,
                component:element.component,
                title:element.title,
                hidden:(element.hidden=="1")?true:false,
                icon:element.icon,
                menuType:element.menuType,
                perms:element.perms,
                meta: {
                    hideSidebar: element.hideSidebar == 1 ? true : false,
                    keepAlive:false
                }
            };
            childRoute.children = setChildren(element.moduleId,allList);
            children.push(childRoute)
        }
    });
    return children;
}

const permission = {
    state: {
        routers: constantRouterMap,
        addRouters:JSON.parse(localStorage.getItem("addRouters"))
    },
    mutations: {
        SET_ROUTERS: (state, routers) => {
            state.addRoutes = routers;
            state.routers = constantRouterMap.concat(routers)
        }
    },
    actions: {
        GenerateRoutes({commit}) {
            if (getToken()) {
                return new Promise(async(resolve, reject) => {
                    const response = await getRouters();
                    let accessedRouters = [];
                    if (response.dec.code == '000000') {
                        const data = response.data;
                        //处理结果，注入路由
                        var modList = [];
                        // if(data.modList!='' && data.modList != undefined) {
                        //     data.modList.forEach(element => {
                        //         if (element.parentId == "0") {
                        //             //顶级路由
                        //             let route = {
                        //                 path: element.path,
                        //                 component: element.component,
                        //                 hidden: (element.hidden == "1") ? true : false,
                        //                 name: element.name,
                        //                 icon: element.icon,
                        //                 title: element.title,
                        //                 menuType:element.menuType,
                        //                 perms: element.perms,
                        //                 meta: {
                        //                     hideSidebar: element.hideSidebar == 1 ? true : false,
                        //                     keepAlive:false
                        //                 }
                        //             };
                        //             if (element.redirect != null && element.redirect != '') {
                        //                 route.redirect = element.redirect
                        //             }
                        //             //递归整理路由
                        //             route.children = setChildren(element.moduleId, data.modList);
                        //             modList.push(route);
                        //         }
                        //     });
                        // }
                        accessedRouters = asyncRouter(data);
                    }
                    commit('SET_ROUTERS', asyncRouterMap.concat(accessedRouters));
                    resolve(asyncRouterMap.concat(accessedRouters))
                })
            }
        },

    }
}

export default permission
