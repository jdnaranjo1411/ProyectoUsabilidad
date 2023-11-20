<template>
    <div class="dashboard" aria-label="Navegacion principal">
      <!-- Otras secciones de tu dashboard si las tienes -->
      <EventSection sectionTitle="Eventos" :events="upcomingEvents" />
      <ProjectSection sectionTitle="Proyectos" :projects="projects" />
    </div>
  </template>
  
  <script>
   import ProjectSection from '../Molecules/ProjectSection.vue';
   import EventSection from '../Molecules/EventSection.vue';
  
  export default {
    props: {
      upcomingEvents: {
        type: Array,
        required: true,
      },
      projects: {
        type: Array,
        required: true,
      },
    },
    components: {
      ProjectSection,
      EventSection
    },
  
}
  </script>
  
  <style scoped>
  .dashboard {
    padding: 24px;
  }
  </style>
  