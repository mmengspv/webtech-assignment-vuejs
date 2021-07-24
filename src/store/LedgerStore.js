import Vue from "vue";
import Vuex from "vuex";
import data from "../../data.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: [],
  },
  getters: {
    moneyData: (state) => state.data,
  },
  mutations: {
    fetch(state, { res }) {
      state.data = res.data;
    },
    addData(state, { newData }) {
      state.data.push(newData);
    },
  },
  actions: {
    fetchMoneyData({ commit }) {
      const res = data;
      commit("fetch", { res });
    },
    addMoneyData({ commit }, newData) {
      commit("addData", { newData });
    },
  },
  modules: {},
});
