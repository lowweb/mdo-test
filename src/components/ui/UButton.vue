<script setup></script>

<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style lang="sass">
.button
  border-radius: 4px
  padding: 8px 35px
  width: 110px
  height: 36px
  box-shadow: 0 4px 4px 0 rgba(106, 174, 94, 0.25)
  background: #50b053
  font-family: $font-family
  font-weight: 400
  font-size: 14px
  // line-height: 20px
  line-height: 143%
  text-align: center
  color: $color-white
  border: none
  cursor: pointer

  &:hover
    background-color: $color-green
</style>
