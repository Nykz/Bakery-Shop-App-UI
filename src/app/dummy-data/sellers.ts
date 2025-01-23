import { Seller } from "../interfaces/seller.interface";

export const sellers: Seller[] = [
    {
      id: 1,
      name: 'Sweet Treats',
      type: 'Business',
      role: 'Cook',
      phone: '123-456-7890',
      email: 'sweet.treats@example.com',
      address: '123 Cupcake Lane, Baker City, BC',
      lat: 40.712776,
      lng: -74.005974,
      pincode: '10001',
      image: 'assets/sellers/sweet_treats.png',
    },
    {
      id: 2,
      name: 'BakeHouse',
      type: 'Business',
      role: 'Cook',
      phone: '987-654-3210',
      email: 'bakehouse@example.com',
      address: '456 Donut Road, Cake Town, CT',
      lat: 34.052235,
      lng: -118.243683,
      pincode: '90001',
      image: 'assets/sellers/bakehouse.png',
    },
    {
      id: 3,
      name: 'App Owner',
      type: 'AppOwner',
      role: 'Owner',
      phone: '000-000-0000',
      email: 'appowner@example.com',
      image: 'assets/sellers/appowner.png',
    },
  ];
  