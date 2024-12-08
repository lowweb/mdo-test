<template>
  <div class="popup">
    <div class="popup__content">
      <div class="popup__caption">
        <slot name="caption"></slot>
      </div>
      <div class="popup__body">
        <slot name="body"></slot>
      </div>
      <div class="popup__footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
.popup
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-color: rgba(0, 0, 0, 0.2)
  display: flex
  justify-content: center
  align-items: center
  z-index: 10

  &__content
    background-color: white
    padding: 24px 32px
    border-radius: 8px
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2)
    position: relative
  &__caption
    font-family: $font-family
    font-weight: 500
    font-size: 16px
    line-height: 150%
    color: $color-black
    margin-bottom: 24px
    display: flex
    justify-content: space-between
</style>
