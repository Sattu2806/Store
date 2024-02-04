import React from 'react'
import prisma from "@/lib/prismadb"
import LongLeadTable from './LongLeadTable'

type Props = {}

const page = async (props: Props) => {
  return (
    <div>
        <LongLeadTable/>
    </div>
  )
}

export default page