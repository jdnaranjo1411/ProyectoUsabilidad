<script>
import Dashboard from '@/components/Templates/Dashboard.vue';
import Header from '@/components/Organisms/header.vue';
import FakeAPI from '../FakeAPI/FakeAPI';
import ConfiguracionesPopUp from '../Templates/ConfiguracionesPopUp.vue';
import AccountCard from '../Molecules/AccountCard.vue';
import HamburguerMenu from '../Organisms/HamburguerMenu.vue';



export default {
  data() {
    return {
      upcomingEvents: FakeAPI.getTasks(1),
      projects: FakeAPI.getEventos(),
      showPopupSettings: false,
      showPopupAccount: false,
      showHamburguerMenu: false
    };
  },
  components: {
    Dashboard,
    Header,
    ConfiguracionesPopUp,
    AccountCard,
    HamburguerMenu,
  
},
  methods: {
    toggleSettings() {
      this.showPopupAccount = false;
      this.showPopupSettings = !this.showPopupSettings;
      if(this.showPopupSettings == true){
        const elements = document.querySelectorAll('body *');
        elements.forEach((element) => {
            element.dataset.originalTabindex = element.getAttribute('tabindex');
            element.setAttribute('tabindex', '-1');
        });
      }
      else{
        const elements = document.querySelectorAll('body *');
        elements.forEach((element) => {
            element.setAttribute('tabindex', element.dataset.originalTabindex);
        });
      }
    },
    toggleAccount() {
      this.showPopupAccount = !this.showPopupAccount;
    },
    toggleHambuguerMenu(){
      this.showHamburguerMenu = !this.showHamburguerMenu;
      if (this.showHamburguerMenu == true){
        this.showPopupAccount = false;
      }
  }
  
}
};
</script>

<template>
  <HamburguerMenu @closeHamburguerMenu = "toggleHambuguerMenu()" v-if="showHamburguerMenu"/>
  <section>
  <Header @button-clicked-settings-h = "toggleSettings()" @button-clicked-account = "toggleAccount()" @Hamburguer-click = "toggleHambuguerMenu()"/>
    <Dashboard :upcomingEvents="upcomingEvents" :projects="projects"  />
    <ConfiguracionesPopUp v-if="showPopupSettings" @button-close= "toggleSettings()"/>
    <AccountCard v-if="showPopupAccount"/>
  </section>

    
    
  
</template>
  

  
<style scoped>
.event-page {
  padding: 24px;
}


</style>
  