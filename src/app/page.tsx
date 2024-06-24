'use client';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
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
import {
  CheckEmailStatusDTO,
  userModule,
  EmailStatus,
} from '@/lib/modules/userModule';
import { zodResolver } from '@hookform/resolvers/zod';
import { TriangleAlert } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export default function HomePage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<z.infer<typeof CheckEmailStatusDTO>>({
    resolver: zodResolver(CheckEmailStatusDTO),
  });
  const { mutate, status, data } = useMutate({
    method: userModule.checkEmailStatus,
  });

  useEffect(() => {
    const email = getValues('email');

    if (data === EmailStatus.REGISTERED)
      return router.push(`/login?email=${email}`);
    if (data === EmailStatus.PENDING)
      return router.push(`/register?email=${email}`);
  }, [data, getValues, router]);

  const showAlert = data === EmailStatus.NOT_REGISTERED && status !== 'loading';

  return (
    <div className="w-screen h-screen grid place-items-center p-4">
      <Card className="max-w-xs w-full">
        <CardHeader>
          <CardTitle>Client Drive</CardTitle>
          <CardDescription>Enter your email to procedee</CardDescription>
        </CardHeader>
        <CardContent>
          {showAlert && (
            <Alert variant="destructive" className="mb-4">
              <TriangleAlert className="w-4 h-4" />
              <AlertTitle>Email not found</AlertTitle>
              <AlertDescription>
                Your email is not registered in our system.
              </AlertDescription>
            </Alert>
          )}
          <form
            onSubmit={handleSubmit((data) => mutate(data))}
            className="flex flex-col gap-4"
          >
            <Input
              type="email"
              label="Email"
              error={errors.email?.message}
              {...register('email')}
            />
            <Button type="submit" isLoading={status === 'loading'}>
              Next step
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
