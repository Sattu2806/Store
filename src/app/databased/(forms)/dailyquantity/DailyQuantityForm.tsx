'use client'
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { DailyQuantitySchema } from '@/ZodSchema/QuantitySchema'
import axios from 'axios'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { useQuery } from 'react-query'
import { Category, Group } from '@prisma/client'

type Props = {}

const DailyQuantityForm = (props: Props) => {
    const form = useForm<z.infer<typeof DailyQuantitySchema>>({
        resolver: zodResolver(DailyQuantitySchema),
        defaultValues: {
        },
      })

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
      async function onSubmit (values: z.infer<typeof DailyQuantitySchema>) {
        console.log(values)
        try {
          const response = await axios.post('/api/dailyquantity',{
                groupId:values.groupId,
                categoryId:values.categoryId,
                formWorkQty:values.formWorkQty,
                date:values.date,
                excavationQty: values.excavationQty,
                rebarQty: values.rebarQty,
                concreteQty: values.concreteQty
          })
          console.log(response)
        } catch (error) {
          console.log('Errore', error)
        }
      }
  return (
    <div className="mt-5 max-w-[1280px] mx-auto">
    <Card className="p-5">
    <h1 className="text-2xl text-center font-medium my-2 mb-6">Daily Quantity Form</h1>
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <div className='grid md:grid-cols-2 gap-8 my-5'>
        <FormField
        control={form.control}
        name="groupId"
        render={({ field }) => (
            <FormItem>
            <FormLabel>Group</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value?.toString()}>
                <FormControl>
                <SelectTrigger>
                    <SelectValue placeholder="Select a Group" />
                </SelectTrigger>
                </FormControl>
                <SelectContent>
                {groupData?.map((group, index) => (
                  <SelectItem value={group.id?.toString()} key={index}>{group.name}</SelectItem>
                  ))}
                </SelectContent>
            </Select>
            <FormMessage />
            </FormItem>
        )}
        />
        <FormField
        control={form.control}
        name="categoryId"
        render={({ field }) => (
            <FormItem>
            <FormLabel>Category</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value?.toString()}>
                <FormControl>
                <SelectTrigger>
                    <SelectValue placeholder="Select a Category" />
                </SelectTrigger>
                </FormControl>
                <SelectContent>
                {categoryData?.map((category, index) => (
                    <SelectItem key={index} value={category.id.toString()}>{category.name}</SelectItem>
                ))}
                </SelectContent>
            </Select>
            <FormMessage />
            </FormItem>
        )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col mt-2">
              <FormLabel>Date of birth</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        " text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date < new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              {/* <FormDescription>
                Your date of birth is used to calculate your age.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
        control={form.control}
        name="excavationQty"
        render={({ field }) => (
            <FormItem>
            <FormLabel className="text-base">Exacation Quantity</FormLabel>
            <FormControl>
                <Input type='number' autoComplete="off" placeholder="quantity" {...field} />
            </FormControl>
            <FormMessage />
            </FormItem>
        )}
        />
        <FormField
        control={form.control}
        name="formWorkQty"
        render={({ field }) => (
            <FormItem>
            <FormLabel className="text-base">Form Work Quantity</FormLabel>
            <FormControl>
                <Input type='number' autoComplete="off" placeholder="quantity" {...field} />
            </FormControl>
            <FormMessage />
            </FormItem>
        )}
        />
        <FormField
        control={form.control}
        name="rebarQty"
        render={({ field }) => (
            <FormItem>
            <FormLabel className="text-base">Rebar Quantity</FormLabel>
            <FormControl>
                <Input type='number' autoComplete="off" placeholder="quantity" {...field} />
            </FormControl>
            <FormMessage />
            </FormItem>
        )}
        />
        <FormField
        control={form.control}
        name="concreteQty"
        render={({ field }) => (
            <FormItem>
            <FormLabel className="text-base">Concrete</FormLabel>
            <FormControl>
                <Input type='number' autoComplete="off" placeholder="quantity" {...field} />
            </FormControl>
            <FormMessage />
            </FormItem>
        )}
        />
        </div>
        <Button className='w-full mt-3' size='lg' type="submit">Submit</Button>
    </form>
    </Form>
    </Card>
</div>
  )
}

export default DailyQuantityForm