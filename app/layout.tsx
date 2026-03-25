import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DeadStock - Turn Unsold Stock into Profit',
  description: 'The marketplace for turning unsold inventory into profit.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}
