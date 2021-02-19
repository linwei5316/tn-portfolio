<template>
  <div class="hotpotPage">
    <div class="banner">
    </div>

    <section class="navigateBannerMargin">
      <div class="container">
        <div class="mb-8 md:mb-6 sm:mb-5 p-5 sm:p-3 rounded-lg shadow-md bg-white">
          <h2 class="keyH2 mb-3 sm:mb-4.5">石二鍋線上點餐叫號系統 APP Redesign</h2>

          <div class="flex mt-3 sm:mt-4.5 md:flex-wrap">
            <div class="inline-block w-1/2 md:w-full mr-2 md:mr-0 md:mb-3">
              <p class="text-brown text-xl mb-1">專案簡介</p>
              <p>石二鍋僅接受APP預定或是現場抽號碼（多數人不會選擇），但APP使用流程不順，也有許多舊式的介面設計，導致使用體驗並不佳。</p>
            </div>

            <div class="inline-block w-1/4 md:w-1/2 pr-3 sm:w-full sm:pr-0 sm:mb-3">
              <p class="text-brown text-xl mb-1">負責任務</p>
              <p>功能流程重新規劃、設計完稿、原型製作，為自主練習之作品</p>
            </div>

            <div class="inline-block w-1/4 md:w-1/2 sm:w-full">
              <p class="text-brown text-xl mb-1">專案時間</p>
              <p>2020.12 - 2021.1</p>
            </div>
          </div>
        </div>

        <TwoPartArticleContent class="mb-7.5 md:mb-6 sm:mb-5">
          <template #first>
            <h5>設計目標</h5>
          </template>

          <template #second>
            <div class="flex items-start mb-1.5">
              <p class="font-bold mr-1">1.</p>
              <p>以石二鍋連鎖餐廳叫號APP作為基礎進行Redesign，開發出一個相對理想、流程完善的線上叫號系統，並可適用於多數餐廳的流程</p>
            </div>
            <div class="flex items-start">
              <p class="font-bold mr-1">2.</p>
              <p>以最完整的取號與點餐流程作為此次的設計目標，先不考慮APP的開發成本，針對此項後面會有更詳細的說明。</p>
            </div>
          </template>
        </TwoPartArticleContent>

        <TwoPartArticleContent class="mb-7.5 md:mb-6 sm:mb-5">
          <template #first>
            <h5>設計流程</h5>
          </template>

          <template #second>
            <p class="mb-1.5"><span class="font-bold mr-1">1.現況分析與競品分析</span>蒐集使用者對於現行石二鍋APP的評價並大量參考其他餐廳與相關APP</p>
            <p class="mb-1.5"><span class="font-bold mr-1">2.重新規劃流程</span>Sitemap重新規劃，並繪製Wireframe檢視流程流暢度</p>
            <p class="mb-1.5"><span class="font-bold mr-1">3. 建置設計系統與繪製Icon</span>建置符合石二鍋品牌形象之設計系統並建立模組化。</p>
            <p class="mb-1.5"><span class="font-bold mr-1">4. 設計精稿與原型製作</span>高仿真的設計原型，便於溝通</p>
          </template>
        </TwoPartArticleContent>

        <div class="mb-6.5 md:mb-6 sm:mb-5">
          <h5 class="mb-3 md:mb-2">市場現況： 餐飲業出的APP經常體驗不佳</h5>
          <p>不管是麥當勞、肯德基、藏壽司、星巴克...很少有一個APP是好用的，然而餐廳APP，多半作為預先訂位、點餐或是開發會員系統集點使用。然而實際的購買場景還是在餐廳內，APP實際上帶來的實際商業利益並不高。<span class="font-bold">因此作為「額外服務」的APP，為減少開發成本，直接「套版」是個不錯的解決方式</span>。觀察市面餐廳APP大多使用相同版型，然而石二鍋也不例外。其問題就是礙於現行的<span class="font-bold">版型會帶來很多的流程限制，使用體驗就會不佳</span>。</p>
        </div>

        <div class="flex md:flex-col">
          <div class="flex-1 mr-3 md:mr-0 flex justify-center items-center md:mb-3">
            <img class="w-full md:w-3/5 sm:w-full" src="~/assets/images/hotpot/app-store-comment.png">
          </div>

          <div class="flex-1 py-7 md:py-0">
            <h5 class="mb-2">統整 APP Store 評價，<br class="md:hidden">歸納出4個重點修改方向</h5>

            <div class="mb-2">
              <p class="font-bold mb-0.5">1.整體架構重新調整</p>
              <p>架構層級過深，將重要的拉至第一層，不必要的分類進行簡化</p>
            </div>
            <div class="mb-2">
              <p class="font-bold mb-0.5">2.首頁的重新排版</p>
              <p>現行只是主選單排排站，應該要放大「取號」的功能</p>
            </div>
            <div class="mb-2">
              <p class="font-bold mb-0.5">3.點餐取號流程優化</p>
              <p>設計單一直覺的取餐流程</p>
            </div>
            <div>
              <p class="font-bold mb-0.5">4.新增便於使用者的小功能</p>
              <p>例如釘選最愛門市或自訂通知設定等</p>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section class="mb-11.5 md:mb-7.5">
      <div class="mb-11 md:mb-7.5 sm:mb-5">
        <div class="container">
          <h5 class="mb-3">修改1：整體架構重新調整</h5>
        </div>

        <div class="container sm_full">
          <img class="w-full mb-3" src="~/assets/images/hotpot/sitemap.jpg">
        </div>

        <div class="container">
          <div class="flex items-start mb-1.5">
            <p class="font-bold mr-1">1.</p>
            <p>首頁原先僅作為主選單的功能，實際功能都要進入第二層才能操作。考慮到使用者需求，將最重要的「線上取號」功能直接放在首頁，原先的品牌情報（品牌廣告）也繼續保留在首頁版位。</p>
          </div>
          <div class="flex items-start mb-1.5">
            <p class="font-bold mr-1">2.</p>
            <p>「品牌情報」此分類之功能除「最新消息」外都不相符，同時重要程度較高，因此抬高到第一層級，與首頁並行；而「查看菜單」與「門市據點」本是獨立，但在取號過程中會重複出現。因此藉此整併。同時保留獨立功能，讓只是想看菜單的人，也能在任何斷點都進入體驗。</p>
          </div>
          <div class="flex items-start mb-1.5">
            <p class="font-bold mr-1">3.</p>
            <p>「服務紀錄」、「會員專區」、「更多服務」內容整併。</p>
          </div>

          <p class="font-bold mb-1.5">架構本身簡化到如下：</p>
        </div>

        <div class="container sm_full">
          <img class="w-full mb-3" src="~/assets/images/hotpot/sitemap-redesign.jpg">
        </div>
      </div>

      <div>
        <div class="container">
          <h5 class="mb-3">修改2：首頁的重新排版</h5>
          <p class="mb-3">首頁原先是放了六個主要功能，並強化了最新消息。但使用者最大的需求其實是「快速取號」以及「知道叫號進度」，因此原先需要點擊「取號查詢」才能看到的「我的取號單」直接拉到首頁清楚地顯現。而同時並無犧牲掉最新消息的版面。</p>
        </div>
        <div class="container sm_full">
          <img class="w-full mb-3" src="~/assets/images/hotpot/improve-1.png">
        </div>
      </div>

      <div class="mb-7.5">
        <div class="container">
          <h5 class="mb-3">修改3：點餐取號流程優化</h5>
          <p class="mb-3">過往首頁會讓初次使用者不清楚該先點餐還是先取號，容易造成困惑，而預先點餐竟然並沒有取號，更是導致消費者抱怨連連。因此修正版本讓「抽取號碼」更為醒目作為暗示，而如果未取號進入點餐程序也有防呆處理。</p>
        </div>
        <div class="container sm_full">
          <img class="w-full mb-3" src="~/assets/images/hotpot/improve-2.png">
        </div>

        <div class="mb-3">
          <img class="w-full" src="~/assets/images/hotpot/flow-take-number.jpg">
        </div>

        <div class="container">
          <div class="flex items-start mb-3">
            <p class="font-bold mr-1">點餐流程改善</p>
            <p>過往「預先點餐」與看菜單，是個別分開的，但其實內容是非常相似的，因此將其整併。</p>
          </div>
        </div>

        <div>
          <img class="w-full" src="~/assets/images/hotpot/flow-order.jpg">
        </div>
      </div>

      <div class="mb-8.5 md:mb-7.5">
        <div class="container">
          <h5 class="mb-3 md:mb-2">修改4：新增便於使用者的小功能</h5>

          <div class="mb-2">
            <p class="font-bold mb-0.5">1.釘選「最愛門市」</p>
            <p>這是目前石二鍋沒有的功能，雖然看似小但其實也不得忽略。「最近門市」滿足大多的需求，但以下兩種情境其實並不適合。</p>
            <p class="font-bold">A.使用者到外縣市遊玩，想訂位回程平常特定吃的那間店。</p>
            <p class="font-bold">B.使用者因隱私問題，不愛開啟定位服務又非北部民眾，找到平常常去的店需要更多時間找尋。</p>
            <p>基於以上理由，增加了「最愛門市」的釘選功能，並放置在選單最上方。</p>
          </div>
          <div>
            <p class="font-bold mb-0.5">2.過號通知</p>
            <p>作為一個抽號碼為目標的APP，客製化的過號通知也是很重要的一環。</p>
          </div>
        </div>
      </div>

      <div>
        <div class="container">
          <h5 class="mb-6.5 md:mb-5.5">頁面互動展示</h5>
        </div>

        <div class="container sm_full">
          <div class="flex md:flex-col">
            <div class="flex-1 mr-1.5 md:mr-0 md:mb-3">
              <img class="w-full" src="~/assets/images/hotpot/demo-1.gif">
            </div>
            <div class="flex-1 mr-1.5 md:mr-0 md:mb-3">
              <img class="w-full" src="~/assets/images/hotpot/demo-2.gif">
            </div>
            <div class="flex-1 mr-1.5 md:mr-0 md:mb-3">
              <img class="w-full" src="~/assets/images/hotpot/demo-3.gif">
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="prototype mb-14">
      <div class="container">
        <h5 class="mb-3">Prototype</h5>
      </div>

<!--      //TODO mobile prototype -->
      <iframe
        v-if="showPrototype"
        style="border: 1px solid rgba(0, 0, 0, 0.1);"
        width="100%" height="100%"
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FBCjeeAb7Oo0NX6UWPlqv2O%2F%25E7%259F%25B3%25E4%25BA%258C%25E9%258D%258BAPP%3Fnode-id%3D196%253A39%26scaling%3Dscale-down"
        allowfullscreen
      />
    </div>

    <section class="mb-10 md:mb-7.5">
      <div class="container">
        <h5 class="mb-3">核心樣式</h5>
      </div>

      <img class="w-full mb-3 md:mb-2" src="~/assets/images/hotpot/design-guide.jpg">
      <img class="w-full" src="~/assets/images/hotpot/component-guide.jpg">
    </section>

    <section class="mb-10 md:mb-7.5">
      <div class="container">
        <TwoPartArticleContent>
          <template #first>
            <h5>學習與反思</h5>
          </template>
          <template #second>
            <div class="mb-2">
              <p class="font-bold mb-0.5"># 會員系統是否可以略過？</p>
              <p>在著手進行流程優化時，曾以消費者的角度出發，想加入「先略過註冊」的功能，整體體驗更流暢，而造成的結果可想而知是，<span class="font-bold">在沒有會員誘因情況下，大家一定選擇跳過不註冊</span>。</p>
              <p class="mb-2">但站在企業角度思考，開發一個點餐系統，並不只是要提供便民服務，更希望能從APP中獲得實際利益。就我目前觀察，其利益則是「獲得更明確的消費者輪廓」，其強制註冊才能確保獲取資料，於是在兩者權衡之下，我還是選擇「一定要註冊才能使用APP」。</p>
              <p>而如果未來加入了會員福利制度能使註冊成為誘因，再給予「先略過」的功能，會讓使用者有更多正向的回饋與體驗。</p>
            </div>
            <div>
              <p class="font-bold mb-0.5"># 針對點餐頁面的思考</p>
              <p class="mb-2">在製作點餐頁面規劃時，發現其細節處理是非常耗時的，其內容的龐大與複雜性堪比一個外送平台。然而，對於外送平台，好的點餐流程實際反映獲利，<span class="font-bold">而如果只是幫助使用者體驗更佳，對於一間以實際店面營收獲利的餐飲業來說，是一件非常不符合效益的事情</span>，這也讓我明白為什麼石二鍋選擇用「圖片」來呈現一個菜單，這是相對快速且容易的事。</p>
              <p>目前石二鍋目前的經營模式來說，他們其實多是到店用餐，餐點也是現做，「預先點餐」甚至是不被需要的。但相信如果當其餐廳發展到一定規模與程度，可能是「外帶」需求大過於「內用」時，如此媲美食物外送平台的流暢流程就是很大的加分，因此在這份Redesign中，我還是選擇規劃了這部分，或許不符合目前石二鍋的本身商業效益，但對於未來擴大經營是可走之路。</p>
            </div>
          </template>
        </TwoPartArticleContent>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TwoPartArticleContent from '@/components/TwoPartArticleContent.vue';

const breakPoint = 768;

export default Vue.extend({
  name: "HotPotRedesign",
  scrollToTop: true,
  components: {
    TwoPartArticleContent,
  },
  data() {
    return {
      showPrototype: false,
    }
  },
  created() {
    if (process.client && window.innerWidth > breakPoint) {
      this.showPrototype = true;
    }
  }
})
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/collectionPage.scss';

.hotpotPage {
  @include collectionPage;

  .banner {
    background-image: url("~@/assets/images/hotpot/hotpot-cover.jpg");
  }

  .prototype {
    width: 100%;
    height: 100vh;

    @screen md {
      height: auto;
    }
  }
}
</style>
