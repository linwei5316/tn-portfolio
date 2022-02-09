<template>
  <div>
    <MainSection class="sm:mb-5">
      <div class="flex justify-center items-center h-full">
        <div class="flex">
          <div class="tn-img-wrapper flex-1 mr-2 flex items-start sm:hidden">
            <img class="photo" src="~/assets/images/about-me/TN_img.png">
          </div>

          <div class="tn-img-textPart sm:w-full">
            <h2 class="mt-6 md:text-5xl sm:text-4xl">Hi, 我是 Ting En Wei</h2>
            <h2 class="md:text-5xl sm:text-4xl">你可以叫我TN</h2>
            <p class="text-gray mt-3">畢業於臺灣科技大學工業設計系，投入廣告行銷產業四年多，待過小型公司，一條龍服務，從業務窗口到實際執行設計與對外溝通聯繫，也曾任4A大型廣告代理商的資深設計，專門創意發想以及設計執行。目前正決心轉移至UIUX領域。</p>
            <p class="text-gray mt-3">我相信過往的行銷經驗以及工業設計背景，能讓我在企業與消費者之中取得更好的平衡，提供不同的觀點。</p>

          </div>
        </div>
      </div>
    </MainSection>

    <div class="negativeMargin">
      <section class="mb-10 md:mb-7.5 sm:mb-5">
        <div class="container">
          <h4 class="hidden sm:block text-brown mb-6 sm:text-3xl md:mb-5 sm:mb-3">擅長領域 Professional Field</h4>

          <div class="flex sm:flex-col">
            <div
              class="professionalFieldBox"
              v-for="item in professionalFieldList"
              :key="item.content"
            >
              <img :src="item.image">
              <p class="text-xl ml-3 font-bold">{{item.content}}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="mb-10 md:mb-7.5 sm:mb-5">
        <div class="container">
          <h4 class="text-brown mb-6 sm:text-3xl md:mb-5 sm:mb-3">使用軟體 SOFTWARE SKILL</h4>

          <div class="flex flex-wrap -mr-2.5 -mb-3.5 sm:-mr-2 sm:-mb-2">
            <div
              class="softwareSkillBox"
              v-for="item in softwareSkillList"
            >
              <div class="iconBlock">
                <img :src="item.image">
              </div>
              <p class="text-2xl text-gray mt-0.5 sm:text-tiny">{{ item.name }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="mb-10 md:mb-7.5 sm:mb-5">
        <div class="container">
          <h4 class="text-brown mb-6 sm:text-3xl md:mb-5 sm:mb-3">工作經驗 WORK</h4>

          <ExperiencePanel class="experiencePanelSpace" :experienceData="experienceData.ETToday">
            <template #description>
              <p class="experienceP">工作內容：東森寵物、ETtoday 新聞雲 APP 建置與維運</p>
              <p class="experienceP">- 東森寵物 APP 從 0 至 1 的建置</p>
              <p class="experienceP">- 東森寵物設計系統建置</p>
              <p class="experienceP">- 新聞雲 APP 因應業務需求的功能介面修改、節慶開機圖繪製</p>
            </template>
          </ExperiencePanel>

          <ExperiencePanel class="experiencePanelSpace" :experienceData="experienceData.mcCann">
            <template #description>
              <p class="experienceP">工作內容：創意發想與設計執行，規劃各項行銷活動，設計部分包含各式網站製作、通路與數位行銷素材</p>
              <p class="experienceP">主要服務品牌：全家Let’s Cafe /  十六茶 / 亞伯樂單一麥芽威士忌 / Martell 干邑白藍地 / 3M / Shicks 舒適牌</p>
            </template>
          </ExperiencePanel>

          <ExperiencePanel class="experiencePanelSpace" :experienceData="experienceData.rules">
            <template #description>
              <p class="experienceP">工作內容：業務 / 策略  / 創意  / 視覺文案設計 / 媒體投放與採購，一條龍執行。</p>
              <p class="experienceP">- 負責過TOTAL社群小編，圖文規劃與執行至廣告投放全權包辦。</p>
              <p class="experienceP">- 多檔產品行銷活動，包含活動網站、一頁式產品形象網站、網紅合作與影像腳本創意，也與外包工程師進行多次的配合。</p>
              <p class="experienceP">主要服務品牌：DR.WU 醫美品牌 / TOTAL 道達爾機油 / CHOTO TV 新創公司</p>
            </template>
          </ExperiencePanel>
        </div>
      </section>

      <section class="mb-10 md:mb-7.5 sm:mb-5">
        <div class="container">
          <h4 class="text-brown mb-6 sm:text-3xl md:mb-5 sm:mb-3">學歷經驗 EDUCATION</h4>

          <ExperiencePanel class="experiencePanelSpace" :experienceData="experienceData.NTUST" />
        </div>
      </section>

      <section class="py-9 md:py-7.5 sm:py-5 bg-white">
        <div class="container">
          <div class="sectionTitleWrapper">
            <h4 class="sectionTitle">我的其他經歷</h4>
            <h6 class="mt-3">行銷其講求的 Insight 挖掘與 UX 的使用者洞察是相似的，以下是過往工作為團隊記錄的商業洞察與行銷操作記錄</h6>

            <div class="mt-7 md:mt-5 -mx-1 -mb-2">
              <div
                class="marketingBox shadow-md hoverFloat"
                v-for="item in marketingList"
                :key="item.title"
              >
                <Box @click="item.clickAction">
                  <template v-slot:image>
                    <div class="marketingImage image" :style="{ 'background-image': `url(${item.image})` }"></div>
                  </template>
                  <template v-slot:content>
                    <h6 class="text-green">{{ item.title }}</h6>
                  </template>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MainSection from "~/components/MainSection.vue";
import ExperiencePanel from "~/components/ExperiencePanel.vue";
import { openNewWindow } from "~/utils/utils";

export default Vue.extend({
  name: 'About',
  scrollToTop: true,
  components: {
    MainSection,
    ExperiencePanel,
  },
  data() {
    return {
      professionalFieldList: [
        {
          image: require('@/assets/images/about-me/professional_uiux.png'),
          content: 'UIUX 設計與原型製作'
        },
        {
          image: require('@/assets/images/about-me/professional_graphic.png'),
          content: '平面設計與影像合成'
        },
        {
          image: require('@/assets/images/about-me/professional_video.png'),
          content: '影片剪輯與動態設計'
        },
      ],
      softwareSkillList: [
        {
          image: require('@/assets/images/about-me/software_figma.png'),
          name: 'Fimga',
        },
        {
          image: require('@/assets/images/about-me/software_photoshop.png'),
          name: 'Photoshop',
        },
        {
          image: require('@/assets/images/about-me/software_illustrator.png'),
          name: 'Illustrator',
        },
        {
          image: require('@/assets/images/about-me/software_sketch.png'),
          name: 'Sketch',
        },
        {
          image: require('@/assets/images/about-me/software_after-effect.png'),
          name: 'After Effect',
        },
        {
          image: require('@/assets/images/about-me/software_final-cut.png'),
          name: 'Final cut',
        },
        {
          image: require('@/assets/images/about-me/software_webflow.png'),
          name: 'Webflow',
        },
      ],
      experienceData: {
        NTUST: {
          image: require('@/assets/images/about-me/NTUST_logo.png'),
          position: '臺灣科技大學',
          place: '創意設計學士班 (主修工業設計)',
          time: '2012-2016',
        },
        rules: {
          image: require('@/assets/images/about-me/rules_logo.png'),
          position: '創意企劃 Creative Planner',
          place: '吾則創意 Rules Creative',
          time: '2016.08-2019.07',
        },
        mcCann: {
          image: require('@/assets/images/about-me/McCANN_logo.png'),
          position: '資深設計 Senior Design',
          place: '麥肯廣告 McCann Worldgroup',
          time: '2019.10-2020.11',
        },
        ETToday: {
          image: require('@/assets/images/about-me/ettoday_logo.png'),
          position: 'UI / UX Designer',
          place: '東森新媒體 ETtoday',
          time: '2021.04 - 至今',
        }
      },
      marketingList: [
        {
          image: require('~/assets/images/about-me/marketing-chocotv.png'),
          title: '影音平台做廣告？CHOCO TV的行銷游擊戰',
          clickAction: () => {
            openNewWindow('https://rulescreative.medium.com/%E4%BD%9C%E5%93%81-%E5%BD%B1%E9%9F%B3%E5%B9%B3%E5%8F%B0%E5%81%9A%E5%BB%A3%E5%91%8A-choco-tv%E7%9A%84%E8%A1%8C%E9%8A%B7%E6%B8%B8%E6%93%8A%E6%88%B0-rules-creative-f522970ccef');
          },
        },
        {
          image: require('~/assets/images/about-me/marketing-total.png'),
          title: '粉絲團經營【殭屍粉絲團復活記 — TOTAL重生之旅】',
          clickAction: () => {
            openNewWindow('https://rulescreative.medium.com/%E7%B2%89%E7%B5%B2%E5%9C%98%E7%B6%93%E7%87%9F-%E6%AE%AD%E5%B1%8D%E7%B2%89%E7%B5%B2%E5%9C%98%E5%BE%A9%E6%B4%BB%E8%A8%98-total%E9%87%8D%E7%94%9F%E4%B9%8B%E6%97%85-rules-creative-12742fe3e721');
          },
        },
        {
          image: require('~/assets/images/about-me/marketing-dr-wu.png'),
          title: '最不端莊的保養品廣告 — 與DR.WU來一場創意角鬥',
          clickAction: () => {
            openNewWindow('https://rulescreative.medium.com/%E6%A1%88%E4%BE%8B-%E6%9C%80%E4%B8%8D%E7%AB%AF%E8%8E%8A%E7%9A%84%E4%BF%9D%E9%A4%8A%E5%93%81%E5%BB%A3%E5%91%8A-%E8%88%87dr-wu%E4%BE%86%E4%B8%80%E5%A0%B4%E5%89%B5%E6%84%8F%E8%A7%92%E9%AC%A5-rules-creative-840fd0b9b953');
          },
        },
      ],
    };
  },
})
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/mainPage.scss';

.tn-img-wrapper {
  @apply px-2;
  flex: 5;
}
.tn-img-textPart {
  flex: 4;
}

.photo {
  @apply w-full;
}

.negativeMargin {
  margin-top: -120px;
  @screen md {
    margin-top: -240px;
  }
  @screen sm {
    margin-top: 0px;
  }
}

.professionalFieldBox {
  @apply py-3 px-5.5 flex-1 flex items-center rounded-lg shadow-md bg-white;

  &:not(:last-of-type) {
    @apply mr-3;
  }

  img {
    width: 70px;
    height: 60px;
  }

  @screen md {
    @apply px-3;
  }

  @screen sm {
    &:not(:last-of-type) {
      @apply mr-0 mb-3;
    }
  }
}

.softwareSkillBox {
  @apply text-center mb-3.5;
  margin-right: 1.7rem;

  @screen sm {
    @apply mr-2 mb-2;
  }

  .iconBlock {
    width: 60px;
    @apply p-3 w-15 h-15 bg-white rounded-lg;

    @screen sm {
      @apply w-7.5 h-7.5 p-1.5;
    }
  }
}

.experiencePanelSpace {
  &:not(:last-of-type) {
    @apply mb-6;

    @screen md {
      @apply mb-5;
    }
    @screen sm {
      @apply mb-3;
    }
  }
}

.experienceP {
  @apply text-lg text-gray;
  @screen sm {
    @apply text-base;
  }
}

.marketingBox {
  @apply inline-block rounded-md mx-1 mb-2;
  width: calc(100% / 3 - 16px);

  @screen sm {
    width: calc(100% - 16px);
  }

  .marketingImage {
    background-color: #999999;
    height: 170px;
  }
}
</style>
