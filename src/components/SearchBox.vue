<template>
  <div class="search-box">
    <select class="cat-select" v-model="category">
      <option value="all">All Categories</option>
      <option v-for="(c, i) in categories" :key="i" :value="c.title">{{ c.title }}</option>
    </select>
    <input
      class="search-input"
      v-model="query"
      @keydown.enter="submit"
      placeholder="Search for items"
    />
    <button class="search-btn" @click="submit">🔍</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({ categories: { type: Array, default: () => [] } })
const emits = defineEmits(['search'])
const query = ref('')
const category = ref('all')
function submit() {
  emits('search', { query: query.value, category: category.value })
}
</script>

<style scoped>
.search-box {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
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
  cursor: pointer;
}
</style>
