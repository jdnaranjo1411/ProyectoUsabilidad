<script>
import Input from './components/Atoms/Input.vue';
export default {
    props: {
        placeholder: {
            type: String,
            required: false,
        },
        icon : {
            type: String,
            required: false,
        },
        required: {
            type: Boolean,
            required: false,
        },
        Name: {
            type: String,
            required: false,
        },
        value: {
            type: String,
            required: false,
        }
    },   
    components: {
    Input,
},
methods: {
    updateValue(event) {
        this.$emit('input', event.target.value);
    },
},

}


</script>

<template>
    <div class="InputLabel">
        <label :for="Name">
            <slot></slot>
        </label>
        <Input :placeholder="placeholder" :required="required" :Name = "Name" :value = "value" :icon="icon" @input = "updateValue()"  />
    </div>

</template>

<style scoped>
.InputLabel {
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    background-color: var(--box-shadow1);
}
.InputLabel label {

    font-size: 1.4rem;
}
</style>
