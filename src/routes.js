import loginForm from './components/login/index.login.vue'
import dashboard from './components/dashboard/index.dashboard.vue'
import dashboardHome from './components/dashboard/home/index.dashboard.home.vue'
import tableMenu from './components/dashboard/tableMenu/index.tablemenu.vue'
import addMenu from './components/dashboard/tableMenu/addMenu.vue'

export function Routes(){
    return [
        {
            path:'/login',
            name:'loginForm',
            component:loginForm,
        },
        {
            path:'/dashboard',
            name:'dashboard',
            component:dashboard,
            children:[{
                path:'/dashboard/home',
                name:'dashboardHome',
                component:dashboardHome,
            },
            {
                path:'/dashboard/manage/menu',
                name:'manageMenu',
                component:tableMenu,
                children:[{
                    path:'/dashboard/manage/menu/add',
                    name:'addMenu',
                    component:addMenu
                }]
            }
        ]
        }
    ]
}