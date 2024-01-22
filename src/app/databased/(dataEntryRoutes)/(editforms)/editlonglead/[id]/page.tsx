import React from 'react'
import prisma from "@/lib/prismadb"
import Editskeleton from '../../../Editskeleton'
import EditLongLeadForm from '../EditLongLeadForm'
import CompoundInterestCalculator from '../CompoundInterestCalculator'

type Props = {}

const Editcategory = async ({ params }: { params: { id: string } }) => {
    const id = params.id
    const DatabyId = await prisma.longLeadItem.findUnique({
        where:{
            id:parseInt(id)
        }
    })
    console.log(DatabyId)

  return (
    <div>
        {/* {DatabyId ? (
            <EditLongLeadForm data={DatabyId}/>
        ):(
            <Editskeleton/>
        )} */}
        <CompoundInterestCalculator/>
    </div>
  )
}

export default Editcategory