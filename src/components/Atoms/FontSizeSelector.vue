<template>
    <div class="font-size-selector">
      <label class="font-size-selector__label" for="fontSizeSelector">Tamaño de Letra:</label>
      <select
        class="font-size-selector__select"
        id="fontSizeSelector"
        v-model="selectedFontSize"
        @change="changeFontSize"
      >
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="4">4</option>
        <!-- Agrega más opciones según tus tamaños -->
      </select>
    </div>
  </template>
  
  <script>
  export default {
    name: "FontSizeSelector",
    data() {
      return {
        selectedFontSize: "2",
      };
    },
    methods: {
      changeFontSize() {
        this.$emit("font-size-changed", this.selectedFontSize);
      },
    },
  };
  </script>
  
  <style scoped>
  .font-size-selector {
    display: flex;
    flex-direction: column;
  }
  
  .font-size-selector__label {
    margin-bottom: 0.5rem;
    /* Otros estilos según sea necesario */
  }
  
  .font-size-selector__select {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    /* Otros estilos según sea necesario */
  }
  </style>
  