import './assets/main.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router' //se importan las librerias
import EventPage from '../src/components/Pages/EventPage.vue' //se importa el componente header

import App from './App.vue'

const app = createApp(App)

const routes = [
  { path: '/', component: EventPage }, // aqui solo se probo el componente header, lo correcto seria llamar un componente dentro de la carpeta pages 
  /* para realizar las distintas paginas tenemos que utilizar routers anidados
   AQUI LA DOCUMENTACION: https://router.vuejs.org/guide/essentials/nested-routes.html
  */
]
const router = createRouter({
  history: createWebHistory(),
  routes
})


app.use(router)
app.mount('#app')

