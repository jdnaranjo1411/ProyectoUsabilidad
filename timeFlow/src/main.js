import './assets/main.css';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import EventPage from '@/components/Pages/EventPage.vue';
import ConfiguracionesPopUp from '@/components/Templates/ConfiguracionesPopUp.vue';
import Dashboard from '@/components/Organisms/Dashboard.vue'; // esto no esta en templates!!!
import App from './App.vue';

const app = createApp(App);

const routes = [
  { path: '/', component: EventPage, name: 'EventPage' },
  { path: '/dashboard', component: Dashboard, name: 'Dashboard' },
  // Otras rutas según sea necesario
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);
app.mount('#app');


