<template>
  <section id="profile">
    <div class="selection-title">
      <div class="text">PROFILE</div>
      <div class="line"></div>
    </div>

    <div class="aboutme">
      <img class="me" src="@/assets/images/me.jpg">
      <div class="status">
        <ul>
          <li>新垣 颯(Arakaki Hayate)</li>
          <li>沖縄出身 33歳</li>
          <li>コーダー/ゲームプログラマ</li>
          <li>趣味</li>
          <ul>
            <li>料理</li>
            <li>散歩(モンスターハンターnow)</li>
            <li>コメダ珈琲に通う</li>
          </ul>
        </ul>

        <div class="icons">
          <a href="https://github.com/arakaki-asdf">
            <img class="icon" src="@/assets/images/logos/github.svg">
          </a>
          <a href="https://note.com/agile_bonobo9370/">
            <img class="icon" src="@/assets/images/logos/note.svg">
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#profile {
  .aboutme {
    /* 初期非表示 */
    visibility: hidden;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 300px));
    gap: 20px;
    justify-content: space-evenly;

    .me {
      padding: 8px;
      width: 100%;
      border: solid 2px var(--color-90);
    }

    .status {
      display: grid;
      grid-template-columns: repeat(auto-fit, 100%);
      align-content: space-between;

      ul {
        padding: 10px;
      }

      .icons {
        display: flex;
        gap: 0 10px;

        .icon {
          width: 32px;
        }
      }

    }
  }
}

</style>