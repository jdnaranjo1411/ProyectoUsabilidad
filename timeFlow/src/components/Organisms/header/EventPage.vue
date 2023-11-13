<template>
    <div class="event-page">
      <EventSection sectionTitle="Próximos Eventos" :events="upcomingEvents" />
    </div>
  </template>
  
  <script>
  import EventSection from '@/components/molecules/EventSection';
  
  export default {
    data() {
      return {
        upcomingEvents: [
          { id: 1, title: 'Evento 1', date: '2023-11-20T15:00:00' },
          { id: 2, title: 'Evento 2', date: '2023-11-22T18:30:00' },
          // Agrega más eventos según sea necesario
        ],
      };
    },
    components: {
      EventSection,
    },
  };
  </script>
  
  <style scoped>
  .event-page {
    padding: 24px;
  }
  </style>
  