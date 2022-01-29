<template>
  <div
    class="infoPanel overflow-hidden"
    :style="{ 'background-image': `url(${data.image})` }"
    @click="clickHandler"
  >
    <img class="w-full hidden sm:block" :src="data.image">

    <div class="infoWrapper">
      <p class="text-brownLight font-bold">{{ data.date }}</p>
      <h4 class="title mt-1.5">{{ data.title }}</h4>
      <p class="text-gray mt-3 sm:mt-1">{{ data.content }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: "InfoPanel",
  props: {
    data: {
      type: Object,
      required: true,
    }
  },
  methods: {
    clickHandler() {
      this.$emit('click');
    }
  }
})
</script>

<style lang="scss" scoped>
.infoPanel {
  @apply rounded-lg flex justify-end items-stretch relative bg-cover bg-left bg-no-repeat cursor-pointer;
  background-color: #999999;
  min-height: 48rem;

  @screen md {
    min-height: initial;
  }

  @screen sm {
    @apply flex-col;
  }

  .infoWrapper {
    @apply m-7.5 p-5 bg-white rounded-lg w-2/5 transform translate-x-full shadow-lg;

    transition: 0.5s;
    transform: translateX( calc(100% + 60px));

    @screen md {
      @apply m-0 px-5 rounded-l-none;
      transform: translateX(0);

      .title {
        @apply text-3xl;
      }
    }
    @screen sm {
      @apply w-full p-3 rounded-none;
      .title {
        @apply text-xl;
      }
    }
  }

  &:hover {
    .infoWrapper {
      transform: translateX(0px);
    }
  }
}


</style>
