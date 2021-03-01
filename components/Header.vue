<template>
  <header
    :class="[
      'relative', 'transition',
      {
        'bg-bgMain': !featTop,
        mobileNavActive: showMobileNav,
      }
    ]"
  >
    <div
      :class="[
        'container', 'flex', 'justify-between', 'items-center', 'transition',
        { 'bg-bgMain': !featTop }
      ]"
    >
      <router-link to="/">
        <h2 class="text-3xl">TingEn's Portfolio</h2>
      </router-link>

      <nav class="flex md:hidden">
        <NuxtLink
          class="linkItem"
          v-for="item in navList"
          :key="item.route"
          :to="item.route"
        >{{ item.text }}</NuxtLink>

        <a :href="require('~/static/CV_TingEnWei.pdf')" download class="button bg-green text-white px-3 my-2.5">下載履歷</a>
      </nav>
      <button
        :class="['hamburgerButton', { active: showMobileNav }]"
        @click="toggleMobileNav"
        @blur="setShowMobileNav(false)"
      >
        <div
          class="line"
          v-for="i in 3"
        ></div>
      </button>
    </div>

    <div :class="['mobileNavPanel', 'transition', { active: showMobileNav }]">
      <NuxtLink
        class="mobileLinkItem"
        v-for="item in navList"
        :key="item.route"
        :to="item.route"
        @click="setShowMobileNav(false)"
      >{{ item.text }}</NuxtLink>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import { throttle } from 'lodash';

export default Vue.extend({
  name: 'Header',
  data() {
    return {
      showMobileNav: false,
      featTop: true,
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
  methods: {
    toggleMobileNav() {
      this.setShowMobileNav(!this.showMobileNav);
    },
    setShowMobileNav(value: boolean) {
      this.showMobileNav = value;
    },
    scrollWindowHandler() {
      this.featTop = window.scrollY === 0;
    },
    throttleScrollWindowHandler() {},
  },
  created() {
    this.throttleScrollWindowHandler = throttle(this.scrollWindowHandler, 50);
  },
  mounted() {
    window.addEventListener('scroll', this.throttleScrollWindowHandler);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.throttleScrollWindowHandler);
  }
})
</script>

<style lang="scss" scoped>
  .transition {
    transition: 0.3s;
  }

  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;

    &.mobileNavActive {
      @apply bg-bgMain;
    }
  }

  .linkItem {
    @apply py-1 px-3 my-2.5;
  }

  .hamburgerButton {
    @apply hidden p-2.5 w-2.5 h-2 outline-none box-content;
    @screen md {
      @apply inline-flex flex-col justify-between items-stretch;
    }

    .line {
      @apply w-full h-0.25 bg-dark;
    }

    &.active {
      @apply bg-green;
      .line {
        @apply w-full h-0.25 bg-white;
      }
    }
  }

  .mobileNavPanel {
    @apply hidden absolute w-full left-0 bg-bgMain;
    @screen md {
      @apply block;
    }
    top: 100%;
    opacity: 0;
    transform: translateY(calc(-100%));
    z-index: -1;

    &.active {
      transition-delay: 0.3s;
      transform: translateY(-1px);
      opacity: 1;
    }

    .mobileLinkItem {
      @apply block py-3 px-2.5;

    }
  }
</style>
