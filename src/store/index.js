import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'

import baseModule from './modules/base'

Vue.use(Vuex);

let state = {
    name:'呵呵'
};

export default new Vuex.Store({
  modules:{
    baseModule
  },
  state,
  strict: true
});
