<template>
  <div class="infoPanel overflow-hidden" :style="{ 'background-image': `url(${data.image})` }">
    <img class="w-full hidden sm:block" :src="data.image">

    <div class="infoWrapper">
      <p class="text-brownLight font-bold">{{ data.date }}</p>
      <h4 class="title mt-1.5">{{ data.title }}</h4>
      <p class="text-gray mt-3 sm:mt-1">{{ data.content }}</p>
      <Button @click="clickHandler" class="mt-3 w-full bg-pink text-white">了解專案</Button>
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
  @apply rounded-lg flex justify-end items-stretch relative bg-cover bg-left bg-no-repeat;
  background-color: #999999;

  //.image {
  //  @apply w-full absolute;
  //  top: 50%;
  //  left: 50%;
  //  transform: translate(-50%, -50%);
  //}

  @screen sm {
    @apply flex-col;
  }

  .infoWrapper {
    @apply m-5 px-3 py-5 bg-white rounded-lg w-2/5 transform translate-x-full;

    transition: 0.5s;
    transform: translateX( calc(100% + 40px));

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
