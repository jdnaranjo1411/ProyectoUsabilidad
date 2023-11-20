<script>
import ProfilePhoto from './components/Atoms/ProfilePhoto.vue';
export default {
    components: {
        ProfilePhoto
    },
    props:{
        isPopUp: {
            type: Boolean,
            default : true,
        },
    },
    mounted() {
       
       if(!this.isPopUp) {
        document.getElementById("contenedorCuenta").classList.remove("isPopUp");
      }
     
    },
}

</script>

<template>
    <div class="contenedorCuenta isPopUp" id="PopupCuenta" role="contentinfo">
        <div class="contenedorDatos">
        <ProfilePhoto></ProfilePhoto>
            <div class="nombre">
                <h2>Juanito Perez</h2>
            </div>
        </div>
        <div class = "contenedorOpciones">
            <a href = "#">Salir de Cuenta</a>
        </div>

    </div>
    
</template>

<style scoped>
.contenedorCuenta {
    padding: 8px;
   
}
.isPopUp {
    position: absolute;
    top: 72px;
    right: 20px;
    border-radius: 15px;
    border: 1px solid var(--color-border);
    background-color: var(--color-popUpBackground);
    box-shadow: 0 0 12px 2px var(--color-shadow1);
}
.contenedorDatos {
    display: flex;
    align-items: center;
    padding: 10px;
    gap: 20px;
    max-width: 270px;
}
.contenedorOpciones {
    padding: 10px;

}
.contenedorOpciones a {
    color: var(--color-text);


}

</style>