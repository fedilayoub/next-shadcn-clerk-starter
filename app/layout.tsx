import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import Header from '@/components/header';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  display: 'swap',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Next | Shadcn UI | Clerk Saas Starter',
  description:
    'Saas Starter Template with Next.js, Shadcn UI and Clerk intergration',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
