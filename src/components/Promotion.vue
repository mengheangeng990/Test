<template>
  <div class="promotion-card" :style="{ backgroundColor: bgcolor }">
    <div class="content-wrapper">
      <p class="description">{{ Description }}</p>
      <img class="image" :src="image" alt="Promotion" />
      <div class="buttonContainer">
        <button @click="shopNow" style="border: none;">
          <ButtonCard
          :text="buttonText"
          :bgcolor="buttonColor"
        />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ButtonCard from './Button.vue';
import { defineProps } from 'vue';

const props = defineProps<{

  Description: string
  image: string
  bgcolor: string
  buttonText: string
  buttonColor: string

}>()

function shopNow(): void{
  alert("Let's shop: " + (typeof buttonText !== 'undefined' ? buttonText: '') + props.Description);
}

</script>

<style scoped>

.promotion-card {
  border-radius: 20px;
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: rgba(51, 51, 51, 0.2) 0px 4px 16px 0px;
  border: solid 1px #E0CFA6;
  padding: 30px;
  transition: all 0.3s ease;
}

.promotion-card:hover {
  transform: translateY(-5px);
  box-shadow: rgba(51, 51, 51, 0.3) 0px 8px 24px 0px;
}

.description {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 20px;
  font-style: bold;
  line-height: 1.3;
  color: #333333;
  max-width: 60%;
  text-align: left;
  position: absolute;
  top: 15%;
  left: 8%;
}

.image {
  width: 200px;
  height: 150px;
  object-fit: contain;
  position: absolute;
  right: 0%;
  bottom: 0%;
}

.buttonContainer{
  align-self: flex-start;
  margin-top: 30px;
  padding-right: 174px;
  padding-top: 60px;
}

</style>
