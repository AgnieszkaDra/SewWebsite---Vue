<script setup lang="ts">
  import carouselImages from '../../data/carousel.js'
  import Carousel from '../components/Carousel/CarouselComponent.vue'
</script>

<template>
  <main class="main">
    <Carousel :images="carouselImages"></Carousel>
  </main>
</template>




