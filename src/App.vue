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
      <div @click="handleToggle" class="menu-icon" :class="{ active: navbarOpen }">
        <HamburgerIcon v-if="!navbarOpen" />
        <CloseMenuIcon v-else />
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
  height: 100vh;
  overflow-x: hidden;
}

.wrapper {
  position: relative;
}

.menu-icon {
  height: 26px;
    width: 32px;
    position: absolute;
    top: 17px;
    left: 20px;
    color: var(--color-heading);
    z-index: 20;
}
//  .wrapper {
//     display: flex;
//     place-items: center;
//     justify-content: space-between;
//   }

  nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
  }

  nav a.router-link-exact-active {
    color: var(--color-text);
  }

  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }

  nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }

  nav a:first-of-type {
    border: 0;
  }

  // @media (min-width: 1024px) {
  //   header {
  //     padding-right: calc(var(--section-gap) / 2);
  //   }

  //   .header .wrapper {
  //     flex-wrap: wrap;
  //   }

  //   nav {
  //     text-align: left;
  //     margin-left: -1rem;
  //     font-size: 1rem;
  //     padding: 1rem 0;
  //     margin-top: 1rem;
  //   }
  // }

  .menu-icon {
    cursor: pointer;
    transition: background-color 0.3s ease;
  
  }

  .menu-icon.active {
    background-color: lightblue; /* Change this to the desired background color */
  }

</style>
