<template>
  <button
    class="button"
    @click="clickHandler"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: "Button",
  methods: {
    clickHandler() {
      this.$emit('click')
    }
  }
})
</script>

<style lang="scss" scoped>
.button {
  @apply text-base;
  cursor: pointer;
  border-radius: 50px;
  padding: 8px 24px;
}
</style>
