<template>
    <div class="font-configuration">
      <FontSelector @font-changed="changeFont" />
      <FontSizeSelector @font-size-changed="changeFontSize" />
    </div>
  </template>
  
  <script>
  import FontSelector from "./components/atoms/FontSelector.vue";
  import FontSizeSelector from "./components/atoms/FontSizeSelector.vue";
  
  export default {
    name: "FontConfiguration",
    components: {
      FontSelector,
      FontSizeSelector,
    },
    methods: {
      changeFont(selectedFont) {
        this.$emit("font-changed", selectedFont);
      },
      changeFontSize(selectedFontSize) {
        this.$emit("font-size-changed", selectedFontSize);
      },
    },
  };
  </script>
  
  <style scoped>
  .font-configuration {
    display: flex;
    /* Otros estilos según sea necesario */
  }
  </style>
  