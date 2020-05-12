import store from '../store'
export function canFunc(funcAlias) {
    var routers =[];
    formatConversion(store.getters.permission_routers,routers);
    var index = routers.findIndex(router=>{
        return router.perms==funcAlias
    })
    return index>=0;
}
function formatConversion(list,routers) {
    if(list){
        list.forEach(item=>{
            if(item.perms!='' && item.perms!=undefined){
                routers.push(item);
            }
            formatConversion(item.children,routers)
        })
    }
}
