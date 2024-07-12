import { Download, Trash2 } from 'lucide-react';
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

export function ListFiles() {
  return (
    <Table>
      <TableCaption>A list of files uploaded to this client.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-64">Name</TableHead>
          <TableHead>Upload date</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">PMOC_123.pdf</TableCell>
          <TableCell>15/07/2023</TableCell>
          <TableCell className="text-right">
            <Button variant="ghost" size="icon">
              <Download size={16} />
            </Button>
            <Button variant="ghost" size="icon">
              <Download size={16} />
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
