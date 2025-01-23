export interface Seller {
  id: number;
  name: string;
  type: 'Business' | 'Individual' | 'AppOwner';
  role: string;
  phone: string;
  email?: string;
  address?: string;
  lat?: number;
  lng?: number;
  pincode?: string;
  image: string;
}
