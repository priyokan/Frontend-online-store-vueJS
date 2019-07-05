import loginForm from './components/login/index.login.vue'
import dashboard from './components/dashboard/index.dashboard.vue'

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
        }
    ]
}