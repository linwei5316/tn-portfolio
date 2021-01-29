<template>
  <div>
    <MainSection>
      <div class="flex justify-center items-center h-full">
        <div class="flex">
          <div class="w-1/2 sm:w-full">
            <h2>Hi, 我是 Ting En</h2>
            <h2>是個設計行銷雙棲動物</h2>
            <h4 class="text-brown mt-3.5">過往的經驗，讓我在UX領域有更多不同的思考角度</h4>
            <p class="mt-3">工業設計系畢業讓我擁有關於挖掘使用者痛點的基礎訓練；四年的廣告行銷與視覺設計訓練，讓我更貼近市場；第一線的貼近企業主與消費者，也讓我在各個利益關係人中不停的學習取得衡。目前正決心在UIUX領域深耕。</p>

            <div class="buttonList mt-3">
              <Button class="bg-pink text-white mr-1">關於我</Button>
              <Button class="bg-pink text-white">下載履歷</Button>
            </div>
          </div>

          <div class="w-1/2 sm:hidden">
            <img class="keyVisualImage" src="">
          </div>
        </div>
      </div>
    </MainSection>

    <section class="py-6">
      <div class="container">
        <div class="sectionTitleWrapper mb-9">
          <h4 class="sectionTitle">UIUX 設計案例</h4>
        </div>

        <InfoPanel
          v-for="item in uiuxProjectList"
          :key="item.title"
          :data="item"
          @click="item.clickAction"
        />
      </div>
    </section>
    <section class="py-6 bg-white">
      <div class="container">
        <div class="sectionTitleWrapper">
          <h4 class="sectionTitle">我的行銷操作</h4>
          <h6 class="mt-3">廣告行銷長期的INSIGHT挖掘訓練，我發現與UX的使用者洞察是非常相似的</h6>
        </div>


      </div>
    </section>

    <section class="py-6">
      <div class="container">
        <div class="sectionTitleWrapper">
          <h4 class="sectionTitle">平面設計作品</h4>
          <h6 class="mt-3">從我的Behance中，可以了解到我的設計功力以及美感</h6>
        </div>


      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MainSection from "~/components/MainSection.vue";
import InfoPanel from '~/components/InfoPanel';

export default Vue.extend({
  name: 'Index',
  components: {
    MainSection,
    InfoPanel,
  },
  data() {
    return {
      uiuxProjectList: [
        {
          date: '2020',
          title: '分帳龍寶寶 Line bot 製作與迭代',
          content: 'kfdsjflkdjsfjsl',
          image: '',
          clickAction: () => {
            console.log('dragon')
          },
        },
      ]
    }
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
