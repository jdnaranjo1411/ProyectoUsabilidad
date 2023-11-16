<script>
import Dashboard from '@/components/Templates/Dashboard.vue';
import Header from '@/components/Organisms/header.vue';
import FakeAPI from '../FakeAPI/FakeAPI';
import ConfiguracionesPopUp from '../Templates/ConfiguracionesPopUp.vue';
export default {
  data() {
    return {
      upcomingEvents: FakeAPI.getTasks(1),
      projects: FakeAPI.getEventos(),
      showPopupSettings: false
    };
  },
  components: {
    Dashboard,
    Header,
    ConfiguracionesPopUp
},
  methods: {
    toggleSettings() {
      this.showPopupSettings = !this.showPopupSettings;
    }
  }
};
</script>

<template>
  <Header @button-clicked-settings-h = "toggleSettings()"/>
    <Dashboard :upcomingEvents="upcomingEvents" :projects="projects"  />
    <ConfiguracionesPopUp v-if="showPopupSettings" @button-close= "toggleSettings()"/>
    
    
  
</template>
  

  
<style scoped>
.event-page {
  padding: 24px;
}


</style>
  