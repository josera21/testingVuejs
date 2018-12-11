import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    deleteUsers: []
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
});