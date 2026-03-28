import api from './axios';
import { AnalyticsResponse, TrendingCategory, PlatformSavings, SellerDashboard } from './types';

export const analyticsService = {
  // Get trending categories
  getTrendingCategories: async () => {
    const response = await api.get<AnalyticsResponse>('/analytics/trending');
    return response.data;
  },

  // Get platform savings metrics
  getPlatformSavings: async () => {
    const response = await api.get<AnalyticsResponse>('/analytics/savings');
    return response.data;
  },

  // Get seller dashboard (seller only)
  getSellerDashboard: async () => {
    const response = await api.get<AnalyticsResponse>('/analytics/dashboard');
    return response.data;
  },
};
