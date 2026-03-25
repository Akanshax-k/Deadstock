'use client';

import { useState } from 'react';
import { Upload, AlertCircle, ImagePlus } from 'lucide-react';
import { SidebarNav } from '@/components/sidebar-nav';

export default function UploadInventoryPage() {
  const [dragActive, setDragActive] = useState(false);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">
      <SidebarNav />

      <div className="flex-1 p-8 overflow-y-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl text-white mb-2">Upload Inventory</h1>
          <p className="text-slate-400">List your dead stock and connect with verified bulk buyers</p>
        </div>

        {/* AI Suggestion Box */}
        <div className="mb-8 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-2xl p-6 backdrop-blur-xl">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg text-white mb-1">AI Insight</h3>
              <p className="text-amber-200/80">
                Based on market trends, electronics inventory may lose 15-20% value in the next quarter. Consider listing sooner for better recovery rates.
              </p>
            </div>
          </div>
        </div>

        {/* Main Form */}
        <div className="max-w-4xl">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              {/* Product Name */}
              <div>
                <label className="block text-white mb-2">Product Name</label>
                <input
                  type="text"
                  placeholder="e.g., Wireless Bluetooth Headphones"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                />
              </div>

              {/* Category and Quantity */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white mb-2">Category</label>
                  <select className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all">
                    <option value="">Select category</option>
                    <option value="electronics">Electronics</option>
                    <option value="apparel">Apparel</option>
                    <option value="furniture">Furniture</option>
                    <option value="accessories">Accessories</option>
                    <option value="home">Home &amp; Living</option>
                    <option value="sports">Sports &amp; Fitness</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white mb-2">Quantity</label>
                  <input
                    type="number"
                    placeholder="e.g., 500"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                </div>
              </div>

              {/* Pricing */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white mb-2">Original Price (per unit)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">₹</span>
                    <input
                      type="number"
                      placeholder="1,200"
                      className="w-full pl-8 pr-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white mb-2">Discounted Price (per unit)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">₹</span>
                    <input
                      type="number"
                      placeholder="780"
                      className="w-full pl-8 pr-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    />
                  </div>
                  <p className="mt-2 text-sm text-green-400">35% discount - Great for attracting buyers!</p>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-white mb-2">Product Description</label>
                <textarea
                  rows={4}
                  placeholder="Describe the condition, specifications, and any important details..."
                  className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                />
              </div>

              {/* Upload Images */}
              <div>
                <label className="block text-white mb-2">Product Images</label>
                <div
                  className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all ${
                    dragActive
                      ? 'border-indigo-500 bg-indigo-500/10'
                      : 'border-white/20 bg-slate-900/30 hover:border-indigo-500/50 hover:bg-indigo-500/5'
                  }`}
                  onDragEnter={() => setDragActive(true)}
                  onDragLeave={() => setDragActive(false)}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    setDragActive(false);
                  }}
                >
                  <input type="file" multiple className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
                      <ImagePlus className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-white mb-1">Drag &amp; drop images here</p>
                    <p className="text-sm text-slate-400 mb-4">or click to browse</p>
                    <p className="text-xs text-slate-500">PNG, JPG up to 10MB (max 5 images)</p>
                  </div>
                </div>

                {/* Uploaded Images Preview */}
                <div className="grid grid-cols-5 gap-4 mt-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="relative aspect-square bg-slate-900/50 border border-white/10 rounded-xl overflow-hidden group">
                      <div className="w-full h-full bg-gradient-to-br from-indigo-500/20 to-blue-500/20 flex items-center justify-center">
                        <ImagePlus className="w-8 h-8 text-slate-500" />
                      </div>
                      <button className="absolute top-2 right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-white text-xs">×</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white mb-2">City</label>
                  <input
                    type="text"
                    placeholder="e.g., Mumbai"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">State</label>
                  <select className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all">
                    <option value="">Select state</option>
                    <option value="maharashtra">Maharashtra</option>
                    <option value="delhi">Delhi</option>
                    <option value="karnataka">Karnataka</option>
                    <option value="tamil-nadu">Tamil Nadu</option>
                    <option value="gujarat">Gujarat</option>
                  </select>
                </div>
              </div>

              {/* Additional Options */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                {[
                  'Offer bulk discount (additional 5-10% off for orders over 100 units)',
                  'Enable urgent sale badge (prioritize listing for faster sale)',
                  'Allow negotiations (buyers can make offers)',
                ].map((label) => (
                  <label key={label} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      className="w-5 h-5 rounded bg-slate-900/50 border-white/10 text-indigo-600 focus:ring-2 focus:ring-indigo-500"
                    />
                    <span className="text-slate-300 group-hover:text-white transition-colors">{label}</span>
                  </label>
                ))}
              </div>

              {/* Submit Buttons */}
              <div className="flex gap-4 pt-6">
                <button
                  type="submit"
                  className="flex-1 px-6 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <Upload className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                  <span>Publish Listing</span>
                </button>
                <button
                  type="button"
                  className="px-6 py-4 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  Save as Draft
                </button>
              </div>
            </form>
          </div>

          {/* Tips Card */}
          <div className="mt-6 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <h4 className="text-white mb-3">💡 Tips for Better Listings</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>• Use high-quality images showing multiple angles of the product</li>
              <li>• Price competitively - aim for 30-50% discount for faster sales</li>
              <li>• Provide detailed product specifications and condition</li>
              <li>• Highlight any certifications, warranties, or original packaging</li>
              <li>• Respond to buyer inquiries within 24 hours for better conversion</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
