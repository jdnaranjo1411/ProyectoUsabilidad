<!-- MobileMenu.vue -->

<template>
    <div class="menu-icon" @click="toggleMenu">&#9776;</div>
    <aside v-if="showMenu" class="side-menu">
      <ul>
        <li><router-link to="/tareas">Tareas</router-link></li>
        <li><router-link to="/proyectos">Proyectos</router-link></li>
        <li><router-link to="/configuracion">Configuración</router-link></li>
      </ul>
    </aside>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showMenu: false,
      };
    },
    methods: {
      toggleMenu() {
        this.showMenu = !this.showMenu;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos para el ícono de menú y el menú lateral */
  .menu-icon {
    font-size: 24px;
    cursor: pointer;
    position: fixed;
    top: 15px;
    left: 15px;
  }
  
  .side-menu {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 200px;
    height: 100%;
    background-color: #333;
    padding-top: 60px;
    color: white;
  }
  
  .side-menu ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  .side-menu ul li {
    padding: 15px;
    text-align: center;
  }
  </style>
  