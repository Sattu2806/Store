import { Card } from '@/components/ui/card'
import React from 'react'
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from 'next/image'

type Props = {}

const CardProto = (props: Props) => {
  return (
    <div className='flex items-center justify-center mt-10'>
        <Card className='p-4 max-w-[350px] flex items-center justify-between flex-col'>
            <Image src="/image.jpg" alt="Image" width={300} height={1000} className="rounded-md object-cover mb-3" />
            <div >
                <li>No Pre-requisite Required</li>
                <li>50+ hours On-Demand Video</li>
                <li>8 Real World Design Problems</li>
            </div>
        </Card>
    </div>
  )
}

export default CardProto