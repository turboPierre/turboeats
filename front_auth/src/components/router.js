import login from './Login.vue'
import register from './Register.vue'

export const routes: [
    {
      path: '/login',
      component: login,
      name: 'login'
    },
    {
      path: '/register',
      component: register,
      name: 'register'
    },
    {
        path: '*',
        redirect: '/login'
    }
  ]