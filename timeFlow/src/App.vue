<template>
     <div>
    <!-- Contenido de tu aplicación -->
    <AddButton @showPopup="showPopup" />
    <CreatePopup :showPopup="popupVisible" @closePopup="closePopup" @createProject="createProject" />
  </div>
<RouterView/> 
</template>

<script>
import { RouterView } from 'vue-router';

import AddButton from '@/components/atoms/AddButton.vue';
import CreatePopup from '@/components/Templates/CreatePopup.vue';

export default{
    data() {
    return {
      popupVisible: false,
    };
  },
  methods: {
    showPopup() {
      this.popupVisible = true;
    },
    closePopup() {
      this.popupVisible = false;
    },
    createProject(projectData) {
      // Lógica para agregar el proyecto a Vuex
      this.$store.dispatch('addProject', projectData);
    },
  },
  computed: {
    // Puedes usar este computed para obtener la lista de proyectos
    projects() {
      return this.$store.getters.getProjects;
    },
  },
  components: {
    AddButton,
    CreatePopup,
  },
};
</script>



