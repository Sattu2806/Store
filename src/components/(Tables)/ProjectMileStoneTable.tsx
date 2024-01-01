'use client'
import React from 'react'
import { ProjectMileStone } from '@/lib/data/formdata'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Card } from '../ui/card'
  
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
type Props = {}

const ProjectMileStoneTable = (props: Props) => {
    console.log(ProjectMileStone)
  
  return (
    <div className='w-full col-span-2'>
        <Card className='p-4 w-full'>
            <p className='text-xl font-semibold my-2 text-center'>Project Milestone Table</p>
        <Table>
        <TableCaption>Project Milestone Table</TableCaption>
        <TableHeader>
            <TableRow >
            <TableHead>Description</TableHead>
            {months.map((month, index)=>(
                <TableHead key={index}>{month}</TableHead>
            ))}
            </TableRow>
        </TableHeader>
        <TableBody>
            {ProjectMileStone.map((data, index) => (
                <TableRow key={index} className={`${index % 2 === 0 ? "bg-gray-50":""}`}>
                    <TableCell>{data.description}</TableCell>
                    {months.map((month, index1) => {
                        const startmonth = new Date (data.startDate).getMonth()
                        const endmonth = new Date (data.endDate).getMonth()

                        const Bool = index1 >= startmonth && index1 <= endmonth;
                        return(
                            <TableCell key={index1} className={`${Bool ? "bg-slate-300" : ""}`}></TableCell>
                        )
                    })}
                </TableRow>
            ))}
        </TableBody>
        </Table>
        </Card>
    </div>
  )
}

export default ProjectMileStoneTable