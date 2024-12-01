<template>
  <button type="button" class="iconButton">
    <slot></slot>
  </button>
</template>

<style lang="sass">
.iconButton
  display: flex
  align-items: center
  justify-content: center
  border: none
  background-color: transparent

  &:hover
    opacity: 0.9
</style>
