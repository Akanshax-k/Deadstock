import { ReactNode } from 'react';
import Link from 'next/link';
import { Package, ArrowLeft } from 'lucide-react';

interface AuthLayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  showBackButton?: boolean;
  backHref?: string;
}

export function AuthLayout({ 
  children, 
  title, 
  subtitle, 
  showBackButton = true,
  backHref = '/' 
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 flex flex-col">
      {/* Header */}
      <header className="border-b border-white/10 bg-slate-950/50 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Package className="w-8 h-8 text-indigo-400" />
              <span className="text-2xl tracking-tight text-white">DeadStock</span>
            </Link>
            {showBackButton && (
              <Link 
                href={backHref}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md space-y-8">
          {title && (
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold text-white">{title}</h1>
              {subtitle && <p className="text-slate-300">{subtitle}</p>}
            </div>
          )}
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950/50 backdrop-blur-xl py-6">
        <div className="container mx-auto px-6 text-center text-sm text-slate-400">
          <p>&copy; 2024 DeadStock. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
