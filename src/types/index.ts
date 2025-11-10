export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  phone?: string;
  is_active: boolean;
  date_joined: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
  image_url?: string;
  is_active: boolean;
}

export interface Product {
  id: number;
  category_id?: number;
  name: string;
  slug: string;
  description: string;
  base_price: number;
  discount_price?: number;
  sku: string;
  stock_quantity: number;
  is_active: boolean;
  images: Array<{ url: string; alt: string; is_primary: boolean }>;
  sizes: string[];
  colors: Array<{ name: string; hex: string }>;
  avg_rating: number;
  review_count: number;
}

export interface Review {
  id: number;
  user_id: number;
  product_id: number;
  rating: number;
  comment: string;
  is_verified_purchase: boolean;
  is_approved: boolean;
  created_at: string;
  user?: {
    first_name: string;
    last_name: string;
  };
}

export interface CartItem {
  id: number;
  product_id: number;
  product: Product;
  quantity: number;
  size?: string;
  color?: string;
}

export interface Address {
  id: number;
  full_name: string;
  phone: string;
  address_line1: string;
  address_line2?: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  is_default: boolean;
  address_type: 'HOME' | 'WORK' | 'OTHER';
}

export interface OrderItem {
  id: number;
  product_name: string;
  product_sku: string;
  size?: string;
  color?: string;
  quantity: number;
  price: number;
  item_total: number;
}

export interface Order {
  id: number;
  order_number: string;
  subtotal: number;
  discount_amount: number;
  tax_amount: number;
  shipping_cost: number;
  total_amount: number;
  payment_status: 'PENDING' | 'COMPLETED' | 'FAILED' | 'REFUNDED';
  order_status: 'PENDING' | 'CONFIRMED' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED';
  tracking_id?: string;
  tracking_url?: string;
  created_at: string;
  items: OrderItem[];
  address?: Address;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
}

export interface PaginatedResponse<T> {
  results: T[];
  count: number;
  next: string | null;
  previous: string | null;
}
