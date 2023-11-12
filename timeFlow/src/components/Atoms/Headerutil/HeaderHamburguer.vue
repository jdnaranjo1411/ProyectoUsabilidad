

<template>
<div class="contenedorHamburguer">
    <button aria-haspopup="true" aria-controls="menuDespegable" aria-expanded="false" >
        <span class="material-symbols-outlined ">
            <slot name="icon"></slot>
        </span>
    </button>
</div>
</template>