<template>
  <section class="section">
    <div class="categories">
      <!-- <CategoryComponent
        v-for="product in products" 
        :key="product.id" 
        :name="product.name" 
        :id="product.id" 
        :background="product.background"
        :collection="product.collection" 
      /> -->

      <div 
      class="category__content"
      v-for="product in products" 
      :key="product.id"
    >
       <div class="category__span">Zobacz produkty</div> 
    <h2 class="category__name">ffff </h2> <!-- Use product.name to display the name -->
      <h3>Ola</h3>
    </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useProductsStore } from '../stores/products.ts';

const productsStore = useProductsStore();
const products = computed(() => productsStore.products);
</script>

<script>
// import CategoryComponent from '../components/CategoryComponent.vue';

// export default {
//   components: {
//     CategoryComponent
//   }
// }
</script>

<style scoped>

</style>