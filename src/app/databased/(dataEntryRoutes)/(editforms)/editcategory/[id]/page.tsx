import React from 'react'
import prisma from "@/lib/prismadb"
import Editskeleton from '../../../Editskeleton'
import EditCategoryForm from '../EditCategoryForm'

type Props = {}

const Editcategory = async ({ params }: { params: { id: string } }) => {
    const id = params.id
    const DatabyId = await prisma.category.findUnique({
        where:{
            id:parseInt(id)
        }
    })
    console.log(DatabyId)

  return (
    <div>
        {DatabyId ? (
            <EditCategoryForm data={DatabyId}/>
        ):(
            <Editskeleton/>
        )}
    </div>
  )
}

export default Editcategory