<script>
import LabelCheckbox from '../Molecules/LabelCheckbox.vue';
import Boton1 from '../Atoms/Boton1.vue';
import FontSelector from '../Atoms/FontSelector.vue';
import FontSizeSelector from '../Atoms/FontSizeSelector.vue';
import FontConfiguration from '../Molecules/FontConfiguration.vue';
export default {
    watch: {
    '$store.state.fontSize': function (newFontSize, oldFontSize) {
      console.log('El valor de fontSize en el store ha cambiado. Nuevo valor:', newFontSize);
    }},
    components: {
        LabelCheckbox,
        Boton1,
        FontConfiguration,
        FontSizeSelector,
        FontSelector,
    },
    data() {
        return {
            showFontOptions: true,
        };
    },
    methods: {
        increaseFontSize(increment) {
            let allElements = document.querySelectorAll('*');
            if (increment == 0) {
                this.resetFontSize();
                return;
            }
            allElements.forEach((element) => {
                if (element.classList.length > 0) {
                    element.style.removeProperty('font-size');
                    let fontSize = window.getComputedStyle(element).getPropertyValue('font-size');
                    let fontSizeNumber = parseFloat(fontSize);
                    let res = parseFloat(fontSizeNumber) + parseFloat(increment);
                    element.style.fontSize = res + 'px';
                    element.dataset.originalFontSize = fontSize; // Almacena el tamaño de fuente original en un atributo de datos
                }
            });
        },
        
        resetFontSize() {
            let allElements = document.querySelectorAll('*');
            
            allElements.forEach((element) => {
                if (element.classList.length > 0 && element.dataset.originalFontSize) {
                    element.style.fontSize = element.dataset.originalFontSize; // Restaura el tamaño de fuente original
                    delete element.dataset.originalFontSize; // Elimina el atributo de datos
                }
            });
        },
        handleFontSizeChange(selectedFontSize) {
            this.$store.dispatch('setFontSize', selectedFontSize.target.value);
            this.increaseFontSize(selectedFontSize.target.value);

        },
        handleFontSelectorChange(selectedFontFamily) {
            this.$store.dispatch('setFontFamily', selectedFontFamily);
            
        },
        changeDarkMode() {
            document.body.classList.toggle('mode-dark');
        },
        changeHighContrast() {
            document.body.classList.toggle('mode-highcontrast');
        }

    }
}
</script>

<template>
    <form aria-label="Sección de configuraciones" id="PopupConfiguraciones">
        <button @click.prevent="$emit('button-close')" class="closeButton" aria-label="cerrar Popup">
            <span class="material-symbols-outlined">close</span>
        </button>
        <h1 class="labelConfiguraciones">Configuraciones</h1>
        <div class="ContenedorOpciones">
            <LabelCheckbox :name="'ModoOscuro'" @change="changeDarkMode">
                Modo oscuro / claro
            </LabelCheckbox>
            <LabelCheckbox :name="'AltoContraste'" @change="changeHighContrast">
                Alto contraste on/off
            </LabelCheckbox>
            
            <FontSizeSelector v-if="showFontOptions" @change="handleFontSizeChange" />
            <FontSelector v-if="showFontOptions" @font-changed = "handleFontSelectorChange" />

        </div>

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
    padding: 20px 40px;
    z-index: 1;
    box-shadow: 0 0 40px 6px var(--color-shadow1);
    border-radius: 20px;
    background-color: var(--color-popUpBackground);
    border: 2px solid var(--color-bordercontrast);
}

.labelConfiguraciones {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 30px;
}

.closeButton {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-text);
    aspect-ratio: 1/1;
    position: relative;
    top: 10px;
    right: calc(-50% + 20px);
    border-radius: 50%;
    background-color: transparent;
    border: 1px solid var(--color-bordercontrast);
}

.closeButton:hover {
    background-color: var(--color-shadow1);
}


.closeButton:hover .material-symbols-outlined {
    font-weight: bolder;

}

.ContenedorOpciones {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 90%;
}
</style>
