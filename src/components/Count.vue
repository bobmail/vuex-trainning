<template>
  <div>
    <h2>{{msg}}</h2>
    <hr>
    <h3>{{$store.state.count}} - {{count}}</h3>
    <p>
      <!--
      <button @click="$store.commit('add',10)">+</button>
      <button @click="$store.commit('reduce')">-</button>
      -->
      <button @click="add(10)">+</button>
      <button @click="reduce">-</button>
    </p>
  </div>
</template>

<script>
import store from '@/vuex/store'
import {mapState, mapMutations} from 'vuex'

export default {
  data () {
    return {
      msg: 'Welcome Vuex'
    }
  },
  /*
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  //
  computed: mapState({
    count: state => state.count
  }),
  */
  computed: mapState(['count']),
  methods: mapMutations(['add', 'reduce']),
  store
}
</script>
