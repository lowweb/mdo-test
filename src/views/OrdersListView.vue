<template>
  <BOrdersWrap>
    <BDataView />
  </BOrdersWrap>
</template>

<script>
import BOrdersWrap from '../components/blocks/BOrdersWrap.vue'
import BDataView from '@/components/blocks/BDataView.vue'
import UButton from '../components/ui/UButton.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    UButton,
    BOrdersWrap,
    BDataView
  },
  data() {
    return { searchQuery: '' }
  }
  // computed: {
  //   ...mapGetters('ordersStore', ['paginatedItems'])
  // },
  // methods: {
  //   ...mapActions('ordersStore', ['fetchItems'])
  // },
  // created() {
  //   this.fetchItems()
  // }
}
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
