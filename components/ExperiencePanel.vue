<template>
  <div class="experiencePanel">
    <div class="flex sm:items-center">
      <div class="imagePart">
        <img :src="experienceData.image">
      </div>

      <div :class="[
        'contentPart',
        {
          'flex': !$slots.description,
          'items-center': !$slots.description,
        }
      ]">
        <div>
          <p class="text-tiny text-brownLight hidden sm:block mb-0.5">{{ experienceData.time }}</p>

          <h5 class="sm:order-2 text-3xl sm:text-lg mb-1 sm:mb-0.5">{{ experienceData.position }}</h5>

          <div class="sm:order-1 flex">
            <p class="text-3xl sm:text-lg mr-2 sm:mr-0">{{ experienceData.place }}</p>
            <p class="text-3xl text-brownLight sm:hidden">{{ experienceData.time }}</p>
          </div>

          <div v-if="$slots.description" class="description sm:hidden">
            <slot name="description" />
          </div>
        </div>
      </div>
    </div>

    <div v-if="$slots.description" class="description hidden sm:block">
      <slot name="description" />
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: "ExperiencePanel",
  props: {
    experienceData: {
      type: Object,
      required: true,
    },
  }
})
</script>

<style lang="scss" scoped>
.experiencePanel {

  .imagePart {
    @apply mr-6;

    img {
      @apply w-15 h-15;
    }

    @screen sm {
      @apply mr-2;

      img {
        @apply w-10 h-10;
      }
    }
  }

  //.textStyle {
  //  @apply text-3xl;
  //  &:not(:last-of-type) {
  //    @apply mb-1;
  //  }
  //
  //  @screen sm {
  //    @apply text-lg;
  //    &:not(:last-of-type) {
  //      @apply mb-0.5;
  //    }
  //  }
  //
  //
  //}

  .description {
    @apply mt-1.5;
  }
}
</style>
