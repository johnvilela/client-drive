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
    <main className="flex-1 grid place-items-center">
      <Card className="max-w-sm w-full">
        <CardHeader>
          <CardTitle>Client Drive</CardTitle>
          <CardDescription>Enter your email to continue</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-2">
            <Input label="Email" type="email" />
            <Button type="submit">Continue</Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
