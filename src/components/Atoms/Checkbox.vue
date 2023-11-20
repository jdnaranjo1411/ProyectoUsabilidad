<script>
export default {
    
    props: {
        name: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: false,
        }
    },
        
    
    data() {
        return {
            isChecked: this.checked
        }
    }
    
}

</script>


<template>
    <div class="centro">
    <input type="checkbox" class="centro__input" :name="name" :checked="$emit('change')" :aria-labelledby="name" tabindex="0" :aria-label="label">
    </div>
</template>
<style>


.centro__input{
    position: relative;
    width: 40px;
    height: 20px;
    -webkit-appearance: none;
    background: #c6c6c6;
    border-radius: 20px;
    box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    transition: .5s ease;
    
}

.centro__input:checked{
    background: #2ecc71;
}

.centro__input::before{
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    top: 0;
    left: 0;
    transform: scale(1.1);
    background: #fff;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    transition: .5s ease;
    
}
.centro__input:checked::before{
    left: 20px;
}


.centro__input:focus{
    outline: 2px solid var(--color-border);
    outline-offset: 6px;
    transition: none;
    
}
</style>