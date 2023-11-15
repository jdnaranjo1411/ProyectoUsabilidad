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
    <div v-if="showPopup" class="popup-overlay" @click.self="closePopup">
    <div class="popup-container">
      <span class="close-button" @click="closePopup">&times;</span>
      <form @submit.prevent="createProject" class="popup-form">
        <label for="projectName">Nombre del Proyecto:</label>
        <input type="text" id="projectName" v-model="projectName" required />

        <label for="projectDescription">Descripción del Proyecto:</label>
        <textarea id="projectDescription" v-model="projectDescription" required></textarea>

        <div class="popup-buttons">
          <button type="submit" class="create-button">Crear</button>
          <button type="button" class="cancel-button" @click="closePopup">Cancelar</button>
        </div>
      </form>
    </div>
  </div>

  </template>
  
  <script>
  export default {
    props: {
      showPopup: Boolean,
    },
    data(){
        return{
            projectName: '',
            projectDescription: ''
        }
    },
    methods: {
      closePopup() {
        this.$emit('closePopup');
        this.resetForm();
      },
      createProject() {
        // Lógica para crear el nuevo proyecto
        this.$emit('createProject', projectData /* Datos del proyecto */);
        this.resetForm();
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
    background: black;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
    position: relative;
  }
  
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    cursor: pointer;
    color: white;
  }
  .popup-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.popup-buttons {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.create-button,
.cancel-button {
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
}

.create-button:hover {
  background-color: green;
}

.cancel-button:hover {
  background-color: red;
}
  </style>
  