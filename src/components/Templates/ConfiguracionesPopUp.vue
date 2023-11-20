<script>
import Configuraciones from '../Organisms/Configuraciones.vue';
export default {
    components: {
        Configuraciones
    }
}
</script>

<template>
    <div class = "blurredBackground">
        <Configuraciones @button-close="$emit('button-close')" ></Configuraciones>
        
    </div>
</template>
<style>
.blurredBackground {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>