<template>
  <div>
    <UInput placeholder="Поиск (№ заявки, название)" @input="updateSearch" v-model="searchQuery">
      <template #inputRightIcon>
        <UIconButton @click="console.log('dnejbdjwe')" class="dataview__inputbtn">
          <IconSearch />
        </UIconButton>
      </template>
    </UInput>
    <USelect :options="getAddresses" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UInput from '../ui/UInput.vue'
import USelect from '../ui/USelect.vue'
export default {
  components: {
    UInput,
    USelect
  },
  data() {
    return {
      searchQuery: ''
    }
  },
  computed: {
    ...mapGetters('addressesStore', ['getAddresses'])
  },
  methods: {
    updateSearch() {
      // try {
      //   const data = await getAddresses()
      //   commit('setAddresses', data.results)
      // } catch (error) {
      //   console.error('Error fetching items:', error)
      // }
    }
  }
}
</script>
