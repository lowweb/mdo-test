<template>
  <div class="input__content">
    <div class="input__icon"><slot name="inputIcon"></slot></div>
    <UCommonInput :placeholder="placeholder">
      <template #inputLabel>Логин или Телефон</template>
    </UCommonInput>
  </div>
</template>

<script>
import UCommonInput from '../inputs/UCommonInput.vue'
export default {
  components: {
    UCommonInput
  },
  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    placeholder: {
      type: String,
      required: false,
      default: ''
    },
    type: {
      type: String,
      required: false,
      default: 'text'
    }
  }
}
</script>

<style lang="sass" scoped>
.input__content
  display: flex
  position: relative


  & .input__icon
    position: absolute
</style>
