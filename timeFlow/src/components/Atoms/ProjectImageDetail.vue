<script>
export default {
    props: {
        image: {
            type: String,
            default: ''
        }
    }
}
</script>    
<template>
    <div class="projectImageDetail">
        <img :src="image" alt="Imagen del proyecto">
    </div>
</template>

<style scoped>
.projectImageDetail{
    aspect-ratio: 2,39/1;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.projectImageDetail img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
