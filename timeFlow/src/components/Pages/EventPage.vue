<script>
import EventSection from '@/components/Molecules/EventSection.vue';
import ProjectSection from '@/components/Molecules/ProjectSection.vue';
import Header from '@/components/Organisms/header.vue';
import FakeAPI from '../FakeAPI/FakeAPI';
export default {
  data() {
    return {
      upcomingEvents: FakeAPI.getTasks(1),
      projects: FakeAPI.getEventos()
    };
  },
  components: {
    EventSection,
    ProjectSection,
    Header
  },
};
</script>

<template>
  <Header />
    <EventSection sectionTitle="Próximos Eventos" :events="upcomingEvents" />
    <ProjectSection sectionTitle="Proyectos" :projects="projects"  />
    
  
</template>
  

  
<style scoped>
.event-page {
  padding: 24px;
}


</style>
  