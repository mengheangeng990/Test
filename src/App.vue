<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: { Header },
}
</script>

<style>
/* Empty global app styles (views handle their own styles) */
</style>
