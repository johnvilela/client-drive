import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CirclePlus, Trash } from 'lucide-react';

export default function ClientsPage() {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbPage>Clients</BreadcrumbPage>
        </BreadcrumbItem>
      </Breadcrumb>
      <Separator className="mt-4" />
      <div className="grid grid-cols-3 gap-2 mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Client 1</CardTitle>
            <CardDescription>164 Files uploaded</CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-end">
            <Button variant="outline" size="icon">
              <Trash />
            </Button>
          </CardFooter>
        </Card>
        <button className="border border-dashed border-border flex flex-col justify-center items-center gap-1 bg-background hover:brightness-75">
          <CirclePlus size={32} />
          <p>Create new client</p>
        </button>
      </div>
    </>
  );
}
