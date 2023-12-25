import React from 'react'
import prisma from "@/app/prismadb"
import Dashboard from './Dashboard'

type Props = {}

const page = async (props: Props) => {

  const allmanpower = await prisma.manpowerData.groupBy({
    by:['category', 'Group'],
    _sum: {
      Nos:true
  },          
  where:{
    Month:'Mar',
    Year:2024
}
  })
  console.log(allmanpower)

  return (
    <div className='max-w-[1280px] mx-auto px-4'>
      <Dashboard  />
    </div>
  )
}

export default page