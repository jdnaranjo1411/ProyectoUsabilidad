<script>
import Checkbox from './components/Atoms/Checkbox.vue';
export default {
    components: {
        Checkbox,
    },
    props: {
        name: {
            type: String,
            required: true,
        },
        
    },
    data() {
        return {
            label: null,
        }
    },
    
    /*leer valor dentro de label */
    ngOnInit() {
        this.label = this.$el.querySelector('label');
        
    },
      
};

</script>
<template>
    <div class="label-checkbox">
        <label class="label-checkbox__label" :for="name" :id="name">
            <slot></slot>
        </label>
        <Checkbox :name="name" @checked = "$emit('change')" :label="label"/>
    </div>
</template>
<style scoped>

.label-checkbox {
    display: flex;
    align-items: center;
    width: 100%;
    height: 45px;
}
.label-checkbox__label {
    flex-grow: 1;
    font-size: 1.2rem;
    width: 80%;
}



</style>