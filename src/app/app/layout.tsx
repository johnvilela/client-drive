import { Navbar } from '@/components/ui/navbar';
import { ReactNode } from 'react';

export default function AppLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <main className="flex-1">
      <Navbar />
      <section className="max-w-4xl mx-auto mt-4">{children}</section>
    </main>
  );
}
