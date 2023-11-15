<script>
import Dashboard from '@/components/Templates/Dashboard.vue';
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
    Dashboard,
    Header
  },
};
</script>

<template>
  <Header/>
    <Dashboard :upcomingEvents="upcomingEvents" :projects="projects" />
    
  
</template>
  

  
<style scoped>
.event-page {
  padding: 24px;
}


</style>
  