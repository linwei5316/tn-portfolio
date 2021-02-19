<template>
  <div ref="scrollTriggerWrapperRef" :class="triggerClass">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

export default Vue.extend({
  name: "ScrollTriggerWrapper",
  data() {
    return {
      triggered: false,
    }
  },
  computed: {
    triggerClass() {
      return {
        // fadeIn: this.triggered
        fadeIn: true
      }
    }
  },
  mounted() {
    const { scrollTriggerWrapperRef } = this.$refs;

    // //TODO 應該可以用 ScrollTrigger.create
    // onEnter onLeave onEnterBack onLeaveBack 來套用樣式 甚至 toggle class

    // ScrollTrigger.create({
    //   trigger: scrollTriggerWrapperRef,
    //   onEnter: () => {
    //     this.triggered = true;
    //   },
    // })

    gsap.to(scrollTriggerWrapperRef,{
      scrollTrigger: {
        trigger: scrollTriggerWrapperRef as Element,
        toggleActions: 'restart pause pause reverse',
        start: 'top 85%',
        // markers: true,
      },
      opacity: 1,
      translateX: 0,
      translateY: 0,
      duration: 0.3,
    })
  }
})
</script>

<style lang="scss" scoped>
.fadeIn {
  opacity: 0;
  transform: translate(0, 10px);
}
</style>
