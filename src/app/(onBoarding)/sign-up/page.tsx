'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useSearchParams } from 'next/navigation';

export default function SignUpPage() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email');

  return (
    <main className="flex-1 grid place-items-center">
      <Card className="max-w-sm w-full">
        <CardHeader>
          <CardTitle>Client Drive</CardTitle>
          <CardDescription>Create an account to get started</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-2">
            <Input label="Name" type="text" />
            <Input label="Email" type="email" defaultValue={email || ''} />
            <Input label="Password" type="password" />
            <Button type="submit">Sign up</Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
