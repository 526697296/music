import * as types from './mutation-type'

const mutations = {
  [types.SET_SINGS](state, sings){
    state.sings = sings;
  }
}
export default mutations;