<template>
  <header>
    <div class="container flex justify-between">
      <h2 class="text-3xl">TingEn's Portfolio</h2>

      <nav class="flex">
        <NuxtLink
          class="linkItem"
          v-for="item in navList"
          :to="item.route"
        >{{ item.text }}</NuxtLink>

        <Button class="bg-green text-white linkItem">下載履歷</Button>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Header',
  data() {
    return {
      navList: [
        {
          text: '設計作品',
          route: '/'
        },
        {
          text: '關於我',
          route: '/about'
        },
      ]
    }
  },
})
</script>

<style lang="scss" scoped>
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 15px 0;
    z-index: 10;
  }

  .linkItem {
    padding: 8px 24px;
  }
</style>
