import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProductDetail from '../views/ProductDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/product/:id', name: 'ProductDetail', component: ProductDetail, props: true },
    {
      path: '/hot-deals',
      name: 'HotDeals',
      component: () => import('../views/CategoryView.vue'),
      props: (route) => ({ title: 'Hot Deals', slug: 'hot-deals' }),
    },
    {
      path: '/categories/:slug',
      alias: '/category/:slug',
      name: 'Category',
      component: () => import('../views/CategoryView.vue'),
      props: true,
    },
  ],
})

export default router
