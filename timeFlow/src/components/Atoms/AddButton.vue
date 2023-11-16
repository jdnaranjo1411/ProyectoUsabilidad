<template>
    <button class="add-button" @click="showPopup">+</button>
  </template>
  
  <script>
  export default {
    methods: {
      showPopup() {
        this.$emit('showPopup');
      },
    },
  };
  </script>
  
  <style scoped>
  .add-button {
    position: fixed;
    bottom: 40px;
    right: 40px;
    background-color: var(--color-buttonPrimary);
    color: white;
    font-size: 24px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>
  