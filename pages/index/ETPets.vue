<template>
  <div class="ETPetsPage">
    <div class="banner">
    </div>

    <section class="navigateBannerMargin">
      <div class="container">
        <ProjectOverviewPanel>
          <template #title>
            東森寵物：從0到1建置OMO會員服務APP
          </template>
          <template #description>
            <p>結合東森寵物雲等四間寵物品牌的APP，藉此達到線上線下整合的會員系統。初期功能包含點數、優惠券等線上會員服務，並且納入寵物新聞、podcast等媒體資源。</p>
          </template>
          <template #task>
            <p>與PM進行前期流程討論、設計系統的建置、設計完稿與交付、部分流程之原型製作。（設計團隊共2人）</p>
          </template>
          <template #time>
            <p>2021.04 - 2022.01</p>
          </template>
        </ProjectOverviewPanel>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ProjectOverviewPanel from "~/components/ProjectOverviewPanel.vue";

export default Vue.extend({
  name: "ETPets",
  components: {
    ProjectOverviewPanel,
  },
});
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/collectionPage.scss';

.ETPetsPage {
  @include collectionPage;

  .banner {
    background-image: url("~@/assets/images/etPets/cover_large.png");

    @screen md {
      background-image: url("~@/assets/images/etPets/cover_small.png");
    }
  }
}
</style>
