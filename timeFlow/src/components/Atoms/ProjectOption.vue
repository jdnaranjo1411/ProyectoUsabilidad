<script>
export default {
    props: {
        icon: {
            type: String,
            default: ''
        }
    }
}

</script>

<template>
    <div class="projectOption">
        <span class = "material-symbols-outlined" v-if="icon" >
            {{ icon }}
        </span>
        <h3>
            <slot name="text"></slot>
        </h3>
    </div>
    
</template>

<style scoped>
.projectOption {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 3px;
    border: 1px solid var(--color-border);
    height: 45px;
}
