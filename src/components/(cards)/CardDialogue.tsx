import React, { useEffect, useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Dialog, DialogContent} from '@/components/ui/dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from '@/components/ui/label';
import { useQuery } from 'react-query';
import { Category, Group } from '@prisma/client';
import axios from 'axios';
import { TableDataItem } from '@/lib/types';
import { Button } from '../ui/button';

type Props = {
    opendialogue: {
        excavationQty: boolean;
        formWorkQty: boolean;
        rebarQty: boolean;
        concreteQty: boolean;
      };
      setopenDialogue: React.Dispatch<
        React.SetStateAction<{
          excavationQty: boolean;
          formWorkQty: boolean;
          rebarQty: boolean;
          concreteQty: boolean;
        }>
    >
    
}

const CardDialogue = ({opendialogue, setopenDialogue}: Props) => {
    const [selectedOption, setSelectedOption] = useState('day');
    const [selectedGroup, setSelectedGroup] = useState<string | undefined>(undefined);
    const [selectedCategory, setSelectedCatefory] = useState<string | undefined>(undefined);

    const handleChange = (event: string) => {
        setSelectedOption(event);
    };

    const {data: groupData = [], error: groupDataError, isLoading: groupDataLoading, refetch:refetchgroupData} = useQuery<Group[]>({
        queryKey:'groupdata',
        queryFn: ()=> axios.get('/api/group').then((res) => res.data),
        staleTime:60 * 1000,
        retry:3,
      })
      const {data: categoryData = [], error: categoryDataError, isLoading: categoryDataLoading, refetch:refetchcategoryData} = useQuery<Category[]>({
        queryKey:'categorydata',
        queryFn: ()=> axios.get('/api/categorybyparams',{
          params:{
            groupId:selectedGroup
          }
        }).then((res) => res.data),
        staleTime:60 * 1000,
        retry:3,
    })

    const {data: Table1Data, error: Table1DatanError, isLoading: isTable1DataLoading, refetch:refetch1TablehData} = useQuery<TableDataItem[]>({
        queryKey:'Table1Data',
        queryFn: ()=> axios.get('/api/tablequantityapi', {params: {
            Type: Object.entries(opendialogue).find(([key, value]) => value)?.[0] || '',
            option:selectedOption,
            groupId: selectedGroup === undefined ? null : selectedGroup,
            categoryId:selectedCategory === undefined ? null : selectedCategory,
        }}).then((res) => res.data),
        staleTime:60 * 1000,
        retry:3,
    })

    const totalSum = Table1Data
    ? Table1Data.reduce((sum, invoice) => {
        if (invoice._sum) {
          sum += invoice._sum.formWorkQty || 0;
          sum += invoice._sum.concreteQty || 0;
          sum += invoice._sum.excavationQty || 0;
          sum += invoice._sum.rebarQty || 0;
        }
        return sum;
      }, 0)
    : 0;
  

    useEffect(() => {
        refetchcategoryData()
    },[selectedGroup])



    useEffect(() => {
        refetch1TablehData()
    },[opendialogue, ,selectedOption,selectedCategory,selectedGroup])


  return (
    <div className='relative'>
        <Dialog open={opendialogue.excavationQty || opendialogue.formWorkQty || opendialogue.rebarQty || opendialogue.concreteQty}>
            <DialogContent className=' max-md:h-[500px] h-[600px] max-w-[1280px] fixed left-[50%] top-[50%] z-50 grid w-full max-md:max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg'>
            <div className='flex items-center space-x-6 overflow-x-scroll pt-10'>
                <Select value={selectedGroup} onValueChange={(value) => setSelectedGroup(value)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select Group" />
                    </SelectTrigger>
                    <SelectContent>
                        {groupData?.map((group,index) => (
                            <SelectItem key={index} value={group.id.toString()}>{group.name}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <Select value={selectedCategory} onValueChange={(value) => setSelectedCatefory(value)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                        {categoryData?.map((category,index) => (
                            <SelectItem key={index} value={category.id.toString()}>{category.name}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <RadioGroup value={selectedOption} onValueChange={handleChange} className='flex items-center justify-between'>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="day" id="option-one" />
                        <Label htmlFor="day">Daily Report</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="week" id="option-two" />
                        <Label htmlFor="week">Weekly Report</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="month" id="option-three" />
                        <Label htmlFor="month">Monthly Report</Label>
                    </div>
                </RadioGroup>
            </div>
            <div
            onClick={() => setopenDialogue({
                excavationQty :false,
                formWorkQty  :false,
                rebarQty       :false,
                concreteQty   :false
              })}
             className="absolute right-4 top-4 mb-2 rounded-sm md:opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                <Cross2Icon className="max-md:hidden h-5 w-5 text-red-500 font-semibold" />
                <Button className='md:hidden bg-blue-500'>Close</Button>
                <span className="sr-only">Close</span>
            </div>
            {isTable1DataLoading ? (
                <p className=''>Loading Data...</p>
            ):(
                <Table className='mt-3'>
                <TableHeader className='w-full sticky top-0 bg-white'>
                    <TableRow>
                        <TableHead>Date</TableHead>
                        {opendialogue.excavationQty && <TableHead>Excavation</TableHead>}
                        {opendialogue.formWorkQty && <TableHead>FormWork</TableHead>}
                        {opendialogue.rebarQty && <TableHead>Rebar</TableHead>}
                        {opendialogue.concreteQty && <TableHead>Concrete</TableHead>}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {  Table1Data && Table1Data.map((item, index) => {
                        const sumValue = (
                            (item._sum.concreteQty ? item._sum.concreteQty: 0) +
                            (item._sum.excavationQty ? item._sum.excavationQty : 0) +
                            (item._sum.formWorkQty ? item._sum.formWorkQty : 0) +
                            (item._sum.rebarQty ? item._sum.rebarQty : 0)
                        );
                    return (
                    <TableRow key={index}>
                        <TableCell>{selectedOption === 'day' ? new Date(item.date).toLocaleDateString() :  item.date}{item.MonthName}{item.WeekNumber ? `Week ${item.WeekNumber}`: ''}</TableCell>
                        <TableCell>{sumValue.toFixed(2)}</TableCell>
                    </TableRow>
                    )
                })}
                </TableBody>
                <TableFooter>
                    <TableRow>
                    <TableCell colSpan={1}>Total</TableCell>
                    <TableCell colSpan={2} className="text-right">{totalSum.toFixed(2)}
                    {opendialogue.excavationQty || opendialogue.concreteQty ? <p className='inline'> M<sup>3</sup></p> : ''}
                    {opendialogue.formWorkQty ?  <p className='inline'> M<sup>2</sup></p> : ""}
                    {opendialogue.rebarQty ? " MT" : ""}
                    </TableCell>
                    </TableRow>
                </TableFooter>
                </Table>
            )}
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default CardDialogue