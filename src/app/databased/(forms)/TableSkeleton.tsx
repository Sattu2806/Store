import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

type Props = {}

const TableSkeleton = (props: Props) => {
  return (
    <div className="mt-5 max-w-[1280px] mx-auto">
        {/* <Skeleton className="h-12 w-full rounded-full" /> */}
        <Card className="p-5">
            <div className='grid md:grid-cols-4 gap-8 my-5'>
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
            </div>
        </Card>
    </div>
  )
}

export default TableSkeleton