<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  isNavbarOpen: Boolean 
});

</script>

<template>
  <nav class="nav" :class="{ open: props.isNavbarOpen }">
    <RouterLink to="/">Strona główna</RouterLink>
    <RouterLink to="/about">Strefa dziecka</RouterLink>
    <RouterLink to="/">Strefa kobiet</RouterLink>
  </nav>
</template>

<style scoped lang="scss">

.nav {
  display: none;
  &.open {
    display: block;
  }   
}
  
</style>

