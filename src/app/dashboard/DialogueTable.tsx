import React from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Define the types for the props
type DialogueTableProps = {
  open: boolean;
  selectedArea: string;
  onValueChange: (value: string) => void;
  onClose: () => void;
  filteredData: [{
    Area:string,
    Date:string,
    value:number
  }]
};

const DialogueTable: React.FC<DialogueTableProps> = ({
  open,
  selectedArea,
  onValueChange,
  onClose,
  filteredData,
}) => {
  return (
    <div>
      <Dialog open={open}>
        <DialogContent className='h-[400px]'>
          <Select value={selectedArea} onValueChange={onValueChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="Tank Form Arear">Tank Form Arear</SelectItem>
              <SelectItem value="Building Area">Building Area</SelectItem>
              <SelectItem value="Sleeper Area">Sleeper Area</SelectItem>
            </SelectContent>
          </Select>
          <div
            onClick={onClose}
            className="absolute right-4 top-4 mb-2 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          >
            <Cross2Icon className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </div>
          <Table className='mt-3'>
            <TableHeader>
              <TableRow>
                <TableHead>Area</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((invoice, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{invoice.Area}</TableCell>
                  <TableCell>{invoice.Date}</TableCell>
                  <TableCell>{invoice.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogueTable;
