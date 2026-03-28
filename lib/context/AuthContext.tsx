'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { authService } from '@/lib/api/auth';
import { User } from '@/lib/api';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, role: 'seller' | 'buyer', business_name: string, city: string, phone: string) => Promise<void>;
  logout: () => void;
  updateProfile: (business_name?: string, city?: string, phone?: string) => Promise<void>;
  changePassword: (old_password: string, new_password: string) => Promise<void>;
  refreshProfile: () => Promise<void>;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Initialize from localStorage
  useEffect(() => {
    const storedUser = authService.getStoredUser();
    const token = authService.getToken();
    
    if (storedUser && token) {
      setUser(storedUser);
    }
    setIsLoading(false);
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await authService.login(email, password);
      if (response.success && response.data.user) {
        setUser(response.data.user);
      } else {
        throw new Error(response.message || 'Login failed');
      }
    } catch (err: any) {
      const message = err.response?.data?.message || err.message || 'Login failed';
      setError(message);
      throw new Error(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const register = useCallback(
    async (email: string, password: string, role: 'seller' | 'buyer', business_name: string, city: string, phone: string) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await authService.register(email, password, role, business_name, city, phone);
        if (!response.success) {
          throw new Error(response.message || 'Registration failed');
        }
      } catch (err: any) {
        const message = err.response?.data?.message || err.message || 'Registration failed';
        setError(message);
        throw new Error(message);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const logout = useCallback(() => {
    authService.logout();
    setUser(null);
    setError(null);
  }, []);

  const updateProfile = useCallback(async (business_name?: string, city?: string, phone?: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await authService.updateProfile(business_name, city, phone);
      if (response.success && response.data) {
        const updatedUser = {
          id: response.data.id || user?.id || '',
          email: response.data.email || user?.email || '',
          role: response.data.role as 'seller' | 'buyer' || user?.role || 'buyer',
          business_name: response.data.business_name || business_name || user?.business_name || '',
          city: response.data.city || city || user?.city || '',
          phone: response.data.phone || phone || user?.phone || '',
          created_at: response.data.created_at || user?.created_at || new Date().toISOString(),
        };
        setUser(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser));
      } else {
        throw new Error(response.message || 'Profile update failed');
      }
    } catch (err: any) {
      const message = err.response?.data?.message || err.message || 'Profile update failed';
      setError(message);
      throw new Error(message);
    } finally {
      setIsLoading(false);
    }
  }, [user]);

  const changePassword = useCallback(async (old_password: string, new_password: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await authService.changePassword(old_password, new_password);
      if (!response.success) {
        throw new Error(response.message || 'Password change failed');
      }
    } catch (err: any) {
      const message = err.response?.data?.message || err.message || 'Password change failed';
      setError(message);
      throw new Error(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const refreshProfile = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await authService.getProfile();
      if (response.success && response.data) {
        const updatedUser: User = {
          id: response.data.id || user?.id || '',
          email: response.data.email || user?.email || '',
          role: response.data.role as 'seller' | 'buyer' || user?.role || 'buyer',
          business_name: response.data.business_name || user?.business_name || '',
          city: response.data.city || user?.city || '',
          phone: response.data.phone || user?.phone || '',
          created_at: response.data.created_at || user?.created_at || new Date().toISOString(),
        };
        setUser(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser));
      }
    } catch (err: any) {
      const message = err.response?.data?.message || err.message || 'Failed to refresh profile';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, [user]);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated: !!user,
    error,
    login,
    register,
    logout,
    updateProfile,
    changePassword,
    refreshProfile,
    clearError,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
