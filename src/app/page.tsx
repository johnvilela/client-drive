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
import useMutate from '@/lib/hooks/useMutate';
import { CheckEmailStatusDTO, userModule } from '@/lib/modules/userModule';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export default function HomePage() {
  const { register, handleSubmit } = useForm<
    z.infer<typeof CheckEmailStatusDTO>
  >({
    resolver: zodResolver(CheckEmailStatusDTO),
  });
  const { mutate, status } = useMutate({
    method: userModule.checkEmailStatus,
  });

  return (
    <div className="w-screen h-screen grid place-items-center p-4">
      <Card className="max-w-xs w-full">
        <CardHeader>
          <CardTitle>Client Drive</CardTitle>
          <CardDescription>Enter your email to procedee</CardDescription>
        </CardHeader>
        <CardContent>
          {status === 'loading' ? 'Loading...' : status}
          <form
            onSubmit={handleSubmit((data) => mutate(data))}
            className="flex flex-col gap-4"
          >
            <Input type="email" label="Email" {...register('email')} />
            <Button type="submit">Procedee</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
