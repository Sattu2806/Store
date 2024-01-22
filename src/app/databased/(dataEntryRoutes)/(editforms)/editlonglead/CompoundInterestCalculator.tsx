'use client'
import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Card } from "@/components/ui/card";
import { Form, FormField, FormLabel, FormControl, FormMessage, FormItem, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
  import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Rectangle } from 'recharts';

interface InterestTableProps {
slabs: { year: number; loanamount: number; interest: number }[];
chartData: { name: string; principle: string; paying_amount: string }[];
}

interface InterestChartProps {
    chartData: { name: string; principle: string; paying_amount: string }[];
}

const schema = z.object({
  principal: z.number().positive('Principal must be a positive number'),
  time: z.number().positive('Time must be a positive number'),
  rate: z.number().positive('Rate must be a positive number'),
});


const CompoundInterestCalculator = () => {
  const [result, setResult] = useState<number>();
  const [slabs, setSlabs] = useState<{ year: number; loanamount: number; interest: number }[]>([]);
  const [chartData, setChartData] = useState<{ name: string; principle: string; paying_amount: string }[]>([]);

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const calculateCompoundInterest = (principal: number, time: number, rate: number) => {
    const amount = principal * Math.pow(1 + rate / 100, time);
    setResult(amount - principal);

    let loanamount = principal;
    const slabs = [];

    for (let year = 1; year <= time; year++) {
      const interest = (loanamount * rate) / 100;
      loanamount += interest;
      slabs.push({
        year,
        loanamount,
        interest,
      });
    }

    // Set the state variables
    setSlabs(slabs);
    setChartData([
      {
        name: 'Total',
        principle: principal.toFixed(2),
        paying_amount: amount.toFixed(2),
      },
    ]);

    // Return the calculated values directly
    return {
      slabs,
      chartData: [
        {
          name: 'Total',
          principle: principal.toFixed(2),
          paying_amount: amount.toFixed(2),
        },
      ],
      totalInterest: amount - principal,
    };
  };

  const onSubmit = (data: z.infer<typeof schema>) => {
    const { principal, time, rate } = data;
    const { slabs, chartData, totalInterest } = calculateCompoundInterest(principal, time, rate);

    // Log or use the calculated values as needed
    console.log('Interest Slabs:', slabs);
    console.log('Chart Data:', chartData);
    console.log('Total Interest:', totalInterest);
  };

  return (
    <div className='max-w-[1280px] mx-auto mt-10'>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-10'>
        <Card className="flex flex-col gap-4 p-6 bg-white border border-gray-200 rounded-lg  bg-clip-border max-h-[400px]">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Compound Interest Calculator
          </h1>
          <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="principal"
            render={({ field }) => (
            <FormItem>
                <FormLabel>Principal</FormLabel>
              <FormControl>
                <Input onChange={(e) => field.onChange(parseFloat(e.target.value))}  type="number" placeholder="Enter Priciple Amount" />
              </FormControl>
                {form.formState.errors.principal && <FormMessage className="text-red-500">{form.formState.errors.principal.message }</FormMessage>}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
            <FormItem>
                <FormLabel>Time</FormLabel>
              <FormControl>
                <Input onChange={(e) => field.onChange(parseFloat(e.target.value))}  type="number" placeholder="Enter Time in Years" />
              </FormControl>
                {form.formState.errors.time && <FormMessage className="text-red-500">{form.formState.errors.time.message}</FormMessage>}
            </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rate"
            render={({ field }) => (
            <FormItem>
            <FormLabel>Rate</FormLabel>
              <FormControl>
                <Input onChange={(e) => field.onChange(parseFloat(e.target.value))}  type="number" step="0.01" placeholder="Enter annual interest rate"/>
              </FormControl>
                {form.formState.errors.rate && <FormMessage className="text-red-500">{form.formState.errors.rate.message}</FormMessage>}
            </FormItem>
            )}
          />
          <Button type="submit" className="mt-4">Calculate</Button>
        </form>
        </Form>
      </Card>
        <InterestTable slabs={slabs} chartData={chartData} />
    </div>
    {chartData.length>0 && (
        <InterestChart chartData={chartData} />
    )}
    </div>
  );
};

export default CompoundInterestCalculator

const InterestTable = ({ slabs, chartData } : InterestTableProps) => {
    return (
    <Card className="flex flex-col gap-4 p-6 bg-white border border-gray-200 rounded-lg  bg-clip-border max-h-[400px]">
      <Table>
        <TableCaption>Interest Slab</TableCaption>
        <TableHeader className='sticky top-0 bg-white'>
          <TableRow>
            <TableHead className="w-[100px]">Year</TableHead>
            <TableHead>Total Amount</TableHead>
            <TableHead className="text-left">Interest</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {slabs.map((invoice, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{invoice.year}</TableCell>
              <TableCell>{invoice.loanamount.toFixed(2)}</TableCell>
              <TableCell className='text-left'>{invoice.interest.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        {chartData && (
          <TableFooter className='w-full'>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell className="text-left">{Number(chartData[0]?.paying_amount) - Number(chartData[0]?.principle)}</TableCell>
            </TableRow>
          </TableFooter>
        )}
      </Table>
    </Card>
    );
  };
  

  const InterestChart = ({ chartData }: InterestChartProps) => {
    return (
      <div className='h-[400px] mt-5 md:w-1/2'>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={100}
            height={300}
            data={chartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="principle" fill="#8884d8" barSize={80} activeBar={<Rectangle fill="pink" stroke="blue" />} />
            <Bar barSize={80} dataKey="paying_amount" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  };