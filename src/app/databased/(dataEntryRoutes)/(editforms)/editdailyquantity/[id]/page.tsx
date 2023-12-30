import React from 'react'
import prisma from "@/lib/prismadb"
import EditDailyQuantityForm from '../EditDailyQuantityForm'
import { Skeleton } from '@/components/ui/skeleton'
import Dailyskeleton from '../../../Editskeleton'

type Props = {}

const Editdailyquantity = async ({ params }: { params: { id: string } }) => {
    const id = params.id
    const DatabyId = await prisma.dailyQuantity.findUnique({
        where:{
            id:parseInt(id)
        }
    })
    console.log(DatabyId)

  return (
    <div>
        {DatabyId ? (
            <EditDailyQuantityForm data={DatabyId}/>
        ):(
            <Dailyskeleton/>
        )}
    </div>
  )
}

export default Editdailyquantity