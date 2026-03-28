import api from './axios';
import { AuthResponse, User } from './types';

export const authService = {
  // Register new account
  register: async (email: string, password: string, role: 'seller' | 'buyer', business_name: string, city: string, phone: string) => {
    const response = await api.post<AuthResponse>('/auth/register', {
      email,
      password,
      role,
      business_name,
      city,
      phone,
    });
    return response.data;
  },

  // Login for seller
  loginSeller: async (email: string, password: string) => {
    const response = await api.post<AuthResponse>('/user/login', {
      email,
      password,
      role: 'seller',
    });
    
    if (response.data.success && response.data.data.access_token) {
      localStorage.setItem('access_token', response.data.data.access_token);
      localStorage.setItem('user', JSON.stringify(response.data.data.user));
      localStorage.setItem('userRole', 'seller');
    }
    
    return response.data;
  },

  // Login for buyer
  loginBuyer: async (email: string, password: string) => {
    const response = await api.post<AuthResponse>('/user/login', {
      email,
      password,
      role: 'buyer',
    });
    
    if (response.data.success && response.data.data.access_token) {
      localStorage.setItem('access_token', response.data.data.access_token);
      localStorage.setItem('user', JSON.stringify(response.data.data.user));
      localStorage.setItem('userRole', 'buyer');
    }
    
    return response.data;
  },

  // Generic login (for both seller and buyer)
  login: async (email: string, password: string) => {
    const response = await api.post<AuthResponse>('/user/login', {
      email,
      password,
    });
    
    if (response.data.success && response.data.data.access_token) {
      localStorage.setItem('access_token', response.data.data.access_token);
      localStorage.setItem('user', JSON.stringify(response.data.data.user));
      if (response.data.data.user?.role) {
        localStorage.setItem('userRole', response.data.data.user.role);
      }
    }
    
    return response.data;
  },

  // Get current user profile and verify authentication
  getProfile: async () => {
    const response = await api.get<AuthResponse>('/user/me');
    if (response.data.success && response.data.data.user) {
      localStorage.setItem('user', JSON.stringify(response.data.data.user));
    }
    return response.data;
  },

  // Check if user is authenticated
  checkAuthStatus: async () => {
    try {
      const token = authService.getToken();
      if (!token) return false;
      
      const response = await authService.getProfile();
      return response.success && !!response.data.user;
    } catch (error) {
      return false;
    }
  },

  // Update profile
  updateProfile: async (business_name?: string, city?: string, phone?: string) => {
    const response = await api.put<AuthResponse>('/user/me', {
      business_name,
      city,
      phone,
    });
    return response.data;
  },

  // Change password
  changePassword: async (old_password: string, new_password: string) => {
    const response = await api.put<AuthResponse>('/user/me/password', {
      old_password,
      new_password,
    });
    return response.data;
  },

  // Get seller public profile
  getSellerProfile: async (seller_id: string) => {
    const response = await api.get<AuthResponse>(`/user/seller/${seller_id}`);
    return response.data;
  },

  // Logout (client-side only)
  logout: () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
  },

  // Get stored token
  getToken: () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('access_token');
    }
    return null;
  },

  // Get stored user
  getStoredUser: (): User | null => {
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    }
    return null;
  },
};
