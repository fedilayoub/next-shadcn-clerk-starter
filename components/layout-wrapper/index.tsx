'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/header';
import Footer from '@/components/footer';

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isProtectedRoute = 
    pathname?.startsWith('/dashboard') || 
    pathname?.startsWith('/app-page2') || 
    pathname?.startsWith('/settings') ||
    pathname?.startsWith('/with-subitems');

  return (
    <>
      {!isProtectedRoute && <Header />}
      {children}
      {!isProtectedRoute && <Footer />}
    </>
  );
} 