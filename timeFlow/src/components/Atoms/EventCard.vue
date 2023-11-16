
<template>
    <div class="event-card">
      <div class="event-card__header">
        <img src="@/assets/imgs/1.jpeg" alt="Imagen del evento" />
      </div>
      <div class="event-card__content">
        <h3 class="event-card__title">{{ event.title }}</h3>
        <p class="event-card__date">{{ event.start }}</p>
        <p class="event-card__countdown">{{ timeUntilEvent }}</p>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    props: {
      event: {
        type: Object,
        required: true,
      },
    },
    computed: {
      timeUntilEvent() {
        // Lógica para calcular el tiempo restante hasta el evento
        // Puedes utilizar una biblioteca como 'moment.js' para manejar fechas y horas.
        return "2 días"; // Ejemplo, debes implementar la lógica real aquí
      },
    },
  
  };
  </script>
  
  <style scoped>
  .event-card {
    border: 1px solid var(--color-border);
    border-radius: 8px;
    overflow: hidden;
    min-width: 182px;
    transition: ease 0.2s;
    max-width: 300px;
  }

  .event-card:hover {
    box-shadow: 0 0 12px 2px var(--color-shadow1);
    cursor: pointer;
    background-color: var(--color-highlight);
  }
  
  .event-card__header {
    height: 150px; /* Ajusta según tus necesidades */
    background-size: cover;
    background-position: center;
    overflow: hidden;
  }
  
  .event-card__content {
    padding: 16px;
  }
  
  .event-card__title {
    margin: 0;
    font-size: 1.2rem;
    font-weight: bold;
  }
  
  .event-card__date {
    margin: 8px 0;
    font-size: 1rem;
    color: var(--color-text-subtle);
  }
  
  .event-card__countdown {
    font-size: 1rem;
    color: #f00;
  }
  </style>
  

  