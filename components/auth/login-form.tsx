'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import Link from 'next/link';

interface LoginFormProps {
  userType: 'seller' | 'buyer';
  title?: string;
  description?: string;
}

export function LoginForm({ userType, title, description }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const defaultTitle = userType === 'seller' ? 'Seller Login' : 'Buyer Login';
  const defaultDescription = userType === 'seller' 
    ? 'Access your seller dashboard and manage your inventory' 
    : 'Access your buyer dashboard and browse deals';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Redirect logic would go here
      if (userType === 'seller') {
        window.location.href = '/seller-dashboard';
      } else {
        window.location.href = '/marketplace';
      }
    }, 1000);
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
              className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
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
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 pr-10"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOffIcon className="h-4 w-4 text-slate-400" />
                ) : (
                  <EyeIcon className="h-4 w-4 text-slate-400" />
                )}
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                className="rounded border-slate-700 bg-slate-800 text-indigo-600 focus:ring-indigo-600"
              />
              <Label htmlFor="remember" className="text-sm text-slate-300">
                Remember me
              </Label>
            </div>
            <Link href="#" className="text-sm text-indigo-400 hover:text-indigo-300">
              Forgot password?
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
          <div className="text-center text-sm text-slate-400">
            Don't have an account?{' '}
            <Link 
              href={userType === 'seller' ? '/auth/seller/signup' : '/auth/buyer/signup'} 
              className="text-indigo-400 hover:text-indigo-300"
            >
              Sign up
            </Link>
          </div>
          <div className="text-center">
            <Link 
              href={userType === 'buyer' ? '/auth/seller/login' : '/auth/buyer/login'} 
              className="text-sm text-slate-400 hover:text-slate-300"
            >
              {userType === 'seller' ? 'Are you a buyer?' : 'Are you a seller?'}
            </Link>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
}
