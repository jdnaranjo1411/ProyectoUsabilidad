<template>
  <div class="header-option" @click="toggleDropdown">
    <button ref="button" @click="toggleDropdown">
      <span class="header-option__icon material-symbols-outlined">
        <slot name="icon"></slot>
      </span>
    </button>
    <span class="header-option__tooltip">
      <slot name="tooltip"></slot>
    </span>
    <!-- Nuevo bloque para el menú desplegable -->
    <div v-show="showDropdown" class="dropdown">
      <label for="fontSelector">Seleccionar Fuente:</label>
      <select id="fontSelector" v-model="selectedFont" @change="changeFont">
        <option value="Arial, sans-serif">Arial</option>
        <option value="Roboto, sans-serif">Roboto</option>
        <!-- Agrega más opciones según tus fuentes -->
      </select>

      <label for="fontSizeSelector">Tamaño de Letra:</label>
      <select id="fontSizeSelector" v-model="selectedFontSize" @change="changeFontSize">
        <option value="16">16px</option>
        <option value="18">18px</option>
        <!-- Agrega más opciones según tus tamaños -->
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderOpcion",
  data() {
    return {
      showDropdown: false,
      selectedFont: "Arial, sans-serif",
      selectedFontSize: "16",
    };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    changeFont() {
      // Puedes aplicar la nueva fuente al body o a un contenedor específico
      document.body.style.fontFamily = this.selectedFont;
    },
    changeFontSize() {
      // Puedes aplicar el nuevo tamaño de letra al body o a un contenedor específico
      document.body.style.fontSize = `${this.selectedFontSize}px`;
    },
  },
};
</script>

<style scoped>
/* Estilos actuales del componente HeaderOpcion */
.header-option {
  aspect-ratio: 1/1;
  height: 100%;
  display: flex;
  align-items: center;
}

.header-option button {
  background-color: transparent;
  width: 100%;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  height: 100%;
}

.header-option__icon {
  font-size: 2rem;
}

.header-option__tooltip {
  position: absolute;
  transform: translate(calc(-50% + 0.5rem), calc(100% + 0.5rem));
  background-color: rgba(0, 0, 0, 1);
  color: #fff;
  padding: 0.5rem;
  border-radius: 0.5rem;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.header-option button:hover + .header-option__tooltip,
.header-option button:focus + .header-option__tooltip,
.header-option .dropdown {
  /* Estilos adicionales para el menú desplegable */
  opacity: 1;
  transition: opacity 0.5s ease 2s;
}

/* Estilos adicionales para el menú desplegable */
.header-option .dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 1rem;
  border-radius: 5px;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.header-option label {
  color: white;
  margin-bottom: 0.5rem;
}

.header-option select {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid white;
  border-radius: 3px;
  background-color: transparent;
  color: white;
}
</style>
