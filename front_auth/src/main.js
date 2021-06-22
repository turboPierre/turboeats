import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import VueRouter from 'vue-router';

const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    component: require('./components/HelloWorld')
  }]
})

Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount(require('./App'))
