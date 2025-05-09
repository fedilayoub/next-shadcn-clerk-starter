import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-switcher/theme-provider';
import { ClerkProvider } from '@clerk/nextjs';
import { LayoutWrapper } from '@/components/layout-wrapper';
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
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${spaceGrotesk.variable} antialiased bg-white dark:bg-black`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <LayoutWrapper>
              {children}
            </LayoutWrapper>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
