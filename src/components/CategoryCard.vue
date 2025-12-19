<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  items: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    default: '#F2FCE4',
  },
})

const goToCategory = () => {
  const slug = props.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')
  router.push({ name: 'category', params: { categoryId: slug } })
}
</script>

<template>
  <div class="category-card" :style="{ backgroundColor: bgColor }" @click="goToCategory">
    <img :src="image" :alt="title" class="category-image" />
    <h3 class="category-title">{{ title }}</h3>
    <p class="category-items">{{ items }} items</p>
  </div>
</template>

<style scoped>
.category-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s ease;
  cursor: pointer;
  min-width: 120px;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.category-image {
  width: 60px;
  height: 60px;
  object-fit: contain;
  margin-bottom: 10px;
}

.category-title {
  font-size: 16px;
  font-weight: 600;
  color: #253d4e;
  margin: 0 0 5px 0;
}

.category-items {
  font-size: 12px;
  color: #b6b6b6;
  margin: 0;
}
</style>
