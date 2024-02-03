'use client'
import React from 'react'
import { Button } from './ui/button'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { signOut, useSession } from 'next-auth/react'
import { UserRole } from '@prisma/client'


type Props = {}

const Navbar = (props: Props) => {
  const {data: Session, status} = useSession()
  const pathname = usePathname()
  return (
    <div>
        <div className='py-4 max-w-[1280px] mx-auto px-3'>
          <div className='flex items-center justify-between space-x-5 w-full'>
            <div className='flex items-center justify-between space-x-5'>
            <Link href='/' className='font-medium hover:opacity-60'>Home</Link>
            <Link href='/workaccordian' className='font-medium hover:opacity-60'>Accordian</Link>
            {/* <Link href='/categories' className='font-medium hover:opacity-60'>Categories</Link>
            <Link href='/item' className='font-medium hover:opacity-60'>Item</Link>
            <Link href='/variants' className='font-medium hover:opacity-60'>Variants</Link> */}
            <Link href='/databased/dashboard' className='font-medium hover:opacity-60'>Dashbord</Link>
            <Link href='/work-images' className='font-medium hover:opacity-60'>Work Images</Link>
            {/* {Session?.user.role !== UserRole.USER  && ( */}
                <Link href='/databased/uploadJson' className='font-medium hover:opacity-60'>Upload Data</Link>
            {/* )} */}
            {/* <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <DropdownMenuLabel className='text-base flex items-center font-medium hover:opacity-60 cursor-pointer'>Uploads<ChevronDown className="h-[1.2rem] w-[1.2rem]" /></DropdownMenuLabel>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>
                        <Link className='w-full' href='/databased/uploaddailyquantity'>Upload Daily Quantity</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link className='w-full' href='/databased/uploadtotalquantity'>Upload Total Quantity</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link className='w-full' href='/databased/uploadmanpowerdata'>Upload Manpower Data</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link className='w-full' href='/databased/uploaddata'>Upload Project Data</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link className='w-full' href='/databased/uploadmonthlydata'>Upload Monthly Data</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link className='w-full' href='/databased/uploadbytrade'>Upload Trade Data</Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu> */}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <DropdownMenuLabel className='text-base flex items-center font-medium hover:opacity-60 cursor-pointer'>Forms<ChevronDown className="h-[1.2rem] w-[1.2rem]" /></DropdownMenuLabel>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>
                        <Link className='w-full' href='/databased/group'>Group Form</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link className='w-full' href='/databased/category'>Category Form</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link className='w-full' href='/databased/longlead'>Long Lead</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link className='w-full' href='/databased/totalquantity'>Total Quantity Form</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link className='w-full' href='/databased/dailyquantity'>Daily Quantity Form</Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            {Session?.user.role === UserRole.SUPERADMIN && (
                <Link href='/admin' className='font-medium hover:opacity-60'>Admin</Link>
            )}
            </div>
            {Session && (
            <div className='flex items-center justify-between space-x-5'>
              <p className='font-medium'>{Session?.user?.name}</p>
              <Button onClick={() => signOut()} variant='destructive' className='text-white'>SignOut</Button>
            </div>
            )}
          </div>
        </div>
        <Separator/>
    </div>
  )
}

export default Navbar