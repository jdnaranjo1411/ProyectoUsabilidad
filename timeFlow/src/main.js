import './assets/main.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router' //se importan las librerias
import Header from './components/Organisms/header/Header.vue'

import App from './App.vue'

const app = createApp(App)

const routes = [
  { path: '/', component: Header }, // aqui solo se probo el componente header, lo correcto seria llamar un componente dentro de la carpeta pages 
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

