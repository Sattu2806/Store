import React from 'react'
import prisma from "@/app/prismadb"
import Dashboard from './Dashboard'

type Props = {}

const page = async (props: Props) => {



  const totalValues = await prisma.project.aggregate({
    _sum:{
      FormWork:true,
      Concrete:true,
      Excavation:true,
      Rebar:true
    },

  });

  const ManpowerData = await prisma.monthlyData.findMany()

  const ManpowerApiData = await prisma.manpowerData.groupBy({
    by:['Month', 'Year', 'category'],
      _sum:{
        Nos:true
      }
  })

  
  


  return (
    <div className='max-w-[1280px] mx-auto px-4'>
      <Dashboard ManpowerApiData={ManpowerApiData} manpowerdata={ManpowerData} total={totalValues}/>
    </div>
  )
}

export default page