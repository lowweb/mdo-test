<template>
  <table class="table" :class="{ 'table--loading': getLoading }">
    <USpinner />
    <thead class="table__head">
      <tr>
        <th v-for="column in getTableColumns" :key="column.keyName">
          <span class="table__head-item">
            {{ column.columnName }}
            <span
              v-if="column.isSortable"
              class="table__sortbtn"
              :class="{ 'table__sortbtn--active': sortableColumnName === column.keyName }"
              @click="sortTable(column.keyName)"
              ><IconArrow
                :class="{
                  'table__sortbtn--down': sortOrder === -1 && sortableColumnName === column.keyName
                }"
            /></span>
          </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <span v-if="countRecords === 0" class="table__row--empty"> Нет данных </span>
      <tr class="table__row" v-for="item in paginatedData" :key="item.number">
        <td>
          <UButton class="button--small" @click="openOrderInfo(item.number)">{{
            item.number
          }}</UButton>
        </td>
        <td>{{ getDate(item.created_at, optionsDate) }}</td>
        <td>{{ item.premise?.address }}</td>
        <td>{{ item.applicant?.last_name }}</td>
        <td>{{ item.description }}</td>
        <td>{{ getDate(item.due_date, optionsDateTime) }}</td>
        <td>{{ item.status.name }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
import UButton from '../ui/UButton.vue'
import IconArrow from '../icons/IconArrow.vue'
import USpinner from '../ui/USpinner.vue'
export default {
  components: {
    UButton,
    IconArrow,
    USpinner
  },
  data() {
    return {
      sortableColumnName: '',
      optionsDate: {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
      },
      optionsDateTime: {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }
    }
  },
  computed: {
    ...mapState('ordersStore', ['sortKey', 'sortOrder']),
    ...mapState('paginationStore', ['countRecords']),
    ...mapGetters('paginationStore', ['paginatedData']),
    ...mapGetters('stateStore', ['getLoading']),
    ...mapGetters('stateStore', ['getTableColumns']),
    ...mapGetters('itemStore', ['getItemField'])
  },
  methods: {
    ...mapMutations('ordersStore', ['setSortKey', 'setSortOrder']),
    ...mapActions('itemStore', ['fetchItem']),
    ...mapActions('addressesStore', ['fetchApartament']),
    sortTable(key) {
      this.sortableColumnName = key

      if (this.sortKey === key) {
        this.setSortOrder(this.sortOrder * -1)
      } else {
        this.setSortKey(key)
        this.setSortOrder(1)
      }
    },
    getDate(str, options) {
      var date = new Date(str)
      return date.toLocaleString('ru', options)
    },

    async openOrderInfo(id) {
      await this.fetchItem(id)
      const primiseId = await this.getItemField('premise.id')
      this.fetchApartament(primiseId)
      this.$router.push(`/orderinfo/${id}`)
    }
  }
}
</script>

<style lang="sass" scoped>
.table
  width: 100%
  border: none
  font-family: $second-family
  font-weight: 400
  font-size: 14px
  line-height: 143%
  color: $color-black
  table-layout: fixed
  border-collapse: collapse
  position: relative

  &--loading
    &::before
      content: ''
      display: block
      position: absolute
      width: 100%
      height: 100%
      background-color: #ffffff
      top: 0
      z-index: 99
      opacity: .8

  & th:nth-child(1)
    width: 10%
  & th:nth-child(2)
    width: 15%
  & th:nth-child(3)
    width: 15%
  & th:nth-child(4)
    width: 15%
  & th:nth-child(5)
    width: 20%
  & th:nth-child(6)
    width: 15%
  & th:nth-child(7)
    width: 10%

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
    &--empty
      display: flex
      width: max-content
    & td
      padding: 15px 4px
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
      width: 10%
  &__sortbtn
    fill: #D9D9D9
    display: flex
    align-items: center
    margin-left: 3px

    &--active
      fill: #333
    &--down
      transform: rotate(180deg)

    &:hover
      fill: #333
      transition: .7s
</style>
