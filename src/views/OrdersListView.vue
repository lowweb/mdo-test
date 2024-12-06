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
  },

  methods: {
    ...mapActions('ordersStore', ['fetchOrders']),
    ...mapActions('addressesStore', ['fetchAddresses'])
  },
  created() {
    this.fetchOrders({ search: '', premiseid: '', pagesize: '10', page: '1' })
    this.fetchAddresses()
  }
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
