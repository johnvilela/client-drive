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
import { useForm } from 'react-hook-form';

export default function RegisterPage() {
  const { register, handleSubmit } = useForm();

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
            onSubmit={handleSubmit((data) => console.log(data))}
            className="flex flex-col gap-4"
          >
            <p>
              Email:
              <strong> ba.john.vidal@gmail.com</strong>
            </p>
            <Input type="email" label="Email" {...register('email')} />
            <Button type="submit">Create password</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
