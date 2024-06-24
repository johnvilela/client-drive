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
import { CreateUserDTO, UserType, userModule } from '@/lib/modules/userModule';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export default function RegisterPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const email = searchParams.email as string;
  const router = useRouter();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<z.infer<typeof CreateUserDTO>>({
    resolver: zodResolver(CreateUserDTO),
    defaultValues: {
      email,
    },
  });
  const { mutate, status, data } = useMutate({
    method: userModule.createUser,
  });

  useEffect(() => {
    if (status === 'success') {
      if (data === UserType.ADMIN) return router.push('/admin/dashboard');
      if (data === UserType.CLIENT) return router.push('/client/dashboard');
    }
  }, [data, router, status]);

  return (
    <div className="w-screen h-screen grid place-items-center p-4">
      <Card className="max-w-xs w-full">
        <CardHeader>
          <CardTitle>Client Drive</CardTitle>
          <CardDescription>
            Welcome! Create a password to access your files
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit((data) => mutate(data))}
            className="flex flex-col gap-4"
          >
            <p>
              Email:
              <strong>{` ${email}`}</strong>
            </p>
            <Input type="hidden" {...register('email')} />
            <Input type="password" label="Password" {...register('password')} />
            <Button type="submit" isLoading={status === 'loading'}>
              Create password
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
