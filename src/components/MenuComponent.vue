<script setup>
import { ref, watch } from 'vue'
const props = defineProps({
  items: { type: Array, default: () => [] },
  active: { type: String, default: 'All' },
})
const emit = defineEmits(['update:active', 'select'])
const selected = ref(props.active)

function select(item) {
  const name = typeof item === 'string' ? item : item.title || item
  selected.value = name
  emit('update:active', selected.value)
  emit('select', item)
}

watch(
  () => props.active,
  (v) => (selected.value = v),
)
</script>

<template>
  <div class="menu-component">
    <div class="menu-pill" :class="{ active: selected === 'All' }" @click="select('All')">All</div>
    <div
      v-for="(item, idx) in items"
      :key="item.id || idx"
      class="menu-card"
      :class="{ active: selected === (item.title || item) }"
      @click="select(item)"
    >
      <div class="icon-wrap">
        <img v-if="item.image" :src="item.image" :alt="item.title || item" />
      </div>
      <div class="label">{{ item.title || item }}</div>
    </div>
  </div>
</template>

<style scoped>
.menu-component {
  display: flex;
  gap: 14px;
  align-items: center;
  flex-wrap: wrap;
  padding: 6px 0;
}
.menu-pill {
  padding: 8px 14px;
  border-radius: 20px;
  background: #fff;
  border: 1px solid #e6f2ea;
  color: #3bb77e;
  font-weight: 700;
  cursor: pointer;
}
.menu-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  width: 92px;
  padding: 10px;
  border-radius: 12px;
  background: #fff;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.15s;
}
.menu-card .icon-wrap {
  background: #f7fff7;
  padding: 10px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
}
.menu-card img {
  width: 44px;
  height: 44px;
  object-fit: contain;
}
.menu-card .label {
  font-size: 13px;
  color: #253d4e;
  text-align: center;
}
.menu-card.active,
.menu-card:hover {
  box-shadow: 0 6px 18px rgba(59, 183, 126, 0.06);
  border-color: #def9ec;
}
.menu-pill.active {
  background: #3bb77e;
  color: #fff;
  border-color: #3bb77e;
}
</style>
