import * as types from './mutations-type'

export default {
  async getMenu({
    commit
  }){
    let data = await require('../mock/menu');
    console.log(data);
    commit(types.SET_MENU, data);
  }
}
