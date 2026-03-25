import Link from 'next/link';
import { Search, Filter, MapPin, Package, TrendingDown } from 'lucide-react';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';

const products = [
  { id: 1, name: 'Wireless Bluetooth Headphones', category: 'Electronics', image: 'https://images.unsplash.com/photo-1762401244552-9eb61a7f9416?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljJTIwZ2FkZ2V0cyUyMHByb2R1Y3R8ZW58MXx8fHwxNzc0MjAxMTUyfDA&ixlib=rb-4.1.0&q=80&w=1080', originalPrice: 1200, discountedPrice: 780, discount: 35, quantity: 450, location: 'Mumbai, Maharashtra', seller: 'TechParts India' },
  { id: 2, name: 'Premium Cotton T-Shirts', category: 'Apparel', image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG90aGluZyUyMGFwcGFyZWwlMjBmYXNoaW9ufGVufDF8fHx8MTc3NDIwMTE1Mnww&ixlib=rb-4.1.0&q=80&w=1080', originalPrice: 25, discountedPrice: 15, discount: 40, quantity: 800, location: 'Delhi', seller: 'FashionHub' },
  { id: 3, name: 'Modern Office Chairs', category: 'Furniture', image: 'https://images.unsplash.com/photo-1765766601447-9e11ad2356da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZnVybml0dXJlJTIwbW9kZXJufGVufDF8fHx8MTc3NDIwMTE1M3ww&ixlib=rb-4.1.0&q=80&w=1080', originalPrice: 5500, discountedPrice: 3200, discount: 42, quantity: 120, location: 'Bangalore, Karnataka', seller: 'OfficePro' },
  { id: 4, name: 'Smart Fitness Watches', category: 'Electronics', image: 'https://images.unsplash.com/photo-1762401244552-9eb61a7f9416?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljJTIwZ2FkZ2V0cyUyMHByb2R1Y3R8ZW58MXx8fHwxNzc0MjAxMTUyfDA&ixlib=rb-4.1.0&q=80&w=1080', originalPrice: 3500, discountedPrice: 2100, discount: 40, quantity: 200, location: 'Pune, Maharashtra', seller: 'GadgetWorld' },
  { id: 5, name: 'Designer Sunglasses', category: 'Accessories', image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG90aGluZyUyMGFwcGFyZWwlMjBmYXNoaW9ufGVufDF8fHx8MTc3NDIwMTE1Mnww&ixlib=rb-4.1.0&q=80&w=1080', originalPrice: 2000, discountedPrice: 1100, discount: 45, quantity: 350, location: 'Chennai, Tamil Nadu', seller: 'StyleZone' },
  { id: 6, name: 'LED Desk Lamps', category: 'Home & Living', image: 'https://images.unsplash.com/photo-1765766601447-9e11ad2356da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZnVybml0dXJlJTIwbW9kZXJufGVufDF8fHx8MTc3NDIwMTE1M3ww&ixlib=rb-4.1.0&q=80&w=1080', originalPrice: 1500, discountedPrice: 850, discount: 43, quantity: 280, location: 'Ahmedabad, Gujarat', seller: 'HomeLux' },
];

export default function BuyerMarketplacePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">
      {/* Header */}
      <header className="border-b border-white/10 bg-slate-950/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Package className="w-8 h-8 text-indigo-400" />
              <span className="text-2xl text-white">DeadStock</span>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/marketplace" className="text-white">Marketplace</Link>
              <Link href="/seller-dashboard" className="text-slate-300 hover:text-white transition-colors">Seller Dashboard</Link>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">My Orders</a>
            </nav>
            <div className="flex items-center gap-4">
              <button className="text-slate-300 hover:text-white transition-colors">Sign In</button>
              <button className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-2xl hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300">
                Become a Seller
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl text-white mb-2">Browse Marketplace</h1>
          <p className="text-xl text-slate-400">Discover incredible deals on bulk inventory</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="w-5 h-5 text-indigo-400" />
                <h3 className="text-lg text-white">Filters</h3>
              </div>

              <div className="mb-6">
                <h4 className="text-sm text-slate-400 mb-3">Category</h4>
                <div className="space-y-2">
                  {['All', 'Electronics', 'Apparel', 'Furniture', 'Accessories', 'Home & Living'].map((category) => (
                    <label key={category} className="flex items-center gap-2 cursor-pointer group">
                      <input type="checkbox" defaultChecked={category === 'All'} className="w-4 h-4 rounded bg-slate-900/50 border-white/10 text-indigo-600 focus:ring-2 focus:ring-indigo-500" />
                      <span className="text-slate-300 group-hover:text-white transition-colors">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm text-slate-400 mb-3">Price Range</h4>
                <div className="space-y-3">
                  <input type="range" min="0" max="10000" className="w-full accent-indigo-600" />
                  <div className="flex items-center gap-2">
                    <input type="number" placeholder="Min" className="flex-1 px-3 py-2 bg-slate-900/50 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                    <span className="text-slate-400">-</span>
                    <input type="number" placeholder="Max" className="flex-1 px-3 py-2 bg-slate-900/50 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm text-slate-400 mb-3">Discount</h4>
                <div className="space-y-2">
                  {['30% or more', '40% or more', '50% or more'].map((discount) => (
                    <label key={discount} className="flex items-center gap-2 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 rounded bg-slate-900/50 border-white/10 text-indigo-600 focus:ring-2 focus:ring-indigo-500" />
                      <span className="text-slate-300 group-hover:text-white transition-colors">{discount}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm text-slate-400 mb-3">Location</h4>
                <select className="w-full px-3 py-2 bg-slate-900/50 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option value="">All Locations</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="delhi">Delhi</option>
                  <option value="bangalore">Bangalore</option>
                  <option value="pune">Pune</option>
                  <option value="chennai">Chennai</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search products, categories, or sellers..."
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-white/10 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all backdrop-blur-xl"
                />
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <p className="text-slate-400">Showing {products.length} products</p>
              <select className="px-4 py-2 bg-slate-800/50 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option>Sort by: Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Discount: High to Low</option>
              </select>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Link key={product.id} href={`/product/${product.id}`}>
                  <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-1">
                    <div className="relative aspect-square overflow-hidden bg-slate-900/50">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 px-3 py-1 bg-gradient-to-r from-red-600 to-pink-600 text-white text-sm rounded-full flex items-center gap-1">
                        <TrendingDown className="w-4 h-4" />
                        <span>{product.discount}% OFF</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="text-xs text-indigo-400 mb-2">{product.category}</div>
                      <h3 className="text-lg text-white mb-2 line-clamp-1 group-hover:text-indigo-400 transition-colors">{product.name}</h3>
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-2xl text-white">₹{product.discountedPrice}</span>
                        <span className="text-sm text-slate-400 line-through">₹{product.originalPrice}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-400 mb-3">
                        <MapPin className="w-4 h-4" />
                        <span>{product.location}</span>
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-white/10">
                        <div className="text-sm text-slate-400">
                          <span className="text-white">{product.quantity}</span> units
                        </div>
                        <div className="text-sm text-slate-400">{product.seller}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-2xl hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300">
                Load More Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
