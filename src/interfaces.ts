enum Collection { BASIC = 5, MOTHER__AND__CHILD = 10, ACCESSORIES = 200, SKIRTS = 300 }

interface Product {
   title: string;
   image: string;
   price: number;
   features?: string[];
 }
 
 interface Category {
   name: string;
   id: string;
   items: Product[];
   background: string;
   collection: string[];
 }
 
 export interface Products extends Array<Category> {}

