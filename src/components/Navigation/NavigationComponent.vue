<template>
  <nav class="nav" :class="{ open: props.navigation }">
    <ul>
      <li>
       <RouterLink to="/" class="nav-link">Strona główna</RouterLink> 
      </li>
      <li>
        <RouterLink to="/dziecko" class="nav-link">Strefa dziecka</RouterLink>
      </li>
      <li>
        <RouterLink to="/kobieta" class="nav-link">Strefa kobiet</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
  navigation: Boolean, 
});
</script>

<style scoped lang="scss">
.nav {
  display: none;
  width: 100%;
  &.open {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100vh;
    margin-top: 0;
    padding: 35px 50px 50px;
    position: relative;
    z-index: 100;
  } 
  &-link {
    position: relative;
    text-decoration: none;
    color: inherit;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 1px;
      background-color: var(--color-text); 
      transition: width 0.6s ease;
    }

    &:hover::before {
      width: 100%;
    }
  }  
}
</style>