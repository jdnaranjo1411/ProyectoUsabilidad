<template>
    <header>
        <nav>
            <div class="contenedorHamburguer">
                <button>
                    <span class="material-symbols-outlined ">
                        menu
                    </span>
                </button>
            </div>
            <h1>
                TIMEFLOW
            </h1>
        </nav>
    </header>
</template>
<style>
header {
    display: flex;
    align-items: center;
    height: 80px;
    text-align: center;
    width: 100%;
    box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.5);

}

header nav {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
}

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

.contenedorHamburguer .material-symbols-outlined {
    font-size: 2rem;
}
</style>
