import { defineStore } from 'pinia'

export const useCounterStore = defineStore('products', {
  state: () => ({ 
    products: [], 
  }),
 
})
