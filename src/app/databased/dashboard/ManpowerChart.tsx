import { Button } from '@/components/ui/button'
import { Card, CardHeader } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { Bar, BarChart, ComposedChart, LabelList, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { manpowerdata } from '@/lib/data/manpowerdata'
import { Dialog, DialogContent } from '@/components/ui/dialog'
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
import { ManpowerData } from '@prisma/client'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Skeleton } from '@/components/ui/skeleton'

type Data = {
    month: string,
    total: number 
}
type TransformedData = {
    month: string,
    value1: number,
    value2: number
}

type Props = {
    data: Data[],
    label: string,
    color: string
}

const ManpowerCharts = ({ data, label, color }: Props) => {
    const [opendialogue, setopenDialogue] = useState(false)
    const [selectedOption, setSelectedOption] = useState<string | null >(null);
    const showdata = () => {
        if (label.includes('InDirect')) {
            setSelectedOption('Indirect')
        }else if(label.includes('Direct')){
            setSelectedOption('Direct')
        }else if(label.includes('Equipment')){
            setSelectedOption('Equipment')
        }
    }
    let cumulativeSum = 0;

    const monthsArray = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    const dataMap = new Map(data?.map(entry => [entry.month, entry]));

    const dataWithZeroes = monthsArray.map(month => {
        const entry = dataMap.get(month);
        return entry || { month, total: 0 };
    });

    const dataWithCumulative: TransformedData[] = dataWithZeroes.map((entry) => {
        cumulativeSum += entry?.total;
        return {
            ...entry,
            value1: entry.total,
            value2: parseFloat(cumulativeSum.toFixed(2)),
        };
    });

    const {data: manpowerapiData = [], error: manpowerapiDataError, isLoading: ismanpowerapiDataLoading, refetch:refetchmanpowerapiData} = useQuery<ManpowerData[]>({
        queryKey:'manpowerdata',
        queryFn: ()=> axios.get('/api/manpowerdatachart', {
            params:{
                Category:selectedOption
            }
        }).then((res) => res.data),
        staleTime:60 * 1000,
        retry:3,
    })

    console.log(manpowerapiData)

    

    const uniqueYearMonthPairs = Array.from(new Set(manpowerapiData.map(item => `${item.Year}-${item.Month}`)))
    const uniqueCategoryTradePairs = Array.from(new Set(manpowerapiData.map(item => `${item.category}-${item.Trade}`)));


    const handleChange = (event: string) => {
        setSelectedOption(event);
    };

    useEffect(() => {
        refetchmanpowerapiData()
    },[selectedOption])

    const TableDataComponent = () => {
        return (
            <div>
          <Dialog open={opendialogue}>
            <DialogContent className='h-[600px] max-w-[800px] fixed left-[50%] top-[50%] z-50 grid w-full max-md:max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg'>
            <div className='my-2 px-3'>
            <RadioGroup value={selectedOption ? selectedOption : ''} onValueChange={handleChange} className='flex items-center justify-between'>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="All" id="option-one" />
                        <Label htmlFor="All">All</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Indirect" id="option-two" />
                        <Label htmlFor="Indirect">Indirect</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Direct" id="option-three" />
                        <Label htmlFor="Direct">Direct</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Equipment" id="option-three" />
                        <Label htmlFor="Equipment">Equipment</Label>
                    </div>
            </RadioGroup>
            <div
            onClick={() => setopenDialogue(false)}
             className="absolute right-4 top-4 mb-2 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                <Cross2Icon className="h-4 w-4" />
                <span className="sr-only">Close</span>
            </div>
            </div>
            {ismanpowerapiDataLoading ? (
                <Skeleton className="py-5 text-sm md:text-base h-8 " />
            ):(
                <Table className='mt-5'>
                <TableHeader className='w-full sticky top-0 bg-white'>
                  <TableRow>
                    <TableHead className='min-w-[80px]'>Category</TableHead>
                    <TableHead className='min-w-[80px]'>Trade</TableHead>
                    {uniqueYearMonthPairs?.map((month, index) => (
                      <TableHead className='min-w-[100px]' key={index}>
                        {month}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {manpowerapiData &&
                    uniqueCategoryTradePairs?.map((data, index) => (
                      <TableRow key={index}>
                        <TableCell>{data.split('-')[0]}</TableCell>
                        <TableCell>{data.split('-')[1]}</TableCell>
                        {uniqueYearMonthPairs?.map((month, index) => {
                          const matchingData = manpowerdata.find((item) => `${item.Year}-${item.Month}` === month);
                          return (
                            <TableCell align='right' key={index+19999}>
                              {matchingData?.Nos || 0}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            )}
            </DialogContent>
          </Dialog>
          </div>
        );
    };

      
    return (
        <div className='relative'>
            <Card className='px-2'>
                <CardHeader className='text-lg text-center font-semibold'>
                    {label}
                    <Button size='sm' className='my-1 absolute top-3 right-3'    onClick={(e) => {
                        e.preventDefault();
                        setopenDialogue(true);
                        showdata();
                    }}
                    >View Data</Button>
                </CardHeader>
                <ResponsiveContainer width="100%" height={350}>
                    <ComposedChart data={dataWithCumulative}
                              margin={{
                                top: 20,
                            }}
                    >
                        <XAxis
                            dataKey="month"
                            stroke="#888888"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            style={{
                                fontWeight: '600',
                                color: "black"
                            }}
                        />
                        <YAxis
                            stroke="#888888"
                            yAxisId="left"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => `${value}`}
                        />
                        <YAxis
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => `${value}`}
                        yAxisId="right" orientation="right" />
                        <Legend />
                        <Tooltip contentStyle={{ borderRadius: '10px', background: '#fff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderColor: "none" }} />
                        <Bar yAxisId="left" dataKey="value1" fill={color} radius={[4, 4, 0, 0]} >
                            <LabelList dataKey="value1" position="top" className='text-sm' />
                        </Bar>
                        <Line yAxisId="right" type="monotone" dataKey="value2" stroke="#ff7300" dot={false} />
                    </ComposedChart>
                </ResponsiveContainer>
            </Card>
            {ismanpowerapiDataLoading ? (
                <Skeleton className='w-[400px] h-[300px]' />
            ):(
                <TableDataComponent/>
            )}
        </div>
    )
}

export default ManpowerCharts
