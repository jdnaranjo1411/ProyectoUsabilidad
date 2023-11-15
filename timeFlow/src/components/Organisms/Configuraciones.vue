<script>
import LabelCheckbox from '../Molecules/LabelCheckbox.vue';

export default {
    components: {
        LabelCheckbox,
    }
}
</script>

<template>
    <form>
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
    box-shadow: 0 0 10px 4px var(--color-shadow1);
    border-radius: 20px;
}
.labelConfiguraciones{
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 30px;
}
</style>
