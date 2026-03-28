import api from './axios';
import { OrderResponse, Order } from './types';

export const orderService = {
  // Place a new order
  placeOrder: async (listing_id: string, quantity: number) => {
    const response = await api.post<OrderResponse>('/orders/', {
      listing_id,
      quantity,
    });
    return response.data;
  },

  // Get order by ID
  getOrderById: async (order_id: string) => {
    const response = await api.get<OrderResponse>(`/orders/${order_id}`);
    return response.data;
  },

  // Get buyer's orders
  getBuyerOrders: async () => {
    const response = await api.get<OrderResponse>('/orders/buyer/my-orders');
    return response.data;
  },

  // Get seller's received orders
  getSellerOrders: async () => {
    const response = await api.get<OrderResponse>('/orders/seller/received');
    return response.data;
  },

  // Cancel order (buyer only)
  cancelOrder: async (order_id: string) => {
    const response = await api.patch<OrderResponse>(`/orders/${order_id}/cancel`);
    return response.data;
  },

  // Confirm order (seller only)
  confirmOrder: async (order_id: string) => {
    const response = await api.patch<OrderResponse>(`/orders/${order_id}/confirm`);
    return response.data;
  },

  // Complete order (seller only)
  completeOrder: async (order_id: string) => {
    const response = await api.patch<OrderResponse>(`/orders/${order_id}/complete`);
    return response.data;
  },
};
