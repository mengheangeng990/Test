<script setup>
import { useRouter } from 'vue-router'
import { computed } from 'vue'

const router = useRouter()

const props = defineProps({
  id: {
    type: [String, Number],
    default: null,
  },
  badge: {
    type: Object,
    default: null,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 4.0,
  },
  vendor: {
    type: String,
    default: 'Hodo Foods',
  },
  price: {
    type: Number,
    required: true,
  },
  oldPrice: {
    type: Number,
    default: null,
  },
})

const productLink = computed(() => {
  if (props.id) {
    return { name: 'product', params: { productId: props.id } }
  }
  return { name: 'home' }
})

const goToProduct = () => {
  console.log('goToProduct clicked, id:', props.id)
  if (props.id) {
    console.log('Navigating to product:', props.id)
    router.push(productLink.value)
  } else {
    console.warn('No product ID provided')
  }
}
</script>

<template>
  <div class="product-card">
    <div v-if="badge" class="badge" :style="{ backgroundColor: badge.color }">{{ badge.text }}</div>
    <div class="image-wrapper" @click="goToProduct" role="button" tabindex="0">
      <img :src="image" :alt="title" />
    </div>
    <div class="content">
      <div class="category">{{ category }}</div>
      <h3 class="title" @click="goToProduct" role="button" tabindex="0">{{ title }}</h3>
      <div class="rating">
        <span class="stars">★★★★☆</span>
        <span class="rating-num">({{ rating }})</span>
      </div>
      <div class="vendor">
        By <span class="vendor-name">{{ vendor }}</span>
      </div>
      <div class="card-bottom">
        <div class="price-box">
          <span class="current-price">${{ price }}</span>
          <span v-if="oldPrice" class="old-price">${{ oldPrice }}</span>
        </div>
        <router-link v-if="id" :to="productLink" class="add-btn">Add +</router-link>
        <button v-else class="add-btn" @click="goToProduct">Add +</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  border: 1px solid #ececec;
  border-radius: 15px;
  padding: 20px;
  position: relative;
  transition: box-shadow 0.3s;
  background: #fff;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  border-color: #bce3c9;
}

.badge {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 10px;
  border-radius: 15px 0 20px 0;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  z-index: 1;
}

.image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 160px;
  margin-bottom: 15px;
}

.image-wrapper img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.category {
  font-size: 12px;
  color: #adadad;
  margin-bottom: 5px;
}

.title {
  font-size: 16px;
  font-weight: 700;
  color: #253d4e;
  margin-bottom: 10px;
  line-height: 1.2;
  height: 40px; /* Limit height for 2 lines */
  overflow: hidden;
}

.rating {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.stars {
  color: #fdc040;
  margin-right: 5px;
  font-size: 14px;
}

.rating-num {
  font-size: 12px;
  color: #b6b6b6;
}

.vendor {
  font-size: 12px;
  color: #b6b6b6;
  margin-bottom: 15px;
}

.vendor-name {
  color: #3bb77e;
}

.card-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.price-box {
  display: flex;
  align-items: center;
  gap: 5px;
}

.current-price {
  font-size: 18px;
  font-weight: 700;
  color: #3bb77e;
}

.old-price {
  font-size: 14px;
  color: #adadad;
  text-decoration: line-through;
}

.add-btn {
  background-color: #def9ec;
  color: #3bb77e;
  border: none;
  padding: 6px 15px;
  border-radius: 4px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s;
  display: inline-block;
  text-decoration: none;
  text-align: center;
}

.add-btn:hover {
  background-color: #3bb77e;
  color: #fff;
  transform: translateY(-2px);
}
</style>
