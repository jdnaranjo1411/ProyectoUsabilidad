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
    bottom: 20px;
    right: 20px;
    background-color: purple;
    color: white;
    font-size: 24px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>
  