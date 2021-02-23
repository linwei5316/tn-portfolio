<template>
  <footer class="bg-brown py-7.5">
    <div class="container text-center">
      <h5 class="text-white">TING EN WEI</h5>
      <h5 class="text-white">nn121393@gmail.com</h5>
      <div class="mt-3 flex justify-center">
        <a
          class="linkListItem"
          v-for="item in linkList"
          :key="item.link"
          :href="item.link"
          target="_blank"
        >
          <img class="w-6 h-6" :src="item.image">
        </a>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: "Footer",
  data() {
    return {
      linkList: [
        {
          image: require('@/assets/images/footer-medium.svg'),
          link: 'https://link.medium.com/sqxGgm6m5db',
        },
        {
          image: require('@/assets/images/footer-behance.svg'),
          link: 'https://www.behance.net/tingenwei',
        },
        {
          image: require('@/assets/images/footer-linkedin.svg'),
          link: 'http://linkedin.com/in/ting-en-wei-285411181',
        },
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
.linkListItem {
  &:not(:last-of-type) {
    @apply mr-1.5;
  }
}
</style>
