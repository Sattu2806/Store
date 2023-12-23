import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { long_lead_item } from '@/lib/data/formdata'
import { Card, CardHeader } from '@/components/ui/card'
  

type Props = {}

const LongLeadTable = (props: Props) => {
  return (
    <Card className='px-4 pb-1 z-10 col-span-2 h-[500px] overflow-auto'>
        <CardHeader className='text-center font-semibold text-2xl'>Long Lead Item Table</CardHeader>
        <Table>
        <TableCaption>Long Lead Item Table</TableCaption>
        <TableHeader>
            <TableRow>
            <TableHead className="w-[100px]">ItemID</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Manufacturer</TableHead>
            <TableHead className="text-right">LeadTime(Weeks)</TableHead>
            <TableHead className="text-right">OrderDate</TableHead>
            <TableHead className="text-right">ExpectedDeliveryDate</TableHead>
            <TableHead className="text-right">Status</TableHead>
            <TableHead className="text-right">Remarks</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {long_lead_item.map((item, index) => (
                <TableRow key={index}>
                    <TableCell className="font-medium">{item.ItemID}</TableCell>
                    <TableCell>{item.Description}</TableCell>
                    <TableCell>{item.Manufacturer}</TableCell>
                    <TableCell>{item['LeadTime(Weeks)']}</TableCell>
                    <TableCell>{item.OrderDate}</TableCell>
                    <TableCell>{item.ExpectedDeliveryDate}</TableCell>
                    <TableCell>{item.Status}</TableCell>
                    <TableCell>{item.Remarks}</TableCell>
                </TableRow>
            ))}
        </TableBody>
        </Table>
    </Card>
  )
}

export default LongLeadTable