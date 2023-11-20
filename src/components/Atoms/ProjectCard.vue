<template>
    <div class="project-card"  :aria-label="project.title + 'tarjeta Proyecto'"  role="button" tabindex="0" @click="redirect" @keyup.enter="redirect">
      <div class="project-card__header">
        <img src="@/assets/imgs/3.jpeg" alt="Project image" />
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
    methods:{
      redirect(){
        window.location.href = "/proyecto";
      }
    }

    
    
    
  };
  </script>
  
  <style scoped>
  .project-card {
    border: 1px solid var(--color-border);
    border-radius: 8px;
    overflow: hidden;
    min-width: 500px;
    transition: ease 0.2s;
  }
  .project-card:hover {
    box-shadow: 0 0 12px 2px var(--color-shadow1);
    cursor: pointer;
    background-color: var(--color-highlight);
  }

  
  .project-card__header {
    height: 150px;
    background-size: cover;
    background-position: center;
    overflow: hidden;
  }

  .project-card__header img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    color:  var(--color-text-subtle);
  }
  </style>
  