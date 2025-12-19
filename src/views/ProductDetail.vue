<script setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProductStore } from '../stores/product'
import { staticProducts } from '../data/staticData'

const route = useRoute()
const router = useRouter()
const store = useProductStore()
const product = ref(null)

async function load() {
  await store.init()
  // route may provide either `productId` (router config) or legacy `id` param
  const id = Number(route.params.productId ?? route.params.id)
  if (store.products && store.products.length) {
    product.value = store.products.find((p) => Number(p.id) === id)
  }
  if (!product.value) {
    product.value = staticProducts.find((p) => p.id === id) || null
  }
  if (!product.value) {
    // not found
    console.warn('Product not found', id)
  }
}

onMounted(() => load())
</script>

<template>
  <div class="product-detail container">
    <button @click="$router.back()">Back</button>
    <div v-if="!product">Loading or product not found.</div>
    <div v-else class="detail-grid">
      <div class="gallery">
        <img :src="product.image" :alt="product.title || product.name" />
      </div>
      <div class="info">
        <h1>{{ product.title || product.name }}</h1>
        <div class="price">
          <span class="current">${{ product.price }}</span>
          <span v-if="product.oldPrice" class="old">${{ product.oldPrice }}</span>
        </div>
        <p class="desc">
          {{ product.raw?.description || 'Delicious product — description goes here.' }}
        </p>
        <div class="actions">
          <input type="number" min="1" value="1" />
          <button class="add">Add to cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-detail .detail-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 20px;
}
.product-detail img {
  max-width: 100%;
  border-radius: 12px;
}
.product-detail .price .current {
  color: #3bb77e;
  font-size: 28px;
  font-weight: 700;
}
.product-detail .price .old {
  margin-left: 12px;
  color: #adadad;
  text-decoration: line-through;
}
.product-detail .actions {
  margin-top: 18px;
  display: flex;
  gap: 8px;
}
.product-detail .add {
  background: #3bb77e;
  color: #fff;
  border: none;
  padding: 10px 14px;
  border-radius: 8px;
}
</style>
