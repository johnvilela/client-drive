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

export default function LoginPage() {
  const { register, handleSubmit } = useForm();

  return (
    <div className="w-screen h-screen grid place-items-center p-4">
      <Card className="max-w-xs w-full">
        <CardHeader>
          <CardTitle>Client Drive</CardTitle>
          <CardDescription>Welcome back! Enter your password</CardDescription>
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
            <Input type="password" label="Password" {...register('password')} />
            <Button type="submit">Log in</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
