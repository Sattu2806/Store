'use client'
import React from 'react'
import { CategorySchema, CategoryType } from '@/ZodSchema/Categories'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
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
import { Card } from '@/components/ui/card'
type Props = {}

const CategoryForm = (props: Props) => {
    const form = useForm<CategoryType>({
        resolver: zodResolver(CategorySchema),
        defaultValues: {
          categoryName: "",
        },
    })

    function onSubmit(values: CategoryType) {
        console.log(values)
    }
  return (
    <Card className='p-5 md:w-1/2 mx-auto'>
        <h1 className='text-center font-semibold uppercase pb-4 text-xl'>Category Form</h1>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
            control={form.control}
            name="categoryName"
            render={({ field }) => (
                <FormItem>
                <FormLabel className='text-base'>CategoryName</FormLabel>
                <FormControl>
                    <Input placeholder="categoryName..." {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <Button type="submit">Add</Button>
        </form>
        </Form>
    </Card>
  )
}

export default CategoryForm