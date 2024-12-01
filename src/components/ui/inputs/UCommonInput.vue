<template>
  <label class="input">
    <span class="input__label"><slot name="inputLabel"></slot></span>

    <input
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      v-model="model"
      class="input__field"
    />
  </label>
</template>

<script>
export default {
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
.input
  display: flex
  flex-direction: column
  width: 100%
  // gap: 8px
  border-bottom: 1px solid var(--Background-color-light, #ccc)
  min-height: 56px


  &__icon
    display: flex
    align-self: flex-end

  &__label
    display: flex
    flex-direction: row
    flex-wrap: wrap
    font-family: $font-family
    font-weight: 400
    font-size: 12px
    line-height: 150%
    color: $color-lightgreen

  &__field
    font-family: $font-family
    font-weight: 400
    font-size: 14px
    line-height: 143%
    color: $color-black
    border: none
    width: 100%
</style>
