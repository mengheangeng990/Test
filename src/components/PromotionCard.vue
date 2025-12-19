<script setup>
import BaseButton from './BaseButton.vue'
import { useRouter } from 'vue-router'
import { staticProducts } from '../data/staticData'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    default: '#F0E8D5', // Default beige
  },
  buttonText: {
    type: String,
    default: 'Shop Now',
  },
  buttonColor: {
    type: String,
    default: '#3BB77E', // Default green
  },
})

const router = useRouter()
const shopNow = () => {
  const words = props.title
    .split(/\s+/)
    .map((w) => w.toLowerCase())
    .filter(Boolean)
  if (staticProducts && staticProducts.length) {
    let found = null
    for (const p of staticProducts) {
      const name = (p.name || '').toLowerCase()
      if (words.some((w) => w && name.includes(w))) {
        found = p
        break
      }
    }
    if (found && found.id) {
      router.push({ name: 'product', params: { productId: found.id } })
      return
    }
  }
  alert("Let's shop: " + props.title)
}
</script>

<template>
  <div class="promotion-card" :style="{ backgroundColor: bgColor }">
    <div class="content">
      <h2 class="title">{{ title }}</h2>
      <BaseButton :text="buttonText" :bg-color="buttonColor" @click="shopNow" />
    </div>
    <div class="image-container">
      <img :src="image" :alt="title" class="promo-image" />
    </div>
  </div>
</template>

<style scoped>
.promotion-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  min-height: 200px;
}

.content {
  z-index: 2;
  max-width: 60%;
}

.title {
  font-size: 24px;
  font-weight: 700;
  color: #253d4e;
  margin-bottom: 20px;
  line-height: 1.2;
}

.image-container {
  position: absolute;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 50%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}

.promo-image {
  max-height: 90%;
  max-width: 100%;
  object-fit: contain;
  margin-right: 20px;
  margin-bottom: 10px;
}
</style>
