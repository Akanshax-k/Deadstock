import { LoginSelector } from '@/components/auth/login-selector';
import { AuthLayout } from '@/components/auth/auth-layout';

export default function LoginPage() {
  return (
    <AuthLayout 
      title="Welcome Back"
      subtitle="Sign in to your DeadStock account"
    >
      <LoginSelector />
    </AuthLayout>
  );
}
