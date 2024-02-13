import React from 'react'
import { Skeleton } from './ui/skeleton'

type Props = {}

const SkeletonComp = (props: Props) => {
  return (
    <Skeleton className="w-[100px] h-[20px] rounded-full" />
  )
}

export default SkeletonComp