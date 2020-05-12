const routers = [{
        path:'/interview',
        component:'Layout',
        redirect:'/interview/index',
        name:'staff',
        meta: { title: '面试管理', icon: 'el-icon-user', affix: true, hidden: false},
        children:[
            { 
                path: 'index', 
                name:'staff',
                component: 'interview/index', 
                meta: { title: 'Interview', icon: 'el-icon-date', affix: true, hidden: false}
            }
        ]
    },
    {
        path:'/staff',
        component:'Layout',
        redirect:'/staff/index',
        name:'staff',
        meta: { title: 'Employees', icon: 'el-icon-user', affix: true, hidden: false},
        children:[
            { 
                path: 'index', 
                name:'staff',
                component: 'staff/index', 
                meta: { title: 'Employees', icon: 'el-icon-postcard', affix: true, hidden: false}
            },
            { 
                path: 'toregular', 
                name:'staff',
                component: 'staff/toregular', 
                meta: { title: 'ToRegular', icon: 'el-icon-bell', affix: true, hidden: false}
            },
            { 
                path: 'wages', 
                name:'staff',
                component: 'staff/wages', 
                meta: { title: 'Wages', icon: 'el-icon-wallet', affix: true, hidden: false}
            },
        ]
    },
    {
        path:'/work',
        component:'Layout',
        redirect:'/work/index',
        name:'work',
        meta: { title: 'Attendance', icon: 'el-icon-date', affix: true, hidden: false},
        children:[
            { 
                path: 'list', 
                name:'work',
                component: 'work/list', 
                meta: { title: 'Attendance', icon: 'el-icon-date', affix: true, hidden: false}
            },
            { 
                path: 'index', 
                name:'work',
                component: 'work/index', 
                meta: { title: 'Leave Record', icon: 'el-icon-date', affix: true, hidden: false}
            },
            { 
                path: 'out', 
                name:'work',
                component: 'work/out', 
                meta: { title: 'Out Record', icon: 'el-icon-bell', affix: true, hidden: false}
            },
            { 
                path: 'business_trip', 
                name:'work',
                component: 'work/business_trip', 
                meta: { title: 'Travel Record', icon: 'el-icon-wallet', affix: true, hidden: false}
            },
            { 
                path: 'overtime', 
                name:'work',
                component: 'work/overtime', 
                meta: { title: 'Overtime Record', icon: 'el-icon-wallet', affix: true, hidden: false}
            },
            { 
                path: 'paid_leave', 
                name:'work',
                component: 'work/paid_leave', 
                meta: { title: 'Paid Leave', icon: 'el-icon-wallet', affix: true, hidden: false}
            },
        ]
    },
    {
        path:'/hrset',
        component:'Layout',
        redirect:'/hrset/index',
        name:'hrset',
        meta: { title: 'HR Setting', icon: 'el-icon-set-up', affix: true, hidden: false},
        children:[
            { 
                path: 'index', 
                name:'hrset',
                component: 'hrset/head_count', 
                meta: { title: 'Head Count', icon: 'el-icon-coordinate', affix: true, hidden: false}
            },
            { 
                path: 'out', 
                name:'hrset',
                component: 'hrset/time', 
                meta: { title: 'Attendance Set', icon: 'el-icon-bell', affix: true, hidden: false}
            },
            { 
                path: 'hrset', 
                name:'hrset',
                component: 'hrset/cost', 
                meta: { title: 'Department Cost', icon: 'el-icon-coin', affix: true, hidden: false}
            }
        ]
    },
]


export default {
    modules: () => {
        var result = {
            dec:{
                code:'000000',
                msg:'success'
            },
            data:routers
        }
        return result
    }
  }