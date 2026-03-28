'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/lib/context';

interface LoginFormProps {
  userType: 'seller' | 'buyer';
  title?: string;
  description?: string;
}

export function LoginForm({ userType, title, description }: LoginFormProps) {
  const router = useRouter();
  const { login, isLoading, error, clearError } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [localError, setLocalError] = useState<string | null>(null);

  const defaultTitle = userType === 'seller' ? 'Seller Login' : 'Buyer Login';
  const defaultDescription = userType === 'seller' 
    ? 'Access your seller dashboard and manage your inventory' 
    : 'Access your buyer dashboard and browse deals';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLocalError(null);
    clearError();
    
    if (!formData.email || !formData.password) {
      setLocalError('Please fill in all fields');
      return;
    }

    try {
      await login(formData.email, formData.password);
      // Redirect based on user type after successful login
      if (userType === 'seller') {
        router.push('/seller-dashboard');
      } else {
        router.push('/marketplace');
      }
    } catch (err: any) {
      setLocalError(err.message || 'Login failed. Please try again.');
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl text-center">{title || defaultTitle}</CardTitle>
        <CardDescription className="text-center">
          {description || defaultDescription}
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
              disabled={isLoading}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 pr-10"
                disabled={isLoading}
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
                disabled={isLoading}
              >
                {showPassword ? (
                  <EyeOffIcon className="h-4 w-4 text-slate-400" />
                ) : (
                  <EyeIcon className="h-4 w-4 text-slate-400" />
                )}
              </Button>
            </div>
          </div>
          {(error || localError) && (
            <div className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-sm">
              {error || localError}
            </div>
          )}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                className="rounded border-slate-700 bg-slate-800 text-indigo-600 focus:ring-indigo-600"
                disabled={isLoading}
              />
              <Label htmlFor="remember" className="text-sm text-slate-300">
                Remember me
              </Label>
            </div>
            <Link href="#" className="text-sm text-indigo-400 hover:text-indigo-300">
             
            </Link>
          </div>
        </CardContent>
        <CardFooter className="space-y-4">
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700"
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </Button>
          
          <div className="text-center">
           
          </div>
        </CardFooter>
      </form>
    </Card>
  );
}
