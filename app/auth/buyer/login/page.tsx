import { LoginForm } from '@/components/auth/login-form';
import { AuthLayout } from '@/components/auth/auth-layout';

export default function BuyerLoginPage() {
  return (
    <AuthLayout 
      title="Buyer Login"
      subtitle="Welcome back! Access your buyer dashboard and browse exclusive deals."
    >
      <LoginForm userType="buyer" />
    </AuthLayout>
  );
}
