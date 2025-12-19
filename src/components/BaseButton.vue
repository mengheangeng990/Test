<script setup>
defineProps({
  text: {
    type: String,
    default: 'Shop Now',
  },
  bgColor: {
    type: String,
    default: '#3BB77E', // Green color from mockup
  },
})
</script>

<template>
  <button class="base-button" :style="{ backgroundColor: bgColor }">
    {{ text }} <span class="arrow">→</span>
  </button>
</template>

<style scoped>
.base-button {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 8px 15px;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.3s;
}

.base-button:hover {
  opacity: 0.9;
}

.arrow {
  font-size: 14px;
}
</style>
