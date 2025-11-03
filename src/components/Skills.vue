<template>
  <section id="skills">
    <div class="selection-title">
      <div class="text">SKILLS</div>
      <div class="line"></div>
    </div>

    <div>
      <div class="skill">
        <div class="title">HTML, CSS, JavaScript</div>
        <div class="text">
          Webコーダー・ゲーム開発において２年以上の実務経験。<br>
          CSSはFlexを使ったレイアウト・レスポンシブ対応。<br>
          jQueryでのアニメーションや、Vue.jsを使用したコンポーネント作成、Phaser, ティラノスクリプトといったjsライブラリを使用してのゲーム開発経験。
        </div>
      </div>
      <div class="skill">
        <div class="title">Vue.js</div>
        <div class="text">
          Webフロントエンド開発において１年以上のVue.jsを用いた開発経験。
          htmlからvue3への移行、コンポーネント化など行いました。
        </div>
      </div>
      <div class="skill">
        <div class="title">Node.js</div>
        <div class="text">
          主にVue.js、VS Code拡張自作など１年使用。<br>
          VS Code拡張機能の自作を通じて、自分のアイディアを具現化し、開発プロセスを改善する能力を培いました。
        </div>
      </div>
      <div class="skill">
        <div class="title">Git</div>
        <div class="text">
          Webおよびゲーム開発プロジェクトにおいて計5年以上のGitを用いた経験。<br>
          ブランチ運用やGithubでのコードレビュー、リファクタリング対応など行いました。
        </div>
      </div>
      <div class="skill">
        <div class="title">C#</div>
        <div class="text">
          ゲーム開発のプロジェクトにて6年C#を用いた開発経験。<br>
          Unityでのゲームロジック、UI開発、API連携の実装など行いました。<br>
          また、Windows フォームアプリを用いたツールの作成経験も豊富です。
        </div>
      </div>
      <div class="skill">
        <div class="title">C++</div>
        <div class="text">
          ゲーム開発のプロジェクトで3年ほど使用。<br></br>
          ノベルゲーム開発でのコマンド実装、演出のフェードアニメーションや
          RenderTexture, sharderを使用したポストエフェクトを実装、Cocos2d-xでのゲーム開発。
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
#skills {
  container-type: inline-size;
  container-name: skills-grid;

  .skill {
    .title {
      display: block;
      padding: 16px 0;
      font-size: 20px;
    }
    .text {
      padding-bottom: 16px;
      border-bottom: 1px solid #d2d2d2;
    }

  }
}
</style>