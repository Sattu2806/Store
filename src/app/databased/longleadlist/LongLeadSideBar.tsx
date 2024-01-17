import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { redirect } from 'next/navigation';
import React from 'react'
import { z } from 'zod';

type Props = {}

export const SearchLongSchema = z.object({
    q:z.string().optional()
})

export type SearchLongSchemaType = z.infer<typeof SearchLongSchema>

async function filterlongLead (formData: FormData) {
    "use server";
    const values = Object.fromEntries(formData.entries())
    const {q} = SearchLongSchema.parse(values)

    const searchParams = new URLSearchParams({
        ...(q && {q: q.trim()})
    })

    redirect(`/databased/longleadlist?${searchParams.toString()}`)
}

const LongLeadSideBar = (props: Props) => {
  return (
    <aside className='md:w-[260px] sticky top-4 h-fit rounded-lg pr-5 border p-4 mr-3'>
        <form action={filterlongLead}>
            <div className='space-y-4'>
                <div className='flex flex-col gap-2'>
                    <Label htmlFor='q'>Search</Label>
                    <Input id='q' name='q' placeholder='Description, vendor, etc...'/>
                </div>
                <Button type='submit' className='w-full'>Filter Item</Button>
            </div>
        </form>
    </aside>
  )
}

export default LongLeadSideBar