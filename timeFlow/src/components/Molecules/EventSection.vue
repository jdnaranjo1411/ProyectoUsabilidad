<template>
    <div class="event-section">
      <h2 class="event-section__title">{{ sectionTitle }}</h2>
      <div class="event-section__cards">
        <EventoCard v-for="event in events" :key="event.id" :event="event" />
      </div>
    </div>
  </template>
  
  <script>
  import EventoCard from '@/components/atoms/EventoCard';
  
  export default {
    props: {
      sectionTitle: {
        type: String,
        required: true,
      },
      events: {
        type: Array,
        required: true,
      },
    },
    components: {
      EventoCard,
    },
  };
  </script>
  
  <style scoped>
  .event-section {
    margin-bottom: 24px;
  }
  
  .event-section__title {
    margin-bottom: 16px;
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .event-section__cards {
    display: flex;
    gap: 16px;
    overflow-x: auto;
  }
  </style>
  