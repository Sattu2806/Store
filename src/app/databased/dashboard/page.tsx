import React from 'react'
import prisma from "@/app/prismadb"
import Dashboard from './Dashboard'
import { useQuery } from 'react-query'

type Props = {}

const page = async (props: Props) => {

  const getMonthlyData = async (type:string) => {
    return await prisma.monthlyData.findMany({
      where: {
        Type: type,
      },
      select: {
        Month: true,
        Value: true,
      },
    });
  };
  
  const monthlydataInDirect = await getMonthlyData("Indirect");
  const monthlydataDirect = await getMonthlyData("Direct");
  const monthlydataEquipment = await getMonthlyData("Equipment");

  console.log(monthlydataDirect)

  const totalValues = await prisma.project.aggregate({
    _sum:{
      FormWork:true,
      Concrete:true,
      Excavation:true,
      Rebar:true
    }
  });

  const ManpowerData = await prisma.monthlyData.findMany()

  console.log(ManpowerData)


  return (
    <div className='max-w-[1280px] mx-auto px-4'>
      <Dashboard manpowerdata={ManpowerData} total={totalValues} monthlydataDirect={monthlydataDirect} monthlydataInDirect={monthlydataInDirect} monthlydataEquipment={monthlydataEquipment}/>
    </div>
  )
}

export default page