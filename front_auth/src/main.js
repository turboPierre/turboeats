import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

import Login from './components/Login.vue';
import Register from './components/Register.vue';
import DelivererRegister from './components/DelivererRegister.vue';
import RestaurantRegister from './components/RestaurantRegister.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: Login,
      name: 'login'
    },
    {
      path: '/register',
      component: Register,
      name: 'register'
    },
    {
      path: '/deliverer_register',
      component: DelivererRegister,
      name: 'deliverer_register'
    },
    {
      path: '/restaurant_register',
      component: RestaurantRegister,
      name: 'restaurant_register'
    },
    { path: '*', redirect: '/login' }
  ]
})


Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
