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
import AddButton from './components/Atoms/AddButton.vue';
import CreatePopup from './components/Templates/CreatePopup.vue';
import HeaderVue from './components/Organisms/Header.vue';
export default{
    data() {
    return {
      popupVisible: false,
    };
  },
  methods: {
    showPopup() {
      this.popupVisible = true;
      
        const elements = document.querySelectorAll('body *');
        elements.forEach((element) => {
            element.dataset.originalTabindex = element.getAttribute('tabindex');
            element.setAttribute('tabindex', '-1');
        });
       
    },
    closePopup() {
      this.popupVisible = false;
      const elements = document.querySelectorAll('body *');
        elements.forEach((element) => {
            element.setAttribute('tabindex', element.dataset.originalTabindex);
        });
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
    HeaderVue,
},
};
</script>



