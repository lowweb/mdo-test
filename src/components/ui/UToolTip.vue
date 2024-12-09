<template>
  <TransitionGroup name="list">
    <div
      class="tooltip"
      v-if="isShow"
      :class="{ 'tooltip--success': this.getSuccess, 'tooltip--error': !this.getSuccess }"
    >
      <button @click.stop="$emit('closeTooltip')" class="tooltip__closeButton">
        <IconCloseBtn />
      </button>
      <span class="tooltip__title">Сообщение:</span>
      <span class="tooltip__body">
        <slot name="tooltipBody" />
      </span>
    </div>
  </TransitionGroup>
</template>

<script>
import { mapGetters } from 'vuex'
import IconCloseBtn from '../icons/IconCloseBtn.vue'

export default {
  components: {
    IconCloseBtn
  },
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    isSuccess: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters('tooltipStore', ['getSuccess'])
  }
}
</script>

<style lang="sass">
.tooltip
  position: fixed
  bottom: 30px
  right: 10px
  display: flex
  flex-direction: column
  width: 400px
  background-color:$color-white
  box-shadow: 0px 0px 16px rgba(10, 10, 100, 0.08)
  padding: 16px 28px 16px 64px
  border-radius: 7px 4px 4px 7px
  border-left: solid 8px $color-green
  gap: 8px
  z-index: 10

  &__title
    font-weight: bold
  &__closeButton
    width: 24px
    height: 24px
    display: flex
    border: none
    padding: 0
    background-color: $color-white
    position: absolute
    right: 8px
    top: 8px

    &:hover path
      stroke: $color-red

  &::before
    content: ''
    width: 24px
    height: 24px
    position: absolute
    top: 16px
    left: 24px
    background-size: 24px 24px

  &--success::before
    background-image: url('@/assets/icons/icn-tooltip-success.svg')

  &--error::before
     background-image: url('@/assets/icons/icn-tooltip-error.svg')




.list-enter-active,
.list-leave-active
  transition: all 0.5s ease

.list-enter-from,
.list-leave-to
  opacity: 0
  transform: translateX(30px)
</style>
