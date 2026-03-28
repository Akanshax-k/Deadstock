'use client';

import React from 'react';
import {
  AuthProvider,
  ListingsProvider,
  OrdersProvider,
  AnalyticsProvider,
} from '@/lib/context';

export const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AuthProvider>
      <ListingsProvider>
        <OrdersProvider>
          <AnalyticsProvider>
            {children}
          </AnalyticsProvider>
        </OrdersProvider>
      </ListingsProvider>
    </AuthProvider>
  );
};
