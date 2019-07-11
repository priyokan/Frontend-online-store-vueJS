import loginForm from './components/login/index.login.vue'
import dashboard from './components/dashboard/index.dashboard.vue'
import dashboardHome from './components/dashboard/home/index.dashboard.home.vue'
import tableMenu from './components/dashboard/tableMenu/index.tablemenu.vue'
import addMenu from './components/dashboard/tableMenu/addMenu.vue'
import deleteMenu from './components/dashboard/tableMenu/delete.vue'
import editMenu from './components/dashboard/tableMenu/editForm.vue'
import manageKue from './components/dashboard/manageKue/index.manageKue.vue'
import deleteKue from './components/dashboard/manageKue/delete.vue'
import AddKue from './components/dashboard/manageKue/add.vue'

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
                path:'home',
                name:'dashboardHome',
                component:dashboardHome,
            },
            {
                path:'manage/menu',
                name:'manageMenu',
                component:tableMenu,
                children:[{
                    path:'add',
                    name:'addMenu',
                    component:addMenu
                },
                {
                    path:'delete',
                    name:'deleteMenu',
                    component:deleteMenu
                },
                {
                    path:'edit',
                    name:'editMenu',
                    component:editMenu
                },
            
                ]
            },
            {
                path:'/dashboard/manage/kue',
                name:'manageKue',
                component:manageKue,
                children:[
                    {
                        path:'delete',
                        name:'deleteKue',
                        component:deleteKue
                    },
                    {
                        path:'add',
                        name:'addKue',
                        component:AddKue,
                    }   
                ]
            }
        ]
        }
    ]
}