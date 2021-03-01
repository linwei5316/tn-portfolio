<template>
  <div class="babyDragonPage">
    <div class="banner">
    </div>

    <section class="navigateBannerMargin">
      <div class="container">
        <div class="mb-8 md:mb-6 sm:mb-5 p-5 sm:p-3 rounded-lg shadow-md bg-white">
          <h2 class="keyH2 mb-3 sm:mb-4.5">分帳龍寶寶：從MVP產品獲得用戶回饋的寶貴經驗</h2>

          <div class="flex mt-3 sm:mt-4.5 md:flex-wrap">
            <div class="inline-block w-1/2 md:w-full mr-2 md:mr-0 md:mb-3">
              <p class="text-brown text-xl mb-1">專案簡介</p>
              <p>分帳龍寶寶一款協助多人分帳的LINEBOT小工具，只要將其加入群組與群聊，透過指令快速紀錄花費，並且協助群組多人分帳，特別適合於短期出遊或是室友生活等常常需要有「公費」支出的情境。此為我與友人（工程師）兩人之共同作品。</p>
            </div>

            <div class="inline-block w-1/4 md:w-1/2 pr-3 sm:w-full sm:pr-0 sm:mb-3">
              <p class="text-brown text-xl mb-1">負責任務</p>
              <p>功能流程規劃（共同）、角色設計、介面設計、官網設計與規劃、後續行銷視覺與文案一切產出</p>
            </div>

            <div class="inline-block w-1/4 md:w-1/2 sm:w-full">
              <p class="text-brown text-xl mb-1">專案時間</p>
              <p>2020.11 - 至今仍不斷的優化中</p>
            </div>
          </div>
        </div>

        <TwoPartArticleContent class="sectionSpacing">
          <template #first>
            <h5>設計動機</h5>
          </template>

          <template #second>
            <div class="flex items-start mb-1.5">
              <p>因為一次出遊經驗，發現市面上分帳軟體如Spiltwise都要下載APP，然而很難要求所有人都下載APP，雖然可以自行創建使用者，但容易淪為一人全部人的帳，因此決定使用LINEBOT作為工具手段，創造一個多人可以即時共同記帳的情境。</p>
            </div>
          </template>
        </TwoPartArticleContent>

        <div class="sectionSpacing">
          <h5 class="mb-3">你可以透過以下連結直接試用與更了解龍寶寶</h5>

          <div class="flex sm:flex-col">
            <a
              class="block flex-1 p-2 rounded-lg bg-white shadow-md hoverFloat mr-3 sm:mr-0 sm:mb-3 flex items-center"
              href="https://line.me/R/ti/p/%40781zqjfw"
              target="_blank"
            >
              <img class="w-10 h-10 mr-3" src="~/assets/images/babyDragon/line.png">

              <p class="text-l font-bold">加「龍寶寶」為好友，立即試用！</p>
            </a>

            <a
              class="block flex-1 p-2 rounded-lg bg-white shadow-md hoverFloat mr-3 sm:mr-0 flex items-center"
              href="http://dragon-baby.herokuapp.com/"
              target="_blank"
            >
              <img class="w-10 h-10 mr-3" src="~/assets/images/babyDragon/babydragon.png">

              <p class="text-l font-bold">分帳龍寶寶LineBot官方網站</p>
            </a>
          </div>
        </div>

        <div class="sectionSpacing">
          <h5 class="mb-3">產品歷程</h5>
          <p class="mb-1.5">相對於APP介面設計有許多的案例、文章，CHATBOT是一個相對不熟悉的領域，市面上也少有這類型產品與討論，多數還是以「行銷式聊天機器人」為大宗。因此我們以自身經驗與少數有人的回饋製作了初版MVP，並在社群推廣，獲得更多的使用者回饋，再以此作為基準優化。</p>

          <img class="w-full" src="~/assets/images/babyDragon/product-journey.png">
        </div>

        <div class="sectionSpacing">
          <h5 class="mb-3">SITEMAP 與 WIREFRAME 確立</h5>
          <p class="mb-3">因為並不熟悉Linebot，我們直接以Line提供的開發環境進行套版，熟悉介面外也摸索Chatbot的各項限制，也在其中優化使用流程。在這個階段我們也確立了初代龍寶寶的SITEMAP，而後續雖有微幅改動，但也相去不遠。</p>

          <img class="w-full" src="~/assets/images/babyDragon/sitemap.png">
        </div>

        <div class="sectionSpacing">
          <h5 class="mb-3">品牌顏色</h5>
          <p class="mb-3">CHATBOT要做出風格差異化，最基本的就是從顏色下手。「龍寶寶」的命名是來自於另一位友人的名字，給人比較可愛的感覺；但作為與財務有關的產品，更希望給人帶來信任感。因此顏色選擇上使用了與金錢有關的「土色」與穩重安全的「深綠色」作為主色。</p>

          <div class="colorList">
            <div
              class="colorListItem flex justify-center items-end"
              v-for="item in colorList"
              :key="item.colorCode"
              :style="{ backgroundColor: `#${item.colorCode}` }"
            >
              <p :class="{'text-white': item.textWhite}">{{ item.colorCode }}</p>
            </div>
          </div>
        </div>

        <div class="sectionSpacing">
          <div class="flex md:flex-col">
            <div class="flex-1 mr-3 md:mr-0 flex justify-center items-center md:mb-3">
              <img class="w-full md:w-3/5 sm:w-full" src="~/assets/images/babyDragon/social-post.png">
            </div>

            <div class="flex-1 py-7 md:py-0">
              <h5 class="mb-3">上線與歷經兩次迭代</h5>

              <p>在上線後，搭配懶人包圖文，很意外的獲得了不錯的迴響，社群文章分享數突破3000則，龍寶寶也獲得近30萬次的回復數，使用者突破10000人。從社群留言、私訊、我們設置的「寶寶信箱」google表單中，也收到不少的使用者回饋。短短的四天內，我們藉著這些使用回饋進行了第一次改版。有興趣可以閱讀當時第一次改版的紀錄文字，而接下來，以最新版本的龍寶寶進行展示(20200209第三次改版後)</p>

              <a
                class="block mt-4 p-2 bg-white shadow-md hoverFloat rounded-lg flex items-center"
                href="https://tingenwei.medium.com/sideproject-linebot-%E5%88%86%E5%B8%B3%E9%BE%8D%E5%AF%B6%E5%AF%B6%E8%A3%BD%E4%BD%9C%E7%B4%80%E9%8C%84-26643e1095cd"
                target="_blank"
              >
                <img class="w-10 h-10 mr-3" src="~/assets/images/babyDragon/medium.png">

                <p class="font-bold">延伸閱讀：第一次改版後心得紀錄<br class="md:hidden"><span class="sm:hidden">@Medium</span></p>
              </a>
            </div>
          </div>
        </div>

        <div class="sectionSpacing">
          <div class="flex md:flex-col">
            <div class="flexPeace-1 mr-3 md:mr-0 flex justify-center items-center md:mb-3">
              <div>
                <h5 class="mb-3">Onboarding 新手教學</h5>

                <p>使用者較不熟悉CHATBOT的操作模式，因此我們希望在開始有個簡易教學協助大家更上手，</p>
                <p>將全部指令教過一遍會過於冗長，權衡之下，我們只針對最重要的「新增帳款」流程進行教學。此教學只有當使用者把龍寶寶加入群組時會觸發。</p>
              </div>
            </div>

            <div class="flexPeace-2">
              <img class="w-full" src="~/assets/images/babyDragon/onborading.png">
            </div>
          </div>
        </div>

        <div class="sectionSpacing">
          <h5 class="mb-3">龍寶寶主選單</h5>
          <p class="mb-5">龍寶寶主選單在歷經兩次的迭代後有了很大的轉變。先前的龍寶寶只會出現在LINE頭貼上，為了讓這個IP更有記憶度，主選單有很大的一塊是龍寶寶的圖像，而所有的指令教學我們都收束在「快速指令」中</p>

          <div class="flex md:flex-col -mr-3 md:mr-0 text-center">
            <div class="flex-1 mr-3 md:mr-0 md:mb-3">
              <img class="mx-auto w-full md:w-1/2 sm:w-full" src="~/assets/images/babyDragon/menu_v1.png">
            </div>
            <div class="flex-1 mr-3 md:mr-0 md:mb-3 sm:w-full">
              <img class="mx-auto w-full md:w-1/2 sm:w-full" src="~/assets/images/babyDragon/menu_v2.png">
            </div>
            <div class="flex-1 mr-3 md:mr-0 md:mb-3 sm:w-full">
              <img class="mx-auto w-full md:w-1/2 sm:w-full" src="~/assets/images/babyDragon/menu_v3.png">
            </div>
          </div>
        </div>

        <div class="sectionSpacing">
          <div class="flex md:flex-col">
            <div class="flexPeace-7 flex justify-center items-center md:mb-3">
              <div>
                <h5 class="mb-3">Liff的加入 - 解決LINEBOT的更多限制</h5>

                <p>而過往加入金額都是依靠文字指令，在這一版我們也嘗試使用LINE提供的另一項功能-Liff（類似於開啟一個網頁，但不會跳出Line），讓「新增帳款」有了更易懂的介面，也不再礙於文字限制，可以一覽所有新增帳款的選項，造福了很多記不住指令的人們。而根據我們的事件追蹤，使用按鈕加入帳款的比例也有所提升。而此項功能的新增，也大大改善了「刪除帳款」與「編輯使用者」的流程，透過事件追增，也看到這兩大部分使用率提高。</p>
              </div>
            </div>

            <div class="flexPeace-6-5">
              <img class="w-full" src="~/assets/images/babyDragon/liff_pic.png">
            </div>
          </div>
        </div>

      </div>
    </section>

    <section class="sectionSpacing">
      <div class="container">
        <h5 class="mb-3">製作龍寶寶最大的收穫：貼近真實用戶</h5>
        <p class="mb-2">龍寶寶也是第一個讓我在UX領域中貼近真實用戶的產品，透過與使用者直接的訊息往來，我們獲得了很多寶貴的建議。</p>

        <p class="mb-0.5 font-bold">1.輸入越方便越好</p>
        <p class="mb-2">輸入$等符號會造成打字上的不順，目標設置在：僅需輸入文字與數字，為此在格式的規範上，我們也下了一番苦心。</p>

        <p class="mb-0.5 font-bold">2.不能洗版比流程順利更為重要 </p>
        <p class="mb-2">以往在APP流程設計時，我們常會有「回首頁」或「執行下一步」等的暗示訊息，但這在CHATBOT的體驗中，雖然流程是順的，但也因為「太順」而時常有人點選，在群組中容易引起他人的洗版抱怨，因此新版拿掉了按鈕，改以簡短的文字提示。降低流程的長度外，也大大增加指令的記憶度。</p>

        <p class="mb-0.5 font-bold">3.發掘沒有納入開發的功能</p>
        <p class="mb-2">還款功能、建立群組外使用者等。龍寶寶上線後，雖滿足大多數的使用情境，還是有少部分漏網之魚，在時間允許下，我們也盡力的滿足各項需求，也發覺很多意料之外的使用情境。</p>

        <p class="mb-0.5 font-bold">4.文案優化，減少情境感的帶入</p>
        <p>文案真的是設計師很容易忽略的。</p>
        <p class="mb-2">以下舉「帳本」功能為例：像是「當前帳本」對於使用者就是一個新名詞，也不太懂需要切換帳本才能開始記帳的概念。這時候如果是app就能透過很直覺的點擊動作加上動態效果讓使用者明顯感受到「打開」，chatbot就很需要文字輔助。</p>

        <img class="w-full" src="~/assets/images/babyDragon/before-after.png">
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
              <p class="font-bold mb-0.5"># LINEBOT工具：介APP與Chatbot之間的產品</p>
              <p>我們把龍寶寶定位在「LINEBOT工具」而非「聊天機器人」因為同時有設計與行銷的雙背景，我覺得在製作龍寶寶過程中，運用了很多類似的思考邏輯，但有很多與兩方相似與不同之處，像是不像行銷機器人的情境帶入感重，用詞需要更精準。也與APP的介面設計經驗不同，沒有過多的圖像化。所以就<span class="font-bold">更加仰賴UX的思考邏輯</span>。</p>
            </div>
            <div class="mb-2">
              <p class="font-bold mb-0.5"># 世上沒有完美的產品</p>
              <p>礙於使用者對於CHATBOT的不熟悉，以及Line環境的限制，再加上各種非常態的使用情境，一個產品並沒有辦法滿足所有的人，這也是難以突破的現實困境，而過程中我們學習嘗試從中取得不同的方式以及找到平衡。</p>
            </div>
            <div>
              <p class="font-bold mb-0.5"># 接納不同的思考與意見</p>
              <p>至今龍寶寶使用者突破了35000人，也早就跳脫以往自己或同溫層的思考模式，這個過程中發生許多意料之外的各種狀況，而也學習用更寬容的心去接納不同的建議。</p>
            </div>
          </template>
        </TwoPartArticleContent>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: "BabyDragon",
  scrollToTop: true,
  data() {
    return {
      colorList: [
        {
          colorCode: '71A597',
          textWhite: true,
        },
        {
          colorCode: '126951',
          textWhite: true,
        },
        {
          colorCode: '194D39',
          textWhite: true,
        },
        {
          colorCode: 'A58341',
          textWhite: true,
        },
        {
          colorCode: 'C5AF85',
          textWhite: false,
        },
        {
          colorCode: 'E5DBC8',
          textWhite: false,
        },
        {
          colorCode: 'FFFFFF',
          textWhite: false,
        },
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/collectionPage.scss';

.babyDragonPage {
  @include collectionPage;

  .banner {
    background-image: url("~@/assets/images/babyDragon/cover_large.jpg");

    @screen md {
      background-image: url("~@/assets/images/babyDragon/cover_small.jpg");
    }
  }

  .sectionSpacing {
    @apply mb-10;

    @screen md {
      @apply mb-6;
    }
  }

  .colorList {
    @apply flex;
    height: 390px;

    @screen md {
      height: 280px;
    }
    @screen sm {
      height: 133px;
    }

    .colorListItem {
      @apply flex-1 relative;

      p {
        @apply mb-4 font-bold;

        @screen sm {
          @apply mb-1 text-tiny absolute bottom-0;
          left: 50%;
          transform: translateX(-50%) scale(0.7);
        }
      }
    }
  }

  .flexPeace-1 {
    flex: 1;
  }

  .flexPeace-2 {
    flex: 2;
  }

  .flexPeace-6-5 {
    flex: 6.5;
  }

  .flexPeace-7 {
    flex: 7;
  }

  .text-l {
    font-size: 1.8rem;
  }
}
</style>
