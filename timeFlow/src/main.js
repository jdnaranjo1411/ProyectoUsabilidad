import './assets/main.css';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import EventPage from '@/components/Pages/EventPage.vue';
import ConfiguracionesPopUp from '@/components/Templates/ConfiguracionesPopUp.vue';
import Dashboard from '@/components/Templates/Dashboard.vue'; // esto no esta en templates!!!
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

// store/modules/projects.js

const state = {
  projects: [],
};

const mutations = {
  ADD_PROJECT(state, project) {
    state.projects.push(project);
  },
  // Otras mutaciones según sea necesario (editar, eliminar, etc.)
};

const actions = {
  addProject({ commit }, project) {
    commit('ADD_PROJECT', project);
  },
  // Otras acciones según sea necesario
};

const getters = {
  getProjects: (state) => state.projects,
};

export default {
  state,
  mutations,
  actions,
  getters,
};


app.use(router);
app.mount('#app');


