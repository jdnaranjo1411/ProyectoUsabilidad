<script>
export default {
    props: {
        texto: {
            type: String,
            default: 'Boton'
        },
        onClick: {
            type: Function,
            default: () => {}
        }
    }
}
</script>
<template>
    <button class="Boton1">
        {{texto}}
    </button>
</template>
<style scoped>
.Boton1 {
    background-color: var(color-buttonPrimary);
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px; 
}

</style>