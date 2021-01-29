<template>
  <div class="infoPanel overflow-hidden">
    <img :src="data.image">

    <div class="infoWrapper">
      <p class="text-brownLight font-bold">{{ data.date }}</p>
      <h4 class="mt-1.5">{{ data.title }}</h4>
      <p class="mt-3">{{ data.content }}</p>
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
  @apply rounded-lg flex justify-end items-stretch;
  background-color: #999999;
  
  .infoWrapper {
    @apply m-5 px-3 py-5 bg-white rounded-lg w-2/5 transform translate-x-full;

    transition: 0.5s;
    transform: translateX( calc(100% + 40px));
  }

  &:hover {
    .infoWrapper {
      transform: translateX(0px);
    }
  }
}


</style>
