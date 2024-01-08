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
import { DailyProductivity } from '@prisma/client'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Skeleton } from '@/components/ui/skeleton'
import { Label } from '@/components/ui/label'
import axios from 'axios'
import { useQuery } from 'react-query'


type Props = {
    selectedOption: string | null;
    setSelectedOption: (value: string) => void;
    opendialogue: boolean;
    setopenDialogue: (value: boolean) => void;
    selectedMonth:string | null
};

const ProductivityTable= ({
    selectedOption,
    setSelectedOption,
    opendialogue,
    setopenDialogue,
    selectedMonth,
}: Props) => {
    const {data: productivityData = [], error: productivityDataError, isLoading: productivityDataLoading, refetch:refetchproductivityData} = useQuery<DailyProductivity[]>({
        queryKey:'productivitydata',
        queryFn: ()=> axios.get('/api/productivitytableapi', {
            params:{
                Type:selectedOption,
                selectedMonth: selectedMonth
            }
        }).then((res) => res.data),
        staleTime:60 * 1000,
        retry:3,
    })

    useEffect(() => {
      refetchproductivityData()
    }, [selectedMonth, selectedOption])
    
    if(!productivityData){
      return (
        <Skeleton/>
      )
    }



    const calculateTotal = () => {
      if (selectedOption === null) {
        return 0;
      }
    
      return productivityData.reduce((total, item) => {
        const optionValue = item[selectedOption as keyof DailyProductivity];
    
        // Ensure that the optionValue is a number before adding
        const numericValue = typeof optionValue === 'number' ? optionValue : 0;
    
        return total + numericValue;
      }, 0);
    };

    const sum = calculateTotal()
    

    
 
  return (
    <div>
        <div className='max-h-[600px] overflow-auto'>
          <Dialog open={opendialogue}>
            <DialogContent className='max-md:h-[400px] h-[600px] max-w-[800px] fixed left-[50%] top-[50%] z-50 grid w-full max-md:max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg'>
            <div className='px-3 text-center font-medium text-xl'>
            Productivity data of <p className='capitalize inline-block'>{selectedOption}</p> for {selectedMonth}
            <div
            onClick={() => setopenDialogue(false)}
             className="absolute right-4 top-4 mb-2 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                <Cross2Icon className="h-5 w-5 text-red-500 font-semibold" />
                <span className="sr-only">Close</span>
            </div>
            </div>
            {productivityDataLoading ? (
                <Skeleton className="py-5 text-sm md:text-base h-8 " />
            ):(
              <Table className='mt-3'>
              <TableHeader className='w-full sticky top-0 bg-white'>
                  <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>{selectedOption}</TableHead>
                  </TableRow>
              </TableHeader>
              <TableBody>
                  {  productivityData && productivityData.map((item, index) => {
                  return (
                  <TableRow key={index}>
                      <TableCell>{new Date(item?.date)?.toLocaleDateString()}</TableCell>
                        {selectedOption === 'excavationQty' && <TableHead>{item.excavationQty?.toFixed(1)}</TableHead>}
                        {selectedOption === 'formWorkQty' && <TableHead>{item.formWorkQty?.toFixed(1)}</TableHead>}
                        {selectedOption === 'rebarQty' && <TableHead>{item.rebarQty?.toFixed(1)}</TableHead>}
                        {selectedOption === 'concreteQty' && <TableHead>{item.concreteQty?.toFixed(1)}</TableHead>}
                  </TableRow>
                  )
              })}
              </TableBody>
              <TableFooter>
                  <TableRow>
                  <TableCell colSpan={1}>Total</TableCell>
                  <TableCell colSpan={2} className="text-right">{sum.toFixed(1)}
                      {selectedOption === 'excavationQty' && <p className='inline'> M<sup>3</sup></p> }
                      {selectedOption === 'formWorkQty' &&  <p className='inline'> M<sup>2</sup></p>}
                      {selectedOption === 'rebarQty' &&  <p className='inline'> MT</p>}
                      {selectedOption === 'concreteQty' && <p className='inline'> M<sup>3</sup></p> }
                  </TableCell>
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

export default ProductivityTable