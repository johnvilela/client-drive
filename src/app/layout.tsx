import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { classHelper } from '@/lib/utils/classHelper';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Client Drive',
  description: 'Share files with ease',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={classHelper(
          'min-h-screen flex bg-background font-sans antialiased dark',
          fontSans.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
