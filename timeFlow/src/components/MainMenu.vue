<template>
    <header>
      <h1>TimeFlow</h1>
      <nav>
        <ul>
          <li><router-link to="/tareas">Tareas</router-link></li>
          <li><router-link to="/proyectos">Proyectos</router-link></li>
          <li><router-link to="/configuracion">Configuración</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <style scoped>
  header {
    background-color: #333;
    color: white;
    padding: 15px;
    text-align: center;
  }
  
  nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  nav ul li {
    display: inline;
    margin-right: 20px;
  }
  
  nav a {
    text-decoration: none;
    color: white;
    font-weight: bold;
  }
  </style>
  