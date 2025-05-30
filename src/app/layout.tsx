import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import RootLayoutClient from './RootLayout';

// Initialize the Inter font with optimized settings
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  adjustFontFallback: true,
  fallback: ['system-ui', 'sans-serif'],
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
});

export const metadata: Metadata = {
  title: 'Steve Perkins — Product Design Leader',
  description: 'Timeless, fast, and thoughtful personal site for Steve Perkins.',
  applicationName: 'Steve Perkins',
  authors: [{ name: 'Steve Perkins' }],
  keywords: ['Product Design', 'Design Leadership', 'UX Design', 'Portfolio'],
  creator: 'Steve Perkins',
  publisher: 'Steve Perkins',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/fonts/Inter-VariableFont_slnt,wght.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        {/* Inline critical CSS */}
        <style dangerouslySetInnerHTML={{
          __html: `
            html { scroll-behavior: smooth; }
            body { opacity: 0; animation: fadeIn 0.3s ease-in-out forwards; }
            @keyframes fadeIn { to { opacity: 1; } }
          `
        }} />
      </head>
      <body className="antialiased bg-background text-foreground motion-reduce:transform-none motion-reduce:transition-none">
        <RootLayoutClient>
          {children}
        </RootLayoutClient>
      </body>
    </html>
  );
}
