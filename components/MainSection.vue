<template>
  <section class="mainSection">
    <div class="container h-full">
      <slot/>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.mainSection {
  height: 100vh;
  width: 100%;
}
</style>
