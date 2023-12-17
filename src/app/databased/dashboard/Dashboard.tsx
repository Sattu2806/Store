'use client'
import React, { useEffect, useState } from 'react';
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
import { Label } from '@/components/ui/label';
import { useQuery } from 'react-query';
import axios from 'axios';
import Charts from './Charts';

import { AggregatedData, ManpowerItem, MonthlyChartData, Monthlydata, TableDataItem, sumQuantityData,} from '@/lib/types';
import ComposedCharts from './ComposedCharts';
import ManpowerCharts from './ManpowerChart';
import CardComponent from './CardComponent';
import ActualVsPallnedChart from './ActualvsPlannedChart';
import { sCurveData, NCRTable, ConcretePlannedVsActual } from '@/lib/data/formdata';
import ThreeBarChart from './ThreeBarChart';
import { Category, Group } from '@prisma/client';

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
    const [selectedGroup, setSelectedGroup] = useState<string | undefined>(undefined);
    const [selectedCategory, setSelectedCatefory] = useState<string | undefined>(undefined);

    const {data: quantitymonthData =[], error: quantitymonthDatanError, isLoading: isquantitymonthDataLoading, refetch:refetchquantitymonthData} = useQuery<QuantityMonthData>({
        queryKey:'quantitymonthData',
        queryFn: ()=> axios.get('/api/chartquantityapi').then((res) => res.data),
        staleTime:60 * 1000,
        retry:3,
    })
    const {formWorkMonthData, concreteMonthData, excavationMonthData, rebarMonthData}  = quantitymonthData

    const {data: groupData = [], error: groupDataError, isLoading: groupDataLoading, refetch:refetchgroupData} = useQuery<Group[]>({
        queryKey:'groupdata',
        queryFn: ()=> axios.get('/api/group').then((res) => res.data),
        staleTime:60 * 1000,
        retry:3,
      })
      const {data: categoryData = [], error: categoryDataError, isLoading: categoryDataLoading, refetch:refetchcategoryData} = useQuery<Category[]>({
        queryKey:'categorydata',
        queryFn: ()=> axios.get('/api/category').then((res) => res.data),
        staleTime:60 * 1000,
        retry:3,
      })
      const {data: sumData = [], error: sumDataError, isLoading: sumDataLoading, refetch:refetchsumData} = useQuery<sumQuantityData[]>({
        queryKey:'sumdata',
        queryFn: ()=> axios.get('/api/sumquantityapi').then((res) => res.data),
        staleTime:60 * 1000,
        retry:3,
      })
      console.log(sumData)

    const [opendialogue, setopenDialogue] = useState({
        excavationQty :false,
        formWorkQty  :false,
        rebarQty       :false,
        concreteQty   :false
    })

    // const {data: TableData, error: TableDatanError, isLoading: isTableDataLoading, refetch:refetchTablehData} = useQuery<TableDataItem[]>({
    //     queryKey:'TableData',
    //     queryFn: ()=> axios.get('/api/quantitybyarea', {params: {
    //         Type: Object.entries(opendialogue).find(([key, value]) => value)?.[0] || '', // Find the first truthy value in opendialogue and use its key as Type
    //         option:selectedOption,
    //         Area: selectedArea
    //     }}).then((res) => res.data),
    //     staleTime:60 * 1000,
    //     retry:3,
    // })
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


    useEffect(() => {
        refetch1TablehData()
    },[opendialogue, ,selectedOption,selectedCategory,selectedGroup])


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
        <Dialog open={opendialogue.excavationQty || opendialogue.formWorkQty || opendialogue.rebarQty || opendialogue.concreteQty}>
            <DialogContent className='h-[600px] max-w-[800px]'>
            <div className='flex items-center space-x-6'>
                <Select value={selectedGroup} onValueChange={(value) => setSelectedGroup(value)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                    <SelectContent>
                        {groupData?.map((group,index) => (
                            <SelectItem value={group.id.toString()}>{group.name}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <Select value={selectedCategory} onValueChange={(value) => setSelectedCatefory(value)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                    <SelectContent>
                        {categoryData?.map((category,index) => (
                            <SelectItem value={category.id.toString()}>{category.name}</SelectItem>
                        ))}
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
                excavationQty :false,
                formWorkQty  :false,
                rebarQty       :false,
                concreteQty   :false
              })}
             className="absolute right-4 top-4 mb-2 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                <Cross2Icon className="h-4 w-4" />
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
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 md:sticky top-0 z-20 py-2 bg-white '>
            <div onClick={() => setopenDialogue({ ...opendialogue, excavationQty: true })}>
                <CardComponent total={total} label='Excavation' unit = {<>M<sup>3</sup></>} />
            </div>
            {/* <div onClick={() => setopenDialogue({...opendialogue, FormWork: true})}>
                <CardComponent total={total} label='Total FormWork' unit = {<>M<sup>2</sup></>} />
            </div> */}
            <div onClick={() => setopenDialogue({...opendialogue, rebarQty: true})}>
                <CardComponent total={total} label='Rebar' unit = {<>MT</>} />
            </div>
            <div onClick={() => setopenDialogue({...opendialogue, concreteQty: true})}>
                <CardComponent total={total} label='Concrete' unit = {<>M<sup>3</sup></>} />
            </div>
        </div>
        <div className='grid md:grid-cols-2 gap-10 mt-3'>
            <div className='space-y-3 flex flex-col'>
            <Charts data={excavationMonthData} label='Excavation Productivity By Month' color='#FF8080'/>
            <Charts data={formWorkMonthData} label='Formwork Productivity By Month' color='#BC7AF9'/>
            <Charts data={rebarMonthData} label='Rebar Productivity By Month' color='#FA7070'/>
            <Charts data={concreteMonthData} label='Concrete Productivity By Month' color='#29ADB2'/>
            <ThreeBarChart data={ConcretePlannedVsActual} label='Comulative Concrete Actual Vs Planned' color='#FF6C22'/>
            <ThreeBarChart data={NCRTable} label='Comulative Non Complaince Report (NCR)' color='#9A4444'/>
            </div>
            <div className='space-y-3 flex flex-col'>
            <ManpowerCharts data={Direct} label='Direct ManPower Histogram' color='#65B741'/>
            <ManpowerCharts data={Indirect} label='InDirect ManPower Histogram' color='#7071E8'/>
            <ManpowerCharts data={Equipment} label='Equipment Histogram' color='#9ADE7B'/>
            <ActualVsPallnedChart data={sCurveData} label='Cumulative Actual Vs Planned' color='#D0A2F7' />
            <ComposedCharts manpowerdata={manpowerdata} />
            </div>
        </div>
    </div>
  );
};

export default Dashboard;
