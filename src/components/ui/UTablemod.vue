<template>
  <div>
    <input type="text" v-model="searchQuery" @input="updateSearch" placeholder="Search by number" />
    <select v-model="addressFilter" @change="updateAddressFilter">
      <option value="">All Addresses</option>
      <option v-for="address in uniqueAddresses" :key="address" :value="address">
        {{ address }}
      </option>
    </select>
    <table class="table">
      <thead class="table__head">
        <tr>
          <th>
            <span class="table__head-item">
              Number
              <span
                class="table__sortbtn"
                :class="{ 'table__sortbtn--active': sortableColumnName === 'number' }"
                @click="sortTable('number')"
                ><IconArrow
              /></span>
            </span>
          </th>
          <th>
            <span class="table__head-item"
              >Created At<span
                class="table__sortbtn"
                :class="{ 'table__sortbtn--active': sortableColumnName === 'created_at' }"
                @click="sortTable('created_at')"
                ><IconArrow /></span
            ></span>
          </th>
          <th><span class="table__head-item">Address</span></th>
          <th><span class="table__head-item">Last Name</span></th>
          <th><span class="table__head-item">Description</span></th>
          <th><span class="table__head-item">Due Date</span></th>
          <th>
            <span class="table__head-item"
              >Status Name<span
                class="table__sortbtn"
                :class="{ 'table__sortbtn--active': sortableColumnName === 'statusname' }"
                @click="sortTable('statusname')"
                ><IconArrow /></span
            ></span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="table__row" v-for="item in paginatedData" :key="item.number">
          <td>
            <UButton class="button--small">{{ item.number }}</UButton>
          </td>
          <td>{{ item.created_at }}</td>
          <td>{{ item.address }}</td>
          <td>{{ item.last_name }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.due_date }}</td>
          <td>{{ item.statusname }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
import UButton from '../ui/UButton.vue'
import IconArrow from '../icons/IconArrow.vue'
export default {
  components: {
    UButton,
    IconArrow
  },
  data() {
    return {
      sortableColumnName: ''
    }
  },
  computed: {
    ...mapState('dataStore', ['searchQuery', 'addressFilter']),
    ...mapGetters('dataStore', ['uniqueAddresses']),
    ...mapGetters('paginationStore', ['paginatedData'])
  },
  methods: {
    ...mapMutations('dataStore', [
      'setSearchQuery',
      'setAddressFilter',
      'setSortKey',
      'setSortOrder'
    ]),
    updateSearch(event) {
      this.setSearchQuery(event.target.value)
    },
    updateAddressFilter(event) {
      this.setAddressFilter(event.target.value)
    },
    sortTable(key) {
      this.sortableColumnName = key
      if (this.sortKey === key) {
        this.setSortOrder(this.sortOrder * -1)
      } else {
        this.setSortKey(key)
        this.setSortOrder(1)
      }
    }
  }
}
</script>

<style lang="sass">
.table
  width: 100%
  border-collapse: collapse
  border: none
  font-family: $second-family
  font-weight: 400
  font-size: 14px
  line-height: 143%
  color: $color-black

  &__head
    height: 44px
    font-family: $font-family
    font-weight: 400
    font-size: 14px
    line-height: 143%
    color: $color-lightgreen
    border-bottom: solid 1px #dddfe0

    &-item
      padding: 12px 8px
      text-align: left
      display: flex
      align-items: center
      position: relative

  &__row
    box-shadow: inset 0 -1px 0 0 #dddfe0
    & td
      padding: 15px 4px
  &__sortbtn
    fill: #D9D9D9
    display: flex
    align-items: center
    margin-left: 3px

    &--active
      fill: #333

    &:hover
      fill: #333
      transition: .7s
</style>
