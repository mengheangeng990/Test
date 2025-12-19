<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const props = defineProps({
  id: { type: [String, Number], default: null },
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
    default: '',
  },
  title: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 4.0,
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

function openDetail() {
  if (props.id != null) {
    router.push({ path: `/products/${props.id}` })
  }
}
</script>

<template>
  <div class="product-item" @click="openDetail" style="cursor: pointer">
    <div v-if="badge" class="badge" :style="{ backgroundColor: badge.color }">{{ badge.text }}</div>
    <div class="left">
      <img :src="image" :alt="title" />
    </div>
    <div class="right">
      <div class="meta">{{ category }}</div>
      <div class="title">{{ title }}</div>
      <div class="bottom">
        <div class="price">
          <span class="current">${{ price }}</span>
          <span v-if="oldPrice" class="old">${{ oldPrice }}</span>
        </div>
        <button class="add">Add</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-item {
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid #f0f0f0;
  background: #fff;
}
.product-item .badge {
  position: absolute;
  left: 12px;
  top: 12px;
  padding: 4px 8px;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  font-size: 12px;
}
.product-item .left img {
  width: 100px;
  height: 80px;
  object-fit: contain;
}
.product-item .meta {
  font-size: 12px;
  color: #adadad;
}
.product-item .title {
  font-weight: 700;
  color: #253d4e;
  margin: 6px 0;
}
.product-item .bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.product-item .price .current {
  color: #3bb77e;
  font-weight: 700;
}
.product-item .price .old {
  margin-left: 8px;
  color: #adadad;
  text-decoration: line-through;
}
.product-item .add {
  background: #def9ec;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  color: #3bb77e;
  font-weight: 700;
}
</style>
