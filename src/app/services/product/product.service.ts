import { Injectable } from '@angular/core';
import { categories } from 'src/app/dummy-data/categories';
import { products } from 'src/app/dummy-data/products';
import { sellers } from 'src/app/dummy-data/sellers';
import { Category } from 'src/app/interfaces/category.interface';
import { Product } from 'src/app/interfaces/product.interface';
import { Seller } from 'src/app/interfaces/seller.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  // Method to fetch all products
  getProducts(): Product[] {
    return products;
  }

  // Fetch product by ID along with seller and category data
  getProductById(
    id: number
  ): (Product & { seller?: Seller; category?: Category }) | null {
    const product = products.find((product) => product.id === id);

    if (product) {
      const seller = sellers.find((seller) => seller.id === product.seller_id);
      const category = categories.find(
        (category) => category.id === product.category_id
      );

      return { ...product, seller, category }; // Combine product, seller, and category data
    }

    return null; // Return null if product is not found
  }
}
