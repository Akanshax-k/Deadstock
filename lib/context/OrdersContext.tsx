'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { orderService } from '@/lib/api/orders';
import { Order } from '@/lib/api';

interface OrdersContextType {
  orders: Order[];
  currentOrder: Order | null;
  isLoading: boolean;
  error: string | null;
  
  // Fetch operations
  getBuyerOrders: () => Promise<void>;
  getSellerOrders: () => Promise<void>;
  getOrderById: (order_id: string) => Promise<void>;
  
  // Order operations
  placeOrder: (listing_id: string, quantity: number) => Promise<void>;
  cancelOrder: (order_id: string) => Promise<void>;
  confirmOrder: (order_id: string) => Promise<void>;
  completeOrder: (order_id: string) => Promise<void>;
  
  clearError: () => void;
  clearCurrentOrder: () => void;
}

const OrdersContext = createContext<OrdersContextType | undefined>(undefined);

export const OrdersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [currentOrder, setCurrentOrder] = useState<Order | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getBuyerOrders = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await orderService.getBuyerOrders();
      if (response.success) {
        setOrders(Array.isArray(response.data) ? response.data : [response.data]);
      } else {
        throw new Error(response.message || 'Failed to fetch orders');
      }
    } catch (err: any) {
      const message = err.response?.data?.message || err.message || 'Failed to fetch orders';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getSellerOrders = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await orderService.getSellerOrders();
      if (response.success) {
        setOrders(Array.isArray(response.data) ? response.data : [response.data]);
      } else {
        throw new Error(response.message || 'Failed to fetch orders');
      }
    } catch (err: any) {
      const message = err.response?.data?.message || err.message || 'Failed to fetch orders';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getOrderById = useCallback(async (order_id: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await orderService.getOrderById(order_id);
      if (response.success) {
        const order = Array.isArray(response.data) ? response.data[0] : response.data;
        setCurrentOrder(order);
      } else {
        throw new Error(response.message || 'Failed to fetch order');
      }
    } catch (err: any) {
      const message = err.response?.data?.message || err.message || 'Failed to fetch order';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const placeOrder = useCallback(async (listing_id: string, quantity: number) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await orderService.placeOrder(listing_id, quantity);
      if (response.success) {
        const newOrder = Array.isArray(response.data) ? response.data[0] : response.data;
        setOrders((prev) => [newOrder, ...prev]);
      } else {
        throw new Error(response.message || 'Failed to place order');
      }
    } catch (err: any) {
      const message = err.response?.data?.message || err.message || 'Failed to place order';
      setError(message);
      throw new Error(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const cancelOrder = useCallback(async (order_id: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await orderService.cancelOrder(order_id);
      if (response.success) {
        const updatedOrder = Array.isArray(response.data) ? response.data[0] : response.data;
        setOrders((prev) =>
          prev.map((order) => (order.id === order_id ? updatedOrder : order))
        );
        if (currentOrder?.id === order_id) {
          setCurrentOrder(updatedOrder);
        }
      } else {
        throw new Error(response.message || 'Failed to cancel order');
      }
    } catch (err: any) {
      const message = err.response?.data?.message || err.message || 'Failed to cancel order';
      setError(message);
      throw new Error(message);
    } finally {
      setIsLoading(false);
    }
  }, [currentOrder]);

  const confirmOrder = useCallback(async (order_id: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await orderService.confirmOrder(order_id);
      if (response.success) {
        const updatedOrder = Array.isArray(response.data) ? response.data[0] : response.data;
        setOrders((prev) =>
          prev.map((order) => (order.id === order_id ? updatedOrder : order))
        );
        if (currentOrder?.id === order_id) {
          setCurrentOrder(updatedOrder);
        }
      } else {
        throw new Error(response.message || 'Failed to confirm order');
      }
    } catch (err: any) {
      const message = err.response?.data?.message || err.message || 'Failed to confirm order';
      setError(message);
      throw new Error(message);
    } finally {
      setIsLoading(false);
    }
  }, [currentOrder]);

  const completeOrder = useCallback(async (order_id: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await orderService.completeOrder(order_id);
      if (response.success) {
        const updatedOrder = Array.isArray(response.data) ? response.data[0] : response.data;
        setOrders((prev) =>
          prev.map((order) => (order.id === order_id ? updatedOrder : order))
        );
        if (currentOrder?.id === order_id) {
          setCurrentOrder(updatedOrder);
        }
      } else {
        throw new Error(response.message || 'Failed to complete order');
      }
    } catch (err: any) {
      const message = err.response?.data?.message || err.message || 'Failed to complete order';
      setError(message);
      throw new Error(message);
    } finally {
      setIsLoading(false);
    }
  }, [currentOrder]);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const clearCurrentOrder = useCallback(() => {
    setCurrentOrder(null);
  }, []);

  const value: OrdersContextType = {
    orders,
    currentOrder,
    isLoading,
    error,
    getBuyerOrders,
    getSellerOrders,
    getOrderById,
    placeOrder,
    cancelOrder,
    confirmOrder,
    completeOrder,
    clearError,
    clearCurrentOrder,
  };

  return <OrdersContext.Provider value={value}>{children}</OrdersContext.Provider>;
};

export const useOrders = (): OrdersContextType => {
  const context = useContext(OrdersContext);
  if (context === undefined) {
    throw new Error('useOrders must be used within an OrdersProvider');
  }
  return context;
};
