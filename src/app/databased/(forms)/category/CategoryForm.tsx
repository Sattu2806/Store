'use client'
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { CategorySchema } from '@/ZodSchema/QuantitySchema'
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
import { useQuery } from 'react-query'
import { Category, Group } from '@prisma/client'
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'

type Props = {}

const CategoryForm = (props: Props) => {
  const {toast} = useToast()
  const router = useRouter()
    const form = useForm<z.infer<typeof CategorySchema>>({
        resolver: zodResolver(CategorySchema),
        defaultValues: {
        },
      })
      const {data: groupData = [], error: groupDatanError, isLoading: groupDataLoading, refetch:refetchgroupData} = useQuery<Group[]>({
        queryKey:'groupdata',
        queryFn: ()=> axios.get('/api/group').then((res) => res.data),
        staleTime:60 * 1000,
        retry:3,
      })
      async function onSubmit (values: z.infer<typeof CategorySchema>) {
        console.log(values)
        try {
          const response = await axios.post('/api/category',{
              name:values.name,
              groupId: values.groupId
          })
          console.log(response)
          toast({
            description: "Category Created Successfully",
          })
        } catch (error) {
          console.log('Errore', error)
        }
      }
  return (
    <div className="mt-4 max-w-[1280px] mx-auto">
    <Card className="p-5 max-w-[600px] mx-auto">
    <h1 className="text-2xl text-center font-medium my-2 mb-6">Category Form</h1>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Category</FormLabel>
              <FormControl>
                <Input autoComplete="off" placeholder="category name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button size='lg' type="submit">Submit</Button>
      </form>
    </Form>
    </Card>
    </div>
  )
}

export default CategoryForm