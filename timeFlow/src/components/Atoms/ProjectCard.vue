<template>
    <div class="project-card">
      <div class="project-card__header">
        <!-- Aqui iria la imagen -->
      </div>
      <div class="project-card__content">
        <h3 class="project-card__title">{{ project.title }}</h3>
        <p class="project-card__description">{{ project.description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      project: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .project-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .project-card__header {
    height: 150px;
    background-size: cover;
    background-position: center;
  }
  
  .project-card__content {
    padding: 16px;
  }
  
  .project-card__title {
    margin: 0;
    font-size: 1.2rem;
    font-weight: bold;
  }
  
  .project-card__description {
    margin: 8px 0;
    font-size: 1rem;
    color: #555;
  }
  </style>
  