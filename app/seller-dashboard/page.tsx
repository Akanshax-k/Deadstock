'use client';

import { SidebarNav } from '@/components/sidebar-nav';
import { TrendingUp, Package, DollarSign, ShoppingBag, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';

const salesData = [
  { month: 'Jan', value: 12000 },
  { month: 'Feb', value: 19000 },
  { month: 'Mar', value: 15000 },
  { month: 'Apr', value: 25000 },
  { month: 'May', value: 32000 },
  { month: 'Jun', value: 28000 },
];

const categoryData = [
  { category: 'Electronics', value: 45000 },
  { category: 'Apparel', value: 32000 },
  { category: 'Furniture', value: 28000 },
  { category: 'Accessories', value: 18000 },
];

const recentListings = [
  { id: 1, name: 'Wireless Headphones', category: 'Electronics', quantity: 450, originalPrice: 1200, discountedPrice: 780, status: 'Active' },
  { id: 2, name: 'Cotton T-Shirts', category: 'Apparel', quantity: 800, originalPrice: 25, discountedPrice: 15, status: 'Sold' },
  { id: 3, name: 'Office Chairs', category: 'Furniture', quantity: 120, originalPrice: 5500, discountedPrice: 3200, status: 'Active' },
  { id: 4, name: 'Smart Watches', category: 'Electronics', quantity: 200, originalPrice: 3500, discountedPrice: 2100, status: 'Pending' },
];

const tooltipStyle = {
  contentStyle: {
    backgroundColor: '#1e293b',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '12px',
    color: '#fff',
  },
};

export default function SellerDashboardPage() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">
      <SidebarNav />

      <div className="flex-1 p-8 overflow-y-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl text-white mb-2">Dashboard</h1>
          <p className="text-slate-400">Welcome back! Here&apos;s what&apos;s happening with your inventory.</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Package className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center gap-1 text-green-400 text-sm">
                <ArrowUpRight className="w-4 h-4" />
                <span>+12%</span>
              </div>
            </div>
            <div className="text-3xl text-white mb-1">₹2.4M</div>
            <div className="text-sm text-slate-400">Total Dead Stock Value</div>
          </div>

          <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center gap-1 text-green-400 text-sm">
                <ArrowUpRight className="w-4 h-4" />
                <span>+23%</span>
              </div>
            </div>
            <div className="text-3xl text-white mb-1">1,570</div>
            <div className="text-sm text-slate-400">Items Sold This Month</div>
          </div>

          <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center gap-1 text-green-400 text-sm">
                <ArrowUpRight className="w-4 h-4" />
                <span>+8%</span>
              </div>
            </div>
            <div className="text-3xl text-white mb-1">₹890K</div>
            <div className="text-sm text-slate-400">Loss Recovered</div>
          </div>

          <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center gap-1 text-red-400 text-sm">
                <ArrowDownRight className="w-4 h-4" />
                <span>-5%</span>
              </div>
            </div>
            <div className="text-3xl text-white mb-1">48</div>
            <div className="text-sm text-slate-400">Active Listings</div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl text-white mb-6">Inventory Sales Trend</h3>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={salesData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.2} />
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip {...tooltipStyle} />
                <Area type="monotone" dataKey="value" stroke="#6366f1" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl text-white mb-6">Sales by Category</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={categoryData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.2} />
                <XAxis dataKey="category" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip {...tooltipStyle} />
                <Bar dataKey="value" fill="#3b82f6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Listings Table */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl text-white mb-6">Recent Listings</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-sm text-slate-400">Product Name</th>
                  <th className="text-left py-4 px-4 text-sm text-slate-400">Category</th>
                  <th className="text-left py-4 px-4 text-sm text-slate-400">Quantity</th>
                  <th className="text-left py-4 px-4 text-sm text-slate-400">Original Price</th>
                  <th className="text-left py-4 px-4 text-sm text-slate-400">Discounted Price</th>
                  <th className="text-left py-4 px-4 text-sm text-slate-400">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentListings.map((listing) => (
                  <tr key={listing.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4 text-white">{listing.name}</td>
                    <td className="py-4 px-4 text-slate-300">{listing.category}</td>
                    <td className="py-4 px-4 text-slate-300">{listing.quantity}</td>
                    <td className="py-4 px-4 text-slate-400 line-through">₹{listing.originalPrice}</td>
                    <td className="py-4 px-4 text-green-400">₹{listing.discountedPrice}</td>
                    <td className="py-4 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs ${
                          listing.status === 'Active'
                            ? 'bg-green-500/20 text-green-400'
                            : listing.status === 'Sold'
                            ? 'bg-blue-500/20 text-blue-400'
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}
                      >
                        {listing.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
