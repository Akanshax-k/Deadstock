/**
 * DEADSTOCK API & CONTEXT USAGE GUIDE
 * 
 * This file demonstrates how to use the API services and React Context hooks
 * throughout your application. All services are fully typed with TypeScript.
 */

// ============================================================================
// AUTHENTICATION EXAMPLES
// ============================================================================

import { useAuth } from '@/lib/context';

export function LoginExample() {
  const { login, isLoading, error, user } = useAuth();

  const handleLogin = async () => {
    try {
      await login('shop@example.com', 'secret123');
      // User is now logged in, available in `user` state
    } catch (err) {
      // Error is also available in `error` state
      console.error('Login failed:', err);
    }
  };

  return (
    <div>
      {user && <p>Welcome, {user.business_name}!</p>}
      {error && <p className="text-red-500">{error}</p>}
      <button onClick={handleLogin} disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Login'}
      </button>
    </div>
  );
}

export function RegisterExample() {
  const { register, isLoading, error } = useAuth();

  const handleRegister = async () => {
    try {
      await register(
        'seller@example.com',
        'password123',
        'seller',
        'Rahul Garments',
        'Lucknow',
        '9876543210'
      );
      // Registration successful - can redirect to login
    } catch (err) {
      console.error('Registration failed:', err);
    }
  };

  return (
    <div>
      {error && <p className="text-red-500">{error}</p>}
      <button onClick={handleRegister} disabled={isLoading}>
        Register
      </button>
    </div>
  );
}

export function ProfileExample() {
  const { user, updateProfile, changePassword, logout, clearError, error } = useAuth();

  const handleUpdateProfile = async () => {
    try {
      await updateProfile('New Business Name', 'New City', '9123456789');
      // Profile updated successfully
    } catch (err) {
      console.error('Update failed:', err);
    }
  };

  const handleChangePassword = async () => {
    try {
      await changePassword('oldpass123', 'newpass456');
      // Password changed successfully
    } catch (err) {
      console.error('Password change failed:', err);
    }
  };

  const handleLogout = () => {
    logout();
    // User is logged out, cleared from state
  };

  return (
    <div>
      {user && (
        <div>
          <p>Business: {user.business_name}</p>
          <p>City: {user.city}</p>
          <button onClick={handleUpdateProfile}>Update Profile</button>
          <button onClick={handleChangePassword}>Change Password</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

// ============================================================================
// LISTINGS EXAMPLES
// ============================================================================

import { useListings } from '@/lib/context';

export function CreateListingExample() {
  const { createListing, isLoading, error } = useListings();

  const handleCreateListing = async () => {
    try {
      await createListing(
        'Winter Jackets — Bulk Lot',
        'Clothing',
        500,
        1200.00,
        400.00,
        'Lucknow',
        '500 unsold winter jackets from last season'
      );
      // Listing created successfully, automatically added to myListings
    } catch (err) {
      console.error('Failed to create listing:', err);
    }
  };

  return (
    <div>
      {error && <p className="text-red-500">{error}</p>}
      <button onClick={handleCreateListing} disabled={isLoading}>
        Create Listing
      </button>
    </div>
  );
}

export function SearchListingsExample() {
  const { searchListings, listings, isLoading, error, pagination } = useListings();

  const handleSearch = async () => {
    try {
      await searchListings({
        q: 'jacket',
        city: 'lucknow',
        max_price: 500,
        page: 1,
        page_size: 20,
      });
      // Search results available in `listings` state
    } catch (err) {
      console.error('Search failed:', err);
    }
  };

  return (
    <div>
      <button onClick={handleSearch} disabled={isLoading}>
        Search
      </button>

      {listings.map((listing) => (
        <div key={listing.id}>
          <h3>{listing.title}</h3>
          <p>₹{listing.discount_price} (was ₹{listing.original_price})</p>
          <p>Discount: {listing.discount_pct.toFixed(2)}%</p>
          <p>Available: {listing.quantity} units</p>
          <p>Location: {listing.city}</p>
        </div>
      ))}

      {pagination && (
        <p>
          Page {pagination.page} of {pagination.pages} ({pagination.total} total)
        </p>
      )}

      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

export function GetMyListingsExample() {
  const { getMyListings, myListings, isLoading } = useListings();

  const handleFetchMyListings = async () => {
    await getMyListings('active');
    // My active listings available in `myListings` state
  };

  return (
    <div>
      <button onClick={handleFetchMyListings} disabled={isLoading}>
        Load My Listings
      </button>

      {myListings.map((listing) => (
        <div key={listing.id}>
          <h3>{listing.title}</h3>
          <p>Status: {listing.status}</p>
          <p>Stock: {listing.quantity}</p>
        </div>
      ))}
    </div>
  );
}

export function ListingDetailExample() {
  const { getListingById, currentListing, isLoading, updateListing, deleteListing } = useListings();

  const handleLoadListing = async (id: string) => {
    await getListingById(id);
    // Listing details available in `currentListing` state
  };

  const handleUpdateListing = async () => {
    if (!currentListing) return;
    try {
      await updateListing(currentListing.id, {
        quantity: 450,
        discount_price: 350,
      });
      // Listing updated successfully
    } catch (err) {
      console.error('Update failed:', err);
    }
  };

  const handleDeleteListing = async () => {
    if (!currentListing) return;
    try {
      await deleteListing(currentListing.id);
      // Listing deleted/closed successfully
    } catch (err) {
      console.error('Delete failed:', err);
    }
  };

  return (
    <div>
      {currentListing && (
        <div>
          <h2>{currentListing.title}</h2>
          <p>Category: {currentListing.category}</p>
          <p>Price: ₹{currentListing.discount_price}</p>
          <p>Quantity: {currentListing.quantity}</p>
          <button onClick={handleUpdateListing}>Update</button>
          <button onClick={handleDeleteListing}>Delete</button>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// ORDERS EXAMPLES
// ============================================================================

import { useOrders } from '@/lib/context';

export function PlaceOrderExample() {
  const { placeOrder, isLoading, error } = useOrders();

  const handlePlaceOrder = async () => {
    try {
      await placeOrder('listing-uuid-here', 50);
      // Order placed successfully, added to orders list
    } catch (err) {
      console.error('Failed to place order:', err);
    }
  };

  return (
    <div>
      {error && <p className="text-red-500">{error}</p>}
      <button onClick={handlePlaceOrder} disabled={isLoading}>
        Place Order
      </button>
    </div>
  );
}

export function BuyerOrdersExample() {
  const { getBuyerOrders, orders, isLoading } = useOrders();

  const handleFetchOrders = async () => {
    await getBuyerOrders();
    // All buyer orders available in `orders` state
  };

  return (
    <div>
      <button onClick={handleFetchOrders} disabled={isLoading}>
        Load My Orders
      </button>

      {orders.map((order) => (
        <div key={order.id}>
          <h3>{order.listing_title}</h3>
          <p>Quantity: {order.quantity}</p>
          <p>Total: ₹{order.total_price}</p>
          <p>Status: {order.status}</p>
          <p>Seller: {order.seller_name}</p>
        </div>
      ))}
    </div>
  );
}

export function SellerOrdersExample() {
  const { getSellerOrders, orders, isLoading, confirmOrder, completeOrder } = useOrders();

  const handleFetchOrders = async () => {
    await getSellerOrders();
    // All received orders available in `orders` state
  };

  const handleConfirm = async (orderId: string) => {
    try {
      await confirmOrder(orderId);
      // Order confirmed successfully
    } catch (err) {
      console.error('Failed to confirm order:', err);
    }
  };

  const handleComplete = async (orderId: string) => {
    try {
      await completeOrder(orderId);
      // Order completed successfully
    } catch (err) {
      console.error('Failed to complete order:', err);
    }
  };

  return (
    <div>
      <button onClick={handleFetchOrders} disabled={isLoading}>
        Load Orders Received
      </button>

      {orders.map((order) => (
        <div key={order.id}>
          <h3>{order.listing_title}</h3>
          <p>Quantity: {order.quantity}</p>
          <p>Total: ₹{order.total_price}</p>
          <p>Status: {order.status}</p>
          <p>Buyer: {order.seller_name}</p>

          {order.status === 'pending' && (
            <button onClick={() => handleConfirm(order.id)}>Confirm</button>
          )}
          {order.status === 'confirmed' && (
            <button onClick={() => handleComplete(order.id)}>Mark Completed</button>
          )}
        </div>
      ))}
    </div>
  );
}

export function OrderDetailExample() {
  const { getOrderById, currentOrder, isLoading, cancelOrder } = useOrders();

  const handleLoadOrder = async (id: string) => {
    await getOrderById(id);
    // Order details available in `currentOrder` state
  };

  const handleCancelOrder = async () => {
    if (!currentOrder) return;
    try {
      await cancelOrder(currentOrder.id);
      // Order cancelled successfully (stock restored)
    } catch (err) {
      console.error('Failed to cancel order:', err);
    }
  };

  return (
    <div>
      {currentOrder && (
        <div>
          <p>Order ID: {currentOrder.id}</p>
          <p>Quantity: {currentOrder.quantity}</p>
          <p>Total: ₹{currentOrder.total_price}</p>
          <p>Status: {currentOrder.status}</p>
          {currentOrder.status === 'pending' && (
            <button onClick={handleCancelOrder}>Cancel Order</button>
          )}
        </div>
      )}
    </div>
  );
}

// ============================================================================
// ANALYTICS EXAMPLES
// ============================================================================

import { useAnalytics } from '@/lib/context';

export function TrendingCategoriesExample() {
  const { getTrendingCategories, trendingCategories, isLoading } = useAnalytics();

  const handleFetchTrending = async () => {
    await getTrendingCategories();
    // Trending categories available in `trendingCategories` state
  };

  return (
    <div>
      <button onClick={handleFetchTrending} disabled={isLoading}>
        Load Trending
      </button>

      {trendingCategories.map((cat) => (
        <div key={cat.category}>
          <h3>{cat.category}</h3>
          <p>Orders: {cat.total_orders}</p>
          <p>Units Sold: {cat.total_units_sold}</p>
          <p>Revenue: ₹{cat.total_revenue}</p>
        </div>
      ))}
    </div>
  );
}

export function PlatformSavingsExample() {
  const { getPlatformSavings, platformSavings, isLoading } = useAnalytics();

  const handleFetchSavings = async () => {
    await getPlatformSavings();
    // Platform savings data available in `platformSavings` state
  };

  return (
    <div>
      <button onClick={handleFetchSavings} disabled={isLoading}>
        Load Platform Impact
      </button>

      {platformSavings && (
        <div>
          <p>Total Saved: ₹{platformSavings.total_saved_inr}</p>
          <p>Total Traded: ₹{platformSavings.total_traded_value_inr}</p>
          <p>Original Value: ₹{platformSavings.original_value_inr}</p>
          <p>Avg Discount: {platformSavings.avg_discount_pct.toFixed(2)}%</p>
          <p>Completed Orders: {platformSavings.total_orders_completed}</p>
          <p>Active Listings: {platformSavings.active_listings}</p>
        </div>
      )}
    </div>
  );
}

export function SellerDashboardExample() {
  const { getSellerDashboard, sellerDashboard, isLoading } = useAnalytics();

  const handleFetchDashboard = async () => {
    await getSellerDashboard();
    // Dashboard data available in `sellerDashboard` state
  };

  return (
    <div>
      <button onClick={handleFetchDashboard} disabled={isLoading}>
        Load Dashboard
      </button>

      {sellerDashboard && (
        <div>
          <h2>{sellerDashboard.seller.business_name}</h2>
          <p>City: {sellerDashboard.seller.city}</p>

          <h3>Listings</h3>
          <p>Active: {sellerDashboard.listings.active}</p>
          <p>Sold: {sellerDashboard.listings.sold}</p>
          <p>Closed: {sellerDashboard.listings.closed}</p>

          <h3>Orders</h3>
          <p>Pending: {sellerDashboard.orders.pending}</p>
          <p>Confirmed: {sellerDashboard.orders.confirmed}</p>
          <p>Completed: {sellerDashboard.orders.completed}</p>

          <h3>Financials</h3>
          <p>Total Revenue: ₹{sellerDashboard.financials.total_revenue_inr}</p>
          <p>Units Sold: {sellerDashboard.financials.total_units_sold}</p>
          <p>Value Rescued: ₹{sellerDashboard.financials.value_rescued_inr}</p>

          <h3>Top Listing</h3>
          <p>{sellerDashboard.top_listing.title}</p>
          <p>Revenue: ₹{sellerDashboard.top_listing.revenue}</p>
          <p>Units: {sellerDashboard.top_listing.units}</p>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// DIRECT API SERVICE USAGE (WITHOUT CONTEXT)
// ============================================================================
// If you ever need to call the API directly without using Context,
// you can import and use the services directly:

import { authService, listingService, orderService, analyticsService } from '@/lib/api';

export async function DirectApiExample() {
  // You can use services directly if Context isn't available
  try {
    const loginResponse = await authService.login('user@example.com', 'password');
    console.log('Direct API login:', loginResponse);

    const listings = await listingService.searchListings('jacket', 'Clothing', 'Lucknow');
    console.log('Direct API search:', listings);
  } catch (error) {
    console.error('Direct API error:', error);
  }
}

// ============================================================================
// SETUP CHECKLIST
// ============================================================================

/**
 * 1. ✅ Axios instance created with base URL configured
 * 2. ✅ Request interceptor adds Bearer token from localStorage
 * 3. ✅ Response interceptor handles 401 (token expiration)
 * 4. ✅ API services created for: auth, listings, orders, analytics
 * 5. ✅ React Context providers created for state management
 * 6. ✅ Providers component wraps all contexts (AuthProvider, ListingsProvider, etc.)
 * 7. ✅ Root layout.tsx updated to include <Providers>
 * 8. ✅ All hooks fully typed with TypeScript
 * 
 * USAGE:
 * - Import hooks like `useAuth()`, `useListings()`, `useOrders()`, `useAnalytics()`
 * - Use them in client components (with 'use client' directive)
 * - State is shared across entire app via Context
 * - Errors are caught and stored in context for easy display
 * - Loading states available for UI feedback
 * 
 * ENV VARS:
 * - Add to .env.local: NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
 * - Or it defaults to that URL if not set
 */
