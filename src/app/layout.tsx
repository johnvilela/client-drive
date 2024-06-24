import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { classHelper } from '@/lib/utils/classHelper';
import './globals.css';

const fontSans = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Client Drive',
  description: 'Make your job more transparent and efficient.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={classHelper(
          'min-h-screen bg-background font-sans antialiased dark',
          fontSans.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
