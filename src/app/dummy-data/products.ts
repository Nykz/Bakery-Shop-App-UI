import { Product } from "../interfaces/product.interface";

export const products: Product[] = [
  // Cakes
  {
    id: 13,
    name: 'Chocolate Cake',
    description: 
      'Our Chocolate Cake is a decadent masterpiece made with layers of moist chocolate sponge and creamy frosting. Perfectly sweet and rich, it’s a treat for chocolate enthusiasts and a centerpiece for celebrations. Enjoy the indulgence of premium cocoa in every bite.',
    rating: 4.5,
    image: 'assets/products/chocolate-cake.jpg',
    category_id: 5,
    seller_id: 2,
    default_price: 25,
    cut_price: 50,
    type: 'veg',
    varieties: [
      { id: 7, unit: 'Kg', quantity: 0.5, price: 15, is_default: false },
      { id: 8, unit: 'Kg', quantity: 1, price: 25, is_default: true },
      { id: 9, unit: 'Kg', quantity: 1.5, price: 35, is_default: false },
      { id: 10, unit: 'Kg', quantity: 2, price: 50, is_default: false },
      { id: 11, unit: 'Kg', quantity: 4, price: 95, is_default: false },
    ],
  },
  {
    id: 15,
    name: 'Black Forest Cake',
    type: 'veg',
    description: 
      'Our Black Forest Cake is a classic favorite featuring layers of moist chocolate sponge, cherries, and fresh whipped cream. Topped with chocolate shavings and cherries, it’s a symphony of flavors and textures. Perfect for celebrations or indulging your sweet cravings.',
    rating: 4.8,
    image: 'assets/products/black_forest_cake.jpg',
    category_id: 5,
    seller_id: 2,
    default_price: 35,
    cut_price: 150,
    varieties: [
      { id: 17, unit: 'Kg', quantity: 0.5, price: 25, is_default: false },
      { id: 18, unit: 'Kg', quantity: 1, price: 35, is_default: true },
      { id: 19, unit: 'Kg', quantity: 1.5, price: 45, is_default: false },
      { id: 20, unit: 'Kg', quantity: 2, price: 60, is_default: false },
      { id: 21, unit: 'Kg', quantity: 4, price: 115, is_default: false },
    ],
  },
  {
    id: 14,
    name: 'Red Velvet Cake',
    type: 'non-veg',
    description: 
      'This Red Velvet Cake is a luxurious dessert with a velvety texture and a hint of cocoa. Topped with creamy, tangy cream cheese frosting, it’s the ultimate treat for special occasions. Its vibrant red color and rich flavor make it a feast for both the eyes and the palate.',
    rating: 4.7,
    image: 'assets/products/red_velvet_cake.jpg',
    category_id: 5,
    seller_id: 2,
    default_price: 30,
    cut_price: 150,
    varieties: [
      { id: 12, unit: 'Kg', quantity: 0.5, price: 20, is_default: false },
      { id: 13, unit: 'Kg', quantity: 1, price: 30, is_default: true },
      { id: 14, unit: 'Kg', quantity: 1.5, price: 45, is_default: false },
      { id: 15, unit: 'Kg', quantity: 2, price: 60, is_default: false },
      { id: 16, unit: 'Kg', quantity: 4, price: 115, is_default: false },
    ],
  },

  // Cupcakes
  {
    id: 1,
    name: 'Vanilla Cupcake',
    description: 
      'Our Vanilla Cupcake is a delightful treat crafted with moist vanilla sponge cake and topped with a swirl of creamy, rich frosting. Perfect for satisfying your sweet tooth, it is made using the finest vanilla extracts. Enjoy a melt-in-your-mouth experience with every bite of this classic cupcake.',
    rating: 4.3,
    image: 'assets/products/vanilla-cupcake.jpg',
    category_id: 1,
    seller_id: 1,
    default_price: 15,
    cut_price: 30,
    type: 'veg',
    varieties: [
      {
        id: 1,
        unit: 'Piece',
        quantity: 1,
        price: 15,
        is_default: true,
      },
    ],
  },
  {
    id: 3,
    name: 'Chocolate Cupcake',
    type: 'non-veg',
    description: 
      'Indulge in the richness of our Chocolate Cupcake, made with premium cocoa and topped with a luscious chocolate ganache. This cupcake offers a perfect balance of sweetness and flavor, making it a favorite for chocolate lovers. A treat for all occasions, it’s as decadent as it is delightful.',
    rating: 4.7,
    image: 'assets/products/chocolate-cupcake.jpg',
    category_id: 1,
    seller_id: 1,
    default_price: 20,
    cut_price: 50,
    varieties: [
      {
        id: 2,
        unit: 'Piece',
        quantity: 1,
        price: 20,
        is_default: true,
      },
    ],
  },

  // Donuts
  {
    id: 7,
    name: 'Glazed Donut',
    type: 'non-veg',
    description: 
      'Our Glazed Donut is a soft, airy delight coated with a shiny layer of sweet glaze. The perfect combination of texture and flavor, it’s made fresh daily to provide an irresistible taste. Enjoy this timeless classic with a cup of coffee or as a standalone treat anytime.',
    rating: 4.7,
    image: 'assets/products/glazed_donut.jpg',
    category_id: 3,
    seller_id: 2,
    default_price: 8,
    cut_price: 15,
    varieties: [
      {
        id: 3,
        unit: 'Piece',
        quantity: 1,
        price: 8,
        is_default: true,
      },
    ],
  },
  {
    id: 8,
    name: 'Chocolate Sprinkled Donut',
    type: 'veg',
    description: 
      'This Chocolate Sprinkled Donut is a feast for both the eyes and the palate. It features a soft donut base, a layer of rich chocolate glaze, and a generous topping of colorful sprinkles. A delightful treat for any occasion, it’s a perfect snack for all ages.',
    rating: 4.9,
    image: 'assets/products/chocolate_sprinkled_donut.jpg',
    category_id: 3,
    seller_id: 2,
    default_price: 10,
    varieties: [
      {
        id: 4,
        unit: 'Piece',
        quantity: 1,
        price: 10,
        is_default: true,
      },
    ],
  },

  // Breads
  {
    id: 10,
    name: 'Sourdough Bread',
    description: 
      'Our Sourdough Bread is a handcrafted loaf made with a slow fermentation process for that perfect tangy flavor. Its crusty exterior and soft, chewy interior make it ideal for sandwiches, toasts, or enjoying on its own. Made with natural ingredients, it’s a healthy and tasty choice.',
    rating: 4.6,
    image: 'assets/products/sourdough_bread.jpg',
    category_id: 4,
    seller_id: 1,
    default_price: 20,
    type: 'non-veg',
    varieties: [
      {
        id: 5,
        unit: 'Loaf',
        quantity: 1,
        price: 20,
        is_default: true,
      },
    ],
  },
  {
    id: 11,
    name: 'Baguette',
    description: 
      'This traditional French Baguette is baked to golden perfection with a crispy crust and soft, fluffy interior. Ideal for pairing with cheese, spreads, or soups, it is made with simple, high-quality ingredients. Perfect for elevating your dining experience with a touch of authenticity.',
    rating: 4.4,
    image: 'assets/products/baguette.jpg',
    category_id: 4,
    seller_id: 1,
    default_price: 15,
    type: 'non-veg',
    varieties: [
      {
        id: 6,
        unit: 'Loaf',
        quantity: 1,
        price: 15,
        is_default: true,
      },
    ],
  },
];