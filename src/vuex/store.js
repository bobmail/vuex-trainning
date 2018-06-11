import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 10
}
const mutations = {
  add (state, n) {
    state.count += n
  },
  reduce (state) {
    state.count--
  }
}
const getters = {
  count: function (state) {
    state.count += 100
    return state.count
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters
})
