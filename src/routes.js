import loginForm from './components/login/main.vue'
import dashboard from './components/dashboard/main.vue'

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