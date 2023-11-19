<template>
    <div class="font-selector">
      <label class="font-selector__label" for="fontSelector">Seleccionar Fuente:</label>
      <select
        class="font-selector__select"
        id="fontSelector"
        v-model="selectedFont"
        @change="changeFont"
      >
        <option value="Arial, sans-serif">Arial</option>
        <option value="Roboto, sans-serif">Roboto</option>
        <!-- Agrega más opciones según tus fuentes -->
      </select>
    </div>
  </template>
  
  <script>
  export default {
    name: "FontSelector",
    data() {
      return {
        selectedFont: "Arial, sans-serif",
      };
    },
    methods: {
      changeFont() {
        this.$emit("font-changed", this.selectedFont);
      },
    },
  };
  </script>
  
  <style scoped>
  .font-selector {
    display: flex;
    flex-direction: column;
  }
  
  .font-selector__label {
    margin-bottom: 0.5rem;
    /* Otros estilos según sea necesario */
  }
  
  .font-selector__select {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    /* Otros estilos según sea necesario */
  }
  </style>
    