'use client'
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent} from '@/components/ui/dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Charts from './Charts';
import { manpower } from '@/lib/data/formdata';
import { Label } from '@/components/ui/label';
import { Project } from '@prisma/client';
import { useQuery } from 'react-query';
import axios from 'axios';

type Monthlydata = {
    Month:string,
    Value:number
}

type Props = {
    data: Project[],
    monthlydataDirect : Monthlydata[],
     monthlydataInDirect: Monthlydata[], 
     monthlydataEquipment: Monthlydata[]
}

type WeeklyDataItem = {
    WeekNumber: number;
    _sum: {
      FormWork: number;
      Concrete: number;
      Excavation: number;
      Rebar: number;
    };
  };

type MonthlyDataItem = {
  MonthName: string;
  _sum: {
    FormWork: number;
    Concrete: number;
    Excavation: number;
    Rebar: number;
  };
};

type TableDataItem = {
  Area:string
  MonthName: string;
  WeekNumber: number;
  Date: string
  _sum: {
    FormWork: number;
    Concrete: number;
    Excavation: number;
    Rebar: number;
  };
};

const Dashboard = ({data, monthlydataDirect, monthlydataInDirect, monthlydataEquipment}:Props) => {

    const [selectedOption, setSelectedOption] = useState('day');
    const [selectedArea, setSelectedArea] = useState<string>('All');
    const {data: quantityweekData, error: quantityweekDatanError, isLoading: isquantityweekDataLoading, refetch:refetchquantityweekData} = useQuery<WeeklyDataItem[]>({
        queryKey:'quantityweekData',
        queryFn: ()=> axios.get('/api/quantitybyweek').then((res) => res.data),
        staleTime:60 * 1000,
        retry:3,
    })

    const {data: quantitymonthData, error: quantitymonthDatanError, isLoading: isquantitymonthDataLoading, refetch:refetchquantitymonthData} = useQuery<MonthlyDataItem[]>({
        queryKey:'quantitymonthData',
        queryFn: ()=> axios.get('/api/quantitybymonth').then((res) => res.data),
        staleTime:60 * 1000,
        retry:3,
    })

    const [opendialogue, setopenDialogue] = useState({
        Excavation: false,
        FormWork: false,
        Rebar: false,
        Concrete: false,
    })

    const {data: TableData, error: TableDatanError, isLoading: isTableDataLoading, refetch:refetchTablehData} = useQuery<TableDataItem[]>({
        queryKey:'TableData',
        queryFn: ()=> axios.get('/api/quantitybyarea', {params: {
            Type: Object.entries(opendialogue).find(([key, value]) => value)?.[0] || '', // Find the first truthy value in opendialogue and use its key as Type
            option:selectedOption,
            Area: selectedArea
        }}).then((res) => res.data),
        staleTime:60 * 1000,
        retry:3,
    })

    useEffect(() => {
        refetchTablehData()
    },[opendialogue, selectedArea,selectedOption])

    console.log(TableData)

    


    const totals = data.reduce(
        (accumulator, currentItem) => {
        accumulator.Excavation += currentItem.Excavation;
        accumulator.FormWork += currentItem.FormWork;
        accumulator.Rebar += currentItem.Rebar;
        accumulator.Concrete += currentItem.Concrete;
        return accumulator;
        },
        { Excavation: 0, FormWork: 0, Rebar: 0, Concrete: 0 }
    );

    const totalSum = TableData
    ? TableData.reduce((sum, invoice) => {
        if (invoice._sum) {
          sum += invoice._sum.FormWork || 0;
          sum += invoice._sum.Concrete || 0;
          sum += invoice._sum.Excavation || 0;
          sum += invoice._sum.Rebar || 0;
        }
        return sum;
      }, 0)
    : 0;
  
    const handleChange = (event: string) => {
        setSelectedOption(event);
    };

    const Direct = monthlydataDirect.map(({ Month, Value }) => ({ month: Month, total: Value }));
    const Indirect = monthlydataInDirect.map(({ Month, Value }) => ({ month: Month, total: Value }));
    const Equipment = monthlydataEquipment.map(({ Month, Value }) => ({ month: Month, total: Value }));


    if(!quantitymonthData){
        return <div>No data</div>
    }

    const FormWorkMonthlyData = quantitymonthData.map((item) => ({
        month: item.MonthName,
        total: item._sum.FormWork,
    }))
    const ExcavationMonthlyData = quantitymonthData.map((item) => ({
        month: item.MonthName,
        total: item._sum.Excavation,
    }))
    const RebarMonthlyData = quantitymonthData.map((item) => ({
        month: item.MonthName,
        total: item._sum.Rebar
    }))
    const ConcreteMonthlyData = quantitymonthData.map((item) => ({
        month: item.MonthName,
        total: item._sum.Concrete,
    }))

  
  return (
    <div >
        <Dialog open={opendialogue.Excavation || opendialogue.FormWork || opendialogue.Rebar || opendialogue.Concrete}>
            <DialogContent className='h-[600px] max-w-[800px]'>
            <div className='flex items-center space-x-6'>
                <Select value={selectedArea} onValueChange={(value) => setSelectedArea(value)}>
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
                <RadioGroup value={selectedOption} onValueChange={handleChange} className='flex items-center justify-between'>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="day" id="option-one" />
                        <Label htmlFor="day">Day</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="week" id="option-two" />
                        <Label htmlFor="week">Week</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="month" id="option-three" />
                        <Label htmlFor="month">Month</Label>
                    </div>
                </RadioGroup>
            </div>
            <div
            onClick={() => setopenDialogue({
                Excavation: false,
                FormWork: false,
                Rebar: false,
                Concrete: false,
              })}
             className="absolute right-4 top-4 mb-2 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                <Cross2Icon className="h-4 w-4" />
                <span className="sr-only">Close</span>
            </div>
            {isTableDataLoading ? (
                <p className=''>Loading Data...</p>
            ):(
                <Table className='mt-3'>
                <TableHeader className='w-full sticky top-0 bg-white'>
                    <TableRow>
                        <TableHead>Area</TableHead>
                        <TableHead>Date</TableHead>
                        {opendialogue.Excavation && <TableHead>Excavation</TableHead>}
                        {opendialogue.FormWork && <TableHead>FormWork</TableHead>}
                        {opendialogue.Rebar && <TableHead>Rebar</TableHead>}
                        {opendialogue.Concrete && <TableHead>Concrete</TableHead>}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {  TableData && TableData.map((item, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium">{item.Area}</TableCell>
                        <TableCell>{selectedOption === 'day' ? new Date(item.Date).toLocaleDateString() :  item.Date}{item.MonthName}{item.WeekNumber ? `Week ${item.WeekNumber}`: ''}</TableCell>
                        <TableCell>{item._sum.Concrete}{item._sum.Excavation}{item._sum.FormWork}{item._sum.Rebar}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                    <TableCell colSpan={1}>Total</TableCell>
                    <TableCell colSpan={2} className="text-right">{totalSum.toFixed(2)}
                    {opendialogue.Excavation || opendialogue.Concrete ? <p className='inline'> M<sup>3</sup></p> : ''}
                    {opendialogue.FormWork ?  <p className='inline'> M<sup>2</sup></p> : ""}
                    {opendialogue.Rebar ? " MT" : ""}
                    </TableCell>
                    </TableRow>
                </TableFooter>
                </Table>
            )}
            </DialogContent>
        </Dialog>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4 sticky top-0 z-20 py-2 bg-white '>
        <Card onClick={() => setopenDialogue({ ...opendialogue, Excavation: true })} className='cursor-pointer'>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
                Total Excavation
            </CardTitle>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
            >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            </CardHeader>
            <CardContent>
            <div className="text-2xl font-bold">{totals.Excavation.toFixed(2)} M<sup>3</sup></div>
            </CardContent>
        </Card>
        <Card onClick={() => setopenDialogue({...opendialogue, FormWork: true})} className='cursor-pointer'>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
                Total FormWork
            </CardTitle>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
            >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            </CardHeader>
            <CardContent>
            <div className="text-2xl font-bold">{totals.FormWork.toFixed(2)} M<sup>2</sup></div>
            </CardContent>
        </Card>
        <Card onClick={() => setopenDialogue({...opendialogue, Rebar: true})} className='cursor-pointer'>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
                Total Rebar
            </CardTitle>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
            >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            </CardHeader>
            <CardContent>
            <div className="text-2xl font-bold">{totals.Rebar.toFixed(2)} MT</div>
            </CardContent>
        </Card>
        <Card onClick={() => setopenDialogue({...opendialogue, Concrete: true})} className='cursor-pointer'>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
            Total Concrete
            </CardTitle>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
            >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            </CardHeader>
            <CardContent>
            <div className="text-2xl font-bold">{totals.Concrete.toFixed(2)} M<sup>3</sup></div>
            </CardContent>
        </Card>
        </div>
        <div className='grid md:grid-cols-2 gap-10 mt-10'>
            <Charts data={ExcavationMonthlyData} label='Excavation Productivity By Month' color='#FF8080'/>
            <Charts data={FormWorkMonthlyData} label='Formwork Productivity By Month' color='#BC7AF9'/>
            <Charts data={RebarMonthlyData} label='Rebar Productivity By Month' color='#FA7070'/>
            <Charts data={ConcreteMonthlyData} label='Concrete Productivity By Month' color='#29ADB2'/>
            <Charts data={Direct} label='Direct' color='#65B741'/>
            <Charts data={Indirect} label='InDirect' color='#7071E8'/>
            <Charts data={Equipment} label='Equipment' color='#DF826C'/>
        </div>
        <div className='my-10'>
        </div>
    </div>
  );
};

export default Dashboard;



