'use client'
import React from 'react'
import { Button } from '../components/ui/button'
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


type Props = {}

const Navbar = (props: Props) => {
  const pathname = usePathname()
  return (
    <div>
        <div className='py-5 max-w-[1280px] mx-auto grid grid-cols-2 gap-10'>
          <div className='flex items-center space-x-5'>
            <Link href='/' className='font-medium hover:opacity-60'>Home</Link>
            <Link href='/categories' className='font-medium hover:opacity-60'>Categories</Link>
            <Link href='/item' className='font-medium hover:opacity-60'>Item</Link>
            <Link href='/variants' className='font-medium hover:opacity-60'>Variants</Link>
            <Link href='/dashboard' className='font-medium hover:opacity-60'>Dashbord</Link>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <DropdownMenuLabel className='text-base flex items-center font-medium hover:opacity-60'>Data <ChevronDown className="h-[1.2rem] w-[1.2rem]" /></DropdownMenuLabel>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>
                        <Link href='/databased/dashboard'>Dashboard</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href='/databased/uploaddata'>Upload Data</Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <Separator/>
    </div>
  )
}

export default Navbar