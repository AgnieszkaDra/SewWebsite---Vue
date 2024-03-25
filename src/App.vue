<script setup lang="ts">
import { RouterView } from 'vue-router'
import HamburgerIcon from './components/icons/IconHamburger.vue'
import CloseMenuIcon from './components/icons/IconCloseMenu.vue'
import Navigation from './components/Navigation/NavigationComponent.vue'

import { ref } from 'vue';

const navbarOpen = ref(false);
const handleToggle = () => {
  navbarOpen.value = !navbarOpen.value;
};

</script>

<template>
  <header>
    <div class="wrapper">
      <div class="menu-icon" :class="{ close: navbarOpen }">
        <HamburgerIcon v-if="!navbarOpen" class="icon--open" @click="handleToggle"/>
        <CloseMenuIcon v-else class="icon--close" @click="handleToggle"/>
      </div>
      <Navigation :isNavbarOpen="navbarOpen"/> 
    </div>
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
  min-height: 10vh;
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
