import { ref } from 'vue';

export function navigateOpen() {
  const isNavbarOpen = ref(false);

  function navbarOpen() {
    isNavbarOpen.value = !isNavbarOpen.value; 
  }

  return { isNavbarOpen, navbarOpen };
}