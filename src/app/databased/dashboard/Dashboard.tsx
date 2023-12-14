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
import { manpower } from '@/lib/data/formdata';
import { Label } from '@/components/ui/label';
import { Project } from '@prisma/client';
import { useQuery } from 'react-query';
import axios from 'axios';
import Charts from './Charts';

import { AggregatedData, ManpowerItem, MonthlyChartData, Monthlydata, TableDataItem,} from '@/lib/types';
import ComposedCharts from './ComposedCharts';
import ManpowerCharts from './ManpowerChart';
import CardComponent from './CardComponent';

type Props = {
    total: AggregatedData,
    monthlydataDirect : Monthlydata[],
     monthlydataInDirect: Monthlydata[], 
     monthlydataEquipment: Monthlydata[],
     manpowerdata:ManpowerItem[]
}

type monthdata = {
    month:string
    total:number
}

type QuantityMonthData = {
    formWorkMonthData : monthdata[], 
    concreteMonthData : monthdata[], 
    excavationMonthData : monthdata[], 
    rebarMonthData : monthdata[], 
}

const Dashboard = ({total, monthlydataDirect, monthlydataInDirect, monthlydataEquipment, manpowerdata}:Props) => {

    const [selectedOption, setSelectedOption] = useState('day');
    const [selectedArea, setSelectedArea] = useState<string>('All');

    const {data: quantitymonthData = {}, error: quantitymonthDatanError, isLoading: isquantitymonthDataLoading, refetch:refetchquantitymonthData} = useQuery<QuantityMonthData>({
        queryKey:'quantitymonthData',
        queryFn: ()=> axios.get('/api/quantitybymonth').then((res) => res.data),
        staleTime:60 * 1000,
        retry:3,
    })
    const {formWorkMonthData, concreteMonthData, excavationMonthData, rebarMonthData}  = quantitymonthData

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

    if(!total){
        return <div>No data</div>
    }


    if(!quantitymonthData){
        return <div>No data</div>
    }

  
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
                    {  TableData && TableData.map((item, index) => {
                        const sumValue = (
                            (item._sum.Concrete ? item._sum.Concrete : 0) +
                            (item._sum.Excavation ? item._sum.Excavation : 0) +
                            (item._sum.FormWork ? item._sum.FormWork : 0) +
                            (item._sum.Rebar ? item._sum.Rebar : 0)
                        );
                    return (
                    <TableRow key={index}>
                        <TableCell className="font-medium">{item.Area}</TableCell>
                        <TableCell>{selectedOption === 'day' ? new Date(item.Date).toLocaleDateString() :  item.Date}{item.MonthName}{item.WeekNumber ? `Week ${item.WeekNumber}`: ''}</TableCell>
                        <TableCell>{sumValue.toFixed(2)}</TableCell>
                    </TableRow>
                    )
                })}
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
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4 md:sticky top-0 z-20 py-2 bg-white '>
        <div onClick={() => setopenDialogue({ ...opendialogue, Excavation: true })}>
            <CardComponent total={total} label='Total Excavation' unit = {<>M<sup>3</sup></>} />
        </div>
        <div onClick={() => setopenDialogue({...opendialogue, FormWork: true})}>
            <CardComponent total={total} label='Total FormWork' unit = {<>M<sup>2</sup></>} />
        </div>
        <div onClick={() => setopenDialogue({...opendialogue, Rebar: true})}>
            <CardComponent total={total} label='Total Rebar' unit = {<>MT</>} />
        </div>
        <div onClick={() => setopenDialogue({...opendialogue, Concrete: true})}>
            <CardComponent total={total} label='Total Concrete' unit = {<>M<sup>3</sup></>} />
        </div>
        </div>
        <div className='grid md:grid-cols-2 gap-10 mt-10'>
            <Charts data={excavationMonthData} label='Excavation Productivity By Month' color='#FF8080'/>
            <Charts data={formWorkMonthData} label='Formwork Productivity By Month' color='#BC7AF9'/>
            <Charts data={rebarMonthData} label='Rebar Productivity By Month' color='#FA7070'/>
            <Charts data={concreteMonthData} label='Concrete Productivity By Month' color='#29ADB2'/>
            <ManpowerCharts data={Direct} label='Direct ManPower Histogram' color='#65B741'/>
            <ManpowerCharts data={Indirect} label='InDirect ManPower Histogram' color='#7071E8'/>
            <ManpowerCharts data={Equipment} label='Equipment Histogram' color='#DF826C'/>
        </div>
            <ComposedCharts manpowerdata={manpowerdata} />
        <div className='my-10'>
        </div>
    </div>
  );
};

export default Dashboard;
