<script>
import AccountCard from '../Molecules/AccountCard.vue';

export default {
    components: {
        AccountCard
    },
    methods: {
        closeHamburguerMenu() {
            const menu = document.getElementById('MenuHamburguer');
            menu.classList.remove('--expanded');
            //wait 0.5 seconds to emit the event
            setTimeout(() => {
                this.$emit('closeHamburguerMenu');
            }, 500);
        }
    }
}
</script>


<template>
    <aside aria-label="menu" class="MenuHamburguer --expanded" id="MenuHamburguer">
        <button class="closeHamburguerMenu" @click="closeHamburguerMenu">
            <span class="material-symbols-outlined">
                arrow_back
            </span>
        </button>
        <AccountCard :isPopUp=false />
    </aside>
</template>

<style scoped>
.MenuHamburguer {
    display: flex;
    flex-direction: column;
    background-color: var(--color-background);
    width: 0;
    overflow: hidden;
    height: 100%;
    position: absolute;
    z-index: 100;
    transition: 0.5s ease;
    
}

.--expanded {
    width: 286px;
    
}
.closeHamburguerMenu {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 10px;
    margin-top: 10px;
    
    
}
.closeHamburguerMenu:hover {
    background-color: var(--color-highlight);
}
</style>