<template>
  <div class="ETPetsPage">
    <div class="banner"></div>


  </div>
</template>

<script>
export default {
name: "ETPets"
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/collectionPage.scss';

.ETPetsPage {
  @include collectionPage;

  .banner {
    //background-image: url("~@/assets/images/hotpot/hotpot-cover.jpg");
  }
}
</style>
