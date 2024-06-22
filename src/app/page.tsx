import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function HomePage() {
  return (
    <div className="w-screen h-screen grid place-items-center p-4">
      <Card className="max-w-xs w-full">
        <CardHeader>
          <CardTitle>Client Drive</CardTitle>
          <CardDescription>Enter your credentials to sign in</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4">
            <Input type="email" label="Email" />
            <Input type="password" label="Password" />
            <Button type="submit">Sign in</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
