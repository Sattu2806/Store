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


  return (
    <div className='max-w-[1280px] mx-auto px-4'>
      <Dashboard  total={totalValues}/>
    </div>
  )
}

export default page