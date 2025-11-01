<template>
  <section id="production">
    <div class="selection-title">
      <div class="text">PRODUCTION</div>
      <div class="line"></div>
    </div>

    <div class="items">
      <div class="item">
        <div class="title">Card Roguelike</div>
        <a href="https://arakaki-asdf.github.io/card-roguelike/"><img src="@/assets/images/productions/card-roguelike.png"></a>
        <div>JavaScript, Phaser</div>
        <div>
          slay the spireというローグライクゲームが好きで、作ってみました。
          こだわりは元のゲームをどれだけ再現できるかと、短期間で作れる範囲
          でゲームとしてまとめたところです。
        </div>
      </div>

      <div class="item">
        <div class="title">cocos2d-x-shooting-tutorial</div>
        <a href="https://github.com/arakaki-asdf/cocos2d-x-shooting-tutorial"><img src="@/assets/images/productions/cocos-shooting.png"></a>
        <div>C++</div>
        <div>
          cocos2d-x(js)ライブラリの仕組みを覚える際に、実際にシューティングゲームを作成しました。
        </div>
      </div>

      <div class="item">
        <div class="title">python japanese holiday</div>
        <!-- <img src="https://placehold.jp/200x200.png"> -->
        <a href="https://github.com/arakaki-asdf/python-google-calendar"><img src="@/assets/images/productions/python-japanese-holiday.png"></a>
        <div>Python</div>
        <div>python+APIを利用して、日本の祝日を取得する機能を作ってみました。</div>
      </div>

      <div class="item">
        <div class="title">Portfolio</div>
        <!-- <img src="https://placehold.jp/200x200.png"> -->
        <a href="https://github.com/arakaki-asdf/portfolio"><img src="@/assets/images/productions/portfolio.png"></a>
        <div>HTML, CSS, JavaScript</div>
        <div>このサイトです。github pagesを利用しました。cssのグリッドレイアウト、ネストでの記述、コンテナクエリなど使ってみました。</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#production {
  .items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 258px));
    gap: 40px 20px;
    justify-content: space-around;

    .item {
      display: grid;
      align-items: center;
      justify-items: center;
      gap: 8px 0;

      .title {
        font-size: 20px;
      }

      a {
        img {
          width: 200px;
          height: 200px;
          object-fit: cover;
        }
      }
    }
  }
}
</style>