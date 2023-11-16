<script>
export default {
    props: {
        profilePhoto: {
            type: String,
            default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'
        }
    }
}
</script>
<template>
    <div class="profile-photo">
        <img :src="profilePhoto" alt="Foto de perfil">
    </div>
</template>
<style scoped>
.profile-photo {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
}
.profile-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>