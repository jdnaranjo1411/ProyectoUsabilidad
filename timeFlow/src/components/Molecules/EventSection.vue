<script>
import EventCard from '../Atoms/EventCard.vue';  
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
    EventCard,
  },
};
</script>


<template>
    <section class="event-section">
      <h2 class="event-section__title">{{ sectionTitle }}</h2>
      <div class="event-section__cards">
        <EventCard v-for="event in events" :key="event.id" :event="event" />
      </div>
    </section>
  </template>
  

  <style scoped>
  .event-section {
    margin: 24px;
    margin-bottom: 48px;

  }
  
  .event-section__title {
    margin-bottom: 16px;
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .event-section__cards {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;

  }
  </style>
  