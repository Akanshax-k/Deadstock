'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { listingService } from '@/lib/api/listings';
import { Listing } from '@/lib/api';

interface ListingFilter {
  q?: string;
  category?: string;
  city?: string;
  min_price?: number;
  max_price?: number;
  page?: number;
  page_size?: number;
}

interface ListingsContextType {
  listings: Listing[];
  myListings: Listing[];
  currentListing: Listing | null;
  isLoading: boolean;
  error: string | null;
  pagination: { total: number; page: number; page_size: number; pages: number } | null;
  
  // Search and fetch operations
  searchListings: (filters: ListingFilter) => Promise<void>;
  getNearbyListings: (city: string) => Promise<void>;
  getListingsByCategory: (category: string) => Promise<void>;
  getMyListings: (status?: 'active' | 'sold' | 'closed') => Promise<void>;
  getListingById: (listing_id: string) => Promise<void>;
  
  // Create, update, delete
  createListing: (
    title: string,
    category: string,
    quantity: number,
    original_price: number,
    discount_price: number,
    city: string,
    description?: string
  ) => Promise<void>;
  
  updateListing: (
    listing_id: string,
    updates: {
      title?: string;
      quantity?: number;
      discount_price?: number;
      status?: 'active' | 'sold' | 'closed';
    }
  ) => Promise<void>;
  
  deleteListing: (listing_id: string) => Promise<void>;
  
  clearError: () => void;
  clearCurrentListing: () => void;
}

const ListingsContext = createContext<ListingsContextType | undefined>(undefined);

export const ListingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [myListings, setMyListings] = useState<Listing[]>([]);
  const [currentListing, setCurrentListing] = useState<Listing | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState<{ total: number; page: number; page_size: number; pages: number } | null>(null);

  const searchListings = useCallback(async (filters: ListingFilter) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await listingService.searchListings(
        filters.q,
        filters.category,
        filters.city,
        filters.min_price,
        filters.max_price,
        filters.page || 1,
        filters.page_size || 20
      );
      
      if (response.success) {
        if ('listings' in response.data) {
          setListings(response.data.listings);
          setPagination(response.data.pagination);
        } else {
          setListings(Array.isArray(response.data) ? response.data : [response.data]);
        }
      } else {
        throw new Error(response.message || 'Failed to search listings');
      }
    } catch (err: any) {
      const message = err.response?.data?.message || err.message || 'Failed to search listings';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getNearbyListings = useCallback(async (city: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await listingService.getNearbyListings(city);
      if (response.success) {
        setListings(Array.isArray(response.data) ? response.data : [response.data]);
      } else {
        throw new Error(response.message || 'Failed to fetch nearby listings');
      }
    } catch (err: any) {
      const message = err.response?.data?.message || err.message || 'Failed to fetch nearby listings';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getListingsByCategory = useCallback(async (category: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await listingService.getListingsByCategory(category);
      if (response.success) {
        setListings(Array.isArray(response.data) ? response.data : [response.data]);
      } else {
        throw new Error(response.message || 'Failed to fetch listings by category');
      }
    } catch (err: any) {
      const message = err.response?.data?.message || err.message || 'Failed to fetch listings by category';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getMyListings = useCallback(async (status?: 'active' | 'sold' | 'closed') => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await listingService.getMyListings(status);
      if (response.success) {
        setMyListings(Array.isArray(response.data) ? response.data : [response.data]);
      } else {
        throw new Error(response.message || 'Failed to fetch your listings');
      }
    } catch (err: any) {
      const message = err.response?.data?.message || err.message || 'Failed to fetch your listings';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getListingById = useCallback(async (listing_id: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await listingService.getListingById(listing_id);
      if (response.success) {
        const listing = Array.isArray(response.data) ? response.data[0] : response.data;
        setCurrentListing(listing);
      } else {
        throw new Error(response.message || 'Failed to fetch listing');
      }
    } catch (err: any) {
      const message = err.response?.data?.message || err.message || 'Failed to fetch listing';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const createListing = useCallback(
    async (
      title: string,
      category: string,
      quantity: number,
      original_price: number,
      discount_price: number,
      city: string,
      description?: string
    ) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await listingService.createListing(
          title,
          category,
          quantity,
          original_price,
          discount_price,
          city,
          description
        );
        if (response.success) {
          const newListing = Array.isArray(response.data) ? response.data[0] : response.data;
          setMyListings((prev) => [newListing, ...prev]);
        } else {
          throw new Error(response.message || 'Failed to create listing');
        }
      } catch (err: any) {
        const message = err.response?.data?.message || err.message || 'Failed to create listing';
        setError(message);
        throw new Error(message);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const updateListing = useCallback(
    async (
      listing_id: string,
      updates: {
        title?: string;
        quantity?: number;
        discount_price?: number;
        status?: 'active' | 'sold' | 'closed';
      }
    ) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await listingService.updateListing(listing_id, updates);
        if (response.success) {
          const updatedListing = Array.isArray(response.data) ? response.data[0] : response.data;
          setMyListings((prev) =>
            prev.map((listing) => (listing.id === listing_id ? updatedListing : listing))
          );
          if (currentListing?.id === listing_id) {
            setCurrentListing(updatedListing);
          }
        } else {
          throw new Error(response.message || 'Failed to update listing');
        }
      } catch (err: any) {
        const message = err.response?.data?.message || err.message || 'Failed to update listing';
        setError(message);
        throw new Error(message);
      } finally {
        setIsLoading(false);
      }
    },
    [currentListing]
  );

  const deleteListing = useCallback(async (listing_id: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await listingService.deleteListing(listing_id);
      if (response.success) {
        setMyListings((prev) => prev.filter((listing) => listing.id !== listing_id));
        if (currentListing?.id === listing_id) {
          setCurrentListing(null);
        }
      } else {
        throw new Error(response.message || 'Failed to delete listing');
      }
    } catch (err: any) {
      const message = err.response?.data?.message || err.message || 'Failed to delete listing';
      setError(message);
      throw new Error(message);
    } finally {
      setIsLoading(false);
    }
  }, [currentListing]);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const clearCurrentListing = useCallback(() => {
    setCurrentListing(null);
  }, []);

  const value: ListingsContextType = {
    listings,
    myListings,
    currentListing,
    isLoading,
    error,
    pagination,
    searchListings,
    getNearbyListings,
    getListingsByCategory,
    getMyListings,
    getListingById,
    createListing,
    updateListing,
    deleteListing,
    clearError,
    clearCurrentListing,
  };

  return <ListingsContext.Provider value={value}>{children}</ListingsContext.Provider>;
};

export const useListings = (): ListingsContextType => {
  const context = useContext(ListingsContext);
  if (context === undefined) {
    throw new Error('useListings must be used within a ListingsProvider');
  }
  return context;
};
