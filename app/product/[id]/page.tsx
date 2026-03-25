import Link from 'next/link';
import { Package, ArrowLeft, MapPin, ShoppingCart, MessageCircle, Shield, TrendingDown, Star } from 'lucide-react';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';

const relatedProducts = [
  { id: 2, name: 'Premium Cotton T-Shirts', image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG90aGluZyUyMGFwcGFyZWwlMjBmYXNoaW9ufGVufDF8fHx8MTc3NDIwMTE1Mnww&ixlib=rb-4.1.0&q=80&w=1080', discountedPrice: 15, discount: 40 },
  { id: 3, name: 'Modern Office Chairs', image: 'https://images.unsplash.com/photo-1765766601447-9e11ad2356da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZnVybml0dXJlJTIwbW9kZXJufGVufDF8fHx8MTc3NDIwMTE1M3ww&ixlib=rb-4.1.0&q=80&w=1080', discountedPrice: 3200, discount: 42 },
  { id: 4, name: 'Smart Fitness Watches', image: 'https://images.unsplash.com/photo-1762401244552-9eb61a7f9416?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljJTIwZ2FkZ2V0cyUyMHByb2R1Y3R8ZW58MXx8fHwxNzc0MjAxMTUyfDA&ixlib=rb-4.1.0&q=80&w=1080', discountedPrice: 2100, discount: 40 },
];

interface ProductDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params;

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
            </nav>
            <button className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-2xl hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300">
              Become a Seller
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <Link href="/marketplace" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6 group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Marketplace</span>
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1762401244552-9eb61a7f9416?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljJTIwZ2FkZ2V0cyUyMHByb2R1Y3R8ZW58MXx8fHwxNzc0MjAxMTUyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Wireless Bluetooth Headphones"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 right-6 px-4 py-2 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-full flex items-center gap-2 shadow-lg">
                <TrendingDown className="w-5 h-5" />
                <span className="font-semibold">35% OFF</span>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden cursor-pointer hover:border-indigo-500 transition-colors">
                  <div className="w-full h-full bg-slate-900/50 flex items-center justify-center">
                    <Package className="w-8 h-8 text-slate-600" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="inline-block px-3 py-1 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-sm mb-4">
              Electronics
            </div>
            <h1 className="text-4xl text-white mb-4">Wireless Bluetooth Headphones</h1>
            <p className="text-sm text-slate-500 mb-4">Product ID: {id}</p>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-slate-400">4.8 (124 reviews)</span>
            </div>

            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-5xl text-white">₹780</span>
              <span className="text-2xl text-slate-400 line-through">₹1,200</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-lg text-sm">Save ₹420</span>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mb-6">
              <h3 className="text-lg text-white mb-4">Pricing Breakdown</h3>
              <div className="space-y-3">
                {[
                  { label: 'Price per unit', value: '₹780' },
                  { label: 'Minimum order', value: '50 units' },
                  { label: 'Available quantity', value: '450 units' },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between text-slate-300">
                    <span>{row.label}</span>
                    <span className="text-white">{row.value}</span>
                  </div>
                ))}
                <div className="pt-3 border-t border-white/10 flex justify-between">
                  <span className="text-white">Bulk order (100+ units)</span>
                  <span className="text-green-400">Additional 5% off</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="w-5 h-5 text-indigo-400" />
                <span>Mumbai, Maharashtra</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Shield className="w-5 h-5 text-green-400" />
                <span>Verified Seller • Quality Guaranteed</span>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              <div>
                <label className="block text-white mb-2">Quantity (units)</label>
                <input
                  type="number"
                  defaultValue="100"
                  min="50"
                  max="450"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                />
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <button className="flex-1 px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-2xl hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                <span>Buy Now</span>
              </button>
              <button className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                <span>Contact Seller</span>
              </button>
            </div>

            {/* Seller Info */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg text-white mb-4">Seller Information</h3>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-400 to-blue-400 flex items-center justify-center flex-shrink-0">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-white mb-1">TechParts India</div>
                  <div className="text-sm text-slate-400 mb-3">Member since 2024 • 98% positive ratings</div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-lg text-xs">Verified</span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-lg text-xs">Fast Response</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl text-white mb-6">Product Details</h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Premium wireless Bluetooth headphones with active noise cancellation. Perfect for retailers looking to stock high-quality audio products at competitive prices.
              </p>
              <h3 className="text-lg text-white mt-6 mb-3">Specifications</h3>
              <ul className="space-y-2">
                {[
                  { label: 'Connectivity', value: 'Bluetooth 5.0' },
                  { label: 'Battery Life', value: '30 hours' },
                  { label: 'Noise Cancellation', value: 'Active ANC' },
                  { label: 'Condition', value: 'Brand New, Sealed' },
                  { label: 'Warranty', value: '1 Year Manufacturer Warranty' },
                ].map((spec) => (
                  <li key={spec.label} className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-slate-400">{spec.label}</span>
                    <span className="text-white">{spec.value}</span>
                  </li>
                ))}
              </ul>
              <h3 className="text-lg text-white mt-6 mb-3">Packaging &amp; Shipping</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Original retail packaging included</li>
                <li>Bulk shipping available with discounted rates</li>
                <li>Secure packaging to prevent damage</li>
                <li>Ships within 2-3 business days</li>
              </ul>
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-br from-indigo-600/20 to-blue-600/20 backdrop-blur-xl border border-indigo-500/30 rounded-2xl p-6">
              <h3 className="text-lg text-white mb-4">Why Buy This?</h3>
              <ul className="space-y-3 text-sm text-slate-300">
                {[
                  '35% below market price - instant savings',
                  'Brand new condition with original packaging',
                  'Verified seller with 98% positive ratings',
                  'Bulk discounts available for larger orders',
                ].map((reason) => (
                  <li key={reason} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Similar Products */}
        <div>
          <h2 className="text-2xl text-white mb-6">Similar Products</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`}>
                <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-1">
                  <div className="relative aspect-square overflow-hidden bg-slate-900/50">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 px-3 py-1 bg-gradient-to-r from-red-600 to-pink-600 text-white text-sm rounded-full">
                      {product.discount}% OFF
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg text-white mb-2 line-clamp-1 group-hover:text-indigo-400 transition-colors">{product.name}</h3>
                    <div className="text-2xl text-white">₹{product.discountedPrice}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
