'use client'
import Image from 'next/image'
import React, { useMemo } from 'react'
import countryList from 'react-select-country-list'
import Stepper from './Stepper'
import { LongLeadItem as LongLeadType } from '@/lib/types'

type Props = {
    longlead:LongLeadType
}

const LongLeadItem = ({longlead}: Props) => {
    const options = useMemo(() => countryList().getData(), [])
  return (
    <article className='flex gap-6 rounded-lg border p-5 hover:bg-muted/60'>
        <Image
            src={longlead.image ? longlead.image : "/no-image.jpg" }
            alt={longlead.description ? longlead.description : "Image"}
            width={250}
            height={250}
            className='rounded-lg object-cover'
            priority
        />
        <div className='flex-grow space-y-3 flex flex-col justify-center'>
            <div className='flex flex-col space-y-2'>
                <h2 className='text-base font-medium'>Material Description: <span>{longlead.description}</span></h2>
                <p className='text-muted-foreground'>Country: <span className='text-neutral-900'>{countryList().getLabel(longlead.country)}</span></p>
                <p className='text-muted-foreground'>Qty: <span className='text-neutral-900'>{longlead.qty} {longlead.unit}</span></p>
                <p className='text-muted-foreground'>Supplier/Vendor: <span className='text-neutral-900'>{longlead.vendor}</span></p>
                <p className='text-muted-foreground/90'>Site Required Date: <span className='text-neutral-900'>{new Date(longlead.requiredAtSiteDate).toDateString()}</span></p>
                <p className='text-muted-foreground'>Currect Expected Delivery: <span className='text-neutral-900'>{new Date(longlead.deliveryDate).toDateString()}</span></p>
                <p className='text-muted-foreground'>Delivery Mode: <span className='text-neutral-900'>{longlead.deliveryMode}</span></p>
            </div>
        </div>
        <div>
            <Stepper data={longlead}/>
        </div>
    </article>
  )
}

export default LongLeadItem