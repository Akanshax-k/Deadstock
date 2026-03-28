import api from './axios';
import { ListingResponse, Listing } from './types';

export const listingService = {
  // Create a new listing
  createListing: async (
    title: string,
    category: string,
    quantity: number,
    original_price: number,
    discount_price: number,
    city: string,
    description?: string
  ) => {
    const response = await api.post<ListingResponse>('/listings/', {
      title,
      description,
      category,
      quantity,
      original_price,
      discount_price,
      city,
    });
    return response.data;
  },

  // Search listings
  searchListings: async (
    q?: string,
    category?: string,
    city?: string,
    min_price?: number,
    max_price?: number,
    page: number = 1,
    page_size: number = 20
  ) => {
    const params = {
      ...(q && { q }),
      ...(category && { category }),
      ...(city && { city }),
      ...(min_price !== undefined && { min_price }),
      ...(max_price !== undefined && { max_price }),
      page,
      page_size,
    };

    const response = await api.get<ListingResponse>('/listings/search', { params });
    return response.data;
  },

  // Get nearby listings
  getNearbyListings: async (city: string) => {
    const response = await api.get<ListingResponse>('/listings/nearby', {
      params: { city },
    });
    return response.data;
  },

  // Get listings by category
  getListingsByCategory: async (category: string) => {
    const response = await api.get<ListingResponse>(`/listings/category/${category}`);
    return response.data;
  },

  // Get my listings (seller only)
  getMyListings: async (status?: 'active' | 'sold' | 'closed') => {
    const params = status ? { status } : {};
    const response = await api.get<ListingResponse>('/listings/mine', { params });
    return response.data;
  },

  // Get single listing
  getListingById: async (listing_id: string) => {
    const response = await api.get<ListingResponse>(`/listings/${listing_id}`);
    return response.data;
  },

  // Update listing
  updateListing: async (
    listing_id: string,
    updates: {
      title?: string;
      quantity?: number;
      discount_price?: number;
      status?: 'active' | 'sold' | 'closed';
    }
  ) => {
    const response = await api.put<ListingResponse>(`/listings/${listing_id}`, updates);
    return response.data;
  },

  // Delete listing
  deleteListing: async (listing_id: string) => {
    const response = await api.delete<ListingResponse>(`/listings/${listing_id}`);
    return response.data;
  },
};
