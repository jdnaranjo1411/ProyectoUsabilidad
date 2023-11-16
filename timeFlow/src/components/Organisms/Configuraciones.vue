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
        <button @click.prevent="$emit('button-close')" class="closeButton">X</button>
        <h1 class="labelConfiguraciones">Configuraciones</h1>
        <LabelCheckbox :name="'eventosPasados'">
            Opcion 1
        </LabelCheckbox>
        <LabelCheckbox :name="'eventosPasados'">
            Opcion 2
        </LabelCheckbox>
        <LabelCheckbox :name="'eventosPasados'">
            Opcion 3
        </LabelCheckbox>
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
    padding: 20px;
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
</style>
