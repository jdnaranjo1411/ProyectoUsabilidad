<!-- components/molecules/CreatePopup.vue -->

<template>
    <div v-if="showPopup" class="popup-overlay">
      <div class="popup-container">
        <span class="close-button" @click="closePopup">&times;</span>
        <!-- Contenido del formulario para crear proyecto/evento -->
        <form @submit.prevent="createProject">
          <!-- Campos del formulario (nombre, descripción, etc.) -->
          <button type="submit">Crear</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      showPopup: Boolean,
    },
    methods: {
      closePopup() {
        this.$emit('closePopup');
      },
      createProject() {
        // Lógica para crear el nuevo proyecto
        this.$emit('createProject', /* Datos del proyecto */);
        this.closePopup();
      },
    },
  };
  </script>
  
  <style scoped>
  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .popup-container {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    position: relative;
  }
  
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    cursor: pointer;
  }
  </style>
  