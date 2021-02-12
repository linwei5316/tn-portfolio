<template>
  <div class="twoPartContainer">
    <div class="firstContent text-brown text-3xl md:mb-3">
      <slot name="first" />
    </div>
    <div class="secondContent">
      <slot name="second" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TwoPartArticleContent',
  // props: {
  // }
})
</script>

<style lang="scss" scoped>
.twoPartContainer {
  @apply flex;

  @screen md {
    @apply flex-col;
  }

  .firstContent {
    flex: 1;
  }
  .secondContent {
    flex: 3;
  }
}
</style>
