<template>
    <div class="header-option">
      <button ref="button">
        <span class="header-option__icon material-symbols-outlined">
          <slot name="icon"></slot>
        </span>
      </button>
      <span class="header-option__tooltip">
        <slot name="tooltip"></slot>
      </span>
    </div>
  </template>
  
  <script>
  export default {
    name: "HeaderOpcion",
    mounted() {
      const button = this.$refs.button;
      const tooltip = this.$el.querySelector(".header-option__tooltip");
      // añadir aria-label a boton con tooltip
      button.setAttribute("aria-label", tooltip.innerText);
    },
  };
  </script>
  
  <style scoped>
  .header-option {
    aspect-ratio: 1/1;
    height: 100%;
    display: flex;
    align-items: center;
  }
  
  .header-option button {
    background-color: transparent;
    width: 100%;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: 0;
    height: 100%;
  }
  
  .header-option__icon {
    font-size: 2rem;
  }
  
  .header-option__tooltip {
    position: absolute;
    transform: translate(calc(-50% + 0.5rem), calc(100% + 0.5rem));
    background-color: rgba(0, 0, 0, 1);
    color: #fff;
    padding: 0.5rem;
    border-radius: 0.5rem;
    opacity: 0;
    transition: opacity 0.2s ease;
  }
  
  .header-option button:hover + .header-option__tooltip {
    opacity: 1;
    transition: opacity 0.5s ease 0.5s;
  }
  
  .header-option button:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  </style>
  