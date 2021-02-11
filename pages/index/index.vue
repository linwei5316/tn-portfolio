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
              <Button class="bg-pink text-white mr-1 sm:mr-2 sm:w-full">關於我</Button>
              <Button class="bg-pink text-white sm:w-full">下載履歷</Button>
            </div>
          </div>

          <div class="w-1/2 flex items-center sm:hidden">
            <img class="keyVisualImage" src="~/assets/images/index-kv.png">
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
              class="marketingBox"
              v-for="item in marketingList"
              :key="item.title"
            >
              <Box>
                <template v-slot:image>
                  <img class="marketingImage" :src="item.image">
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

        <div class="mt-3 -mx-1.5">
          <ScrollTriggerWrapper
            class="graphicDesignBox"
            v-for="item in graphicDesignList"
            :key="item.title"
          >
            <Box>
              <template v-slot:image>
                <img class="graphicDesignImage" :src="item.image">
              </template>
              <template v-slot:content>
                <h6 class="text-green">{{ item.title }}</h6>
              </template>
              <template v-slot:footer>
                <div
                  class="tag"
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
import gsap from 'gsap';

const TAGS = {
  ILLUSTRATION: '插畫',
  WEB_DESIGN: '網頁設計',
}

export default Vue.extend({
  name: 'Index',
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
          date: '2020',
          title: '分帳龍寶寶 Line bot 製作與迭代',
          content: 'Modi dolor placeat molestiae temporibus in dolorum nostrum aut sed. Reiciendis officia omnis asperiores ullam unde cumque aut et',
          image: '',
          clickAction: () => {
            console.log('dragon')
          },
        },
      ],
      marketingList: [
        {
          image: '',
          title: '影音平台做廣告？CHOCO TV的行銷游擊戰',
          clickAction: () => {
            console.log('market')
          },
        },
        {
          image: '',
          title: '粉絲團經營【殭屍粉絲團復活記 — TOTAL重生之旅】',
          clickAction: () => {
            console.log('market')
          },
        },
        {
          image: '',
          title: '最不端莊的保養品廣告 — 與DR.WU來一場創意角鬥',
          clickAction: () => {
            console.log('market')
          },
        },
      ],
      graphicDesignList: [
        {
          image: '',
          title: '十六茶-健康行旅行旅指南活動網站',
          tags: [TAGS.ILLUSTRATION, TAGS.WEB_DESIGN],
          clickAction: () => {
            console.log('graphicDesignList')
          },
        },
        {
          image: '',
          title: 'aaaaaa',
          tags: [TAGS.ILLUSTRATION],
          clickAction: () => {
            console.log('graphicDesignList')
          },
        },
        {
          image: '',
          title: 'bbb',
          tags: [TAGS.ILLUSTRATION],
          clickAction: () => {
            console.log('graphicDesignList')
          },
        },
        {
          image: '',
          title: 'cccc',
          tags: [TAGS.ILLUSTRATION],
          clickAction: () => {
            console.log('graphicDesignList')
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

  @screen sm {
    margin-top: 0;
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
  @apply inline-block shadow-md rounded-md mx-1 mb-2;
  width: calc(100% / 3 - 16px);

  @screen sm {
    width: calc(100% - 16px);
  }

  .marketingImage {
    background-color: #999999;
    height: 180px;
  }
}

.graphicDesignBox {
  @apply inline-block mx-1.5 mb-3;
  width: calc(50% - 24px);

  @screen sm {
    width: calc(100% - 24px);
  }

  .graphicDesignImage {
    background-color: #999999;
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
