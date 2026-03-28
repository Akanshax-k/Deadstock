import Link from 'next/link';
import { ArrowRight, Package, BarChart3, Users, Shield, Zap, CheckCircle2 } from 'lucide-react';

const heroCards = [
  {
    id: 1,
    label: 'Electronics Lot',
    sublabel: '#4821',
    badge: '+32% recovered',
    badgeColor: '#4ade80',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=400&h=600',
    accentColor: '#6366f1',
    barWidth: '72%',
    barGradient: 'linear-gradient(to right, #6366f1, #3b82f6)',
    offset: 'translate-y-10',
    size: 'w-44 h-72',
  },
  {
    id: 2,
    label: 'Fashion Overstock',
    sublabel: '#219',
    badge: '+18% recovered',
    badgeColor: '#4ade80',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=400&h=680',
    accentColor: '#a855f7',
    barWidth: '55%',
    barGradient: 'linear-gradient(to right, #a855f7, #ec4899)',
    offset: 'translate-y-0',
    size: 'w-52 h-88',
    featured: true,
  },
  {
    id: 3,
    label: 'Home Goods',
    sublabel: 'Lot #87',
    badge: '⚡ New Offer!',
    badgeColor: '#fbbf24',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=400&h=600',
    accentColor: '#06b6d4',
    barWidth: '40%',
    barGradient: 'linear-gradient(to right, #06b6d4, #14b8a6)',
    offset: 'translate-y-16',
    size: 'w-44 h-72',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">
      {/* Header */}
      <header className="border-b border-white/10 bg-slate-950/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Package className="w-8 h-8 text-indigo-400" />
              <span className="text-2xl tracking-tight text-white">DeadStock</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="text-slate-300 hover:text-white transition-colors">How it Works</a>
              <a href="#testimonials" className="text-slate-300 hover:text-white transition-colors">Testimonials</a>
              <Link href="/marketplace" className="text-slate-300 hover:text-white transition-colors">Browse Deals</Link>
              <Link href="/orders" className="text-slate-300 hover:text-white transition-colors">My Orders</Link>
            </nav>
            <div className="flex items-center gap-4">
              <Link href="/auth/login">
                <button className="text-slate-300 hover:text-white transition-colors">Sign In</button>
              </Link>
              <Link href="/seller-dashboard">
                <button className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-2xl hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* ── CHANGED: Dark stock market background video ── */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          poster="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
        >
          {/* Stock market ticker / trading screen */}
          <source src="https://videos.pexels.com/video-files/7947892/7947892-hd_1920_1080_25fps.mp4" type="video/mp4" />
          {/* Fallback: financial graph animation on dark bg */}
          <source src="https://videos.pexels.com/video-files/3945078/3945078-hd_1920_1080_25fps.mp4" type="video/mp4" />
          {/* Final fallback: dark abstract data/tech */}
          <source src="https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>
        {/* Overlay: heavy on left for text legibility, transparent on right to show video */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 z-10 bg-gradient-to-t from-slate-950 to-transparent" />
        {/* ── END CHANGED ── */}

        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-6 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className="space-y-8">
              
              <h1 className="text-5xl md:text-6xl text-white leading-tight">
                Turn Unsold Stock into{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                  Profit
                </span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Connect with bulk buyers instantly. Recover losses, free up warehouse space, and transform dead inventory into revenue.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/upload-inventory">
                  <button className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-2xl hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 flex items-center gap-2">
                    Sell Inventory
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <Link href="/marketplace">
                  <button className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                    Browse Deals
                  </button>
                </Link>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl text-white">$50M+</div>
                  <div className="text-sm text-slate-400">Inventory Liquidated</div>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div>
                  <div className="text-3xl text-white">2,500+</div>
                  <div className="text-sm text-slate-400">Active Sellers</div>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div>
                  <div className="text-3xl text-white">95%</div>
                  <div className="text-sm text-slate-400">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Right: Staggered Portrait Cards */}
            <div className="flex items-start justify-center gap-4 pt-8 pb-16">
              {heroCards.map((card) => (
                <div
                  key={card.id}
                  className={`relative flex-shrink-0 rounded-3xl overflow-hidden cursor-pointer
                    transition-all duration-300 hover:-translate-y-3
                    ${card.offset}
                    ${card.featured ? 'w-52 shadow-2xl' : 'w-44'}
                  `}
                  style={{
                    height: card.featured ? '340px' : '288px',
                    border: card.featured
                      ? `2px solid ${card.accentColor}88`
                      : '1px solid rgba(255,255,255,0.12)',
                    boxShadow: card.featured
                      ? `0 20px 60px ${card.accentColor}33`
                      : '0 10px 40px rgba(0,0,0,0.5)',
                  }}
                >
                  <img
                    src={card.image}
                    alt={card.label}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/10 to-black/85" />
                  {card.featured && (
                    <div
                      className="absolute top-3.5 right-3.5 w-2.5 h-2.5 rounded-full animate-pulse"
                      style={{ background: card.accentColor, boxShadow: `0 0 12px ${card.accentColor}` }}
                    />
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-3.5">
                    <div className="font-bold text-white leading-tight mb-0.5" style={{ fontSize: card.featured ? '15px' : '13px' }}>
                      {card.label}
                    </div>
                    <div className="text-xs text-white/55 mb-2">{card.sublabel}</div>
                    <div className="w-full h-[3px] bg-white/15 rounded-full mb-1.5 overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{ width: card.barWidth, background: card.barGradient, boxShadow: `0 0 8px ${card.accentColor}` }}
                      />
                    </div>
                    <span className="text-[10px] font-bold" style={{ color: card.badgeColor }}>{card.badge}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-white mb-4">Why Choose DeadStock?</h2>
          <p className="text-xl text-slate-400">Everything you need to liquidate inventory efficiently</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-blue-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl text-white mb-4">Instant Liquidation</h3>
              <p className="text-slate-400 leading-relaxed">List your dead stock and connect with verified bulk buyers within 24 hours. No more waiting months to clear inventory.</p>
            </div>
          </div>
          <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-blue-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl text-white mb-4">Smart Buyer Matching</h3>
              <p className="text-slate-400 leading-relaxed">Our AI-powered algorithm matches your inventory with the most relevant buyers based on category, location, and buying history.</p>
            </div>
          </div>
          <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-blue-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl text-white mb-4">Analytics Dashboard</h3>
              <p className="text-slate-400 leading-relaxed">Track inventory aging, recovery rates, and market trends. Make data-driven decisions to minimize future dead stock.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-white mb-4">How It Works</h2>
          <p className="text-xl text-slate-400">Get started in three simple steps</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-full flex items-center justify-center text-3xl text-white mx-auto mb-6">1</div>
            <h3 className="text-xl text-white mb-3">List Your Inventory</h3>
            <p className="text-slate-400">Upload product details, pricing, and images. Our platform validates and optimizes your listings.</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-3xl text-white mx-auto mb-6">2</div>
            <h3 className="text-xl text-white mb-3">Get Matched</h3>
            <p className="text-slate-400">Receive offers from verified buyers. Compare prices and choose the best deal for your business.</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-full flex items-center justify-center text-3xl text-white mx-auto mb-6">3</div>
            <h3 className="text-xl text-white mb-3">Close the Deal</h3>
            <p className="text-slate-400">Secure payment processing and logistics support. Get paid within 48 hours of shipment confirmation.</p>
          </div>
        </div>
      </section>

      

      

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="relative bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-12 md:p-20 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==\")" }} />
          <div className="relative">
            <h2 className="text-4xl md:text-5xl text-white mb-6">Ready to Transform Your Dead Inventory?</h2>
           
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/upload-inventory">
                <button className="px-8 py-4 bg-white text-indigo-600 rounded-2xl hover:shadow-2xl transition-all duration-300">Start Selling Now</button>
              </Link>
              <Link href="/marketplace">
                <button className="px-8 py-4 bg-white/10 border border-white/20 text-white rounded-2xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">Browse Marketplace</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950/50 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Package className="w-6 h-6 text-indigo-400" />
                <span className="text-xl text-white">DeadStock</span>
              </div>
              <p className="text-slate-400">The marketplace for turning unsold inventory into profit.</p>
            </div>
            <div>
              <h4 className="text-white mb-4">Product</h4>
              <div className="space-y-2">{['Features', 'Pricing', 'Case Studies', 'API'].map((item) => (<div key={item} className="text-slate-400 hover:text-white transition-colors cursor-pointer">{item}</div>))}</div>
            </div>
            <div>
              <h4 className="text-white mb-4">Company</h4>
              <div className="space-y-2">{['About Us', 'Careers', 'Blog', 'Contact'].map((item) => (<div key={item} className="text-slate-400 hover:text-white transition-colors cursor-pointer">{item}</div>))}</div>
            </div>
            <div>
              <h4 className="text-white mb-4">Legal</h4>
              <div className="space-y-2">{['Privacy Policy', 'Terms of Service', 'Security'].map((item) => (<div key={item} className="text-slate-400 hover:text-white transition-colors cursor-pointer">{item}</div>))}</div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-slate-400">© 2026 DeadStock. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}