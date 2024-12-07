<template>
  <div>
    <UInput placeholder="Поиск (№ заявки, название)" v-model="searchQuery" @input="debouncedInput">
      <template #inputRightIcon>
        <UIconButton class="dataview__inputbtn">
          <IconSearch />
        </UIconButton>
      </template>
    </UInput>
    <USelect :options="getAddresses" @change="searchAddress" v-model="premiseId" />
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import UInput from '../ui/UInput.vue'
import USelect from '../ui/USelect.vue'
import UIconButton from '../ui/UIconButton.vue'
import IconSearch from '../icons/IconSearch.vue'
import { debounce } from '../../utils/debounce'
export default {
  components: {
    UInput,
    USelect,
    UIconButton,
    IconSearch
  },
  data() {
    return {
      premiseId: null
    }
  },
  computed: {
    ...mapGetters('stateStore', ['getSearchQuery']),
    ...mapGetters('addressesStore', ['getAddresses']),
    searchQuery: {
      get() {
        return this.getSearchQuery
      },
      set(value) {
        this.setSearchQuery(value)
      }
    }
  },
  methods: {
    ...mapMutations('stateStore', ['setSearchQuery']),
    ...mapMutations('addressesStore', ['setActiveAddressId']),
    ...mapMutations('paginationStore', ['setCurrentPage']),
    ...mapActions('ordersStore', ['fetchOrders']),
    ...mapMutations('tooltipStore', ['showTooltip']),

    async searchAddress() {
      this.setActiveAddressId(this.premiseId)
      this.setCurrentPage(1)
      try {
        await this.fetchOrders()
      } catch (error) {
        if (error.response) {
          this.premiseId = null
          this.showTooltip({ text: error.response.data.error.detail, isSuccess: false })
        }
      }
    },
    makeSearch() {
      this.setCurrentPage(1)
      this.fetchOrders()
    }
  },
  created() {
    this.debouncedInput = debounce(this.makeSearch, 700)
  }
}
</script>
