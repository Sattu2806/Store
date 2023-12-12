import React from 'react'
import prisma from "@/app/prismadb"
import Dashboard from './Dashboard'

type Props = {}

const page = async (props: Props) => {
  const projects = await prisma.project.findMany({})
  const monthlydataInDirect = await prisma.monthlyData.findMany({
    where:{
      Type:"Indirect"
    },
    select: {
      Month: true,
      Value: true
    }
  })
  const monthlydataDirect = await prisma.monthlyData.findMany({
    where:{
      Type:"Direct"
    },
    select: {
      Month: true,
      Value: true
    }
  })
  const monthlydataEquipment = await prisma.monthlyData.findMany({
    where:{
      Type:"Equipment"
    },
    select: {
      Month: true,
      Value: true
    }
  })


  console.log(monthlydataDirect)
  return (
    <div className='max-w-[1280px] mx-auto px-4'>
      <Dashboard data={projects} monthlydataDirect={monthlydataDirect} monthlydataInDirect={monthlydataInDirect} monthlydataEquipment={monthlydataEquipment}/>
    </div>
  )
}

export default page