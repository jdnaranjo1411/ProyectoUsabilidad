<script>
import OpcionesHeader from "@/components/Molecules/OpcionesHeader.vue";
import HeaderHamburguer from "@/components/Atoms/Headerutil/HeaderHamburguer.vue";
import HeaderOption from "@/components/Atoms/Headerutil/HeaderOption.vue";

export default {
  components: {
    OpcionesHeader,
    HeaderHamburguer,
    HeaderOption,
  },
  data() {
    return {
      screenWidth: window.innerWidth,
    };
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.screenWidth = window.innerWidth;
    },
  },
};
</script>

<template>
  <header>
    <nav>
      <HeaderHamburguer v-if="screenWidth < 768" @click="$emit('Hamburguer-click')" />
      <h1>TIMEFLOW</h1>
      <OpcionesHeader v-if="screenWidth >= 768" @button-clicked-settings="$emit('button-clicked-settings-h')" @button-clicked-account="$emit('button-clicked-account')" />
      <HeaderOption v-if="screenWidth >= 768">
        <template v-slot:icon>format_size</template>
        <template v-slot:tooltip>Cambiar Tamaño de Letra</template>
      </HeaderOption>
      <HeaderOption v-if="screenWidth >= 768">
        <template v-slot:icon>font_download</template>
        <template v-slot:tooltip>Cambiar Fuente</template>
      </HeaderOption>
    </nav>
  </header>
</template>

<style>
header {
  display: flex;
  align-items: center;
  height: 80px;
  text-align: center;
  width: 100%;
  box-shadow: 0 0 10px 4px var(--color-shadow1);
}

header nav {
  display: flex;
  height: 100%;
  align-items: center;
}

.contenedorHamburguer .material-symbols-outlined {
  font-size: 2rem;
}

@media (min-width: 768px) {
  header {
    padding-left: 25px;
    padding-right: 25px;
  }

  header nav {
    width: 100%;
    justify-content: space-between;
  }
}
</style>
