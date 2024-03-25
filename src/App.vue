<script setup lang="ts">
import { RouterView } from 'vue-router'
import HamburgerIcon from './components/icons/IconHamburger.vue'
import CloseMenuIcon from './components/icons/IconCloseMenu.vue'
import Navigation from './components/Navigation/NavigationComponent.vue'
import carouselImages from '../data/carousel.js'
import Carousel from './components/Carousel/CarouselComponent.vue'
import { ref } from 'vue';

const navbarOpen = ref(false);
const handleToggle = () => {
  navbarOpen.value = !navbarOpen.value;
};
</script>

<template>
  <header>
    <div class="wrapper">
      <div @click="handleToggle" class="menu-icon" :class="{ close: navbarOpen }">
        <HamburgerIcon v-if="!navbarOpen" class="icon--open"/>
        <CloseMenuIcon v-else class="icon--close"/>
      </div>
      <Navigation :isNavbarOpen="navbarOpen"/> 
    </div>
    <Carousel :images="carouselImages"></Carousel>
  </header>
  <RouterView />
</template>

<style scoped lang="scss">

* {
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

header {
  line-height: 1.5;
  overflow-x: hidden;
}

.wrapper {
  position: relative;
  display: flex;
  flex-direction: row;
}

.menu-icon {
  position: relative;
  margin: 0;
  color: var(--color-heading);
  z-index: 20;
  cursor: pointer;
  
  &.close {
    display: flex;
    justify-content: flex-start;
    padding: 0 15px 0 15px;
    height: 100vh;
    background-color: var(--color-background-soft);
    .icon {
     left: 0;
    }
  }
}

.icon--open {
  position: absolute;
  top: 17px;
  left: 17px;
}

.icon--close {
  margin-top: 17px;
  top: 17px;
  border-radius: 50%;
  background-color: var(--color-background);
  padding: 5px;
  svg {
    font-size: 16px;  
  }
}

  
</style>
