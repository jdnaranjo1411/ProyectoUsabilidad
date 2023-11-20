<script>

import OpcionesHeader from "@/components/Molecules/OpcionesHeader.vue";
import HeaderHamburguer from "@/components/Atoms/Headerutil/HeaderHamburguer.vue";
export default{
    components:{
        OpcionesHeader,
        HeaderHamburguer
        
    },
    data(){
        return{
            screenWidth: window.innerWidth
        }
    },
    mounted(){
        window.addEventListener('resize', this.handleResize)
    },
    methods:{
        handleResize(){
            this.screenWidth = window.innerWidth;
        }

    }

}



</script>
<template>
    <header aria-label="Cabecero">
        <HeaderHamburguer v-if="(screenWidth < 768)" @click = "$emit('Hamburguer-click')"></HeaderHamburguer>
        <nav aria-label = "navegación">
            <h1>
                TIMEFLOW
            </h1>
            <OpcionesHeader v-if = "(screenWidth >= 768)" @button-clicked-settings= "$emit('button-clicked-settings-h')" @button-clicked-account = "$emit('button-clicked-account')"></OpcionesHeader>
            
        </nav>
    </header>
</template>
<style>
header {
    display: flex;
    align-items: center;
    height: 80px;
    text-align: center;
    width: 100%;
    box-shadow: 0 0 10px 4px var(--color-shadow1);
    border-bottom: 2px solid var(--color-bordercontrast);

}

header nav {
    display: flex;
    height: 100%;
    align-items: center;
}



.contenedorHamburguer .material-symbols-outlined {
    font-size: 2rem;
}

@media (min-width: 768px) {
    
    header {
        padding-left: 25px;
        padding-right: 25px;
    }

    header nav {
        width: 100%;
        justify-content: space-between;
    }
}
</style>
