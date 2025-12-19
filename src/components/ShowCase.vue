<template>
  <section class="showcase">
    <div class="showcase-left">
      <h1>{{ title }}</h1>
      <p>{{ subtitle }}</p>
      <div class="actions">
        <input placeholder="Your email" />
        <button class="subscribe">Subscribe</button>
      </div>
    </div>
    <div class="showcase-right">
      <img :src="image" alt="showcase" />
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  title: { type: String, default: "Don't miss amazing grocery deals" },
  subtitle: { type: String, default: 'Sign up for the daily newsletter' },
  image: { type: String, default: '/components/vegetable.png' },
})
</script>

<style scoped>
.showcase {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(90deg, #f7fbf7 0%, #ffffff 100%);
  border-radius: 12px;
  padding: 32px;
  margin-bottom: 30px;
}
.showcase-left h1 {
  font-size: 36px;
  color: #253d4e;
  margin: 0 0 10px;
}
.showcase-left p {
  color: #6b6b6b;
  margin: 0 0 16px;
}
.actions {
  display: flex;
  gap: 8px;
}
.actions input {
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #e8e8e8;
}
.actions .subscribe {
  background: #3bb77e;
  color: #fff;
  padding: 10px 14px;
  border-radius: 8px;
  border: none;
}
.showcase-right img {
  max-width: 360px;
  height: auto;
}

@media (max-width: 900px) {
  .showcase {
    flex-direction: column;
    align-items: flex-start;
  }
  .showcase-right {
    margin-top: 12px;
  }
}
</style>
