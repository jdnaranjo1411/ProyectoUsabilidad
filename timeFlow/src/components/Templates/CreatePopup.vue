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
            <h1 class="Titulo-Popup">Crear Proyecto</h1>
            <button class="close-button" @click="closePopup">
            <span class="material-symbols-outlined">close</span>
            </button>
            <form @submit.prevent="createProject" class="popup-form">
            <LabelInput :placeholder="'Nombre del Proyecto:'" :Name = "'projectName'" :required = "'true'"  v-model="projectName" :icon="'tactic'">
              Nombre del Proyecto:
            </LabelInput>

              <!--
                <label for="projectName">Nombre del Proyecto:</label>
                <input type="text" id="projectName" v-model="projectName" required />
                -->

                <label for="projectDescription" class="labelDescripcion">Descripción del Proyecto:</label>
                <textarea id="projectDescription" v-model="projectDescription" required></textarea>
              

                <div class="popup-buttons">
                    <Boton1 :texto="'Crear'" type="submit" />
                </div>
            </form>
        </div>
    </div>
</template>
  
<script>
import Boton1 from '@/components/Atoms/Boton1.vue';
import LabelInput from '@/components/Molecules/LabelInput.vue';
export default {
    props: {
        showPopup: Boolean,
    },
    data() {
        return {
            projectName: '',
            projectDescription: ''
        }
    },
    methods: {
  closePopup() {
    this.$emit('closePopup');
    this.resetForm(); // Llamar a resetForm aquí
  },
  createProject() {
    const projectData = {
      name: this.projectName,
      description: this.projectDescription,
    };

    this.$emit('createProject', projectData);
    this.resetForm();
    this.closePopup();
  },
  resetForm() {
    this.projectName = '';
    this.projectDescription = '';
  },
  
},
components: {
  Boton1,
  LabelInput,
}
};

</script>
  
<style scoped>

#projectDescription{
  height: 100px;
  background-color: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-text);
  font-size: 1.1rem;
}
.labelDescripcion{
  font-size: 1.4rem;
}
.Titulo-Popup{
  font-size: 1.7rem;
  font-weight: bold;
  margin-bottom: 20px;
  align-self: center;
}
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
}

.popup-container {
  background: var(--color-popUpBackground);
  display: flex;
  flex-direction: column;
  padding: 30px 60px;
  border-radius: 12px;
  box-shadow: 0 0 40px 6px var(--color-shadow1);
  position: relative;
  max-width: 600px;
  min-width: 220px;
  width: 90%;
}

.close-button {
  position: absolute;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 10px;
  right: 20px;
  font-size: 24px;
  cursor: pointer;
  border-radius: 50%;
  border: none;
  background-color: transparent;
}

.close-button:hover {
  font-weight: bold;
  background-color: var(--color-shadow1);
}

.popup-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

.text-input {
  padding: 10px;
  border: none;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  outline: none; /* Elimina el contorno predeterminado en algunos navegadores */
}

.popup-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}


</style>
  