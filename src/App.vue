<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
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
  <header class="header">
    <img alt="Vue logo" class="header__logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <div @click="handleToggle" class="menu-icon" :class="{ active: navbarOpen }">
        <HamburgerIcon v-if="!navbarOpen" />
        <CloseMenuIcon v-else />
      </div>
      <Navigation :isNavbarOpen="navbarOpen"/> 
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped lang="scss">
.header {
  line-height: 1.5;
  max-height: 100vh;

  &__logo {
    display: block;
    margin: 0 auto 2rem;
  }

  .wrapper {
    display: flex;
    place-items: center;
    justify-content: space-between;
  }

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

  @media (min-width: 1024px) {
    header {
      padding-right: calc(var(--section-gap) / 2);
    }

    .header .wrapper {
      flex-wrap: wrap;
    }

    nav {
      text-align: left;
      margin-left: -1rem;
      font-size: 1rem;
      padding: 1rem 0;
      margin-top: 1rem;
    }
  }

  .menu-icon {
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .menu-icon.active {
    background-color: lightblue; /* Change this to the desired background color */
  }
}
</style>
