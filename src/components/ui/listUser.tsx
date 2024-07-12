import { Pencil, Trash2 } from 'lucide-react';
import { Button } from './button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './table';
import { Avatar, AvatarFallback } from './avatar';

export function ListUser() {
  return (
    <Table>
      <TableCaption>A list of users related to client.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-64">Name</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium flex gap-2 items-center">
            <Avatar>
              <AvatarFallback>JV</AvatarFallback>
            </Avatar>
            John Vidal
          </TableCell>
          <TableCell className="text-right">
            <Button variant="ghost" size="icon">
              <Pencil size={16} />
            </Button>
            <Button variant="ghost" size="icon">
              <Trash2 size={16} />
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
