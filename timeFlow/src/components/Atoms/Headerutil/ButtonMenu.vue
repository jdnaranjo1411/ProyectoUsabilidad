<template>
    <button class="button-menu" @click="$emit('click')">
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    name: 'ButtonMenu'
  };
  </script>
  
  <style scoped>
  /* Estilos del botón del menú según BEM */
  .button-menu {
    /* ... estilos */
  }
  </style>
  