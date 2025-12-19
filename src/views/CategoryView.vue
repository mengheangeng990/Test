<script setup>
import { onMounted, computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import CategoryCard from '../components/CategoryCard.vue'
import PromotionCard from '../components/PromotionCard.vue'
import ProductCard from '../components/ProductCard.vue'
import MenuComponent from '../components/MenuComponent.vue'
import { useProductStore } from '../stores/product'
import { staticCategories, staticPromotions, staticProducts } from '../data/staticData'

const route = useRoute()
const store = useProductStore()

const selectedGroup = ref('All')

const props = defineProps({
  title: String,
  slug: String,
})

const title = computed(() => {
  if (props.title) return props.title
  if (route.name === 'hot-deals') return 'Hot Deals'
  // support categoryId (new) or slug/title (legacy)
  const param = route.params && (route.params.categoryId ?? route.params.slug ?? route.params.title)
  if (param) return String(param).replace(/-/g, ' ')
  return 'Category'
})

const categories = computed(() => {
  return store.categories && store.categories.length ? store.categories : staticCategories
})

const promotions = computed(() => {
  return store.promotions && store.promotions.length ? store.promotions : staticPromotions
})

const products = computed(() => {
  return store.products && store.products.length ? store.products : staticProducts
})

const displayedProducts = computed(() => {
  // If a specific category slug is in the route, filter products by that category/title
  const cat = title.value && title.value !== 'Category' ? title.value.toLowerCase() : null
  if (cat) {
    const fromStore = products.value.filter((p) => {
      return (
        (p.category && String(p.category).toLowerCase().includes(cat)) ||
        (p.group && String(p.group).toLowerCase().includes(cat)) ||
        (p.title && String(p.title).toLowerCase().includes(cat)) ||
        (p.name && String(p.name).toLowerCase().includes(cat))
      )
    })
    if (fromStore && fromStore.length) return fromStore
  }

  // fallback to group filter or all
  if (selectedGroup.value && selectedGroup.value !== 'All') {
    const fromStore = store.getProductsByGroup ? store.getProductsByGroup(selectedGroup.value) : []
    if (fromStore && fromStore.length) return fromStore
    return products.value.filter((p) => {
      return (
        (p.category && p.category.toLowerCase().includes(selectedGroup.value.toLowerCase())) ||
        (p.group && String(p.group).toLowerCase().includes(selectedGroup.value.toLowerCase()))
      )
    })
  }

  return products.value
})

onMounted(async () => {
  await store.init()
  // debug: log when category view is mounted and the current route
  try {
    // eslint-disable-next-line no-console
    console.log('CategoryView mounted. route=', route.fullPath, 'title=', title.value)
  } catch (e) {}
})
</script>

<template>
  <main class="container">
    <section class="category-hero">
      <div class="hero-left">
        <h1>{{ title }}</h1>
        <p class="hero-sub">Browse the best products and deals in this category</p>
      </div>
      <div class="hero-right">
        <img src="../components/vegetable.png" alt="hero" />
      </div>
    </section>

    <div class="section-header">
      <h2 class="section-title">Featured Categories</h2>
      <MenuComponent :items="categories" v-model:active="selectedGroup" />
    </div>

    <section class="categories-section">
      <div v-if="categories.length === 0" class="loading">Loading categories...</div>
      <CategoryCard
        v-for="(category, index) in categories"
        :key="category.id || index"
        :title="category.title"
        :items="category.items"
        :image="category.image"
        :bg-color="category.bgColor"
      />
    </section>

    <section class="promotions-section">
      <div v-if="promotions.length === 0" class="loading">Loading promotions...</div>
      <PromotionCard
        v-for="(promo, index) in promotions"
        :key="promo.id || index"
        :title="promo.title"
        :image="promo.image"
        :bg-color="promo.bgColor"
        :button-color="promo.buttonColor"
      />
    </section>

    <div class="section-header">
      <h2 class="section-title">Products</h2>
      <MenuComponent :items="categories" v-model:active="selectedGroup" />
    </div>

    <section class="products-section">
      <ProductCard
        v-for="(product, index) in displayedProducts"
        :key="product.id || index"
        :id="product.id"
        :badge="product.badge"
        :image="product.image"
        :category="product.category"
        :title="product.title || product.name"
        :rating="product.rating"
        :price="product.price"
        :old-price="product.oldPrice"
      />
    </section>
  </main>
</template>

<style scoped>
.container {
  max-width: 1600px;
  margin: 0 auto;
  padding: 20px;
}
.category-hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(90deg, #f7fbf7 0%, #ffffff 100%);
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 30px;
}
.category-hero .hero-left h1 {
  font-size: 32px;
  color: #253d4e;
  margin: 0 0 8px;
}
.hero-sub {
  color: #6b6b6b;
}
.category-hero .hero-right img {
  max-width: 300px;
  height: auto;
}
.categories-section {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  margin-bottom: 40px;
}
.promotions-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
}
.products-section {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 18px;
}
.section-title {
  font-size: 28px;
  font-weight: 700;
  color: #253d4e;
  margin-bottom: 20px;
}
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
}
.loading {
  width: 100%;
  text-align: center;
  padding: 20px;
  color: #7e7e7e;
}
</style>
