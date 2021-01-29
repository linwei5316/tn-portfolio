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
  background-image: url('~@/assets/images/nn.png');
  background-size: auto 120%;
  background-position: center bottom;
}
</style>
