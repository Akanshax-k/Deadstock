'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { analyticsService } from '@/lib/api/analytics';
import { TrendingCategory, PlatformSavings, SellerDashboard } from '@/lib/api';

interface AnalyticsContextType {
  trendingCategories: TrendingCategory[];
  platformSavings: PlatformSavings | null;
  sellerDashboard: SellerDashboard | null;
  isLoading: boolean;
  error: string | null;
  
  // Fetch operations
  getTrendingCategories: () => Promise<void>;
  getPlatformSavings: () => Promise<void>;
  getSellerDashboard: () => Promise<void>;
  
  clearError: () => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [trendingCategories, setTrendingCategories] = useState<TrendingCategory[]>([]);
  const [platformSavings, setPlatformSavings] = useState<PlatformSavings | null>(null);
  const [sellerDashboard, setSellerDashboard] = useState<SellerDashboard | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getTrendingCategories = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await analyticsService.getTrendingCategories();
      if (response.success) {
        const categories = Array.isArray(response.data) ? response.data : [response.data];
        setTrendingCategories(categories as TrendingCategory[]);
      } else {
        throw new Error(response.message || 'Failed to fetch trending categories');
      }
    } catch (err: any) {
      const message = err.response?.data?.message || err.message || 'Failed to fetch trending categories';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getPlatformSavings = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await analyticsService.getPlatformSavings();
      if (response.success) {
        setPlatformSavings(response.data as PlatformSavings);
      } else {
        throw new Error(response.message || 'Failed to fetch platform savings');
      }
    } catch (err: any) {
      const message = err.response?.data?.message || err.message || 'Failed to fetch platform savings';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getSellerDashboard = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await analyticsService.getSellerDashboard();
      if (response.success) {
        setSellerDashboard(response.data as SellerDashboard);
      } else {
        throw new Error(response.message || 'Failed to fetch seller dashboard');
      }
    } catch (err: any) {
      const message = err.response?.data?.message || err.message || 'Failed to fetch seller dashboard';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const value: AnalyticsContextType = {
    trendingCategories,
    platformSavings,
    sellerDashboard,
    isLoading,
    error,
    getTrendingCategories,
    getPlatformSavings,
    getSellerDashboard,
    clearError,
  };

  return <AnalyticsContext.Provider value={value}>{children}</AnalyticsContext.Provider>;
};

export const useAnalytics = (): AnalyticsContextType => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};
