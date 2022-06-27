import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categoryList: [],
    isCategoriesListFetched: false,
    costs: [],
    isCostsListFetched: false,
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
    addCosts(state, costs) {
      if (!Array.isArray(costs)) {
        costs = [costs];
      }
      costs.forEach((cost) => {
        const existing = state.costs.find((c) => c.id === cost.id);
        if (!existing) {
          state.costs.push(cost);
        } else {
          Object.assign(existing, cost);
        }
      });
    },
    removeCosts(state, costIds) {
      if (!Array.isArray(costIds)) {
        costIds = [costIds];
      }
      state.costs = state.costs.filter(({ id }) => !costIds.includes(id));
    },
  },
  actions: {
    fetchCategories({ commit, state }) {
      return new Promise((resolve) => {
        if (state.isCategoriesListFetched) {
          resolve([]);
          return;
        }
        setTimeout(() => {
          resolve(["Food", "Transport", "Education", "Entertainment"]);
        }, 1000);
      }).then((res) => {
        commit("addCategories", res);
      });
    },
    fetchCosts({ commit, state }) {
      return new Promise((resolve) => {
        if (state.isCostsListFetched) {
          resolve([]);
          return;
        }
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
        commit("addCosts", res);
      });
    },
    addNewCost({ commit, state }, cost) {
      if (!cost.id && cost.id !== 0) {
        const maxId = state.costs
          .map((cost) => cost.id)
          .reduce((max, id) => Math.max(max, id), 0);
        cost.id = maxId + 1;
      }
      commit("addCosts", cost);
    },
    addNewCategories({ commit }, categories) {
      commit("addCategories", categories);
    },
  },
});
