<template>
  <header>
    <nav>
      <a href="#profile">PROFILE</a>
      <a href="#production">PRODUCTION</a>
      <a href="#skills">SKILLS</a>
      <a href="#promotion">PROMOTION</a>
      <a href="#history">HISTORY</a>
    </nav>

    <div id="logo">
      <img src="@/assets/images/dog.jpg">
    </div>
  </header>

  <main>
    <!-- <RouterView /> -->
    <Profile />
    <Production />
    <Skills />
    <Promotion />
    <History />
  </main>

  <footer>
    <a href="#">TOP</a>
    <p class="copyright">&copy; 2025 Hayate Arakaki</p>
  </footer>
</template>

<script setup>
// import { RouterLink, RouterView } from 'vue-router';
import Profile from './components/Profile.vue';
import Promotion from './components/Promotion.vue';
import Production from './components/Production.vue';
import Skills from './components/Skills.vue';
import History from './components/History.vue';

window.onload = () => {
    // スクロールアニメーション
    ScrollReveal().reveal('.aboutme', {
        duration: 800,
        reset: false,
        distance: '20%',
        scale: 1,
        delay: 200,
        origin: 'bottom',
    });
    ScrollReveal().reveal('.item', {
        delay: 200,
        duration: 400,
        origin: 'left',
        distance: '50px',
        interval: 20,
        reset: false,
    });
    ScrollReveal().reveal('.skill', {
        delay: 300,
        duration: 800,
        viewFactor: 0.2,
        origin: 'left',
        distance: '50px',
        interval: 30,
        reset: false,
    });
    ScrollReveal().reveal('#promotion', {
        delay: 300,
        duration: 800,
        viewFactor: 0.2,
        opacity: 0,
        reset: false,
    });
    ScrollReveal().reveal('#history', {
        delay: 200,
        duration: 800,
        viewFactor: 0.2,
        opacity: 0,
        reset: false,
    });
};
</script>

<style>
header {
  margin: 0;

  nav {
    /* position: fixed; */
    /* top: 0; right: 0; */
    display: grid;
    grid-auto-flow: column;
    gap: 12px;
    padding: 0 10px;
    justify-content: right;
    font-family: var(--sub-font-family);
    font-size: 14px;
    /* margin-top: 2rem; */
    /* z-index: 1000; */

    a {
      padding: 8px 0;
      margin: 0px;
    }
  }

  #logo {
    img {
      width: 100%;
      height: 400px;

      background: url(@/assets/images/dog.jpg) center / cover;
      object-fit: cover;
    }
  }
}

main {
  display: grid;
  justify-content: center;
  padding: 20px 10px;
  gap: 64px 0;
}

footer {
  margin: 0;
  padding: 0 10px;

  a {
    font-family: var(--sub-font-family);
    font-size: 14px;
  }

  .copyright {
    display: inline-block;
    margin-left: 12px;
    font-size: 12px;
    color: var(--light-color);
  }
}

@container (width < 700px) {
  main {
    gap: 40px 0;
  }
  header {
    #logo {
      img {
        height: 200px;
      }
    }
  }
}
</style>