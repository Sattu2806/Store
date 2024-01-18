import React from 'react'
import LongLeadList from './LongLeadList'
import LongLeadSideBar, { SearchLongSchemaType } from './LongLeadSideBar'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { SearchLongSchema } from './LongLeadSideBar'
import {z} from "zod"

type Props = {}


interface PageProps {
    searchParams:{
        q?:string
        category?:string
        country?:string
        delivery?:string
    }
}

const page = ({searchParams:{q, category, country, delivery}}: PageProps) => {
    const filterValues: SearchLongSchemaType  = {
        q, category, country, delivery
    } 
  return (
    <div className='max-w-[1280px] mx-auto my-10 relative'>
        <div className='space-y-4 text-center'>
            <h1 className='text-3xl font-extrabold tracking-tight lg:text-4xl'>
                Long Lead Items
            </h1>
        </div>
        <div className='mt-5 flex flex-col md:flex-row'>
            <LongLeadSideBar/>
            <section className='space-y-5 flex-grow'>
            <LongLeadList  filterValues = {filterValues}/>
            </section>
        </div>
        <Link href='/databased/longlead' className='absolute top-1 right-0'>
            <Button size='sm'><Plus size={18} className='mr-1'/> Product</Button>
        </Link>
    </div>
  )
}

export default page