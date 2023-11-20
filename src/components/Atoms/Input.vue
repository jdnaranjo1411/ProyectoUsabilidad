'<script>
export default {
    props: {
        required: {
            type: Boolean,
            required: false,
        },
        placeholder: {
            type: String,
            default: '',
        },
        icon : {
            type: String,
            required: false,
        },
        Name : {
            type: String,
            required: false,
        },
        value : {
            type: String,
            required: false,
        }
        
        
    },
    methods: {
        updateValue(event) {
            this.$emit('input', event.target.value);
        },
    },
};

</script>

'<template>
    <div class="input">
        <span class = "material-symbols-outlined" v-if="icon" >{{ icon }}</span>
        <input class="input__field" :placeholder="placeholder" :required="required" :name="Name" :value="value" @input="updateValue"/>
    </div>
    
</template>

<style scoped>
.input {
    display: flex;
    align-items: center;
    border-radius: 3px;
    border: 1px solid var(--color-border);
    background-color: var(--box-shadow1);
    height: 45px;
}
.input span {
    padding: auto ;
    aspect-ratio: 1/1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid var(--color-border);
}
.input__field {
    border: none;
    background-color: transparent;
    width: 100%;
    font-size: 1rem;
    color: var(--color-text);
    height: 100%;
}
</style>
