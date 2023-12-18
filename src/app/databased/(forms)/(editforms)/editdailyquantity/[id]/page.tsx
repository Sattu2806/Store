import React from 'react'
import prisma from "@/app/prismadb"
import EditDailyQuantityForm from '../EditDailyQuantityForm'

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
        {DatabyId && (
            <EditDailyQuantityForm data={DatabyId}/>
        )}
    </div>
  )
}

export default Editdailyquantity