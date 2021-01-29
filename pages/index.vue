<template>
  <div>
    <Header />

    <NuxtChild/>

    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from "~/components/Header.vue";
import MainSection from "~/components/MainSection.vue";
import Footer from "~/components/Footer.vue";

export default Vue.extend({
  name: 'App',
  components: {
    Header,
    MainSection,
    Footer,
  }
})
</script>
