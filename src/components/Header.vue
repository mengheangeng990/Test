<template>
  <header class="site-header">
    <div class="header-inner">
      <div class="left">
        <div class="logo">
          <div class="logo-mark">🍈</div>
          <div class="logo-text">
            <div class="brand">Melon</div>
            <div class="tag">MART & GROCERY</div>
          </div>
        </div>
      </div>

      <div class="center">
        <SearchBox :categories="[]" @search="onSearch" />
      </div>

      <div class="right">
        <nav class="icons">
          <router-link class="icon" :to="{ name: 'account' }">👤</router-link>
          <button class="icon">🔁</button>
          <router-link class="icon" :to="{ name: 'wishlist' }">♡</router-link>
          <router-link class="icon" :to="{ name: 'cart' }">🛒</router-link>
        </nav>
        <div class="phone">099 777 888<br /><span>24/7 Support Center</span></div>
      </div>
    </div>

    <div class="nav-row">
      <button class="browse">Browse All Categories ▾</button>
      <nav class="main-links">
        <router-link :to="{ name: 'hot-deals' }">Hot Deals</router-link>
        <router-link to="/">Home</router-link>
        <router-link to="/categories/food">Food</router-link>
        <router-link to="/categories/vegetables">Vegetables</router-link>
        <router-link to="/categories/drink">Drink</router-link>
        <router-link to="/categories/cookies">Cookies</router-link>
        <router-link to="/categories/meat-and-seafood">Meat & Seafood</router-link>
        <router-link to="/categories/bakery">Bakery</router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  border-bottom: 1px solid #eef3ee;
  background: #fff;
}
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 18px 12px;
}
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}
.logo-mark {
  font-size: 28px;
}
.brand {
  font-weight: 800;
  color: #3bb77e;
  font-size: 20px;
}
.tag {
  font-size: 11px;
  color: #7d7d7d;
}
.center {
  flex: 1;
  display: flex;
  justify-content: center;
}
.search {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 60%;
}
.cat-select {
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #e8efe8;
  min-width: 160px;
}
.search-input {
  flex: 1;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #e8efe8;
}
.search-btn {
  padding: 10px 12px;
  background: #3bb77e;
  color: #fff;
  border-radius: 8px;
  border: none;
}
.right {
  display: flex;
  align-items: center;
  gap: 16px;
}
.icons .icon {
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
}
.phone {
  text-align: right;
  font-size: 13px;
  color: #3bb77e;
}
.phone span {
  display: block;
  font-size: 11px;
  color: #9b9b9b;
}
.nav-row {
  display: flex;
  align-items: center;
  gap: 18px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 12px;
}
.browse {
  background: #3bb77e;
  color: #fff;
  padding: 8px 12px;
  border-radius: 6px;
  border: none;
}
.main-links {
  display: flex;
  gap: 14px;
  align-items: center;
}
.main-links a {
  color: #253d4e;
  font-weight: 600;
  cursor: pointer;
}

@media (max-width: 900px) {
  .search {
    width: 100%;
  }
  .center {
    padding: 0 8px;
  }
  .nav-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
}
</style>

<script setup>
import SearchBox from './SearchBox.vue'
function onSearch(payload) {
  try {
    console.log('Search fired', payload)
  } catch (e) {}
}
</script>
