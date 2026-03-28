export interface User {
  id: string;
  email: string;
  role: 'seller' | 'buyer';
  business_name: string;
  city: string;
  phone: string;
  created_at: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data: {
    access_token?: string;
    token_type?: string;
    user?: User;
    id?: string;
    email?: string;
    role?: string;
    business_name?: string;
    city?: string;
    phone?: string;
    created_at?: string;
  };
}

export interface Listing {
  id: string;
  seller_id: string;
  title: string;
  description?: string;
  category: string;
  quantity: number;
  original_price: number;
  discount_price: number;
  discount_pct: number;
  city: string;
  status: 'active' | 'sold' | 'closed';
  created_at: string;
}

export interface ListingResponse {
  success: boolean;
  message: string;
  data: Listing | Listing[] | { listings: Listing[]; pagination: { total: number; page: number; page_size: number; pages: number } };
}

export interface Order {
  id: string;
  buyer_id: string;
  listing_id: string;
  quantity: number;
  total_price: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  created_at: string;
  listing_title?: string;
  listing_city?: string;
  seller_name?: string;
}

export interface OrderResponse {
  success: boolean;
  message: string;
  data: Order | Order[];
}

export interface TrendingCategory {
  category: string;
  total_orders: number;
  total_units_sold: number;
  total_revenue: number;
}

export interface PlatformSavings {
  total_saved_inr: number;
  total_traded_value_inr: number;
  original_value_inr: number;
  avg_discount_pct: number;
  total_orders_completed: number;
  total_listings: number;
  active_listings: number;
}

export interface SellerDashboard {
  seller: {
    id: string;
    business_name: string;
    city: string;
  };
  listings: {
    active: number;
    sold: number;
    closed: number;
    total: number;
  };
  orders: {
    pending: number;
    confirmed: number;
    completed: number;
    cancelled: number;
  };
  financials: {
    total_revenue_inr: number;
    total_units_sold: number;
    original_value_inr: number;
    value_rescued_inr: number;
  };
  top_listing: {
    title: string;
    revenue: number;
    units: number;
  };
}

export interface AnalyticsResponse {
  success: boolean;
  message: string;
  data: TrendingCategory[] | PlatformSavings | SellerDashboard;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T | null;
}
