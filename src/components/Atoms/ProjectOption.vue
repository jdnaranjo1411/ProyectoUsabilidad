<script>
export default {
    data() {
        return {
            slotContent: ''
        }
    },
    props: {
        icon: {
            type: String,
            default: ''
        }
    },
    // get slot content at init
    ngOnInit() {
        this.slotContent = this.$slots.default[0].text;
    },

}

</script>

<template>
    <div class="projectOption" role="button" :aria-label="slotContent">
        <span class = "material-symbols-outlined" v-if="icon" >
            {{ icon }}
        </span>
        <h3>
            <slot></slot>
        </h3>
    </div>
    
</template>

<style scoped>
.projectOption {
    display: flex;
    align-items: center;
    border-radius: 3px;
    border: 1px solid var(--color-border);
    height: 45px;
}

.projectOption span {
    font-size: 1.5rem;
    margin: 0 1rem;
}
</style>