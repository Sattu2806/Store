'use client'
import React, { useState } from 'react'
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
import { Loader2 } from 'lucide-react'

type Props = {
  data:Category
}

const EditCategoryForm = ({data}: Props) => {
  const [isloading, setisLoading] = useState<boolean>(false)
  const {toast} = useToast()
  const router = useRouter()
    const form = useForm<z.infer<typeof CategorySchema>>({
        resolver: zodResolver(CategorySchema),
        defaultValues: {
          ...data
        },
      })
      const {data: groupData = [], error: groupDatanError, isLoading: groupDataLoading, refetch:refetchgroupData} = useQuery<Group[]>({
        queryKey:'groupdata',
        queryFn: ()=> axios.get('/api/group').then((res) => res.data),
        staleTime:60 * 1000,
        retry:3,
      })
      async function onSubmit (values: z.infer<typeof CategorySchema>) {
        setisLoading(true)
        console.log(values)
        try {
          const response = await axios.patch('/api/category',{
              id:data.id,
              name:values.name,
              groupId: values.groupId
          })
          console.log(response)
          toast({
            description: "Category Edited Successfully",
          })
          router.push('/databased/category')
        } catch (error) {
          console.log('Errore', error)
          toast({
            variant:'destructive',
            description: `Error while Editing data`,
          })
        }
        setisLoading(false)
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
          {isloading ? (
              <Button disabled className='mt-2' size='lg'>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </Button>
          ):(
          <Button className=' mt-2' size='lg' type="submit">Submit</Button>
          )}
      </form>
    </Form>
    </Card>
    </div>
  )
}

export default EditCategoryForm