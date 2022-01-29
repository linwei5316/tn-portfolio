<template>
  <div class="mb-8 md:mb-6 sm:mb-5 p-5 sm:p-3 rounded-lg shadow-md bg-white">
    <h2 class="keyH2 mb-3 sm:mb-4.5">
      <slot name="title" />
    </h2>

    <div class="flex mt-3 sm:mt-4.5 md:flex-wrap">
      <div class="inline-block w-1/2 md:w-full mr-2 md:mr-0 md:mb-3">
        <p class="text-brown text-xl mb-1">專案簡介</p>
        <slot name="description" />
      </div>

      <div class="inline-block w-1/4 md:w-1/2 pr-3 sm:w-full sm:pr-0 sm:mb-3">
        <p class="text-brown text-xl mb-1">負責任務</p>
        <slot name="task" />
      </div>

      <div class="inline-block w-1/4 md:w-1/2 sm:w-full">
        <p class="text-brown text-xl mb-1">專案時間</p>
        <slot name="time" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: "ProjectOverviewPanel",
});
</script>

<style lang="scss" scoped>
.keyH2 {
  @screen md {
    font-size: 3.2rem;
  }
  @screen sm {
    @apply text-4xl;
  }
}
</style>
