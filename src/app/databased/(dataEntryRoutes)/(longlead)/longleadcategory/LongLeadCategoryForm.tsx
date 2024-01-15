"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

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
import { toast } from "@/components/ui/use-toast"
import { Card, CardTitle } from "@/components/ui/card"
import { MakeLongLeadCategory } from "@/actions/(forms)/longleadcategory"
import { LongLeadCategorySchema } from "@/ZodSchema/LongLead"
import { Loader2 } from "lucide-react"

export function LongLeadCategoryForm () {
    const form = useForm<z.infer<typeof LongLeadCategorySchema>>({
        resolver: zodResolver(LongLeadCategorySchema),
        defaultValues: {
          name: "",
        },
    })

    const onSubmit = async (values: z.infer<typeof LongLeadCategorySchema>) => {
        const response = await MakeLongLeadCategory(values)
        console.log(response)
    }

  return (
    <div>
    <Card className='p-4 my-4'>
    <CardTitle className='text-center text-3xl mb-4 font-sans'>Long Lead Category Form</CardTitle>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>category</FormLabel>
              <FormControl>
                <Input autoComplete="off" placeholder="category" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {form.formState.isSubmitting ? (
              <Button disabled className='mt-2' size='lg'>
                <Loader2 className="mr-2 h-4 animate-spin w-full" />
                Please wait
              </Button>
          ):(
          <Button className=' mt-2 w-full' size='lg' type="submit">Submit</Button>
        )}
      </form>
    </Form>
    </Card>
    </div>
  )
}
