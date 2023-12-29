import React from 'react'
import prisma from "@/app/prismadb"
import EditTotalQuantityForm from '../EditTotalQuantityForm'
import Editskeleton from '../../../Editskeleton'

type Props = {}

const Edittotalquantity = async ({ params }: { params: { id: string } }) => {
    const id = params.id
    const DatabyId = await prisma.totalQuantity.findUnique({
        where:{
            id:parseInt(id)
        }
    })
    console.log(DatabyId)

  return (
    <div>
        {DatabyId ? (
            <EditTotalQuantityForm data={DatabyId}/>
        ):(
            <Editskeleton/>
        )}
    </div>
  )
}

export default Edittotalquantity