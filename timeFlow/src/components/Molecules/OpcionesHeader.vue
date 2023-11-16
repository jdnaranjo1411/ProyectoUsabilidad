<script>
import HeaderOpcion from "@/components/Atoms/Headerutil/HeaderOpcion.vue";
export default {
    components: {
        HeaderOpcion
    }
}
</script>
<template>
    <div class="contenedorOpciones">
        <HeaderOpcion @button-clicked = "$emit('button-clicked-settings')">
            <template v-slot:icon>
                settings
            </template>
            <template v-slot:tooltip>
                Configuración
            </template>
        </HeaderOpcion>
        <HeaderOpcion @button-clicked = "$emit('button-clicked-account')">
            <template v-slot:icon>
                account_circle
            </template>
            <template v-slot:tooltip>
                Perfil
            </template>
        </HeaderOpcion>
    </div>
</template>
<style>


  .contenedorOpciones {
        display: flex;
        align-items: center;
        height: 100%;
    }





</style>