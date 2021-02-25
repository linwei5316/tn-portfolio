<template>
  <div>
    <MainSection>
      <div class="flex justify-center items-center h-full">
        <div class="flex">
          <div class="w-1/2 sm:w-full">
            <h2 class="md:text-5xl sm:text-4xl">Hi, 我是 Ting En</h2>
            <h2 class="md:text-5xl sm:text-4xl">是個設計行銷雙棲動物</h2>
            <h4 class="text-brown mt-3.5 sm:mt-1.5 md:text-3xl sm:text-2xl">過往的經驗，讓我在UX領域有更多不同的思考角度</h4>
            <p class="text-gray mt-3">工業設計系畢業讓我擁有關於挖掘使用者痛點的基礎訓練；四年的廣告行銷與視覺設計訓練，讓我更貼近市場；第一線的貼近企業主與消費者，也讓我在各個利益關係人中不停的學習取得衡。目前正決心在UIUX領域深耕。</p>

            <div class="buttonList mt-3 sm:mt-1.5">
              <router-link to="/about" class="button bg-pink text-white mr-1 sm:mr-2 sm:w-full">關於我</router-link>
              <a :href="require('~/static/CV_TingEnWei.pdf')" download class="button bg-pink text-white sm:w-full">下載履歷</a>
            </div>
          </div>

          <div class="w-1/2 flex items-center sm:hidden">
            <img class="keyVisualImage" src="~/assets/images/index/kv.png">
          </div>
        </div>
      </div>
    </MainSection>

    <section class="py-6 negativeMarginSection md:mt-0">
      <div class="container">
        <div class="sectionTitleWrapper mb-9 md:mb-3">
          <h4 class="sectionTitle">UIUX 設計案例</h4>
        </div>

        <InfoPanel
          class="mb-8 md:mb-5 sm:mb-3.5"
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

          <div class="mt-3 -mx-1 -mb-2">
            <ScrollTriggerWrapper
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
            </ScrollTriggerWrapper>
          </div>
        </div>
      </div>
    </section>

    <section class="py-6">
      <div class="container">
        <div class="sectionTitleWrapper">
          <h4 class="sectionTitle">平面設計作品</h4>
          <h6 class="mt-3">從我的Behance中，可以了解到我的設計功力以及美感</h6>
        </div>

        <div class="mt-3 -mx-1.5 flex flex-wrap">
          <ScrollTriggerWrapper
            class="graphicDesignBox hoverFloat"
            v-for="item in graphicDesignList"
            :key="item.title"
          >
            <Box @click="item.clickAction">
              <template v-slot:image>
                <div class="graphicDesignImage image" :style="{ 'background-image': `url(${item.image})` }"></div>
              </template>
              <template v-slot:content>
                <h6 class="text-green">{{ item.title }}</h6>
              </template>
              <template v-slot:footer>
                <div
                  class="tag mb-1"
                  v-for="tag in item.tags"
                  :key="tag"
                >{{ tag }}</div>
              </template>
            </Box>
          </ScrollTriggerWrapper>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MainSection from "~/components/MainSection.vue";
import InfoPanel from '~/components/InfoPanel.vue';
import Box from "~/components/Box.vue";
import ScrollTriggerWrapper from "~/components/ScrollTriggerWrapper.vue";

const TAGS = {
  ILLUSTRATION: '插畫',
  WEB_DESIGN: '網頁設計',
  IMAGE_SYNTHESIS: '影像合成',
  SOCIAL: '社群創意',
  KV: 'KV',
  LAYOUT: '排版設計',
}

export default Vue.extend({
  name: 'Index',
  scrollToTop: true,
  components: {
    MainSection,
    InfoPanel,
    Box,
    ScrollTriggerWrapper,
  },
  data() {
    return {
      uiuxProjectList: [
        {
          date: '2021',
          title: '分帳龍寶寶：從MVP產品獲得用戶回饋的寶貴經驗',
          content: '分帳龍寶寶一款協助多人分帳的LINEBOT小工具，特別適合於短期出遊或是室友生活等常常需要有「公費」支出的情境。此為我與友人兩人之Side Project',
          image: require('@/assets/images/index/UX-babyDragon.jpg'),
          clickAction: () => {
            this.$router.push('/babydragon');
          },
        },
        {
          date: '2021',
          title: '石二鍋線上點餐叫號系統 APP Redesign',
          content: '以石二鍋連鎖餐廳叫號APP作為基礎進行Redesign，並以最完整且流暢的取號與點餐流程作為此次的設計目標',
          image: require('@/assets/images/index/UX-hotpot.jpg'),
          clickAction: () => {
            this.$router.push('/hotpotredesign');
          },
        },
      ],
      marketingList: [
        {
          image: require('@/assets/images/index/marketing-chocotv.png'),
          title: '影音平台做廣告？CHOCO TV的行銷游擊戰',
          clickAction: () => {
            window.open('https://rulescreative.medium.com/%E4%BD%9C%E5%93%81-%E5%BD%B1%E9%9F%B3%E5%B9%B3%E5%8F%B0%E5%81%9A%E5%BB%A3%E5%91%8A-choco-tv%E7%9A%84%E8%A1%8C%E9%8A%B7%E6%B8%B8%E6%93%8A%E6%88%B0-rules-creative-f522970ccef', '_blank');
          },
        },
        {
          image: require('@/assets/images/index/marketing-total.png'),
          title: '粉絲團經營【殭屍粉絲團復活記 — TOTAL重生之旅】',
          clickAction: () => {
            window.open('https://rulescreative.medium.com/%E7%B2%89%E7%B5%B2%E5%9C%98%E7%B6%93%E7%87%9F-%E6%AE%AD%E5%B1%8D%E7%B2%89%E7%B5%B2%E5%9C%98%E5%BE%A9%E6%B4%BB%E8%A8%98-total%E9%87%8D%E7%94%9F%E4%B9%8B%E6%97%85-rules-creative-12742fe3e721', '_blank');
          },
        },
        {
          image: require('@/assets/images/index/marketing-dr-wu.png'),
          title: '最不端莊的保養品廣告 — 與DR.WU來一場創意角鬥',
          clickAction: () => {
            window.open('https://rulescreative.medium.com/%E6%A1%88%E4%BE%8B-%E6%9C%80%E4%B8%8D%E7%AB%AF%E8%8E%8A%E7%9A%84%E4%BF%9D%E9%A4%8A%E5%93%81%E5%BB%A3%E5%91%8A-%E8%88%87dr-wu%E4%BE%86%E4%B8%80%E5%A0%B4%E5%89%B5%E6%84%8F%E8%A7%92%E9%AC%A5-rules-creative-840fd0b9b953', '_blank');
          },
        },
      ],
      graphicDesignList: [
        {
          image: require('@/assets/images/index/2d_16cha.jpg'),
          title: '十六茶｜健康行旅指南活動網站',
          tags: [TAGS.ILLUSTRATION, TAGS.WEB_DESIGN],
          clickAction: () => {
            window.open('https://www.behance.net/gallery/107167183/16cha-Campaign-Website-Design-', '_blank');
          },
        },
        {
          image: require('@/assets/images/index/2d_coffee.jpg'),
          title: '全家FamilyMart Let\'s Cafe 數位行銷',
          tags: [TAGS.ILLUSTRATION, TAGS.WEB_DESIGN, TAGS.SOCIAL, TAGS.KV],
          clickAction: () => {
            window.open('https://www.behance.net/gallery/113836159/FamilyMart-Lets-Cafe-Digital-Marketing-Design?tracking_source=project_owner_other_projects', '_blank');
          },
        },
        {
          image: require('@/assets/images/index/2d_3M.jpg'),
          title: '3M百利馬桶刷通路主視覺',
          tags: [TAGS.WEB_DESIGN, TAGS.KV],
          clickAction: () => {
            window.open('https://www.behance.net/gallery/108053571/3M-Scotch-Brite-toilet-bowl-brush-Key-Visual?tracking_source=project_owner_other_projects', '_blank');
          },
        },
        {
          image: require('@/assets/images/index/2d_wine.png'),
          title: '烈酒類品牌行銷設計',
          tags: [TAGS.KV, TAGS.IMAGE_SYNTHESIS, TAGS.LAYOUT, TAGS.SOCIAL],
          clickAction: () => {
            window.open('https://www.behance.net/gallery/113846173/Alcohol-marketing-content-design?tracking_source=project_owner_other_projects', '_blank');
          },
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>

.buttonList {
  @apply flex;
}

.negativeMarginSection {
  margin-top: -162px;

  @apply -mb-8;

  @screen md {
    @apply -mb-5;
  }

  @screen sm {
    @apply mt-0 -mb-3.5;
  }
}

.keyVisualImage {
  @apply w-full;
  transform: translateX(60px);
}
.sectionTitleWrapper {
  @apply flex flex-col items-center;
}
.sectionTitle {
  @apply py-2 px-5 font-black text-white bg-brown rounded-full;

  @screen md {
    @apply py-1 text-3xl;
  }
  @screen sm {
    @apply py-0.5 px-4 text-xl;
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

.graphicDesignBox {
  @apply inline-block rounded-md mx-1.5 mb-3;
  width: calc(50% - 24px);

  @screen sm {
    width: calc(100% - 24px);
  }

  .graphicDesignImage {
    @apply w-full;
    height: 302px;
  }

  .tag {
    @apply inline-block py-0.5 px-2 border-pink border-2 rounded-full border-solid text-pink;

    &:not(:last-of-type) {
      @apply mr-1.5;
    }
  }
}


</style>
