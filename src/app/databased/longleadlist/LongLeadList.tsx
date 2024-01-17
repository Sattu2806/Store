import React from 'react'
import prisma from "@/lib/prismadb"
import LongLeadItem from './LongLeadItem'
import { SearchLongSchemaType } from './LongLeadSideBar'
import { Prisma } from '@prisma/client'

type Props = {
  filterValues: SearchLongSchemaType
}

const LongLeadList = async ({filterValues:{
  q
}}: Props) => {

  const searchString =q?.split(" ").filter((word) => word.length > 0).join(" & ")

  // const searchFilter = Prisma.lon = searchString ? {
  //   OR:[
  //     {description:{search: searchString}}
  //   ]
  // }
  // :{}
  console.log(searchString)

  const longleads = await prisma.longLeadItem.findMany({
    where:{
      description:{
        search:searchString
      }
    }
  })
  return (
    <div className='grow space-y-4'>
      {longleads.map((longlead) => (
        <div key={longlead.id}>
          <LongLeadItem longlead={longlead}/>
        </div>
      ))}
    </div>
  )
}

export default LongLeadList