<script>
import CategoryCard from '../components/CategoryCard.vue'
import PromotionCard from '../components/PromotionCard.vue'
import ProductCard from '../components/ProductCard.vue'
import MenuComponent from '../components/MenuComponent.vue'
import ProductItem from '../components/ProductItem.vue'
import ShowCase from '../components/ShowCase.vue'
import { useProductStore } from '../stores/product'
import { staticCategories, staticPromotions, staticProducts } from '../data/staticData'

export default {
  components: { CategoryCard, PromotionCard, ProductCard, MenuComponent, ProductItem, ShowCase },
  data() {
    return {
      selectedGroup: 'All',
      staticCategories,
      staticPromotions,
      staticProducts,
    }
  },
  computed: {
    categories() {
      const store = useProductStore()
      return store.categories && store.categories.length ? store.categories : this.staticCategories
    },
    promotions() {
      const store = useProductStore()
      return store.promotions && store.promotions.length ? store.promotions : this.staticPromotions
    },
    products() {
      const store = useProductStore()
      return store.products && store.products.length ? store.products : this.staticProducts
    },
    displayedProducts() {
      const store = useProductStore()
      if (this.selectedGroup && this.selectedGroup !== 'All') {
        try {
          const fromStore = store.getProductsByGroup(this.selectedGroup)
          if (fromStore && fromStore.length) return fromStore
        } catch (e) {}
        return this.staticProducts.filter((p) => {
          return (
            (p.category && p.category.toLowerCase().includes(this.selectedGroup.toLowerCase())) ||
            (p.group && String(p.group).toLowerCase().includes(this.selectedGroup.toLowerCase()))
          )
        })
      }
      return store.products && store.products.length ? store.products : this.staticProducts
    },
  },
  mounted() {
    const store = useProductStore()
    store.init().catch((err) => console.error('store.init error', err))
    try {
      // debug: log when Home mounts
      // eslint-disable-next-line no-console
      console.log('Home mounted. route=', this.$route && this.$route.fullPath)
    } catch (e) {}
  },
}
</script>

<template>
  <main class="container">
    <ShowCase />

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
      <h2 class="section-title">Popular Products</h2>
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
/* Keep the same styles moved from App.vue */
.container {
  max-width: 1600px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Quicksand', sans-serif;
}
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(90deg, #f7fbf7 0%, #ffffff 100%);
  border-radius: 12px;
  padding: 32px;
  margin-bottom: 30px;
}
.hero-left h1 {
  font-size: 36px;
  color: #253d4e;
  margin: 0 0 10px;
}
.hero-left p {
  color: #6b6b6b;
  margin: 0 0 16px;
}
.hero-actions {
  display: flex;
  gap: 8px;
}
.hero-actions input {
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #e8e8e8;
}
.hero-actions .subscribe {
  background: #3bb77e;
  color: #fff;
  padding: 10px 14px;
  border-radius: 8px;
  border: none;
}
.hero-right img {
  max-width: 360px;
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
  font-size: 32px;
  font-weight: 700;
  color: #253d4e;
  margin-bottom: 30px;
  margin-top: 40px;
}
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
}
.loading {
  width: 100%;
  text-align: center;
  padding: 20px;
  color: #7e7e7e;
}
</style>
