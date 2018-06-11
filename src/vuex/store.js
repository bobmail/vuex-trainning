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
const actions = {
  addAsync (context) {
    context.commit('add', 10)
    setTimeout(() => {
      context.commit('reduce')
    }, 3000)
    console.log('before reduce, I am async')
  },
  reduceAsync ({commit}) {
    commit('reduce')
  }
}

const moduleA = {
  state,
  mutations,
  getters,
  actions
}

export default new Vuex.Store({
  modules: {a: moduleA}
})
