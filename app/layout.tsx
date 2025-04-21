import './globals.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/sonner';
import { CursorEffect } from '@/components/cursor-effect';
import { FloatingElements } from '@/components/floating-elements';
import { ScrollProgress } from '@/components/scroll-progress';

export const metadata: Metadata = {
  title: 'Megh - Software Developer',
  description: 'Portfolio of Megh - Software Developer and Tech Enthusiast',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          <CursorEffect />
          <div className="relative flex min-h-screen flex-col">
            <FloatingElements />
            <div className="relative flex-1">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}