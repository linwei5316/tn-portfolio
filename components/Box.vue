<template>
  <div class="box" @click="clickHandler">
    <div class="imageWrapper">
      <slot name="image"/>
    </div>
    <div class="boxContent">
      <slot name="content"/>
    </div>
    <div v-if="$slots.footer" class="boxFooter">
      <slot name="footer"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: "Box",
  methods: {
    clickHandler() {
      this.$emit('click');
    }
  },
})
</script>

<style lang="scss" scoped>
.box {
  @apply cursor-pointer rounded-md overflow-hidden;
}
.imageWrapper {
  @apply relative;
}
.boxContent {
  @apply px-2.5 py-2 bg-white;
}
.boxFooter {
  @apply px-2.5 pb-2 bg-white;
}

</style>
