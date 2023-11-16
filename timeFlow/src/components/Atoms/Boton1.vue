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
        },
        type: {
            type: String,
            default: 'button'
        }
    }
}
</script>
<template>
    <button class="Boton1" :type="type">
        {{texto}}
    </button>
</template>
<style scoped>
.Boton1 {
    background-color: var(--color-buttonPrimary);
    color: white;
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