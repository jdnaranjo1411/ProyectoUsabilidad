<script>
import ProjectImageDetail from '../Atoms/ProjectImageDetail.vue';
export default {
    props: {
        imagenProyecto: {
            type: String,
            default: ''
        }
    },
    components: {
        ProjectImageDetail,
    },
}

</script>
<template>
    
    <aside class="project-image-options">
        <ProjectImageDetail :imagenProyecto="imagenProyecto" />
        
    </aside>
</template>

<style scoped>

</style>