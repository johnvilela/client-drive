'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CirclePlus, Files, Trash, Users } from 'lucide-react';
import Link from 'next/link';

export default function ClientsPage() {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage>Clients</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Separator className="mt-4" />
      <div className="grid grid-cols-3 gap-2 mt-4">
        <Card className="duration-200 hover:brightness-75">
          <Link href="/management/clients/facebook/files">
            <CardHeader>
              <CardTitle>Facebook</CardTitle>
              <div className="flex gap-4 text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Users size={16} />
                  <p>164</p>
                </div>
                <div className="flex items-center gap-1">
                  <Files size={16} />
                  <p>50</p>
                </div>
              </div>
            </CardHeader>
            <CardFooter className="flex justify-end">
              <Button
                variant="outline"
                size="icon"
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  console.log('Delete client');
                }}
              >
                <Trash />
              </Button>
            </CardFooter>
          </Link>
        </Card>
        <Link
          href="/management/clients/create"
          className="border border-dashed border-border flex flex-col justify-center items-center gap-1 bg-background duration-200 hover:brightness-75"
        >
          <CirclePlus size={32} />
          <p>Create new client</p>
        </Link>
      </div>
    </>
  );
}
