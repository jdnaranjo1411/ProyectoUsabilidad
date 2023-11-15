<template>
    <div class="dashboard">
      <!-- Otras secciones de tu dashboard si las tienes -->
      <ProjectSection sectionTitle="Proyectos" :projects="projects" />
    </div>
  </template>
  
  <script>
  import ProjectSection from '@/components/molecules/ProjectSection.vue';
  
  export default {
    data() {
      return {
        projects: [
          { id: 1, title: 'Proyecto 1', description: 'Descripción del Proyecto 1' },
          { id: 2, title: 'Proyecto 2', description: 'Descripción del Proyecto 2' },
          // Agrega más proyectos según sea necesario
        ],
      };
    },
    components: {
      ProjectSection,
    },
  };
  </script>
  
  <style scoped>
  .dashboard {
    padding: 24px;
  }
  </style>
  