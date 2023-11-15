<script>
import EventSection from '@/components/Molecules/EventSection.vue';
import Header from '@/components/Organisms/header.vue';
import FakeAPI from '../FakeAPI/FakeAPI';
export default {
  data() {
    return {
      upcomingEvents: FakeAPI.getTasks(1),
    };
  },
  components: {
    EventSection,
    Header
  },
};
</script>

<template>
  <Header></Header>
  <div class="event-page">
    <EventSection sectionTitle="Próximos Eventos" :events="upcomingEvents" />
  </div>
  
</template>
  

  
<style scoped>
.event-page {
  padding: 24px;
}


</style>
  