import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import MainMenu from './components/MainMenu.vue';
import MobileMenu from './components/MobileMenu.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  // Define tus rutas aquí si estás utilizando Vue Router
];

const router = new VueRouter({
  routes,
  mode: 'history', // o usa 'hash' si prefieres URLs con hash
});

// Registra tus componentes globales
Vue.component('main-menu', MainMenu);
Vue.component('mobile-menu', MobileMenu);

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');



