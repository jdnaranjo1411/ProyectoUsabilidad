<script>
import HeaderOpcion from "@/components/Atoms/Headerutil/HeaderOpcion.vue";
export default{
    components:{
        HeaderOpcion
    }
}
</script>
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
            <div class="contenedorOpciones">
                <HeaderOpcion>
                    <template v-slot:icon>
                        settings
                    </template>
                    <template v-slot:tooltip>
                        Configuración
                    </template>
                </HeaderOpcion>
                <HeaderOpcion>
                    <template v-slot:icon>
                         account_circle
                    </template>
                    <template v-slot:tooltip>
                        Perfil
                    </template>
                </HeaderOpcion>
            </div>
            
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
.contenedorOpciones {
    display: none;
}
@media (min-width: 768px) {
    .contenedorHamburguer {
        display: none;
    }
    
    header {
        padding-left: 25px;
        padding-right: 25px;
    }

    header nav {
        width: 100%;
        justify-content: space-between;
    }
    .contenedorOpciones {
        display: flex;
        align-items: center;
        height: 100%;
    }




}
</style>
