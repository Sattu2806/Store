'use client'
import React, { useState } from 'react';
import { data } from '@/lib/data/formdata';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
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
  } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Charts from './Charts';
import { Label } from '@/components/ui/label';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { manpower } from '@/lib/data/formdata';

type Data =  {
    name:string, 
    total:number
}

const Dashboard = () => {
    const [opendialogue, setopenDialogue] = useState({
        excavation: false,
        formWork: false,
        rebar: false,
        concrete: false,
    })
    const [selectedArea, setSelectedArea] = useState<string>('All');
    const filteredData = data
    .filter((item) => selectedArea === 'All' || item.Area === selectedArea)
    .map((item) => {
      const newDataItem: {
        Area: string;
        Date: string;
        Value: number; 
      } = {
        Area: item.Area,
        Date: item.Date,
        Value: 0,
      };
  
      if (opendialogue.excavation) {
        newDataItem.Value = item.Excavation;
      } else if (opendialogue.formWork) {
        newDataItem.Value = item.FormWork;
      } else if (opendialogue.rebar) {
        newDataItem.Value = item.Rebar;
      } else if (opendialogue.concrete) {
        newDataItem.Value = item.Concrete;
      }
  
      return newDataItem;
    });
  

    console.log(filteredData)
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
    const month = item.Date.split('-')[1];
  
    if (item.Excavation > 0) {
      const existingEntry = excavationData.find(entry => entry.name === month);
  
      if (existingEntry) {
        existingEntry.total += Math.floor(item.Excavation)
      } else {
        excavationData.push({ name: month, total: Math.floor(item.Excavation) });
      }
    }
  
    if (item.FormWork > 0) {
      const existingEntry = formWorkData.find(entry => entry.name === month);
  
      if (existingEntry) {
        existingEntry.total += Math.floor(item.FormWork)
      } else {
        formWorkData.push({ name: month, total: Math.floor(item.FormWork) });
      }
    }
  
    if (item.Rebar > 0) {
      const existingEntry = rebarData.find(entry => entry.name === month);
  
      if (existingEntry) {
        existingEntry.total += Math.floor(item.Rebar)
      } else {
        rebarData.push({ name: month, total: Math.floor(item.Rebar) });
      }
    }
  
    if (item.Concrete > 0) {
      const existingEntry = concreteData.find(entry => entry.name === month);
  
      if (existingEntry) {
        existingEntry.total += Math.floor(item.Concrete)
      } else {
        concreteData.push({ name: month, total: Math.floor(item.Concrete) });
      }
    }
  });
  
  console.log('Excavation Data:', excavationData);
  console.log('FormWork Data:', formWorkData);
  console.log('Rebar Data:', rebarData);
  console.log('Concrete Data:', concreteData);
  


  return (
    <div >
        <Dialog open={opendialogue.excavation || opendialogue.formWork || opendialogue.rebar || opendialogue.concrete}>
            <DialogContent className='h-[600px] max-w-[800px]'>
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
                <TableHeader className='w-full'>
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
                    {filteredData.map((invoice, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium">{invoice.Area}</TableCell>
                        <TableCell>{invoice.Date}</TableCell>
                        <TableCell>{invoice.Value}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                {/* <TableFooter>
                    <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">{totals.Excavation.toFixed(2)} Cubic Meter</TableCell>
                    </TableRow>
                </TableFooter> */}
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
        </div>
        <div className='my-10'>
        <Charts data={manpower} label='ManPower' color='#65B741'/>
        </div>
    </div>
  );
};

export default Dashboard;
