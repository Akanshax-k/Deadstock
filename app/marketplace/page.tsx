'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Search, Filter, MapPin, Package, TrendingDown, Loader2 } from 'lucide-react';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { useListings } from '@/lib/context';

export default function BuyerMarketplacePage() {
  const { listings, searchListings, isLoading, error, pagination } = useListings();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Initial load of all listings
    handleSearch();
  }, []);

  const handleSearch = async () => {
    await searchListings({
      q: searchQuery,
      category: selectedCategory || undefined,
      city: selectedLocation || undefined,
      page: 1,
      page_size: 12,
    });
    setCurrentPage(1);
  };

  const handleLoadMore = async () => {
    await searchListings({
      q: searchQuery,
      category: selectedCategory || undefined,
      city: selectedLocation || undefined,
      page: currentPage + 1,
      page_size: 12,
    });
    setCurrentPage(currentPage + 1);
  };
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
              <Link href="/orders" className="text-slate-300 hover:text-white transition-colors">My Orders</Link>
            </nav>
            <div className="flex items-center gap-4">
              <Link href="/auth/buyer/login">
                <button className="text-slate-300 hover:text-white transition-colors">Sign In</button>
              </Link>
              <Link href="/auth/seller/login">
                <button className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-2xl hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300">
                  Become a Seller
                </button>
              </Link>
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
                      <input 
                        type="checkbox" 
                        checked={selectedCategory === category || category === 'All'}
                        onChange={() => setSelectedCategory(category === 'All' ? '' : category)}
                        className="w-4 h-4 rounded bg-slate-900/50 border-white/10 text-indigo-600 focus:ring-2 focus:ring-indigo-500" 
                      />
                      <span className="text-slate-300 group-hover:text-white transition-colors">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm text-slate-400 mb-3">Location</h4>
                <select 
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-900/50 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">All Locations</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Pune">Pune</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Lucknow">Lucknow</option>
                </select>
              </div>

              <button 
                onClick={handleSearch}
                className="w-full px-4 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300"
              >
                Apply Filters
              </button>
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
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyUp={(e) => e.key === 'Enter' && handleSearch()}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-white/10 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all backdrop-blur-xl"
                />
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <p className="text-slate-400">Showing {listings.length} products</p>
              <select className="px-4 py-2 bg-slate-800/50 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option>Sort by: Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Discount: High to Low</option>
              </select>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400">
                {error}
              </div>
            )}

            {isLoading && listings.length === 0 ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="w-8 h-8 text-indigo-400 animate-spin" />
              </div>
            ) : listings.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-slate-400">No listings found. Try adjusting your filters.</p>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {listings.map((product) => {
                    const discount = product.original_price && product.discount_price 
                      ? Math.round(((product.original_price - product.discount_price) / product.original_price) * 100)
                      : 0;
                    
                    return (
                      <Link key={product.id} href={`/product/${product.id}`}>
                        <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-1">
                          <div className="relative aspect-square overflow-hidden bg-slate-900/50">
                            <ImageWithFallback
                              src="https://images.unsplash.com/photo-1762401244552-9eb61a7f9416?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400"
                              alt={product.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            {discount > 0 && (
                              <div className="absolute top-3 right-3 px-3 py-1 bg-gradient-to-r from-red-600 to-pink-600 text-white text-sm rounded-full flex items-center gap-1">
                                <TrendingDown className="w-4 h-4" />
                                <span>{discount}% OFF</span>
                              </div>
                            )}
                          </div>
                          <div className="p-5">
                            <div className="text-xs text-indigo-400 mb-2">{product.category}</div>
                            <h3 className="text-lg text-white mb-2 line-clamp-1 group-hover:text-indigo-400 transition-colors">{product.title}</h3>
                            <div className="flex items-baseline gap-2 mb-3">
                              <span className="text-2xl text-white">₹{product.discount_price}</span>
                              <span className="text-sm text-slate-400 line-through">₹{product.original_price}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-400 mb-3">
                              <MapPin className="w-4 h-4" />
                              <span>{product.city}</span>
                            </div>
                            <div className="flex items-center justify-between pt-3 border-t border-white/10">
                              <div className="text-sm text-slate-400">
                                <span className="text-white">{product.quantity}</span> units
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                {pagination && currentPage < pagination.pages && (
                  <div className="mt-8 text-center">
                    <button 
                      onClick={handleLoadMore}
                      disabled={isLoading}
                      className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-2xl hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 disabled:opacity-50"
                    >
                      {isLoading ? 'Loading...' : 'Load More Products'}
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
