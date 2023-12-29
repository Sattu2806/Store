import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"
import { Card } from '@/components/ui/card'

type Props = {}

const Editskeleton = (props: Props) => {
  return (
    <div className="mt-5 max-w-[1280px] mx-auto">
        {/* <Skeleton className="h-12 w-full rounded-full" /> */}
        <Card className="p-5">
        <h1 className="text-2xl text-center font-medium my-2 mb-6">Daily Quantity Form</h1>
            <div className='grid md:grid-cols-2 gap-8 my-5'>
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

export default Editskeleton