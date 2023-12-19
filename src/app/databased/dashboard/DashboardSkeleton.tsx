import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'

type Props = {}

const DashboardSkeleton = (props: Props) => {
  return (
    <div>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 md:sticky top-0 z-20 py-2 bg-white '>
            <Skeleton className='h-[150px] w-full'/>
            <Skeleton className='h-[150px] w-full'/>
            <Skeleton className='h-[150px] w-full'/>
        </div>
        <div className='grid md:grid-cols-2 gap-10 mt-3'>
            <Skeleton className='h-[400px] w-full'/>
            <Skeleton className='h-[400px] w-full'/>
            <Skeleton className='h-[400px] w-full'/>
            <Skeleton className='h-[400px] w-full'/>
            <Skeleton className='h-[400px] w-full'/>
            <Skeleton className='h-[400px] w-full'/>
        </div>
    </div>
  )
}

export default DashboardSkeleton