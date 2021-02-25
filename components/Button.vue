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

</style>
