<template>
    <div class="project-section" aria-label = "Seccion de Proyectos" tabindex="0">
      <h2 class="project-section__title">{{ sectionTitle }}</h2>
      <div class="project-section__cards">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
      </div>
    </div>
  </template>
  
  <script>
  import ProjectCard from '@/components/Atoms/ProjectCard.vue';
  
  export default {
    props: {
      sectionTitle: {
        type: String,
        required: true,
      },
      projects: {
        type: Array,
        required: true,
      },
    },
    components: {
      ProjectCard,
    },
  };
  </script>
  
  <style scoped>
  .project-section {
    padding: 24px;
    border: 2px solid var(--color-bordercontrast);
  }
  
  .project-section__title {
    margin-bottom: 16px;
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .project-section__cards {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    
  }
  </style>
  