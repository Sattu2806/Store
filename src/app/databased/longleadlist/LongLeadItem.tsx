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
    <article className='flex gap-3 rounded-lg border p-5 hover:bg-muted/60'>
        <Image
            src={longlead.image ? longlead.image : "/no-image.jpg" }
            alt={longlead.description ? longlead.description : "Image"}
            width={250}
            height={250}
            className='rounded-lg self-center'
            priority
        />
        <div className='flex-grow space-y-3'>
            <div className='flex flex-col space-y-2'>
                <h2 className='text-base font-medium'>Material Description: {longlead.description}</h2>
                <p className='text-muted-foreground'>Country: {countryList().getLabel(longlead.country)}</p>
                <p className='text-muted-foreground'>Qty: {longlead.qty} {longlead.unit}</p>
                <p className='text-muted-foreground'>Supplier/Vendor: {longlead.vendor}</p>
                <p className='text-muted-foreground/90'>Site Required Date: {new Date(longlead.requiredAtSiteDate).toDateString()}</p>
                <p className='text-muted-foreground'>Currect Expected Delivery: {new Date(longlead.deliveryDate).toDateString()}</p>
                <p className='text-muted-foreground'>Delivery Mode: {longlead.deliveryMode}</p>
            </div>
        </div>
        <div>
            <Stepper data={longlead}/>
        </div>
    </article>
  )
}

export default LongLeadItem