<template>
  <label class="select">
    <span class="select__label"><slot name="selectLabel"></slot></span>
    <select
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="select__field"
      :options="options"
      :placeholder="placeholder"
    >
      <option value="" disabled selected hidden>Выберите вариант</option>
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.name }}
      </option>
    </select>
  </label>
</template>

<script>
export default {
  emits: ['update:modelValue'],
  props: {
    modelValue: String,
    options: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<style lang="sass">
.select
  display: flex
  flex-direction: column
  width: 100%
  justify-content: center
  border-bottom: 1px solid var(--Background-color-light, #ccc)
  min-height: 56px

  &--slim
    min-height: unset

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

  &__placeholder[hidden]
    color: #ababab

  &__field
    font-family: $font-family
    font-weight: 400
    font-size: 14px
    line-height: 143%
    color: $color-black
    border: none
    width: 100%
    background-color: transparent

    &:focus
      outline: none
</style>
