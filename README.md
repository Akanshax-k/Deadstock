# DeadStock — Next.js TypeScript

A full conversion of the React + Vite project to **Next.js 14 (App Router)** with TypeScript.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Charts**: Recharts
- **Icons**: Lucide React
- **UI Components**: Radix UI primitives

## Project Structure

```
├── app/
│   ├── layout.tsx                  # Root layout (dark class applied globally)
│   ├── page.tsx                    # Landing page  →  /
│   ├── globals.css                 # Tailwind + CSS variables
│   ├── seller-dashboard/
│   │   └── page.tsx                # Seller Dashboard  →  /seller-dashboard
│   ├── upload-inventory/
│   │   └── page.tsx                # Upload Inventory  →  /upload-inventory
│   ├── marketplace/
│   │   └── page.tsx                # Buyer Marketplace  →  /marketplace
│   ├── product/
│   │   └── [id]/
│   │       └── page.tsx            # Product Detail  →  /product/:id
│   └── analytics/
│       └── page.tsx                # Analytics  →  /analytics
│
├── components/
│   ├── sidebar-nav.tsx             # Sidebar (uses usePathname for active state)
│   └── figma/
│       └── ImageWithFallback.tsx   # Image component with error fallback
│
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Route Mapping (React Router → Next.js App Router)

| React Router path    | Next.js file path                       |
|----------------------|-----------------------------------------|
| `/`                  | `app/page.tsx`                          |
| `/seller-dashboard`  | `app/seller-dashboard/page.tsx`         |
| `/upload-inventory`  | `app/upload-inventory/page.tsx`         |
| `/marketplace`       | `app/marketplace/page.tsx`              |
| `/product/:id`       | `app/product/[id]/page.tsx`             |
| `/analytics`         | `app/analytics/page.tsx`                |

## Key Conversions

| React (Vite)                  | Next.js                                   |
|-------------------------------|-------------------------------------------|
| `react-router` `<Link to>`    | `next/link` `<Link href>`                 |
| `useLocation()`               | `usePathname()` from `next/navigation`    |
| `createBrowserRouter`         | File-system based App Router              |
| `<RouterProvider>`            | Built-in Next.js routing                  |
| Vite `index.html` entry       | `app/layout.tsx` root layout              |
| `.dark` class on `<App>`      | `.dark` class on `<html>` in layout      |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Build

```bash
npm run build
npm start
```
