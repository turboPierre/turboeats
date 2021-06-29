import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import axios from "axios";
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

import Login from './components/Login.vue';
import Register from './components/Register.vue';
import Menu from './components/Menu.vue'
import DelivererRegister from './components/DelivererRegister.vue';
import RestaurantRegister from './components/RestaurantRegister.vue';
import VueCookie from 'vue-cookie';

import MyAccount from './components/MyAccount.vue';
import Basket from './components/Basket.vue';
import OrderedHistory from './components/OrderedHistory.vue';
import PageRestaurant from "./components/PageRestaurant.vue";
import RestaurantMenu from "./components/RestaurantMenu.vue";
import RestaurantAdd from "./components/RestaurantAdd.vue";
import DelivererMenu from "./components/DelivererMenu.vue";
import DelivererCommand from "./components/DelivererCommand.vue";


Vue.prototype.$http = axios;

Vue.prototype.$app_api_uri = "http://localhost:8081";
Vue.prototype.$auth_api_uri = "http://localhost:8080";


Vue.use(VueCookie);
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
      path: '/menu',
      component: Menu,
      name: 'menu'
    },
    {
      path: '/restaurant/:id',
      component: PageRestaurant,
      name: 'PageRestaurant'
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
    {
      path: '/myaccount',
      component: MyAccount,
      name: 'MyAccount'
    },
    {
      path: '/basket',
      component: Basket,
      name: 'Basket'
    },
    {
      path: '/orderedhistory',
      component: OrderedHistory,
      name: 'OrderedHistory'
    },
    {
      path: '/restaurantMenu',
      component: RestaurantMenu,
      name: 'restaurantMenu'
    },
    {
      path: '/restaurantAdd',
      component: RestaurantAdd,
      name: 'restaurantAdd'
    },
    {
      path: '/delivererMenu',
      component: DelivererMenu,
      name: 'delivererMenu'
    },
    {
      path: '/delivererCommand',
      component: DelivererCommand,
      name: 'delivererCommand'
    },
    { path: '*', redirect: '/menu' }
  ]
});


Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
