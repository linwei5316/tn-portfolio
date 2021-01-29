<template>
  <div>
    <MainSection>
      <div class="flex justify-center items-center h-full">
        <div class="flex">
          <div class="w-1/2">
            <h2>Hi, 我是 Ting En</h2>
            <h2>是個設計行銷雙棲動物</h2>
            <h4 class="text-brown mt-6">過往的經驗，讓我在UX領域有更多不同的思考角度</h4>
            <p class="mt-10">工業設計系畢業讓我擁有關於挖掘使用者痛點的基礎訓練；四年的廣告行銷與視覺設計訓練，讓我更貼近市場；第一線的貼近企業主與消費者，也讓我在各個利益關係人中不停的學習取得衡。目前正決心在UIUX領域深耕。</p>

            <div class="buttonList mt-10">
              <Button class="bg-pink text-white mr-3">關於我</Button>
              <Button class="bg-pink text-white">下載履歷</Button>
            </div>
          </div>

          <div class="w-1/2">
            <img class="keyVisualImage" src="">
          </div>
        </div>
      </div>
    </MainSection>

    <section class="py-16">
      <div class="sectionTitleWrapper">
        <h4 class="sectionTitle">UIUX 設計案例</h4>
      </div>

    </section>
    <section class="py-16 bg-white">
      <div class="sectionTitleWrapper">
        <h4 class="sectionTitle">我的行銷操作</h4>
        <h6 class="mt-10">廣告行銷長期的INSIGHT挖掘訓練，我發現與UX的使用者洞察是非常相似的</h6>
      </div>

    </section>

    <section class="py-16">
      <div class="sectionTitleWrapper">
        <h4 class="sectionTitle">平面設計作品</h4>
        <h6 class="mt-10">從我的Behance中，可以了解到我的設計功力以及美感</h6>
      </div>


    </section>

<!--    Todo  footer-->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MainSection from "~/components/MainSection.vue";

export default Vue.extend({
  name: 'Index',
  components: {
    MainSection,
  }
})
</script>

<style lang="scss" scoped>
.buttonList {
  @apply flex;
}

.keyVisualImage {
  @apply w-full;
  transform: translateX(-20px);
}
.sectionTitleWrapper {
  @apply flex flex-col items-center;
}
.sectionTitle {
  @apply font-black text-white bg-brown;
  padding: 16px 40px;
  border-radius: 50px;
}
</style>
