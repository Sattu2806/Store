import React from 'react'
import prisma from "@/lib/prismadb"
// import LongLeadTable from './LongLeadTable'÷

type Props = {}

const page = async (props: Props) => {
    const longleaddata = await prisma?.longLeadItem.findMany({})
  return (
    <div>
        {/* <LongLeadTable/> */}
    </div>
  )
}

export default page