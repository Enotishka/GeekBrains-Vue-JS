import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categoryList: [],
    costs: [],
  },
  getters: {
    getCategoryList(state) {
      return state.categoryList;
    },
    getCosts(state) {
      return function (firstIndex, count) {
        return state.costs.slice(firstIndex, firstIndex + count);
      };
    },
    getCostsCount(state) {
      return function () {
        return state.costs.length;
      };
    },
  },
  mutations: {
    addCategories(state, categories) {
      if (!Array.isArray(categories)) {
        categories = [categories];
      }
      categories = categories.filter(
        (category) => !state.categoryList.includes(category)
      );
      state.categoryList.push(...categories);
    },
    setCosts(state, costs) {
      state.costs = costs;
    },
    addCost(state, cost) {
      state.costs.push(cost);
    },
  },
  actions: {
    fetchCategories({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(["Food", "Transport", "Education", "Entertainment"]);
        }, 1000);
      }).then((res) => {
        commit("addCategories", res);
      });
    },
    fetchCosts({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            {
              id: 0,
              date: "28.03.2020",
              category: "Food",
              value: 169,
            },
            {
              id: 1,
              date: "24.03.2020",
              category: "Transport",
              value: 360,
            },
            {
              id: 2,
              date: "24.03.2020",
              category: "Food",
              value: 532,
            },
          ]);
        }, 1000);
      }).then((res) => {
        commit("setCosts", res);
      });
    },
    addNewCost({ commit, state }, cost) {
      if (!cost.id) {
        const maxId = state.costs
          .map((cost) => cost.id)
          .reduce((max, id) => Math.max(max, id), 0);
        cost.id = maxId + 1;
      }
      commit("addCost", cost);
    },
    addNewCategories({ commit }, categories) {
      commit("addCategories", categories);
    },
  },
});
