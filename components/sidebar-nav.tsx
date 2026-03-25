'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Upload, BarChart3, Package, Home } from 'lucide-react';

export function SidebarNav() {
  const pathname = usePathname();

  const navItems = [
    { path: '/seller-dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/upload-inventory', icon: Upload, label: 'Upload Stock' },
    { path: '/analytics', icon: BarChart3, label: 'Analytics' },
    { path: '/marketplace', icon: Package, label: 'Orders' },
  ];

  return (
    <div className="w-64 min-h-screen bg-slate-900/50 border-r border-white/10 backdrop-blur-xl relative">
      <div className="p-6">
        <Link href="/" className="flex items-center gap-2 mb-8">
          <Package className="w-8 h-8 text-indigo-400" />
          <span className="text-2xl text-white">DeadStock</span>
        </Link>

        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg shadow-indigo-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-8 pt-8 border-t border-white/10">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-200"
          >
            <Home className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>

      {/* User Profile */}
      <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-blue-400"></div>
          <div className="flex-1">
            <div className="text-sm text-white">John Doe</div>
            <div className="text-xs text-slate-400">Seller Account</div>
          </div>
        </div>
      </div>
    </div>
  );
}
