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
    background-color: var(--color-buttonPrimary);
    border: none;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px; 
    border-radius: 10px;
}
.Boton1:hover {
    background-color: var(--color-buttonPrimaryHover);
}

</style>