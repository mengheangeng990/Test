import { defineStore } from 'pinia'
import axios from 'axios'

// Import images used for mapping
import burgerImg from '../components/burger.png'
import peachImg from '../components/peach.png'
import kiwiImg from '../components/kiwi.png'
import appleImg from '../components/apple.png'
import snackImg from '../components/snack.png'
import plumImg from '../components/blackplum.png'
import cabbageImg from '../components/cabbage.png'
import headphoneImg from '../components/headphone.png'
import cakeImg from '../components/cake.png'
import orangeImg from '../components/orange.png'
import onionImg from '../components/onion.png'
import yogurtImg from '../components/yogurt.png'
import vegetableImg from '../components/vegetable.png'

import mangoImg from '../components/mango.png'
import cornImg from '../components/corn.png'
import chilliImg from '../components/chilli.png'
import lemonImg from '../components/lemon.png'
import steak1Img from '../components/steak1.png'
import steak2Img from '../components/steak2.png'
import steak3Img from '../components/steak3.png'
import steak4Img from '../components/steak4.png'
import plumSmallImg from '../components/blackplum.png'

function getImage(imagePath, title) {
  const lowerTitle = (title || '').toLowerCase()
  if (lowerTitle.includes('cake')) return burgerImg
  if (lowerTitle.includes('peach')) return peachImg
  if (lowerTitle.includes('kiwi')) return kiwiImg
  if (lowerTitle.includes('apple')) return appleImg
  if (lowerTitle.includes('snack')) return snackImg
  if (lowerTitle.includes('plum')) return plumImg
  if (lowerTitle.includes('vegetable')) return cabbageImg
  if (lowerTitle.includes('headphone')) return headphoneImg
  if (lowerTitle.includes('orange')) return orangeImg
  if (lowerTitle.includes('onion')) return onionImg
  if (lowerTitle.includes('breakfast')) return yogurtImg
  if (lowerTitle.includes('organic')) return vegetableImg
  return burgerImg
}

function getProductImage(imagePath, title) {
  const lower = (title || '').toLowerCase()
  if (lower.includes('mango')) return mangoImg
  if (lower.includes('corn')) return cornImg
  if (lower.includes('chilli')) return chilliImg
  if (lower.includes('lemon')) return lemonImg
  if (lower.includes('steak1')) return steak1Img
  if (lower.includes('steak2')) return steak2Img
  if (lower.includes('steak3')) return steak3Img
  if (lower.includes('steak4')) return steak4Img
  if (lower.includes('plum')) return plumSmallImg
  // fallback
  return burgerImg
}

export const useProductStore = defineStore('product', {
  state: () => ({
    groups: [],
    promotions: [],
    categories: [],
    products: [],
  }),
  getters: {
    getCategoriesByGroup: (state) => {
      return (groupName) => state.categories.filter((c) => c.group === groupName)
    },
    getProductsByGroup: (state) => {
      return (groupName) => state.products.filter((p) => p.group === groupName)
    },
    getProductsByCategory: (state) => {
      return (categoryId) => state.products.filter((p) => p.categoryId === Number(categoryId))
    },
    getPopularProducts: (state) => {
      return state.products.filter((p) => (p.countSold || 0) > 10)
    },
  },
  actions: {
    async fetchCategories() {
      try {
        const res = await axios.get('http://localhost:3000/api/categories')
        if (res.data && res.data.length) {
          this.categories = res.data.map((item) => ({
            id: item.id,
            title: item.name,
            items: item.productCount || 0,
            bgColor: item.color || '#fff',
            image: getImage(item.image, item.name),
            group: item.group || null,
            raw: item,
          }))
        } else {
          this.categories = []
        }
      } catch (err) {
        console.error('fetchCategories error', err)
        this.categories = []
      }
    },
    async fetchPromotions() {
      try {
        const res = await axios.get('http://localhost:3000/api/promotions')
        if (res.data && res.data.length) {
          this.promotions = res.data.map((item) => ({
            title: item.title,
            bgColor: item.color || '#fff',
            image: getImage(item.image, item.title),
            buttonColor: item.buttonColor || '#3BB77E',
          }))
        } else {
          this.promotions = []
        }
      } catch (err) {
        console.error('fetchPromotions error', err)
        this.promotions = []
      }
    },
    async fetchGroups() {
      try {
        const res = await axios.get('http://localhost:3000/api/groups')
        this.groups = Array.isArray(res.data) ? res.data : []
      } catch (err) {
        console.error('fetchGroups error', err)
        this.groups = []
      }
    },
    async fetchProducts() {
      try {
        const res = await axios.get('http://localhost:3000/api/products')
        if (res.data && res.data.length) {
          this.products = res.data.map((p) => ({
            id: p.id,
            name: p.name,
            badge: p.promotionAsPercentage
              ? { text: `-${p.promotionAsPercentage}%`, color: '#3BB77E' }
              : null,
            image: getProductImage(p.image, p.name || p.title),
            group: p.group || null,
            categoryId: p.categoryId != null ? Number(p.categoryId) : null,
            title: p.name || p.title || p.productName || '',
            rating: p.rating || 4.0,
            price: p.price || p.currentPrice || 0,
            oldPrice: p.oldPrice || p.price || 0,
            countSold: p.countSold || 0,
            raw: p,
          }))
        } else {
          this.products = []
        }
      } catch (err) {
        console.error('fetchProducts error', err)
        this.products = []
      }
    },
    async init() {
      await Promise.all([
        this.fetchCategories(),
        this.fetchPromotions(),
        this.fetchGroups(),
        this.fetchProducts(),
      ])
    },
  },
})
