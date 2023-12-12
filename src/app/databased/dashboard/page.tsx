import React from 'react'
import prisma from "@/app/prismadb"
import Dashboard from './Dashboard'

type Props = {}

const page = async (props: Props) => {
  const projects = await prisma.project.findMany({})
  
  return (
    <div className='max-w-[1280px] mx-auto'>
      <Dashboard data={projects}/>
    </div>
  )
}

export default page