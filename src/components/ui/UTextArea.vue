<template>
  <label class="textarea">
    <span class="textarea__label"><slot name="textareaLabel"></slot></span>
    <div class="textarea__body">
      <textarea
        :placeholder="placeholder"
        :rows="rows"
        :disabled="disabled"
        :value="modelValue"
        class="textarea__field"
        @input="updateValue"
      />
    </div>
  </label>
</template>

<script>
export default {
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
    rows: {
      type: Number,
      required: false,
      default: 4
    }
  },
  methods: {
    updateValue(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style lang="sass" scoped>
.textarea
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
