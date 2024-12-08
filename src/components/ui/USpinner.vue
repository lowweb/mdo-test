<template>
  <span class="spinner" v-if="getLoading"><IconSpinner /></span>
</template>
<script>
import IconSpinner from '../icons/IconSpinner.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    IconSpinner
  },
  computed: {
    ...mapGetters('stateStore', ['getLoading'])
  }
}
</script>
<style lang="sass">
.spinner
  position: absolute
  width: 100px
  height: 100px
  z-index: 100
  left: 50%
  transform: translate(-50%,-50%)
</style>
