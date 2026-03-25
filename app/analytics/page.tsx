'use client';

import { SidebarNav } from '@/components/sidebar-nav';
import { TrendingUp, TrendingDown, Clock, AlertTriangle } from 'lucide-react';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const inventoryAgingData = [
  { month: 'Jan', value: 35000 },
  { month: 'Feb', value: 42000 },
  { month: 'Mar', value: 38000 },
  { month: 'Apr', value: 31000 },
  { month: 'May', value: 25000 },
  { month: 'Jun', value: 18000 },
];

const recoveryRateData = [
  { month: 'Jan', rate: 45 },
  { month: 'Feb', rate: 52 },
  { month: 'Mar', rate: 58 },
  { month: 'Apr', rate: 65 },
  { month: 'May', rate: 71 },
  { month: 'Jun', rate: 78 },
];

const categoryDistribution = [
  { name: 'Electronics', value: 45, color: '#6366f1' },
  { name: 'Apparel', value: 25, color: '#3b82f6' },
  { name: 'Furniture', value: 20, color: '#8b5cf6' },
  { name: 'Accessories', value: 10, color: '#06b6d4' },
];

const topDeadCategories = [
  { category: 'Wireless Headphones', value: 145000, trend: 'up' },
  { category: 'Cotton T-Shirts', value: 98000, trend: 'down' },
  { category: 'Office Chairs', value: 87000, trend: 'up' },
  { category: 'Smart Watches', value: 76000, trend: 'down' },
  { category: 'LED Lamps', value: 54000, trend: 'up' },
];

const highDemandItems = [
  { item: 'Bluetooth Speakers', demand: 'Very High', growth: '+45%' },
  { item: 'Running Shoes', demand: 'High', growth: '+32%' },
  { item: 'Desk Organizers', demand: 'High', growth: '+28%' },
  { item: 'Phone Cases', demand: 'Medium', growth: '+15%' },
];

const tooltipStyle = {
  contentStyle: {
    backgroundColor: '#1e293b',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '12px',
    color: '#fff',
  },
};

export default function AnalyticsPage() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">
      <SidebarNav />

      <div className="flex-1 p-8 overflow-y-auto">
        <div className="mb-8">
          <h1 className="text-3xl text-white mb-2">Analytics Dashboard</h1>
          <p className="text-slate-400">Track performance and make data-driven decisions</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { icon: TrendingUp, gradient: 'from-indigo-600 to-blue-600', badge: '+12%', badgeColor: 'bg-green-500/20 text-green-400', value: '78%', label: 'Recovery Rate' },
            { icon: Clock, gradient: 'from-blue-600 to-cyan-600', badge: '-8 days', badgeColor: 'bg-green-500/20 text-green-400', value: '24 days', label: 'Avg. Time to Sell' },
            { icon: TrendingDown, gradient: 'from-purple-600 to-pink-600', badge: '+5%', badgeColor: 'bg-red-500/20 text-red-400', value: '₹1.8M', label: 'Aging Inventory' },
            { icon: AlertTriangle, gradient: 'from-green-600 to-emerald-600', badge: 'Alert', badgeColor: 'bg-yellow-500/20 text-yellow-400', value: '18', label: 'Items Over 90 Days' },
          ].map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.label} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${card.gradient} rounded-xl flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className={`px-2 py-1 ${card.badgeColor} rounded-lg text-xs`}>{card.badge}</span>
                </div>
                <div className="text-2xl text-white mb-1">{card.value}</div>
                <div className="text-sm text-slate-400">{card.label}</div>
              </div>
            );
          })}
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl text-white mb-6">Inventory Aging Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={inventoryAgingData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.2} />
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip {...tooltipStyle} />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#6366f1" strokeWidth={3} name="Inventory Value (₹)" dot={{ fill: '#6366f1', r: 5 }} activeDot={{ r: 7 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl text-white mb-6">Sales Recovery Rate (%)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={recoveryRateData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.2} />
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip {...tooltipStyle} />
                <Legend />
                <Bar dataKey="rate" fill="#3b82f6" radius={[8, 8, 0, 0]} name="Recovery Rate (%)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl text-white mb-6">Category Distribution</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={categoryDistribution} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={5} dataKey="value">
                  {categoryDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip {...tooltipStyle} />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-3 mt-4">
              {categoryDistribution.map((category) => (
                <div key={category.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }}></div>
                  <span className="text-sm text-slate-300">{category.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl text-white mb-6">Top Dead Stock Categories</h3>
            <div className="space-y-4">
              {topDeadCategories.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-lg flex items-center justify-center text-white text-sm">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white">{item.category}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-300">₹{item.value.toLocaleString()}</span>
                        {item.trend === 'up' ? (
                          <TrendingUp className="w-4 h-4 text-red-400" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-green-400" />
                        )}
                      </div>
                    </div>
                    <div className="w-full bg-slate-900/50 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full"
                        style={{ width: `${(item.value / 145000) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Insights Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl text-white mb-6">High-Demand Items</h3>
            <div className="space-y-4">
              {highDemandItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-slate-900/30 rounded-xl border border-white/5">
                  <div>
                    <div className="text-white mb-1">{item.item}</div>
                    <div className="text-sm text-slate-400">Demand: {item.demand}</div>
                  </div>
                  <div className="text-green-400">{item.growth}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-600/20 to-blue-600/20 backdrop-blur-xl border border-indigo-500/30 rounded-2xl p-6">
            <h3 className="text-xl text-white mb-6">🤖 AI Recommendations</h3>
            <div className="space-y-4">
              {[
                {
                  icon: AlertTriangle,
                  gradient: 'from-amber-500 to-orange-500',
                  title: 'Urgent: Price Adjustment Needed',
                  desc: '18 items have been in stock for over 90 days. Consider reducing prices by 10-15% for faster liquidation.',
                },
                {
                  icon: TrendingUp,
                  gradient: 'from-green-500 to-emerald-500',
                  title: 'Trending Category: Electronics',
                  desc: 'Electronics category showing 45% higher buyer interest. Good time to list related inventory.',
                },
                {
                  icon: Clock,
                  gradient: 'from-blue-500 to-cyan-500',
                  title: 'Seasonal Opportunity',
                  desc: 'Apparel inventory typically sells 30% faster in the next quarter. Consider bulk listings now.',
                },
              ].map((rec) => {
                const Icon = rec.icon;
                return (
                  <div key={rec.title} className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="flex items-start gap-3">
                      <div className={`w-8 h-8 bg-gradient-to-br ${rec.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-white mb-1">{rec.title}</div>
                        <p className="text-sm text-slate-300">{rec.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
