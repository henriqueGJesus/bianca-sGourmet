import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'pagina inicial',
      component: () => import('../components/HelloWorld.vue')
    },
    {
      path: '/sorteio',
      name: 'sorteio',
      component: () => import('../components/sorteio.vue')
    }
  ]
})

export default router
