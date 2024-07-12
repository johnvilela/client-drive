'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export default function AppLayout({
  children,
  params: { clientId },
}: Readonly<{
  children: ReactNode;
  params: { clientId: string };
}>) {
  const pathname = usePathname();

  const isFilesTab = pathname.includes('files');

  return (
    <>
      <div className="py-4 flex gap-2">
        <Button variant={isFilesTab ? 'secondary' : 'ghost'}>
          <Link href={`/management/clients/${clientId}/files`}>Files</Link>
        </Button>
        <Button variant={!isFilesTab ? 'secondary' : 'ghost'}>
          <Link href={`/management/clients/${clientId}/users`}>Users</Link>
        </Button>
      </div>
      <div className="mt-4">{children}</div>
    </>
  );
}
