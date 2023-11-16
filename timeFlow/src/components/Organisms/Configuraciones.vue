<script>
import LabelCheckbox from '../Molecules/LabelCheckbox.vue';
import Boton1 from '../Atoms/Boton1.vue';

export default {
    components: {
        LabelCheckbox,
        Boton1
    }
}
</script>

<template>
    <form>
        <button @click.prevent="$emit('button-close')" class="closeButton">
            <span class="material-symbols-outlined">close</span>
        </button>
        <h1 class="labelConfiguraciones">Configuraciones</h1>
        <div class="ContenedorOpciones">
        <LabelCheckbox :name="'ModoOscuro'">
            Modo oscuro
        </LabelCheckbox>
        <LabelCheckbox :name="'EventosPasados'">
            Eventos pasados
            
        </LabelCheckbox>
        <LabelCheckbox :name="'Noticicaciones'">
            Notificaciones
        </LabelCheckbox>
        </div>
        <Boton1 :name="'Guardar'"></Boton1>
    </form>
</template>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 900px;
    min-width: 330px;
    width: 80%;
    height: 450px;
    padding: 20px 40px;
    z-index: 1;
    box-shadow: 0 0 40px 6px var(--color-shadow1);
    border-radius: 20px;
    background-color: var(--color-popUpBackground);
}
.labelConfiguraciones{
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 30px;
} 

.closeButton {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-text);
    aspect-ratio: 1/1;
    position: relative;
    top: 10px;
    right: calc(-50% + 20px);
    border-radius: 50%;
    background-color: transparent;
    border: none;
}
.closeButton:hover {
    background-color: var(--color-shadow1);
}


.closeButton:hover .material-symbols-outlined {
    font-weight: bolder;
    
}
.ContenedorOpciones{
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 90%;
}

</style>
