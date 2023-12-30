import React from 'react'
import prisma from "@/lib/prismadb"
import Editskeleton from '../../../Editskeleton'
import EditGroupForm from '../EditGroupForm'

type Props = {}

const Editcategory = async ({ params }: { params: { id: string } }) => {
    const id = params.id
    const DatabyId = await prisma.group.findUnique({
        where:{
            id:parseInt(id)
        }
    })
    console.log(DatabyId)

  return (
    <div>
        {DatabyId ? (
            <EditGroupForm data={DatabyId}/>
        ):(
            <Editskeleton/>
        )}
    </div>
  )
}

export default Editcategory