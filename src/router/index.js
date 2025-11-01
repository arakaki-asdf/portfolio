import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView 
    },
    {
      path: '/about',
      name: 'about',
      // ここにアクセスされたときに読み込む (遅延ロード)
      component: () => import('../views/AboutView.vue')
    }
  ]
});

export default router;