import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { redirect } from 'next/navigation';
import React from 'react'
import { z } from 'zod';
import LongLeadSelect from './LongLeadSelect';
import prisma from "@/lib/prismadb"
import countryList from 'react-select-country-list'


type Props = {}

export const SearchLongSchema = z.object({
    q:z.string().optional(),
    category:z.string().optional(),
    country:z.string().optional(),
    delivery:z.string().optional()
})

export type SearchLongSchemaType = z.infer<typeof SearchLongSchema>

async function filterlongLead (formData: FormData) {
    "use server";
    const values = Object.fromEntries(formData.entries())
    const {q, category, country, delivery} = SearchLongSchema.parse(values)

    const searchParams = new URLSearchParams({
        ...(q && {q: q.trim()}),
        ...(category && {category}),
        ...(country && {country}),
        ...(delivery && {delivery}),
    })

    redirect(`/databased/longleadlist?${searchParams.toString()}`)
}

const LongLeadSideBar = async (props: Props) => {
    const Countries = await prisma.longLeadItem.findMany({
        select:{
            country:true,
            LongLeadItemCategory:{
                select:{
                    name:true
                }
            }
        },
        distinct:['country', 'categoryId']
    })
    const Categories = await prisma.longLeadItem.findMany({
        select:{
            LongLeadItemCategory:{
                select:{
                    name:true
                }
            }
        },
        distinct:['categoryId']
    })
    

    console.log(Countries)
  return (
    <aside className='md:w-[260px] sticky top-4 h-fit rounded-lg pr-5 border p-4 mr-3'>
        <form action={filterlongLead}>
            <div className='space-y-4'>
                <div className='flex flex-col gap-2'>
                    <Label htmlFor='q'>Search</Label>
                    <Input id='q' name='q' placeholder='Description, vendor'/>
                </div>
                <div className='flex flex-col gap-2'>
                    <Label htmlFor='country'>Country</Label>
                    <LongLeadSelect id='country' name='country'>
                        <option value="">All</option>
                        {Countries.map((country,index) => (
                            <option key={index} value={country.country}>{countryList().getLabel(country.country)}</option>
                        ))}
                    </LongLeadSelect>
                </div>
                <div className='flex flex-col gap-2'>
                    <Label htmlFor='category'>Category</Label>
                    <LongLeadSelect id='category' name='category'>
                        <option value="">All</option>
                        {Categories.map((category,index) => (
                            <option key={index} value={category.LongLeadItemCategory.name}>{category.LongLeadItemCategory.name}</option>
                        ))}
                    </LongLeadSelect>
                </div>
                <div className='flex flex-col gap-2'>
                    <Label htmlFor='delivery'>Delivery Mode</Label>
                    <LongLeadSelect id='delivery' name='delivery'>
                        <option value="">All</option>
                        <option value="Land">Land</option>
                        <option value="Sea">Sea</option>
                        <option value="Air">Air</option>
                    </LongLeadSelect>
                </div>
                <Button type='submit' className='w-full'>Filter Item</Button>
            </div>
        </form>
    </aside>
  )
}

export default LongLeadSideBar