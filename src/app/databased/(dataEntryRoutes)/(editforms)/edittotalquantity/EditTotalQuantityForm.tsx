'use client'
import React, { useEffect, useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { TotalQuantitySchema } from '@/ZodSchema/QuantitySchema'
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
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'
import { useQuery } from 'react-query'
import { Category, Group, TotalScope } from '@prisma/client'
import { Loader2 } from 'lucide-react'

type Props = {
    data:TotalScope
}

const EditTotalQuantityForm = ({data}: Props) => {
  const [isloading, setisLoading] = useState<boolean>(false)
    const {toast} = useToast()
    const router = useRouter()
    const form = useForm<z.infer<typeof TotalQuantitySchema>>({
        resolver: zodResolver(TotalQuantitySchema),
        defaultValues: {
            ...data
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
        queryFn: ()=> axios.get('/api/categorybyparams',{
          params:{
            groupId:form.getValues('groupId')
          }
        }).then((res) => res.data),
        staleTime:60 * 1000,
        retry:3,
      })
      async function onSubmit (values: z.infer<typeof TotalQuantitySchema>) {
        setisLoading(true)
        console.log(values)
        try {
          const response = await axios.patch('/api/edittotalquantity',{
            id:data.id,
            groupId:values.groupId,
            categoryId:values.categoryId,
            foundationType:values.foundationType,
            totalFoundations:values.totalFoundations,
            excavationQty:values.excavationQty,
            rebarQty:values.rebarQty,
            concreteQty:values.concreteQty
          })
          console.log(response)
          toast({
            description: "Total Data Edited Created Successfully",
          })
          router.push('/databased/totalquantity')
        } catch (error) {
          console.log('Errore', error)
        }
        setisLoading(false)
      }
      useEffect(() => {
        refetchcategoryData()
      }, [form.watch().groupId])

  return (
    <div className="mt-5 max-w-[1280px] mx-auto">
        <Card className="p-5 mx-auto">
        <h1 className="text-2xl text-center font-medium my-2 mb-6">Edit Total Quantity Data Form</h1>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" mt-3">
            <div className='grid md:grid-cols-2 gap-8 my-5'>
            <FormField
                control={form.control}
                name="groupId"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Group</FormLabel>
                    <Select onValueChange={(value) => field.onChange(parseInt(value))} defaultValue={field.value?.toString()}>
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
                    <Select onValueChange={(value) => field.onChange(parseInt(value))} defaultValue={field.value?.toString()}>
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
            name="foundationType"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Foundation Type</FormLabel>
                    <Input value={field.value} autoComplete="off" placeholder="foundation type" onChange={(e) => field.onChange(parseFloat(e.target.value))} />
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="totalFoundations"
            render={({ field }) => (
                <FormItem>
                <FormLabel >Total Foundation</FormLabel>
                <FormControl>
                    <Input value={field.value} type='number' autoComplete="off" placeholder="quantity" onChange={(e) => field.onChange(parseFloat(e.target.value))} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="excavationQty"
            render={({ field }) => (
                <FormItem>
                <FormLabel >Exacation Quantity</FormLabel>
                <FormControl>
                    <Input value={field.value} type='number' autoComplete="off" placeholder="quantity" onChange={(e) => field.onChange(parseFloat(e.target.value))} />
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
                <FormLabel >Rebar Quantity</FormLabel>
                <FormControl>
                    <Input value={field.value} type='number' autoComplete="off" placeholder="quantity" onChange={(e) => field.onChange(parseFloat(e.target.value))} />
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
                <FormLabel >Concrete</FormLabel>
                <FormControl>
                    <Input value={field.value.toFixed(2)} type='number' autoComplete="off" placeholder="quantity" onChange={(e) => field.onChange(parseFloat(e.target.value))} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            </div>
            {isloading ? (
                <Button disabled className='w-full mt-2' size='lg'>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </Button>
            ):(
            <Button className='w-full mt-2' size='lg' type="submit">Submit</Button>
            )}
        </form>
        </Form>
        </Card>
    </div>
  )
}

export default EditTotalQuantityForm