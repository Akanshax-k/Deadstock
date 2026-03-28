# Authentication & Access Control Implementation

## Overview
Implemented role-based access control for protected pages to ensure only authenticated users with the correct role can access specific pages.

## Changes Made

### 1. Created ProtectedRoute Component
**File:** `components/ProtectedRoute.tsx`

A new wrapper component that:
- Checks if user is authenticated
- Verifies user has the required role(s)
- Shows a loading spinner while checking auth state
- Automatically redirects unauthenticated users to `/auth/login`
- Redirects users without required role to home page `/`

**Usage:**
```tsx
<ProtectedRoute allowedRoles={['seller']}>
  {/* Protected content here */}
</ProtectedRoute>
```

### 2. Protected Pages

#### Seller-Only Pages:
- **`app/seller-dashboard/page.tsx`** - Seller dashboard with inventory metrics
- **`app/upload-inventory/page.tsx`** - Form for sellers to list dead stock
- **`app/analytics/page.tsx`** - Analytics dashboard for sellers

#### Buyer-Only Pages:
- **`app/marketplace/page.tsx`** - Browse and search listings
- **`app/orders/page.tsx`** - View and track orders

## Access Control Rules

| Page | Required Role | Redirect if Not Authenticated | Redirect if Wrong Role |
|------|---------------|------------------------------|----------------------|
| `/seller-dashboard` | seller | `/auth/login` | `/` |
| `/upload-inventory` | seller | `/auth/login` | `/` |
| `/analytics` | seller | `/auth/login` | `/` |
| `/marketplace` | buyer | `/auth/login` | `/` |
| `/orders` | buyer | `/auth/login` | `/` |

## How It Works

1. **Authentication Check**: Uses `useAuth()` hook from AuthContext to get current user and authentication status
2. **Loading State**: Shows a loading spinner while checking authentication
3. **Role Verification**: Checks if user's role matches required roles
4. **Automatic Redirection**: 
   - If not authenticated → redirects to login page
   - If authenticated but wrong role → redirects to home page

## Security Benefits

✅ Pages cannot be accessed without login
✅ Role-based access prevents buyers from accessing seller features
✅ Role-based access prevents sellers from accessing buyer features
✅ Clean UX with loading state during auth check
✅ All protection happens at component level for client-side safety

## Notes

- These protections work with the existing `AuthContext` and `authService`
- The `useAuth()` hook checks `localStorage` for stored tokens and user data
- For complete security, backend API endpoints should also validate authentication and authorization
