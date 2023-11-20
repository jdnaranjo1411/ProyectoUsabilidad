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
    
    width: 100%;
    height: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
}
.projectImageDetail img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

</style>