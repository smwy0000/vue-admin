import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import {state,mutations,actions} from "./modules/app.js";
import login from "./modules/login.js";

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    login
  }
});

