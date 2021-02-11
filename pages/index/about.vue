<template>
  <div>
    <MainSection>
      <div class="flex justify-center items-center h-full">
        <div class="flex">
          <div class="flex-1 mr-2 flex items-center sm:hidden">
            <img class="photo" src="~/assets/images/index-kv.png">
          </div>
<!--          //TODO confirm photo pad RWD -->

          <div class="flex-1 sm:w-full">
            <h2 class="md:text-5xl sm:text-4xl">Hi，我是 Ting En Wei</h2>
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
<!--                //TODO icon-->
              </div>
              <p class="text-2xl text-gray mt-0.5 sm:text-tiny">{{ item.name }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="mb-10 md:mb-7.5 sm:mb-5">
        <div class="container">
          <h4 class="text-brown mb-6 sm:text-3xl md:mb-5 sm:mb-3">學歷經驗 EDUCATION</h4>

          <ExperiencePanel class="experiencePanelSpace" :experienceData="experienceData.NTUST" />
        </div>

      </section>

      <section class="mb-10 md:mb-7.5 sm:mb-5">
        <div class="container">
          <h4 class="text-brown mb-6 sm:text-3xl md:mb-5 sm:mb-3">工作經驗 WORK</h4>

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
    </div>


  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MainSection from "~/components/MainSection.vue";
import ExperiencePanel from "~/components/ExperiencePanel.vue";

export default Vue.extend({
  components: {
    MainSection,
    ExperiencePanel,
  },
  data() {
    return {
      professionalFieldList: [
        {
          image: '',
          content: '影片剪輯與動態設計'
        },
        {
          image: '',
          content: '影片剪輯與動態設計'
        },
        {
          image: '',
          content: '影片剪輯與動態設計'
        },
      ],
      softwareSkillList: [
        {
          image: '',
          name: 'Fimga',
        },
        {
          image: '',
          name: 'Photoshop',
        },
        {
          image: '',
          name: 'Illustrator',
        },
        {
          image: '',
          name: 'Sketch',
        },
        {
          image: '',
          name: 'After Effect',
        },
        {
          image: '',
          name: 'Final cut',
        },
        {
          image: '',
          name: 'Webflow',
        },
      ],
      experienceData: {
        NTUST: {
          image: '',
          position: '臺灣科技大學',
          place: '創意設計學士班 (主修工業設計)',
          time: '2012-2016',
        },
        rules: {
          image: '',
          position: '創意企劃 Creative Planner',
          place: '吾則創意 Rules Creative',
          time: '2016.08-2019.07',
        },
        mcCann: {
          image: '',
          position: '資深設計 Senior Design',
          place: '麥肯廣告 McCann Worldgroup',
          time: '2019.10-2020.11',
        }
      }
    };
  },
})
</script>

<style lang="scss" scoped>
.photo {
  @apply w-full;
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
    @apply w-15 h-15 bg-white rounded-lg;

    @screen sm {
      @apply w-7.5 h-7.5;
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
</style>
