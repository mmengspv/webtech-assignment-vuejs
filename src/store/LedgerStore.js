import Vue from "vue";
import Vuex from "vuex";

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
      const res = {
        data: [
          {
            name: "Jackpot",
            amount: 300,
            type: "Income",
            description: "",
            date: "2021-07-22",
          },
          {
            name: "eating",
            amount: 100,
            type: "Expense",
            description: "eating breakfast",
            date: "2021-07-22",
          },
        ],
      };

      commit("fetch", { res });
    },
    addMoneyData({ commit }, newData) {
      commit("addData", { newData });
    },
  },
  modules: {},
});
