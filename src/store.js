// store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    fontSize: '16px', // Puedes establecer un valor predeterminado
    fontFamily: 'Arial, sans-serif', // Agrega esta línea
  },
  mutations: {
    updateFontSize(state, newFontSize) {
      state.fontSize = newFontSize;
    },
    updateFontFamily(state, newFontFamily) {
      state.fontFamily = newFontFamily;
    },
  },
  actions: {
    setFontSize({ commit }, newFontSize) {
      commit('updateFontSize', newFontSize);
      
      
    },
    setFontFamily({ commit }, newFontFamily) {
      commit('updateFontFamily', newFontFamily);
    },
  },
});
