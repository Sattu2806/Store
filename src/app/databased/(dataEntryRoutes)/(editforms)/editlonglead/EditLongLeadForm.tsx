'use client'
import React, { useEffect, useMemo, useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { format } from "date-fns"
import { CalendarIcon } from 'lucide-react'
import { Calendar } from '@/components/ui/calendar'
import { cn } from "@/lib/utils"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { FormError } from '@/components/form-error'
import { FormSuccess } from '@/components/form-success'
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
import { Card, CardTitle} from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useQuery } from 'react-query'
import { Category, Group, LongLeadItemCategory,} from '@prisma/client'
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'
import { LongLeadItemSchema } from '@/ZodSchema/LongLead'
import { LongLeadItem, } from '@/lib/types'
import countryList from 'react-select-country-list'
import { GetLongLeadCategory } from '@/actions/(forms)/longleadcategory'
import { Imageupload } from '@/actions/cloudinaryupload'
import { Cross2Icon } from '@radix-ui/react-icons'
import { FiUploadCloud } from 'react-icons/fi'
import { MakeLongLead, UpdatedLongLead } from '@/actions/(forms)/longlead'


type Props = {
  data:LongLeadItem
}

const EditLongLeadForm = ({data}: Props) => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [file, SetFile] = useState<File>();
  const [fileUrl, setFileUrl] = useState<string | undefined > (undefined)
  const options = useMemo(() => countryList().getData(), [])

  useEffect(() => {
    setFileUrl(data.image)
  },[])


  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0]
      SetFile(file);
      if(fileUrl){
          URL.revokeObjectURL(fileUrl)
      }

      if(file){
          const url = URL.createObjectURL(file)
          setFileUrl(url)
      }else{
          setFileUrl(undefined)
      }
  };
  const {toast} = useToast()
  const router = useRouter()

    const form = useForm<z.infer<typeof LongLeadItemSchema>>({
        resolver: zodResolver(LongLeadItemSchema),
        defaultValues: {
          ...data
        },
      })
    const UploadImage = async () => {
        console.log('Uploading');
        if (file) {
            const formData = new FormData();
            formData.append('file', file);
            try {
                const res = await Imageupload({ formData });
                console.log(res);
                form.setValue('image', res);
                return res;
            } catch (error) {
                console.log('Error uploading Image');
                return null;
            }
        }
    };

    const {data: LongLeadCategory = [], error: LongLeadCategoryError, isLoading: ismanpowerapiDataLoading, refetch:refetchmanpowerapiData}
     = useQuery<LongLeadItemCategory[]>({
      queryKey:'longleadcategory',
      queryFn: ()=> GetLongLeadCategory().then((res) => res),
      staleTime:60 * 1000,
      retry:3,
  })

    const onSubmit = async (values: z.infer<typeof LongLeadItemSchema>) => {
        setError("");
        setSuccess("");
        try {
            const result = await UploadImage();
            console.log(result);
            if (!result) {
                setError("Could not Upload Image");
                return;
            }
    
            const response = await UpdatedLongLead(values,data.id);
            console.log(response);
    
            if (response.success) {
                form.reset();
                router.push("/databased/longleadlist");
                setSuccess(response.success)
            }
        } catch (error) {
            console.error("An error occurred:", error);
            setError("Could not create product");
        }
    };

    const DeleteImage = () => {
        setFileUrl(undefined)
        SetFile(undefined)
    }

    console.log(data.image)
  return (
    <div>
        <Card className='p-4 my-4'>
        <CardTitle className='text-center text-3xl mb-4 font-sans'>Long Lead Form</CardTitle>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} >
            <div className='w-full h-[400px] border border-dashed rounded-md border-gray-700 relative mb-4'>  
                {fileUrl || file ? (
                    <div className='flex gap-6 items-center w-full h-full overflow-hidden'>
                            <div className='rounded-md overflow-hidden w-full relative'>
                                <img
                                    src={fileUrl} 
                                    className=''
                                    alt={fileUrl} />
                            </div>
                                <p className='absolute top-1 right-1 z-10 bg-neutral-100 p-1 rounded-full' onClick={DeleteImage}>
                                    <Cross2Icon color='red' fontSize={20}/>
                                </p>
                    </div>
                ):(
                <label htmlFor="image" className='absolute top-0 left-0 bottom-0 right-0 cursor-pointer flex items-center flex-col justify-center'>
                    <FiUploadCloud  className='text-3xl opacity-70' />
                    <span className='block'>Click to Upload</span>
                    <span className='block'>Max-size 1 MB</span>
                    <input accept='image/*' type='file' name='image' multiple id='image' className='hidden' onChange={handleFileChange} />
                </label>
                )}
            {fileUrl && file && (
            <div className='absolute top-1 right-2'>
                <button
                type='button'
                className='scale-125'
                onClick={()=> {setFileUrl(undefined); SetFile(undefined)}}
                >
                    <Cross2Icon scale={2} color='red'/>
                </button>
            </div>
            )} 
            </div>
            <div className="grid md:grid-cols-2 md:gap-10 gap-5">
            <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                <Select onValueChange={(value) => field.onChange(parseInt(value, 10))} value={field.value.toString()} >
                    <FormControl>
                    <SelectTrigger>
                        <SelectValue placeholder="Select a Category" />
                    </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                        {LongLeadCategory?.map((category) => (
                            <SelectItem value={category.id.toString()} key={category.id}>{category.name}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Country</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                    <SelectTrigger>
                        <SelectValue placeholder="Select a Country" />
                    </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                    {options.map((country,index) => (
                        <SelectItem value={country.value} key={index}>
                            {country.label}
                        </SelectItem>
                      
                    ))}
                    </SelectContent>
                </Select>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="vendor"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Vendor</FormLabel>
                <FormControl>
                    <Input autoComplete='off' placeholder="vendor" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                    <Input autoComplete='off' placeholder="description" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="qty"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Qty</FormLabel>
                <FormControl>
                    <Input type='number' autoComplete="off" placeholder="quantity" onChange={(e) => field.onChange(parseFloat(e.target.value))} value={field.value} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="unit"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Unit</FormLabel>
                <Select onValueChange={field.onChange}  value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Unit" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="M3">M<sup>3</sup></SelectItem>
                  <SelectItem value="M2">M<sup>2</sup></SelectItem>
                  <SelectItem value="M">M</SelectItem>
                </SelectContent>
              </Select>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="deliveryDate"
            render={({ field }) => (
                <FormItem className="flex flex-col mt-2">
                <FormLabel>Delivery Date</FormLabel>
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
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="requiredAtSiteDate"
            render={({ field }) => (
                <FormItem className="flex flex-col mt-2">
                <FormLabel>Required At Site Date</FormLabel>
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
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="deliveryMode"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Delivery Mode</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue className='placeholder:opacity-50' placeholder="Delivery Mode" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Sea">By Sea</SelectItem>
                  <SelectItem value="Air">By Air</SelectItem>
                  <SelectItem value="Land">By Land</SelectItem>
                </SelectContent>
              </Select>
                <FormMessage />
                </FormItem>
            )}
            />
            </div>
        <FormError message={error} />
        <FormSuccess message={success} />
        {form.formState.isSubmitting ? (
              <Button disabled className='mt-2 w-full flex items-center justify-center' size='lg'>
                <Loader2 className="mr-2 h-4 animate-spin" />
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

export default EditLongLeadForm