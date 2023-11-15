<template>
    <div>
        <!--Contenido de la app-->
        <AddButtom @showPopup="showPopup"/>
        <CreatePopUp></CreatePopUp>
        
    </div>
<RouterView/> 
</template>
<script>
import { RouterView } from 'vue-router';
import CreatePopUp from './components/Molecules/CreatePopUp.vue';


</script>


