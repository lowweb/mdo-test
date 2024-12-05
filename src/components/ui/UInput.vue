<template>
  <label class="input">
    <span class="input__label"><slot name="inputLabel"></slot></span>
    <div class="input__body">
      <input
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :value="modelValue"
        class="input__field"
      />
      <span class="input__righticon"><slot name="inputRightIcon"></slot></span>
    </div>
  </label>
</template>

<script>
export default {
  emits: ['update:modelValue'],
  props: {
    modelValue: String,
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
  justify-content: center
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

  &__body
    display: flex
    align-items: center

  &__field
    font-family: $font-family
    font-weight: 400
    font-size: 14px
    line-height: 143%
    color: $color-black
    border: none
    width: 100%

    &::placeholder
      color: #ababab

    &:focus
      outline: none
</style>
