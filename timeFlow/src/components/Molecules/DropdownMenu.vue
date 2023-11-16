<template>
    <div v-show="visible" class="dropdown-menu">
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DropdownMenu',
    props: {
      visible: Boolean
    }
  };
  </script>
  
  <style scoped>
  /* Estilos del menú desplegable según BEM */
  .dropdown-menu {
    /* ... estilos */
  }
  </style>
  