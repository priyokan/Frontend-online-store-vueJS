import loginForm from './components/login/index.login.vue'
import dashboard from './components/dashboard/index.dashboard.vue'
import dashboardHome from './components/dashboard/home/index.dashboard.home.vue'

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
            }
        ]
        }
    ]
}