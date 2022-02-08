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

    <section class="py-9 negativeMarginSection md:mt-0">
      <div class="container">
        <div class="sectionTitleWrapper mb-6 md:mb-3">
          <h4 class="sectionTitle">UIUX 設計案例</h4>
        </div>

        <InfoPanel
          v-for="(item, index) in uiuxProjectList"
          :class="(index < (uiuxProjectList.length - 1)) && 'mb-8 md:mb-5 sm:mb-3.5'"
          :key="item.title"
          :data="item"
          @click="item.clickAction"
        />
      </div>
    </section>

    <section class="py-9">
      <div class="container">
        <div class="sectionTitleWrapper">
          <h4 class="sectionTitle">平面與動態設計作品</h4>
          <h6 class="mt-3">您可以從我的 BEHANCE 看到更多作品</h6>
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
                <h6 class="text-dark">{{ item.title }}</h6>
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
import { openNewWindow } from "~/utils/utils";

const TAGS = {
  ILLUSTRATION: '插畫',
  VECTOR_ILLUSTRATION: '向量插圖',
  WEB_DESIGN: '網頁設計',
  IMAGE_SYNTHESIS: '影像合成',
  SOCIAL: '社群創意',
  KV: 'KV',
  LAYOUT: '排版設計',
  INTERACTIVE_GAME: '互動遊戲',
  UI: 'UI',
  GRAPHIC_DESIGN: '平面設計',
  CHARACTER_DESIGN: '角色設計',
  CAMPAIGN_LOGO_DESIGN: '活動 LOGO 設計',
  MOTION_GRAPHIC: 'Motion Graphic',
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
          date: '2021 - 2022',
          title: '東森寵物：從0到1建置OMO會員服務APP',
          content: '結合東森寵物雲等四間寵物品牌的APP，藉此達到線上線下整合的會員系統。初期功能包含點數、優惠券等線上會員服務，並且納入寵物新聞、podcast等媒體資源。',
          image: require('@/assets/images/index/UX-etPets.png'),
          clickAction: () => {
            this.$router.push('/ETPets');
          },
        },
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
      graphicDesignList: [
        {
          image: require('@/assets/images/index/2d_ET.png'),
          title: 'ETtoday ｜節慶 Launch Screen',
          tags: [TAGS.VECTOR_ILLUSTRATION, TAGS.MOTION_GRAPHIC],
          clickAction: () => {
            openNewWindow('https://www.behance.net/gallery/133393357/Holiday-launch-screen-ETtoday-APP');
          },
        },
        {
          image: require('@/assets/images/index/2d_yuanta.png'),
          title: '元大人壽｜夢想進行式活動網站視覺',
          tags: [TAGS.CAMPAIGN_LOGO_DESIGN, TAGS.CHARACTER_DESIGN, TAGS.VECTOR_ILLUSTRATION],
          clickAction: () => {
            openNewWindow('https://www.behance.net/gallery/135504029/LOGO');
          },
        },
        {
          image: require('@/assets/images/index/2d_16cha.jpg'),
          title: '十六茶｜健康行旅指南活動網站',
          tags: [TAGS.ILLUSTRATION, TAGS.WEB_DESIGN, TAGS.UI],
          clickAction: () => {
            openNewWindow('https://www.behance.net/gallery/107167183/16cha-Campaign-Website-Design-');
          },
        },
        {
          image: require('@/assets/images/index/2d_coffee.jpg'),
          title: '全家FamilyMart Let\'s Cafe 數位行銷',
          tags: [TAGS.SOCIAL, TAGS.GRAPHIC_DESIGN, TAGS.INTERACTIVE_GAME, TAGS.IMAGE_SYNTHESIS],
          clickAction: () => {
            openNewWindow('https://www.behance.net/gallery/113836159/FamilyMart-Lets-Cafe-Digital-Marketing-Design?tracking_source=project_owner_other_projects');
          },
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/mainPage.scss';

.buttonList {
  @apply flex;
}

.negativeMarginSection {
  margin-top: -120px;

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
