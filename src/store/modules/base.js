import * as types from '../mutations-type.js'

let state = {
  list: '',
  name:'张三'
};

const mutations = {
  [types.SET_MENU](state, data){
    state.list = data;
  }
};

const  actions = {
  async getMenu({
    commit
  }){
    let data = await require('@/mock/menu');
    commit(types.SET_MENU, data);
  }
};
export default {
  state,
  actions,
  mutations
}
