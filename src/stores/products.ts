import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
  state: () => ({ 
    products: [], 
  }),
  getters: {
    sortedProductsByCollection: (state) => (selectedCollection) => {
      return state.products.filter(product => product.collection.includes(selectedCollection));
    }
  }
})
