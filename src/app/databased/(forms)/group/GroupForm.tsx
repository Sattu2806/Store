'use client'
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { GroupSchema } from '@/ZodSchema/QuantitySchema'
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
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'

type Props = {}

const GroupForm = (props: Props) => {
    const {toast} = useToast()
    const router = useRouter()
    const form = useForm<z.infer<typeof GroupSchema>>({
        resolver: zodResolver(GroupSchema),
        defaultValues: {
        },
      })
      async function onSubmit (values: z.infer<typeof GroupSchema>) {
        console.log(values)
        try {
          const response = await axios.post('/api/group',{
              name:values.name
          })
          console.log(response)
          toast({
            description: "Group Created Successfully",
          })

        } catch (error) {
          console.log('Errore', error)
        }
        form.reset()
        router.refresh()
      }
  return (
    <div className="mt-4 max-w-[1280px] mx-auto">
    <Card className="p-5 max-w-[600px] mx-auto">
    <h1 className="text-2xl text-center font-medium my-2 mb-6">Group Form</h1>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Group</FormLabel>
              <FormControl>
                <Input autoComplete="off" placeholder="group name" {...field} />
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

export default GroupForm