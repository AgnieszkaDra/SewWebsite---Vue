<template>
  <section class="section">
    <div class="categories">
      <div 
        class="category__content"
        v-for="product in products" 
        :key="product.id"
        :style="{ backgroundImage: `url(${product.background})` }"
      >
        <h2 class="category__name">{{ product.name }}</h2>
        <a class="category__link">
          <span class="category__span">Zobacz produkty</span>
          <div class="category__arrow">
            <FontAwesomeIcon :icon="faArrowRight" />
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useProductsStore } from '../stores/products.ts';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const productsStore = useProductsStore();
const products = computed(() => productsStore.products);

</script>

<style scoped>

</style>

<style lang="scss">
.categories {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;

    @media screen and (max-width: 767px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 575px) {
        grid-template-columns: 1fr;
    }
}

.category {
    &__content {
      height: 400px;
      padding: 50px 50px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      color: var(--color-text-dark);
      display: grid;
      grid-template-rows: 200px 100px;
       
        h2 {
            text-align: right;
        }
    }

    &__name {
        display: block;
        width: 100%;

        h2 {
            text-align: end;
        }
    }

    &__link {
        font-size: 1.2rem;
        display: grid;
        grid-template-columns: 60% 40%;
        position: relative;
        cursor: pointer;

        &:hover {
            color: whitesmoke;
            font-size: 1.3rem;
        }

        &::after {
            content: '';
            height: 2px;
            width: 0;
            background-color: currentColor;
            position: absolute;
            bottom: 0px;
            left: 10px;
            -webkit-transition: width .25s;
            transition: width .25s;
        }

        &:hover::after {
            width: 90%;
        }
    }

    &__span {
        grid-column: 1/2;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        &:hover {
            background: 0;
        }
    }

    &__arrow {
        grid-column: 2/3;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>

