import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/account', name: 'account', component: () => import('../views/Account.vue') },
    { path: '/cart', name: 'cart', component: () => import('../views/Cart.vue') },
    { path: '/wishlist', name: 'wishlist', component: () => import('../views/Wishlist.vue') },
    {
      path: '/categories/:categoryId',
      name: 'category',
      component: () => import('../views/CategoryView.vue'),
      props: true,
    },
    {
      path: '/products/:productId',
      name: 'product',
      component: () => import('../views/ProductDetail.vue'),
      props: true,
    },
    {
      path: '/hot-deals',
      name: 'hot-deals',
      component: () => import('../views/CategoryView.vue'),
      props: (route) => ({ title: 'Hot Deals', slug: 'hot-deals' }),
    },
  ],
})

export default router
