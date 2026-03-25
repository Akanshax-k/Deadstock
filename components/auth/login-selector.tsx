'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, ShoppingBag, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function LoginSelector() {
  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-white">Choose Your Account Type</h2>
        <p className="text-slate-300">Select how you want to sign in to DeadStock</p>
      </div>
      
      <div className="grid gap-4">
        <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-600/20 rounded-lg">
                <Package className="w-6 h-6 text-indigo-400" />
              </div>
              <div>
                <CardTitle className="text-white">Seller Account</CardTitle>
                <CardDescription className="text-slate-400">
                  Manage inventory and list products
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <Link href="/auth/seller/login">
              <Button className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700">
                Sign In as Seller
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-600/20 rounded-lg">
                <ShoppingBag className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <CardTitle className="text-white">Buyer Account</CardTitle>
                <CardDescription className="text-slate-400">
                  Browse deals and make purchases
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <Link href="/auth/buyer/login">
              <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                Sign In as Buyer
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="text-center space-y-2">
        <p className="text-sm text-slate-400">
          Don't have an account?{' '}
          <Link href="/auth/signup" className="text-indigo-400 hover:text-indigo-300">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
