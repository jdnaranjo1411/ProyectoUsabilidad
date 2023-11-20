<script>
import ProjectImageOptions from '../Organisms/ProjectImageOptions.vue';

import FakeAPI from '../FakeAPI/FakeAPI';
import EventSection from '../Molecules/EventSection.vue';


export default {
    data() {
        return {
            upcomingEvents: FakeAPI.getTasks(1),
            projects: FakeAPI.getEventos(),
        };
    },
    components: {
    ProjectImageOptions,
    EventSection
},
}


</script>

<template>
    <div class = "proyectoTemplate">
        <ProjectImageOptions/>
        <div class="contenedorGeneral">
            <div class="NombresProyecto">
                 <h1>Nombre del proyecto</h1>
                 <p>Descripción del proyecto</p>
            </div>
            <EventSection :events="upcomingEvents" :sectionTitle = "'Eventos proximos'" />
            
        </div>
        
        

        
    </div>
</template>

<style>
.proyectoTemplate{
    padding: 20px;
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 30px;

}
.NombresProyecto{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 40px;
    padding-top: 30px;
    background-color: var(--color-popUpBackground);
    border: 1px solid var(--color-border);
   
}
.contenedorGeneral{
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 30px;
}

</style>