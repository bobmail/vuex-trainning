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
    <p>
      <button @click="addAsync">+</button>
      <button @click="reduceAsync">-</button>
    </p>
  </div>
</template>

<script>
import store from '@/vuex/store'
import {mapState, mapMutations, mapActions} from 'vuex'

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
    },
    count () {
      return this.$store.getters.count
  },
  //
  computed: mapState({
    count: state => state.count
  }),
  */
  // computed: mapState(['count']),
  computed: {
    ...mapState(['count'])
    //  ...mapGetters(['count'])
  },
  //  methods: mapMutations(['add', 'reduce']),
  methods: {
    ...mapMutations(['add', 'reduce']),
    ...mapActions(['addAsync', 'reduceAsync'])
  },
  store
}
</script>
