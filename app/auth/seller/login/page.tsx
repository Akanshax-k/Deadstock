import { LoginForm } from '@/components/auth/login-form';
import { AuthLayout } from '@/components/auth/auth-layout';

export default function SellerLoginPage() {
  return (
    <AuthLayout 
      title="Seller Login"
      subtitle="Welcome back! Access your seller dashboard and manage your inventory."
    >
      <LoginForm userType="seller" />
    </AuthLayout>
  );
}
