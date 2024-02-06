import React, { useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog'
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Cross2Icon } from '@radix-ui/react-icons'
import { resourceData } from '@prisma/client'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Skeleton } from '@/components/ui/skeleton'
import { Label } from '@/components/ui/label'
import axios from 'axios'
import { useQuery } from 'react-query'
import { Button } from '../ui/button'


type Props = {
    selectedGroup: string | null;
    selectedOption: string | null;
    setSelectedOption: (value: string) => void;
    opendialogue: boolean;
    setopenDialogue: (value: boolean) => void;
};

const PiechartTableData= ({
    selectedGroup,
    selectedOption,
    setSelectedOption,
    opendialogue,
    setopenDialogue,
}: Props) => {
    const {data: manpowerapiData = [], error: manpowerapiDataError, isLoading: ismanpowerapiDataLoading, refetch:refetchmanpowerapiData} = useQuery<resourceData[]>({
        queryKey:'manpowerdata1',
        queryFn: ()=> axios.get('/api/manpowerdatachart', {
            params:{
                Category:selectedOption,
                group:selectedGroup
            }
        }).then((res) => res.data),
        staleTime:60 * 1000,
        retry:3,
    })
    useEffect(() => {
      refetchmanpowerapiData()
  },[selectedOption, setSelectedOption, selectedGroup])

    if(!manpowerapiData){
      return (
        <Skeleton/>
      )
    }

    const uniqueYearMonthPairs = Array.from(new Set(manpowerapiData.map(item => `${item.Month}-${item.Year}`)))
    const uniqueCategoryTradePairs = Array.from(new Set(manpowerapiData.map(item => `${item.category}-${item.Trade}`)));


    const handleChange = (event: string) => {
        setSelectedOption(event);
    };


    
    console.log(selectedGroup)

 
  return (
    <div>
        <div className='md:max-h-[600px] overflow-auto'>
          <Dialog open={opendialogue}>
            <DialogContent className='max-md:h-[400px] h-[600px] max-w-[1280px] fixed left-[50%] top-[50%] z-50 grid w-full max-md:max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg'>
            <div className='px-3'>
            <div
            onClick={() => setopenDialogue(false)}
             className="absolute right-4 top-4 mb-2 rounded-sm md:opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground z-20">
                <Cross2Icon className="max-md:hidden h-5 w-5 text-red-500 font-semibold" />
                <Button className='md:hidden bg-blue-500'>Close</Button>
                <span className="sr-only max-md:hidden">Close</span>
            </div>
            </div>
            {ismanpowerapiDataLoading ? (
                <Skeleton className="py-5 text-sm md:text-base h-8 " />
            ):(
                <Table className='mt-5'>
                <TableHeader className='w-full sticky top-0 bg-white'>
                  <TableRow>
                    <TableHead className='min-w-[80px]'>Group</TableHead>
                    <TableHead className='min-w-[80px]'>Category</TableHead>
                    <TableHead className='min-w-[250px]'>Trade</TableHead>
                    {uniqueYearMonthPairs?.map((month, index) => (
                      <TableHead className='min-w-[70px]' key={index}>
                        {month.split('-')[0]}-{month.split('-')[1].slice(2)}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {manpowerapiData &&
                    uniqueCategoryTradePairs?.map((data, index1) => (
                      <TableRow  className={`${index1%2 === 1 ? "bg-gray-50" : ""}`} key={index1}>
                        <TableCell>{selectedGroup}</TableCell>
                        <TableCell>{data.split('-')[0]}</TableCell>
                        <TableCell>{data.split('-')[1]}</TableCell>
                        {uniqueYearMonthPairs?.map((month, index) => {
                          const matchingData = manpowerapiData.find((item) => `${item.Month}-${item.Year}` === month && `${item.category}-${item.Trade}` === data);
                          return (
                            <TableCell align='center' key={index+19999}>
                              {matchingData?.Nos || 0}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell className='font-semibold'>Total</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        {uniqueYearMonthPairs?.map((month, index) => {
                            const matchingData = manpowerapiData.filter((item) => `${item.Month}-${item.Year}` === month);
                            const total = matchingData.reduce((acc, current) => acc + (current.Nos|| 0), 0);
                            return (
                            <TableCell align='center' key={index+19999}>
                                {total}
                            </TableCell>
                            );
                        })}
                    </TableRow>
                </TableFooter>
              </Table>
            )}
            </DialogContent>
          </Dialog>
          </div>
    </div>
  )
}

export default PiechartTableData