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

    <section class="mb-10 md:mb-7.5">
      <div class="container">
        <TwoPartArticleContent>
          <template #first>
            <p class="text-brownLight mb-1">專案背景</p>
            <h5 class="mr-2">OMO新零售，整合東森寵物關企會員</h5>
          </template>
          <template #second>
            <div class="mb-2.5">
              <p>OMO新零售的浪潮中，許多線下商店開始推出的自己的線上會員系統，當然東森寵物雲也不例外。原本東森寵物雲線上會員綁定安排在ETtoday新聞雲之中，但由於日漸的壯大、現行功能不敷使用，決定為其獨立製作一支APP。並同時整併集團旗下的其他寵物品牌。然而行之有年的線下門市要虛實整合本身就不容易。而在擁有多子公司品牌的狀態下，面對不同作業系統的整併、傾聽各營運單位需求，嘗試在龐大且複雜的系統中取得最好的折衷方案，溝通與權衡成為了這個專案最大的挑戰。</p>
            </div>

            <p class="text-brown font-bold mb-2.5">歡迎直接下載體驗：</p>
            <div class="flex sm:block">
              <a class="appLink" href="https://apps.apple.com/tw/app/%E6%9D%B1%E6%A3%AE%E5%AF%B5%E7%89%A9/id1596215526" target="_blank">
                <img src="~/assets/images/etPets/appstore.png">
              </a>
              <a class="appLink" href="https://play.google.com/store/apps/details?id=com.etipets.app" target="_blank">
                <img src="~/assets/images/etPets/googleplay.png">
              </a>
            </div>
          </template>
        </TwoPartArticleContent>
      </div>
    </section>

    <section class="mb-10 md:mb-7.5">
      <div class="container">
        <TwoPartArticleContent>
          <template #first>
            <h5>設計目標</h5>
          </template>
          <template #second>
            <div class="mb-3">
              <p class="font-bold mb-0.5">1. 流程順暢且效率，易用性</p>
              <p>因為擁有多間品牌，會員系統較位複雜且不同以往使用者所認知的架構。必須確保用戶在切換與新增品牌上清楚理解與操作流暢，不會因為複雜的會員架構而混淆</p>
            </div>
            <div class="mb-3">
              <p class="font-bold mb-0.5">2. 符合實體店面的情境操作</p>
              <p>此APP初期主要目標使用者為實體店面之會員。因此加入像是能夠單手操作的會員條碼，或是針對退換貨時客人與店員之間的流程進行梳理，並增添必要資訊與提醒文字。</p>
            </div>
            <div>
              <p class="font-bold mb-0.5">3. 創造明確的品牌調性與視覺記憶點</p>
              <p>透由許多微立體與圓潤的元件設計，以及討喜的吉祥物插圖，塑造出寵物品牌年輕活力，增加品牌好感度。</p>
            </div>
          </template>
        </TwoPartArticleContent>
      </div>
    </section>

    <section class="mb-10 md:mb-7.5">
      <div class="container">
        <div class="mb-6.5 md:mb-6 sm:mb-5">
          <h5 class="mb-3 md:mb-2">為新產品定調 - 色彩計畫</h5>
          <p class="mb-3">寵物雲為 ETtoday 旗下的品牌，以往使用 Ettoday 的品牌主色--紫色為主。但這次的整合不僅只是東森寵物雲本身，同時要結合另外三間品牌。因此顏色選用上，以原本就存在的品牌吉祥物身上的顏色-- 藍色與桃紅 作為產品主色。ETtoday 的紫色、黃色作為輔助色。</p>

          <img class="w-full sm:hidden" src="~/assets/images/etPets/color_palette_l.png">
          <img class="w-full hidden sm:inline" src="~/assets/images/etPets/color_palette_s.png">
        </div>
      </div>
    </section>

    <section class="mb-10 md:mb-7.5">
      <div class="container">
        <div class="mb-6.5 md:mb-6 sm:mb-5">
          <h5 class="mb-3 md:mb-2">流程的挑戰：不同品牌的會員整併</h5>
          <p class="mb-3">東森寵物雲會員原本有一批綁定於 Ettoday 新聞雲之中，而由於場景的不同，決定將其獨立出來並且與其他寵物品牌進行整併。為了使東寵會員能夠無痛轉換，我們直接將其做帳號連動。而也造成東寵會員與其他品牌的基準點不同，實際上的流程規劃就更為複雜。團隊也為此做了多次的討論以及修改。</p>

          <img class="w-full" src="~/assets/images/etPets/sign_up_flow.png">
        </div>
      </div>
    </section>

    <section class="mb-10 md:mb-7.5">
      <img class="w-full" src="~/assets/images/etPets/pet_signup_wireframe_flow.png">
    </section>

    <section class="mb-10 md:mb-7.5">
      <div class="container">
        <div class="mb-6.5 md:mb-6 sm:mb-5">
          <h5 class="mb-3 md:mb-2">介面的挑戰：門市首頁為例</h5>
          <p class="mb-5">在此階段性的整合中，部分功能為四間品牌整併，例如點數為總點數的概念。但同時不同品牌仍有各自的線上商城、門市活動，優惠券也有限定品牌。且為了避免消費者可以直接比較不同品牌的優惠造成削價競爭。在首頁的設計上進行了「切換品牌卡」的概念。同時部分內容會隨的品牌而有所不同。為此也提供了不同的設計版本，而在各方單位的權衡下有了最後的呈現。</p>

          <div class="flex sm:block mb-10 md:mb-5">
            <div class="flex-1 flex items-center md:flex-col-reverse pr-2.5 sm:pr-0 sm:pb-2.5">
              <div class="flex-1 mr-3 md:mr-0 md:mt-3 sm:px-5">
                <img src="~/assets/images/etPets/homepage_v1.png">
              </div>
              <div class="flex-1">
                <p class="font-bold">方案 1</p>
                <p>1. 將四間品牌共用的功能放在畫面上方</p>
                <p>2. 針對「東森寵物雲」這個品牌的內容如：會員卡、商城、優惠活動，則用一個大卡片為底，做層級的差異。</p>
              </div>
            </div>

            <div class="flex-1 flex items-center md:flex-col-reverse pl-2.5 sm:pl-0 sm:pt-2.5">
              <div class="flex-1 mr-3 md:mr-0 md:mt-3 sm:px-5">
                <img src="~/assets/images/etPets/homepage_v2.png">
              </div>
              <div class="flex-1">
                <p class="font-bold">方案 2</p>
                <p>以卡片的樣式讓消費者更直覺為會員卡。同時加入品牌商城讓入口更顯眼。</p>
                <p>但因此APP主要為門市人員使用。希望把商城入口放在較不明顯的位置而需修改</p>
              </div>
            </div>
          </div>

          <div class="flex md:flex-col-reverse items-center">
            <div class="flex-average mr-3 md:mr-0 md:mt-3 px-10 md:px-20 sm:px-5">
              <img src="~/assets/images/etPets/homepage_final.png">
            </div>
            <div class="flex-average">
              <h5 class="mb-2.5">門市首頁 v1.0.0 最終版本</h5>
              <p>以卡片的樣式讓消費者更直覺為會員卡功能。同時以此作為分水嶺，下方都是跟著品牌切換時資訊會有所不同的功能。</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-10 md:mb-7.5">
      <div class="container">
        <div class="mb-7 md:mb-5 sm:mb-3">
          <h5 class="mb-3 md:mb-2">元件使用大圓角與漸層，與吉祥物更融合</h5>
          <p>寵物給人可愛圓潤的感覺，因此介面設計上大量運用圓角矩形，部分重點Icon也使用超橢圓。然而為了讓使用者更記住吉祥物，我們在畫面中也會偶爾運用吉祥物。而為符合3D吉祥物的風格，重點元件也設計的較立體，讓吉祥物在畫面中不會過於突兀。</p>
        </div>
      </div>

      <img class="w-full" src="~/assets/images/etPets/etpet_screen.png">
    </section>

    <section class="mb-10 md:mb-7.5 sm:overflow-hidden">
      <div class="container">
        <div class="mb-7 md:mb-5">
          <h5 class="mb-3 md:mb-2">插圖巧思：帶入寵物特性</h5>
          <p>在成功、錯誤、或是空畫面中。加入自家的吉祥物們並且結合寵物特性。透過動物俏皮的樣子，提升流程完成的回饋感、降低用戶在錯誤時的煩躁感。同時也加深對於吉祥物們的印象。</p>
        </div>

        <div class="flex flex-wrap sm:block -px-1.5 -mb-7.5 sm:px-0 sm:-mb-3">
          <div
            class="graphBox"
            v-for="item in graphDesignList"
            :key="item.description"
          >
            <img :src="item.image">
            <p class="mt-2">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-10 md:mb-7.5">
      <div class="container">
        <TwoPartArticleContent>
          <template #first>
            <h5>學習與反思</h5>
          </template>
          <template #second>
            <div class="mb-2">
              <p class="font-bold mb-0.5"># 學習在各方角力下取得平衡</p>
              <p>專案開發過程中密集的跨部門溝通，除了常接觸的PM與工程師外，也有許多門市管理人員、門市 pos 機的開發團隊參與。與會過程中也讓我更看到不只是使用者的聲音，還有各方立場的角度。使用者體驗與開發成本、門市訓練、行銷需求...等之間，要有智慧的與各個單位溝通與平衡。</p>
            </div>
            <div>
              <p class="font-bold mb-0.5"># 修改難免，主動解釋脈絡能加速開發</p>
              <p>因為業務單位不只一個，在開發過程中很容易因為需求變更而面臨設計要更改的狀況。而工程端的修改也遠比設計更不彈性，在提出修改需求時，主動的告訴工程師們自己的思考脈絡，以及為什麼新的設計體驗更好，能幫助雙方更快地達成共識。</p>
            </div>
          </template>
        </TwoPartArticleContent>
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
  data() {
    return {
      graphDesignList: [
        {
          image: require('~/assets/images/etPets/pet_1.png'),
          description: '刷卡成功',
        },
        {
          image: require('~/assets/images/etPets/pet_2.png'),
          description: '開啟通知功能',
        },
        {
          image: require('~/assets/images/etPets/pet_3.png'),
          description: '開啟定位功能',
        },
        {
          image: require('~/assets/images/etPets/pet_4.png'),
          description: '網路連線不穩',
        },
        {
          image: require('~/assets/images/etPets/pet_5.png'),
          description: '系統忙碌',
        },
        {
          image: require('~/assets/images/etPets/pet_6.png'),
          description: '空狀態',
        },
        {
          image: require('~/assets/images/etPets/pet_7.png'),
          description: '刷卡失敗',
        },
        {
          image: require('~/assets/images/etPets/pet_8.png'),
          description: '未登入',
        },
        {
          image: require('~/assets/images/etPets/pet_9.png'),
          description: '即將上線',
        },
      ],
    }
  }
});
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/collectionPage.scss';

.ETPetsPage {
  @include collectionPage;

  .banner {
    // custom bg position
    background-position-x: left;
    background-image: url("~@/assets/images/etPets/cover_large.png");

    @screen md {
      background-image: url("~@/assets/images/etPets/cover_small.png");
    }
  }

  // image with issue
  .flex-average {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 50%;
  }

  .graphBox {
    @apply px-1.5 mb-7.5 text-center;
    width: calc(100% / 3);

    @screen sm {
      @apply px-7 mb-3 w-full;
    }
  }

  .appLink {
    width: 18rem;
    @apply block;

    img {
      @apply w-full;
    }

    &:not(:last-of-type) {
      @apply mr-2.5;

      @screen sm {
        @apply mr-0 mb-2.5;
      }
    }
  }
}
</style>
