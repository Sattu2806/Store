'use client'
import React, { useState } from 'react'
import { itemSchema, ItemType } from '@/ZodSchema/Item'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, useFieldArray } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { useFormContext } from 'react-hook-form';
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import ImageUpload from './ImageUpload'
import Color from './Color'
import { Textarea } from '@/components/ui/textarea'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
  

type Props = {}

const ItemForm = (props: Props) => {
    const [addVariants, setAddVariants] = useState<boolean>(false)
    const form = useForm<ItemType>({
        resolver: zodResolver(itemSchema),
    })

    function onSubmit(values: ItemType) {
        console.log(values)
        form.reset()
    }

    const {fields, remove, append} = useFieldArray({
        control: form.control,
        name: 'variants',
    })
  return (
    <Card className='p-5 px-10'>
        <h1 className='text-center font-semibold uppercase pb-4 text-xl'>Item Form</h1>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid md:grid-cols-2 gap-5">
            <FormField
            control={form.control}
            name="itemName"
            render={({ field }) => (
                <FormItem>
                <FormLabel className='text-base'>ItemName</FormLabel>
                <FormControl>
                    <Input placeholder="itemName..." {...field} value={field.value ? field.value : ''} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => (
                <FormItem>
                <FormLabel className='text-base'>Category</FormLabel>
                <FormControl>
                <Select {...form} 
                onValueChange={(value) => form.setValue('categoryId', +value)}
                value={field.value ? field.value.toString() : ''}
                >
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="category..." />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="1">Category 1</SelectItem>
                        <SelectItem value="2">Category 2</SelectItem>
                        <SelectItem value="3">Category 3</SelectItem>
                    </SelectContent>
                </Select>
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
                control={form.control}
                name="brand"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className='text-base'>Brand</FormLabel>
                    <FormControl>
                        <Input placeholder="Brand..." {...field} value={field.value ? field.value : ''}  />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="weight"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className='text-base'>Weight</FormLabel>
                    <FormControl>
                        <Input type='number' placeholder="Weight..." {...field} 
                        value={field.value !== null ? String(field.value) : ''}
                        onChange={(e) => field.onChange(parseFloat(e.target.value))}  />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="dimensions"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className='text-base'>Dimensions</FormLabel>
                    <FormControl>
                        <Input placeholder="Dimensions..." {...field} value={field.value ? field.value : ''}  />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="stockStatus"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className='text-base'>StockStatus</FormLabel>
                    <FormControl>
                        <Input placeholder="StockStatus..." {...field} value={field.value ? field.value : ''}  />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="regularPrice"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className='text-base'>Regular Price</FormLabel>
                    <FormControl>
                        <Input type='number' placeholder="Regular Price ..." {...field} 
                        value={field.value !== null ? String(field.value) : ''}
                        onChange={(e) => field.onChange(parseFloat(e.target.value))}
                         />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="discountedPrice"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className='text-base'>Discounted Price</FormLabel>
                    <FormControl>
                        <Input type='number' placeholder="Discounted Price..." {...field}
                            value={field.value !== null ? String(field.value) : ''}
                            onChange={(e) => field.onChange(parseFloat(e.target.value))}
                          />
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
                    <FormLabel className='text-base'>Discription</FormLabel>
                    <FormControl>
                    <Textarea
                            {...field}
                            placeholder='Write description..'
                            value={field.value !== undefined ? String(field.value) : ''}
                            onChange={(e) => field.onChange(e.target.value)}
                        />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="itemStatus"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className='text-base'>itemStatus</FormLabel>
                    <FormControl>
                        <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value }
                        className="flex flex-col space-y-1"
                        >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                            <RadioGroupItem value="active" />
                            </FormControl>
                            <FormLabel className="font-normal">
                            Active
                            </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                            <RadioGroupItem value="inactive" />
                            </FormControl>
                            <FormLabel className="font-normal">
                            InActive
                            </FormLabel>
                        </FormItem>
                        </RadioGroup>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
            />
                {fields.map((field, index) => (
                    <Card key={field.id} className='md:col-span-2 p-5 grid md:grid-cols-2 gap-5'>
                        <h1 className='md:col-span-2 text-xl font-semibold'>#{index+1}</h1>
                        <FormField
                            control={form.control}
                            name={`variants.${index}.variantName`}
                            render={({ field: variantField }) => (
                                <FormItem>
                                    <FormLabel className='text-base'>Variant Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            type='text'
                                            placeholder="Variant Name..."
                                            {...variantField}
                                            value={variantField.value !== null ? String(variantField.value) : ''}
                                            onChange={(e) => variantField.onChange(e.target.value)}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name={`variants.${index}.price`}
                            render={({ field: variantField }) => (
                                <FormItem>
                                    <FormLabel className='text-base'>Price</FormLabel>
                                    <FormControl>
                                        <Input
                                            type='number'
                                            placeholder="Price..."
                                            {...variantField}
                                            value={variantField.value !== null ? String(variantField.value) : ''}
                                            onChange={(e) => variantField.onChange(parseFloat(e.target.value))}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name={`variants.${index}.stock`}
                            render={({ field: variantField }) => (
                                <FormItem>
                                    <FormLabel className='text-base'>Stock</FormLabel>
                                    <FormControl>
                                        <Input
                                            type='number'
                                            placeholder="Stock..."
                                            {...variantField}
                                            value={variantField.value !== null ? String(variantField.value) : ''}
                                            onChange={(e) => variantField.onChange(parseFloat(e.target.value))}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name={`variants.${index}.size`}
                            render={({ field: variantField }) => (
                                <FormItem>
                                    <FormLabel className='text-base'>Size</FormLabel>
                                    <FormControl>
                                        <Input
                                            type='text'
                                            placeholder="Size..."
                                            {...variantField}
                                            value={variantField.value !== null ? String(variantField.value) : ''}
                                            onChange={(e) => variantField.onChange(e.target.value)}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Color control={form.control} name={`variants.${index}.colors`} />
                        <ImageUpload control={form.control} name={`variants.${index}.pictures`}/>
                        <Button className='w-[140px] col-span-2' onClick={() => remove(index)} type='button'>Remove Variant</Button>
                    </Card>
                ))}
                <Button onClick={() => append({
                    size: null,
                    variantName: '',
                    price: 0,
                    pictures: [],
                    stock: 0,
                    colors: [],
                })} type='button' className='w-[200px]' variant='outline'>Add Variant</Button>
            <Button className='col-span-2 my-4' type="submit">Submit</Button>
        </form>
        </Form>
    </Card>
  )
}

export default ItemForm