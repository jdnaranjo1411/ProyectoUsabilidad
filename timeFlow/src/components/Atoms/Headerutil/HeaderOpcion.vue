<script>
export default {
    name: "HeaderOpcion",

    
    
    mounted() {
        const boton = this.$el.querySelector("button");
        const tooltip = this.$el.querySelector(".contenedorBoton--tooltip");
        //anadir aria-label a boton con tooltip
        boton.setAttribute("aria-label", tooltip.innerText)
    }
}

</script>
<template>
    <div class="contenedorBoton">
        <button>
            <span class="material-symbols-outlined">
                <slot name="icon">

                </slot>
            </span>
        </button>
        <span class="contenedorBoton--tooltip">
            <slot name="tooltip" aria-label = {{ tooltip }}>

            </slot>
        </span>

    </div>
</template>
<style>
.contenedorBoton {
    aspect-ratio: 1/1;
    height: 100%;
    display: flex;
    align-items: center;
}
.contenedorBoton button {
    background-color: transparent;
    width: 100%;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: 0;
    height: 100%;
}
.contenedorBoton .material-symbols-outlined {
    font-size: 2rem;
}
.contenedorBoton--tooltip {
    position: absolute;
    transform: translate(calc(-50% + 0.5rem), calc(100% + 0.5rem));
    background-color: rgba(0, 0, 0, 1);
    color: #fff;
    padding: 0.5rem;
    border-radius: 0.5rem;
    opacity: 0;
    transition: opacity 0.2s ease;
    
}

.contenedorBoton button:hover + .contenedorBoton--tooltip {
    opacity: 1;
    transition: opacity 0.5s ease 0.5s;
}

.contenedorBoton button:hover {
    background-color: rgba(0, 0, 0, 0.1);
}



</style>