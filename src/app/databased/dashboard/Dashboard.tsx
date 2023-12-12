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

type Data =  {
    month:string, 
    total:number
}

type filteredData = {
    Area: string;
    Date: string;
    Value: number; 
}

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

const Dashboard = ({data, monthlydataDirect, monthlydataInDirect, monthlydataEquipment}:Props) => {
    const [opendialogue, setopenDialogue] = useState({
        excavation: false,
        formWork: false,
        rebar: false,
        concrete: false,
    })
    const [selectedOption, setSelectedOption] = useState('day');
    const [selectedArea, setSelectedArea] = useState<string>('All');
    const filteredData = data
    .filter((item) => selectedArea === 'All' || item.Area === selectedArea)
    .sort((a, b) => {
        const dateA = new Date(a.Date);
        const dateB = new Date(b.Date);
      
        return dateA.getTime() - dateB.getTime()
    })
    .map((item) => {
      const newDataItem: {
        Area: string;
        Date: string;
        Value: number; 
      } = {
        Area: item.Area,
        Date: item.Date.toISOString(),
        Value: 0
      }

      if (opendialogue.excavation) {
        newDataItem.Value = parseFloat(item.Excavation.toFixed(2));
      } else if (opendialogue.formWork) {
        newDataItem.Value = parseFloat(item.FormWork.toFixed(2));
      } else if (opendialogue.rebar) {
        newDataItem.Value = parseFloat(item.Rebar.toFixed(2));
      } else if (opendialogue.concrete) {
        newDataItem.Value = parseFloat(item.Concrete.toFixed(2));
      }  
      return newDataItem;
    });
    const [displayedData, setDisplayedData] = useState(filteredData);

    const getISOWeek = (date: Date): number => {
        const d = new Date(date);
        d.setHours(0, 0, 0, 0);
        d.setDate(d.getDate() + 4 - (d.getDay() || 7));
        const yearStart: Date = new Date(d.getFullYear(), 0, 1);
        return Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
    };


    const filterDataByWeek = (data:filteredData[]) => {
        const weeks: { [key: string]: number } = {};
        data.forEach((item,index) => {
            const date = new Date(`${item.Date}`);
            const weekNumber = getISOWeek(date);
            if(Number.isNaN(weekNumber)){
            console.log(weekNumber, item.Date, date, index, item.Area, item.Value)
            }
            const key = `${item.Area}-${weekNumber}`;
            weeks[key] = (weeks[key] || 0) + item.Value;
        });

        const result: filteredData[] = Object.keys(weeks).map((key) => {
            const [area, weekNumber] = key.split('-');
            return {
                Area: area,
                Date: `Week ${weekNumber}`,
                Value: parseFloat(weeks[key].toFixed(2)),
            };
        });

        result.sort((a, b) => {
            if (a.Area !== b.Area) {
                return a.Area.localeCompare(b.Area);
            }
            const weekNumberA = Number(a.Date.split(' ')[1]);
            const weekNumberB = Number(b.Date.split(' ')[1]);
        
            return weekNumberA - weekNumberB;
        });

        return result
    }

    const filterDataByMonth = (data: filteredData[]) => {
        const months: { [key: string]: number } = {};
    
        // Loop over the data
        data.forEach((item) => {
            const month = new Date(item.Date).toLocaleString('en', { month: 'long'});
            const monthKey = `${item.Area}-${month}`;
            months[monthKey] = (months[monthKey] || 0) + item.Value;
        });
    
        const result: filteredData[] = Object.keys(months).map((key) => {
            const [area, month] = key.split('-');
            return {
                Area: area,
                Date: `${month}`,
                Value: parseFloat(months[key].toFixed(2)),
            };
        });
    
        result.sort((a, b) => {
            if (a.Area !== b.Area) {
                return a.Area.localeCompare(b.Area);
            }
            const monthA = parseInt(a.Date.replace('Month ', ''));
            const monthB = parseInt(b.Date.replace('Month ', ''));
            return monthA - monthB;
        });
    
        return result;
    };
    

    const setData = () => {
        if (selectedOption === 'day') {
            setDisplayedData(filteredData);
        } else if (selectedOption === 'week') {
            setDisplayedData(filterDataByWeek(filteredData));
        }
        else if (selectedOption === 'month') {
            setDisplayedData(filterDataByMonth(filteredData));
        }
        return
    }

    useEffect(() => {
        setData()
    }, [selectedOption, opendialogue,selectedArea]);



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

  const excavationData: Data[] = [];
  const formWorkData: Data[] = [];
  const rebarData: Data[] = [];
  const concreteData: Data[] = [];
  
  data.forEach(item => {

    const month = new Date(item.Date).toLocaleString('en', { month: 'short'});
  
    if (item.Excavation > 0) {
      const existingEntry = excavationData.find(entry => entry.month === month);
  
      if (existingEntry) {
        existingEntry.total += Math.floor(item.Excavation)
      } else {
        excavationData.push({ month: month, total: Math.floor(item.Excavation) });
      }
    }
  
    if (item.FormWork > 0) {
      const existingEntry = formWorkData.find(entry => entry.month === month);
  
      if (existingEntry) {
        existingEntry.total += Math.floor(item.FormWork)
      } else {
        formWorkData.push({ month: month, total: Math.floor(item.FormWork) });
      }
    }
  
    if (item.Rebar > 0) {
      const existingEntry = rebarData.find(entry => entry.month === month)
  
      if (existingEntry) {
        existingEntry.total += Math.floor(item.Rebar)
      } else {
        rebarData.push({ month: month, total: Math.floor(item.Rebar) })
      }
    }
  
    if (item.Concrete > 0) {
      const existingEntry = concreteData.find(entry => entry.month === month);
  
      if (existingEntry) {
        existingEntry.total += Math.floor(item.Concrete)
      } else {
        concreteData.push({ month: month, total: Math.floor(item.Concrete) });
      }
    }
  });

  const totalSum = filteredData.reduce((sum, invoice) => sum + invoice.Value, 0);

  const handleChange = (event: string) => {
    setSelectedOption(event);
  };

  const Direct = monthlydataDirect.map(({ Month, Value }) => ({ month: Month, total: Value }));
  const Indirect = monthlydataInDirect.map(({ Month, Value }) => ({ month: Month, total: Value }));
  const Equipment = monthlydataEquipment.map(({ Month, Value }) => ({ month: Month, total: Value }));

  
  return (
    <div >
        <Dialog open={opendialogue.excavation || opendialogue.formWork || opendialogue.rebar || opendialogue.concrete}>
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
                excavation: false,
                formWork: false,
                rebar: false,
                concrete: false,
              })}
             className="absolute right-4 top-4 mb-2 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                <Cross2Icon className="h-4 w-4" />
                <span className="sr-only">Close</span>
            </div>
            <Table className='mt-3'>
                <TableHeader className='w-full sticky top-0 bg-white'>
                    <TableRow>
                        <TableHead>Area</TableHead>
                        <TableHead>Date</TableHead>
                        {opendialogue.excavation && <TableHead>Excavation</TableHead>}
                        {opendialogue.formWork && <TableHead>FormWork</TableHead>}
                        {opendialogue.rebar && <TableHead>Rebar</TableHead>}
                        {opendialogue.concrete && <TableHead>Concrete</TableHead>}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {displayedData.map((item, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium">{item.Area}</TableCell>
                        <TableCell>{selectedOption === 'day' ? new Date(item.Date).toLocaleDateString() :  item.Date}</TableCell>
                        <TableCell>{item.Value}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                    <TableCell colSpan={1}>Total</TableCell>
                    <TableCell colSpan={2} className="text-right">{totalSum.toFixed(2)}
                    {opendialogue.excavation || opendialogue.concrete ? <p className='inline'> M<sup>3</sup></p> : ''}
                    {opendialogue.formWork ?  <p className='inline'> M<sup>2</sup></p> : ""}
                    {opendialogue.rebar ? " MT" : ""}
                    </TableCell>
                    </TableRow>
                </TableFooter>
                </Table>
            </DialogContent>
        </Dialog>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4 sticky top-0 z-20 py-2 bg-white '>
        <Card onClick={() => setopenDialogue({ ...opendialogue, excavation: true })} className='cursor-pointer'>
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
        <Card onClick={() => setopenDialogue({...opendialogue, formWork: true})} className='cursor-pointer'>
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
        <Card onClick={() => setopenDialogue({...opendialogue, rebar: true})} className='cursor-pointer'>
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
        <Card onClick={() => setopenDialogue({...opendialogue, concrete: true})} className='cursor-pointer'>
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
            <Charts data={excavationData} label='Excavation Productivity By Month' color='#FF8080'/>
            <Charts data={formWorkData} label='Formwork Productivity By Month' color='#BC7AF9'/>
            <Charts data={rebarData} label='Rebar Productivity By Month' color='#FA7070'/>
            <Charts data={concreteData} label='Concrete Productivity By Month' color='#29ADB2'/>
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



