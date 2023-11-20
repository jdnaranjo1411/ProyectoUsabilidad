<script>
import ProjectImageDetail from '../Atoms/ProjectImageDetail.vue';
import ProjectOption from '../Atoms/ProjectOption.vue';
import ProjectOptions from '../Molecules/ProjectOptions.vue';
export default {
    props: {
        imagenProyecto: {
            type: String,

            default: 'https://picsum.photos/id/237/200/300'
        }
    },
    components: {
    ProjectImageDetail,
    ProjectOptions,
    ProjectOption
},
}

</script>
<template>
    
    <aside class="project-image-options" aria-label="Menu de proyecto">
        <ProjectImageDetail :image = "imagenProyecto"/>
        <ProjectOptions />
        
    </aside>
</template>

<style>
.project-image-options{
    display: flex;
    width: 30%;
    min-width: 400px;
    max-width: 600px;
    flex-direction: column;
    gap: 1rem;


}

</style>