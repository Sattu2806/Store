import React from 'react'
import prisma from "@/app/prismadb"
import Dashboard from './Dashboard'

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

  console.log(ManpowerApiData)



  return (
    <div className='max-w-[1280px] mx-auto px-4'>
      <Dashboard ManpowerApiData={ManpowerApiData} manpowerdata={ManpowerData} total={totalValues} monthlydataDirect={monthlydataDirect} monthlydataInDirect={monthlydataInDirect} monthlydataEquipment={monthlydataEquipment}/>
    </div>
  )
}

export default page