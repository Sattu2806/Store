'use client'
import React, { useEffect, useMemo, useState } from 'react'
import { LongLeadItemSchema } from '@/ZodSchema/LongLead'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {z} from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Loader2 } from 'lucide-react'
import { Calendar } from '@/components/ui/calendar'
import { cn } from "@/lib/utils"
import { Card, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { FiUploadCloud } from 'react-icons/fi'
import { Cross2Icon } from '@radix-ui/react-icons'
import { Imageupload } from '@/actions/cloudinaryupload'
import { MakeLongLead } from '@/actions/(forms)/longlead'
import countryList from 'react-select-country-list'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useQuery } from 'react-query'
import { DeliveryToSiteStatus, FinalInspectionStatus, LongLeadItemCategory, ManufacturingStatus, POStatus, RFQStatus, ReceivedQuotationStatus, TechnicalEvaluationandPRStatus } from '@prisma/client'
import { GetLongLeadCategory } from '@/actions/(forms)/longleadcategory'
import { useFormStatus } from 'react-dom'
  

type Props = {}

const LongLeadForm = (props: Props) => {
    const [file, SetFile] = useState<File>();
    const [fileUrl, setFileUrl] = useState<string | undefined > (undefined)
    const options = useMemo(() => countryList().getData(), [])
    const status = useFormStatus();


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
    
    const form = useForm<z.infer<typeof LongLeadItemSchema>>({
        resolver: zodResolver(LongLeadItemSchema),
        defaultValues: {
            "image":'/'
        },
    })

    const UploadImage = async () => {
        console.log('Uploading')
        if (file) {
            const formData = new FormData();
            formData.append('file', file);
            try {
                const result = await Imageupload({ formData });
                console.log("result", result);
                form.setValue('image', result);
                return result
            } catch (error) {
                console.log('Error uploading Image');
                return null
            }
        }
    };

    const {data: LongLeadCategory, error: LongLeadCategoryError, isLoading: ismanpowerapiDataLoading, refetch:refetchmanpowerapiData} = useQuery<LongLeadItemCategory[]>({
        queryKey:'longleadcategory',
        queryFn: ()=> GetLongLeadCategory().then((res) => res),
        staleTime:60 * 1000,
        retry:3,
    })



    const onSubmit = async (values: z.infer<typeof LongLeadItemSchema>) => {
        const result = await UploadImage();
        if(!result) {
            return
        }
        const response = await MakeLongLead(values)
        console.log(response)
    }
    
  return (
    <div>
        <Card className='p-4 my-4'>
        <CardTitle className='text-center text-3xl mb-4 font-sans'>Long Lead Form</CardTitle>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} >
            <div className='w-full h-[400px] border border-dashed rounded-md border-gray-700 relative mb-4'>  
                {fileUrl && file ? (
                    <div className='flex gap-6 items-center w-full h-full overflow-hidden'>
                        {file.type.startsWith("image/") ? (
                            <div className='rounded-md overflow-hidden w-full relative'>
                                <img
                                    src={fileUrl} 
                                    className=''
                                    alt={file.name} />
                            </div>
                        ):(
                            <div className='rounded-md overflow-hidden relative'>
                                <video className='h-full' src={fileUrl} autoPlay loop muted></video>
                            </div>
                        )}
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
                <Select onValueChange={(value) => field.onChange(parseInt(value, 10))} >
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
                <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                    <Input type='number' autoComplete="off" placeholder="quantity" onChange={(e) => field.onChange(parseFloat(e.target.value))} />
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
                <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                <FormControl>
                    <Input autoComplete='off' placeholder="Delivery Mode" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            </div>
            <Separator className='my-7'/>
            <div className="grid md:grid-cols-2 md:gap-10 gap-5">
                <FormField
                control={form.control}
                name="technicalEvaluation"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Technical Evaluation Status</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue className='placeholder:opacity-50'  />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                        <SelectItem value={TechnicalEvaluationandPRStatus.Preparation}>{TechnicalEvaluationandPRStatus.Preparation}</SelectItem>
                        <SelectItem value={TechnicalEvaluationandPRStatus.UnderApproval}>{TechnicalEvaluationandPRStatus.UnderApproval}</SelectItem>
                        <SelectItem value={TechnicalEvaluationandPRStatus.Completed}>{TechnicalEvaluationandPRStatus.Completed}</SelectItem>
                        </SelectContent>
                    </Select>
                    <FormMessage />
                    </FormItem>
                )}
            />
            {form.watch("technicalEvaluation") === TechnicalEvaluationandPRStatus.Completed && (
            <FormField
                control={form.control}
                name="prStatus"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>PR Status</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue  />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                        <SelectItem value={TechnicalEvaluationandPRStatus.Preparation}>{TechnicalEvaluationandPRStatus.Preparation}</SelectItem>
                        <SelectItem value={TechnicalEvaluationandPRStatus.UnderApproval}>{TechnicalEvaluationandPRStatus.UnderApproval}</SelectItem>
                        <SelectItem value={TechnicalEvaluationandPRStatus.Completed}>{TechnicalEvaluationandPRStatus.Completed}</SelectItem>
                        </SelectContent>
                    </Select>
                    <FormMessage />
                    </FormItem>
                )}
            />
            )}
            {form.watch("prStatus") === TechnicalEvaluationandPRStatus.Completed && (
            <FormField
                control={form.control}
                name="rfqStatus"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>RFQ Status</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue  />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                        <SelectItem value={RFQStatus.Pending}>{RFQStatus.Pending}</SelectItem>
                        <SelectItem value={RFQStatus.Senttovendor}>{RFQStatus.Senttovendor}</SelectItem>
                        </SelectContent>
                    </Select>
                    <FormMessage />
                    </FormItem>
                )}
            />
            )}
            {form.watch("rfqStatus") === RFQStatus.Senttovendor && (
            <FormField
                control={form.control}
                name="receivedQuotation"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>received Quotation</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue  />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                        <SelectItem value={ReceivedQuotationStatus.Pending}>{ReceivedQuotationStatus.Pending}</SelectItem>
                        <SelectItem value={ReceivedQuotationStatus.Vendorselected}>{ReceivedQuotationStatus.Vendorselected}</SelectItem>
                        </SelectContent>
                    </Select>
                    <FormMessage />
                    </FormItem>
                )}
            />
            )}
            {form.watch("receivedQuotation") === ReceivedQuotationStatus.Vendorselected && (
            <FormField
                control={form.control}
                name="poStatus"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>PO Status</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue  />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                        <SelectItem value={POStatus.Pending}>{POStatus.Pending}</SelectItem>
                        <SelectItem value={POStatus.UnderPreparation}>{POStatus.UnderPreparation}</SelectItem>
                        <SelectItem value={POStatus.Placed}>{POStatus.Placed}</SelectItem>
                        </SelectContent>
                    </Select>
                    <FormMessage />
                    </FormItem>
                )}
            />
            )}
            {form.watch("poStatus") === POStatus.Placed && (
            <FormField
                control={form.control}
                name="manufacturingStatus"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Manufacturing Status</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue  />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                        <SelectItem value={ManufacturingStatus.Pending}>{ManufacturingStatus.Pending}</SelectItem>
                        <SelectItem value={ManufacturingStatus.QualityTest}>{ManufacturingStatus.QualityTest}</SelectItem>
                        <SelectItem value={ManufacturingStatus.Started}>{ManufacturingStatus.Started}</SelectItem>
                        <SelectItem value={ManufacturingStatus.Completed}>{ManufacturingStatus.Completed}</SelectItem>
                        </SelectContent>
                    </Select>
                    <FormMessage />
                    </FormItem>
                )}
            />
            )}
            {form.watch("manufacturingStatus") === ManufacturingStatus.Completed && (
            <FormField
                control={form.control}
                name="finalInspection"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>final Inspection</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue  />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                        <SelectItem value={FinalInspectionStatus.Ongoing}>{FinalInspectionStatus.Ongoing}</SelectItem>
                        <SelectItem value={FinalInspectionStatus.Pending}>{FinalInspectionStatus.Pending}</SelectItem>
                        <SelectItem value={FinalInspectionStatus.Completed}>{FinalInspectionStatus.Completed}</SelectItem>
                        </SelectContent>
                    </Select>
                    <FormMessage />
                    </FormItem>
                )}
            />
            )}
            {form.watch("finalInspection") === FinalInspectionStatus.Completed && (
            <FormField
                control={form.control}
                name="deliveryToSite"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>delivery To Site</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue  />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                        <SelectItem value={DeliveryToSiteStatus.CustomClearance}>{DeliveryToSiteStatus.CustomClearance}</SelectItem>
                        <SelectItem value={DeliveryToSiteStatus.Pending}>{DeliveryToSiteStatus.Pending}</SelectItem>
                        <SelectItem value={DeliveryToSiteStatus.UnderShipment}>{DeliveryToSiteStatus.UnderShipment}</SelectItem>
                        <SelectItem value={DeliveryToSiteStatus.Delivered}>{DeliveryToSiteStatus.Delivered}</SelectItem>
                        </SelectContent>
                    </Select>
                    <FormMessage />
                    </FormItem>
                )}
            />
            )}
            </div>
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

export default LongLeadForm