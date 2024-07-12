import { Avatar, AvatarFallback } from './avatar';

export function Navbar() {
  return (
    <nav className="w-full h-16 flex items-center justify-between px-4 border-b border-border">
      <p>
        <span className="font-bold text-2xl">CD</span>
      </p>
      <Avatar>
        <AvatarFallback>JV</AvatarFallback>
      </Avatar>
    </nav>
  );
}
