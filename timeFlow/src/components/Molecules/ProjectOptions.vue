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
            <template>
                Integrantes
            </template>
        </projectOption>
        <projectOption :icon = "'task'">
            <template>
                tareas
            </template>
        </projectOption>

    </div>
</template>