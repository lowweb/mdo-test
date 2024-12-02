<template>
  <div class="input">
    <div class="input__icon"><slot name="inputLeftIcon"></slot></div>
    <label class="input__content">
      <span class="input__label"><slot name="inputLabel"></slot></span>
      <input
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="input__field"
      />
    </label>
    <div class="input__icon"><slot name="inputRightIcon"></slot></div>
  </div>
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
  width: 100%
  gap: 8px
  border-bottom: 1px solid var(--Background-color-light, #ccc)
  min-height: 56px
  padding-right: 12px


  &__icon
    display: flex
    align-self: flex-end

  &__content
    display: flex
    flex-direction: column
    justify-content: space-between
    // gap: 8.5px
    width: 100%

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
</style>
