<template>
  <section id="production">
    <div class="selection-title">
      <div class="text">PRODUCTION</div>
    </div>

    <div class="items">
      <template v-for="item in items">
        <div class="item">
          <div class="title"><a :href="item.url">{{ item.title }}</a></div>
          <img :src="item.image">
          <div class="types">
            <template v-for="type in item.types">
              <div class="type">{{ type }}</div>
            </template>
          </div>
          <div>{{ item.description }}</div>
        </div>
      </template>
    </div>

  </section>
</template>

<script setup>
const items = [
  {
    title: "Card Roguelike",
    url: "https://arakaki-asdf.github.io/card-roguelike/",
    image: new URL('@/assets/images/productions/card-roguelike.png', import.meta.url).href,
    types: ["JavaScript", "Phaser"],
    description: `
    slay the spireというローグライクゲームが好きで、作ってみました。
    元のゲームをどれだけ再現できるかを重視しました。`,
  },
  {
    title: "シューティングゲーム",
    url: "https://github.com/arakaki-asdf/cocos2d-x-shooting-tutorial",
    image: new URL('@/assets/images/productions/cocos-shooting.png', import.meta.url).href,
    types: ["C++", "Cocos2d-x"],
    description: "Cocos2d-xライブラリの仕組みを覚える際に、実際にシューティングゲームを作成しました。",
  },
  {
    title: "python japanese holiday",
    url: "https://github.com/arakaki-asdf/python-google-calendar",
    image: new URL('@/assets/images/productions/python-japanese-holiday.png', import.meta.url).href,
    types: ["Python"],
    description: "python+グーグルカレンダーAPIを利用して、日本の祝日を取得する機能を作ってみました。",
  },
  {
    title: "Portfolio",
    url: "https://github.com/arakaki-asdf/portfolio",
    image: new URL('@/assets/images/productions/portfolio.png', import.meta.url).href,
    types: ["HTML", "CSS", "Vue3", "GitHub Pages"],
    description: "GitHub Pages + Vue3で作成しました。",
  },
]
</script>

<style scoped>
#production {
  .items {
    display: grid;
    grid-template-columns: repeat(2, minmax(200px, 300px));
    gap: 40px;
    justify-content: space-around;

    .item {
      display: flex;
      flex-direction: column;
      gap: 8px 0;

      .title {
        margin-bottom: 12px;

        font-size: 20px;
        line-height: 1;
        text-align: center;
      }

      a {
        display: block;
        margin: 0;
        padding: 0;
        text-align: center;
        color: var(--accent-color);

        img {
          width: 250px;
          height: 250px;
          object-fit: cover;
        }
      }

      .types {
        display: flex;
        gap: 0 12px;
        .type {
          /* padding: 4px; */
          color: var(--color-70);
        }
      }

    }
  }
}
@media (max-width: 600px) {
  #production {
    .items {
      grid-template-columns: repeat(1, minmax(200px, 400px));
    }
  }
}
</style>