<template>
<div class="contenedorHamburguer">
                <button @click="$emit('button-clicked')">
                    <span class="material-symbols-outlined ">
                        menu
                    </span>
                </button>
            </div>
</template>
<style>
.contenedorHamburguer {
    aspect-ratio: 1/1;
    height: 100%;
    width: auto;

}

.contenedorHamburguer button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
}

</style>