<script>
import projectOption from '../Atoms/ProjectOption.vue';
export default {
    components: {
        projectOption,
    },
}
</script>
<template>
    <div class="project-options">
        <projectOption :icon = "'group'">
                Integrantes
            
        </projectOption>
        <projectOption :icon = "'task'">
            
                tareas
            
        </projectOption>

    </div>
</template>