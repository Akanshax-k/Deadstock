import Link from 'next/link';
import { Package, ArrowRight, MapPin, TrendingUp, Calendar, Filter, Search } from 'lucide-react';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';

const orders = [
  {
    id: 'ORD-2024-001',
    orderDate: '2024-03-15',
    status: 'delivered',
    totalAmount: 15600,
    items: [
      {
        id: 1,
        name: 'Wireless Bluetooth Headphones',
        quantity: 20,
        price: 780,
        image: 'https://images.unsplash.com/photo-1762401244552-9eb61a7f9416?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljJTIwZ2FkZ2V0cyUyMHByb2R1Y3R8ZW58MXx8fHwxNzc0MjAxMTUyfDA&ixlib=rb-4.1.0&q=80&w=1080',
        seller: 'TechParts India',
        location: 'Mumbai, Maharashtra'
      }
    ],
    deliveryAddress: '123 Main St, Delhi, 110001'
  },
  {
    id: 'ORD-2024-002',
    orderDate: '2024-03-18',
    status: 'processing',
    totalAmount: 32000,
    items: [
      {
        id: 2,
        name: 'Premium Cotton T-Shirts',
        quantity: 800,
        price: 15,
        image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG90aGluZyUyMGFwcGFyZWwlMjBmYXNoaW9ufGVufDF8fHx8MTc3NDIwMTE1Mnww&ixlib=rb-4.1.0&q=80&w=1080',
        seller: 'FashionHub',
        location: 'Delhi'
      },
      {
        id: 3,
        name: 'Modern Office Chairs',
        quantity: 4,
        price: 3200,
        image: 'https://images.unsplash.com/photo-1765766601447-9e11ad2356da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZnVybml0dXJlJTIwbW9kZXJufGVufDF8fHx8MTc3NDIwMTE1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
        seller: 'OfficePro',
        location: 'Bangalore, Karnataka'
      }
    ],
    deliveryAddress: '456 Park Ave, Mumbai, 400001'
  },
  {
    id: 'ORD-2024-003',
    orderDate: '2024-03-20',
    status: 'shipped',
    totalAmount: 8400,
    items: [
      {
        id: 4,
        name: 'Smart Fitness Watches',
        quantity: 4,
        price: 2100,
        image: 'https://images.unsplash.com/photo-1762401244552-9eb61a7f9416?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljJTIwZ2FkZ2V0cyUyMHByb2R1Y3R8ZW58MXx8fHwxNzc0MjAxMTUyfDA&ixlib=rb-4.1.0&q=80&w=1080',
        seller: 'GadgetWorld',
        location: 'Pune, Maharashtra'
      }
    ],
    deliveryAddress: '789 Business Rd, Bangalore, 560001'
  },
  {
    id: 'ORD-2024-004',
    orderDate: '2024-03-22',
    status: 'pending',
    totalAmount: 38500,
    items: [
      {
        id: 5,
        name: 'Designer Sunglasses',
        quantity: 35,
        price: 1100,
        image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG90aGluZyUyMGFwcGFyZWwlMjBmYXNoaW9ufGVufDF8fHx8MTc3NDIwMTE1Mnww&ixlib=rb-4.1.0&q=80&w=1080',
        seller: 'StyleZone',
        location: 'Chennai, Tamil Nadu'
      }
    ],
    deliveryAddress: '321 Fashion St, Chennai, 600001'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'delivered':
      return 'bg-green-500/20 text-green-400 border-green-500/30';
    case 'processing':
      return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    case 'shipped':
      return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    case 'pending':
      return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    default:
      return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case 'delivered':
      return 'Delivered';
    case 'processing':
      return 'Processing';
    case 'shipped':
      return 'Shipped';
    case 'pending':
      return 'Pending';
    default:
      return status;
  }
};

export default function OrdersPage() {
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
              <Link href="/marketplace" className="text-slate-300 hover:text-white transition-colors">Marketplace</Link>
              <Link href="/seller-dashboard" className="text-slate-300 hover:text-white transition-colors">Seller Dashboard</Link>
              <Link href="/orders" className="text-white">My Orders</Link>
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
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl text-white mb-2">My Orders</h1>
          <p className="text-xl text-slate-400">Track and manage all your orders</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <Package className="w-8 h-8 text-indigo-400" />
              <span className="text-2xl font-bold text-white">4</span>
            </div>
            <div className="text-slate-400">Total Orders</div>
          </div>
          <div className="bg-gradient-to-br from-green-800/50 to-green-900/50 backdrop-blur-xl border border-green-500/20 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-8 h-8 text-green-400" />
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <div className="text-slate-400">Delivered</div>
          </div>
          <div className="bg-gradient-to-br from-blue-800/50 to-blue-900/50 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <Calendar className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <div className="text-slate-400">In Progress</div>
          </div>
          <div className="bg-gradient-to-br from-purple-800/50 to-purple-900/50 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <ArrowRight className="w-8 h-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <div className="text-slate-400">Pending</div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search orders..."
              className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500/50 transition-colors"
            />
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-slate-800/50 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-colors">
            <Filter className="w-5 h-5" />
            <span>Filter</span>
          </button>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              {/* Order Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-xl font-semibold text-white">{order.id}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(order.status)}`}>
                      {getStatusText(order.status)}
                    </span>
                  </div>
                  <div className="text-slate-400">Order Date: {order.orderDate}</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">₹{order.totalAmount.toLocaleString()}</div>
                  <div className="text-slate-400">{order.items.length} items</div>
                </div>
              </div>

              {/* Order Items */}
              <div className="space-y-4 mb-6">
                {order.items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-xl">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-medium">{item.name}</h4>
                      <div className="text-slate-400 text-sm">{item.seller} • {item.location}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-white">₹{item.price} × {item.quantity}</div>
                      <div className="text-slate-400 text-sm">₹{(item.price * item.quantity).toLocaleString()}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Delivery Address */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-slate-400">
                  <MapPin className="w-4 h-4" />
                  <span>{order.deliveryAddress}</span>
                </div>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                  Track Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
