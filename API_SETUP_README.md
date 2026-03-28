# DeadStock API Integration - Complete Setup

## Files Created

### API Layer (`lib/api/`)

1. **axios.ts** - Axios instance with interceptors
   - Base URL: `http://127.0.0.1:8000`
   - Auto-adds Bearer token from localStorage
   - Handles 401 errors (token expiration)

2. **types.ts** - TypeScript type definitions
   - User, Listing, Order, Analytics types
   - API response types
   - Fully typed for TypeScript support

3. **auth.ts** - Authentication service
   - `register()` - Create new account
   - `login()` - Login and store token
   - `getProfile()` - Fetch current user
   - `updateProfile()` - Update user info
   - `changePassword()` - Change password
   - `getSellerProfile()` - Get seller public profile
   - `logout()` - Clear auth data
   - `getToken()` / `getStoredUser()` - Helper methods

4. **listings.ts** - Listings service
   - `createListing()` - Create new listing
   - `searchListings()` - Search with filters
   - `getNearbyListings()` - Get listings by city
   - `getListingsByCategory()` - Filter by category
   - `getMyListings()` - Get seller's listings
   - `getListingById()` - Get single listing details
   - `updateListing()` - Update listing
   - `deleteListing()` - Delete/close listing

5. **orders.ts** - Orders service
   - `placeOrder()` - Place new order
   - `getOrderById()` - Fetch order details
   - `getBuyerOrders()` - Get buyer's orders
   - `getSellerOrders()` - Get seller's received orders
   - `cancelOrder()` - Cancel pending order
   - `confirmOrder()` - Confirm order (seller)
   - `completeOrder()` - Mark complete (seller)

6. **analytics.ts** - Analytics service
   - `getTrendingCategories()` - Top categories
   - `getPlatformSavings()` - Platform impact metrics
   - `getSellerDashboard()` - Seller dashboard data

7. **index.ts** - Barrel export for all API services

### React Context (`lib/context/`)

1. **AuthContext.tsx** - User authentication state
   - `user` - Current logged-in user
   - `isAuthenticated` - Boolean auth status
   - `isLoading` - Loading state
   - `error` - Error message
   - Methods: `login()`, `register()`, `logout()`, `updateProfile()`, `changePassword()`, `refreshProfile()`, `clearError()`

2. **ListingsContext.tsx** - Listings management state
   - `listings` - Search results
   - `myListings` - Seller's listings
   - `currentListing` - Single listing detail
   - `pagination` - Search pagination data
   - Methods: `searchListings()`, `getNearbyListings()`, `getListingsByCategory()`, `getMyListings()`, `getListingById()`, `createListing()`, `updateListing()`, `deleteListing()`, `clearError()`, `clearCurrentListing()`

3. **OrdersContext.tsx** - Orders management state
   - `orders` - User's orders
   - `currentOrder` - Single order detail
   - `isLoading` - Loading state
   - `error` - Error message
   - Methods: `getBuyerOrders()`, `getSellerOrders()`, `getOrderById()`, `placeOrder()`, `cancelOrder()`, `confirmOrder()`, `completeOrder()`, `clearError()`, `clearCurrentOrder()`

4. **AnalyticsContext.tsx** - Analytics data state
   - `trendingCategories` - Top categories
   - `platformSavings` - Platform metrics
   - `sellerDashboard` - Seller dashboard
   - Methods: `getTrendingCategories()`, `getPlatformSavings()`, `getSellerDashboard()`, `clearError()`

5. **index.ts** - Barrel export for all contexts

### Components

1. **providers.tsx** - Root provider component
   - Wraps all contexts in correct order
   - Add to `app/layout.tsx` as `<Providers>{children}</Providers>`

### Documentation

1. **lib/API_USAGE_GUIDE.ts** - Complete usage examples
   - Authentication examples
   - Listings examples
   - Orders examples
   - Analytics examples
   - Direct API service usage examples

2. **.env.example** - Environment variable template
   - `NEXT_PUBLIC_API_URL` - API base URL (default: http://127.0.0.1:8000)

## Setup Instructions

### 1. Install Dependencies (Already Done)
```bash
npm install axios
```

### 2. Create .env.local
```bash
cp .env.example .env.local
```

### 3. Update app/layout.tsx
✅ Already done - includes `<Providers>` component

### 4. Use Hooks in Components
All hooks are client-side only. Mark components with `'use client'`:

```tsx
'use client';

import { useAuth, useListings, useOrders, useAnalytics } from '@/lib/context';

export default function MyComponent() {
  const { user, login } = useAuth();
  const { listings, searchListings } = useListings();
  
  // ... use hooks
}
```

## Hook Usage Reference

### Authentication
```tsx
const { user, isAuthenticated, isLoading, error, login, register, logout, updateProfile, changePassword, clearError } = useAuth();
```

### Listings
```tsx
const { listings, myListings, currentListing, isLoading, error, pagination, searchListings, createListing, updateListing, deleteListing, getListingById } = useListings();
```

### Orders
```tsx
const { orders, currentOrder, isLoading, error, getBuyerOrders, getSellerOrders, placeOrder, cancelOrder, confirmOrder, completeOrder } = useOrders();
```

### Analytics
```tsx
const { trendingCategories, platformSavings, sellerDashboard, isLoading, error, getTrendingCategories, getPlatformSavings, getSellerDashboard } = useAnalytics();
```

## Error Handling

All contexts handle errors automatically:
```tsx
const { error, clearError } = useAuth();

if (error) {
  return <div className="text-red-500">{error}</div>;
}

// Clear error when component unmounts or user acknowledges it
useEffect(() => {
  return () => clearError();
}, [clearError]);
```

## Authentication Flow

1. User calls `login(email, password)` → token stored in localStorage
2. Axios interceptor automatically adds `Authorization: Bearer <token>` to all requests
3. If API returns 401, interceptor clears token and redirects to `/auth/login`
4. User can call `logout()` to clear auth state

## State Persistence

- Auth token and user data stored in localStorage
- AuthContext restores user data on page reload
- Other contexts re-fetch data as needed

## Type Safety

All services and contexts are fully typed with TypeScript. Import types from `@/lib/api`:

```tsx
import type { User, Listing, Order, PlatformSavings } from '@/lib/api';
```

## API Base URL

- Development: `http://127.0.0.1:8000` (default)
- Override with `NEXT_PUBLIC_API_URL` environment variable

## Testing

All API calls include error handling and loading states. Use the `isLoading` and `error` states to provide feedback to users.

## Next Steps

1. ✅ API layer created and configured
2. ✅ React Context providers created
3. ✅ All hooks fully typed
4. ✅ Root layout updated with providers
5. Next: Create pages/components that use these hooks
6. Next: Add error boundaries for better error handling
7. Next: Add loading skeletons for better UX
