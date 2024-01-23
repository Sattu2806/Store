import React from 'react'
import prisma from "@/lib/prismadb"
import LongLeadItem from './LongLeadItem'
import { SearchLongSchemaType } from './LongLeadSideBar'

type Props = {
  filterValues: SearchLongSchemaType
}

const LongLeadList = async ({filterValues:{
  q,category, country, delivery
}}: Props) => {

  const searchString =q?.split(" ").filter((word) => word.length > 0).join(" & ")
  console.log(searchString)

  const longleads = await prisma.longLeadItem.findMany({
    where: {
      OR: [
        {
          description: {
            search: searchString,
          },
        },
        {
          deliveryMode: {
            search: searchString,
          },
        },
        {
          vendor: {
            search: searchString,
          },
        },
        {
          country:{
            search:searchString
          }
        },
        {
          LongLeadItemCategory: {
            name: {
              search: searchString,
            },
          },
        },
      ],
      AND:[
        {
          deliveryMode:{
            equals:delivery
          }
        },
        {
          country:{
            equals:country
          }
        },
        {
          LongLeadItemCategory:{
            name:{
              equals:category
            }
          }
        },
      ]
    },
    include:{
      deliveryToSite:true,
      finalInspection:true,
      manufacturingStatus:true,
      poStatus:true,
      prStatus:true,
      technicalEvaluation:true,
      receivedQuotation:true,
      rfqStatus:true  
    }
  });
  
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