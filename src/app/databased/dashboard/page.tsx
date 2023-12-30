import React from 'react'
import prisma from "@/app/prismadb"
import Dashboard from './Dashboard'

type Props = {}

const page = async (props: Props) => {


  return (
    <div className='max-w-[1280px] mx-auto px-4'>
      <Dashboard  />
    </div>
  )
}

export default page