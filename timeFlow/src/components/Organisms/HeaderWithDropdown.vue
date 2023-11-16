<template>
    <div class="header-with-dropdown">
      <button-menu @click="toggleDropdown">
        <profile-icon>👤</profile-icon>
      </button-menu>
      <dropdown-menu :visible="dropdownVisible">
        <!-- Contenido del menú desplegable -->
        <ul>
          <li><a href="#">Opción 1</a></li>
          <li><a href="#">Opción 2</a></li>
          <!-- Añade más opciones según sea necesario -->
        </ul>
      </dropdown-menu>
    </div>
  </template>
  
  <script>
  import ButtonMenu from '@/components/atoms/Headerutil/ButtonMenu.vue';
  import ProfileIcon from '@/components/atoms/Headerutil/ProfileIcon.vue';
  import DropdownMenu from '@/components/molecules/DropdownMenu.vue';
  
  export default {
    name: 'HeaderWithDropdown',
    components: {
      ButtonMenu,
      ProfileIcon,
      DropdownMenu
    },
    data() {
      return {
        dropdownVisible: false
      };
    },
    methods: {
      toggleDropdown() {
        this.dropdownVisible = !this.dropdownVisible;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos del encabezado con menú desplegable según BEM */
  .header-with-dropdown {
    /* ... estilos */
  }
  </style>
  