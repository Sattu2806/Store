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
import { ChevronDown, Menu } from "lucide-react"
import { signOut, useSession } from 'next-auth/react'
import { UserRole } from '@prisma/client'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  


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
            <Link href='/work-images' className='font-medium hover:opacity-60 max-md:hidden'>Work Images</Link>
            {/* {Session?.user.role !== UserRole.USER  && ( */}
                <Link href='/databased/uploadJson' className='font-medium hover:opacity-60 max-md:hidden'>Upload Data</Link>
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
            <div className='max-md:hidden flex items-center space-x-2'>
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
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <DropdownMenuLabel className='text-base flex items-center font-medium hover:opacity-60 cursor-pointer'>Long Lead<ChevronDown className="h-[1.2rem] w-[1.2rem]" /></DropdownMenuLabel>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>
                        <Link className='w-full' href='/databased/longlead'>LongLead Form</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link className='w-full' href='/databased/longleadcategory'>LongLead Category Form</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link className='w-full' href='/databased/longleadtable'>LongLead Table</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link className='w-full' href='/databased/longleadlist'>LongLead List</Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            </div>
            {Session?.user.role === UserRole.SUPERADMIN && (
                <Link href='/admin' className='font-medium hover:opacity-60 max-md:hidden'>Admin</Link>
            )}
            </div>
            {Session && (
            <div className='flex items-center justify-between space-x-5 max-md:hidden'>
              <p className='font-medium'>{Session?.user?.name}</p>
              <Button onClick={() => signOut()} variant='destructive' className='text-white'>SignOut</Button>
            </div>
            )}
          <div className='md:hidden'>
          <Sheet>
            <SheetTrigger><Menu /></SheetTrigger>
            <SheetContent>
                <SheetHeader>
                <Link href='/work-images' className='font-medium hover:opacity-60 text-left my-2 pl-2'>Work Images</Link>
                <Link href='/databased/uploadJson' className='font-medium hover:opacity-60 text-left my-2 pl-2'>Upload Data</Link>
                </SheetHeader>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild className='my-2'>
                        <DropdownMenuLabel className='text-base flex items-center font-medium hover:opacity-60 cursor-pointer'>Forms<ChevronDown className="h-[1.2rem] w-[1.2rem] " /></DropdownMenuLabel>
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
                <DropdownMenu>
                    <DropdownMenuTrigger asChild className='my-2'>
                        <DropdownMenuLabel className='text-base flex items-center font-medium hover:opacity-60 cursor-pointer'>Long Lead<ChevronDown className="h-[1.2rem] w-[1.2rem]" /></DropdownMenuLabel>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>
                            <Link className='w-full' href='/databased/longlead'>LongLead Form</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link className='w-full' href='/databased/longleadcategory'>LongLead Category Form</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link className='w-full' href='/databased/longleadtable'>LongLead Table</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link className='w-full' href='/databased/longleadlist'>LongLead List</Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                {Session?.user.role === UserRole.SUPERADMIN && (
                    <Link href='/admin' className='font-medium hover:opacity-60 my-2 pl-2'>Admin</Link>
                )}
                {Session && (
                    <div className='pl-2'>
                    <p className='font-medium'>{Session?.user?.name}</p>
                    <Button onClick={() => signOut()} variant='destructive' className='text-white my-2'>SignOut</Button>
                    </div>
                )}
            </SheetContent>
            </Sheet>
            </div>
          </div>
        </div>
        <Separator/>
    </div>
  )
}

export default Navbar