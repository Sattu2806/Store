'use client'
import { DailyQuantity, Project } from '@prisma/client'
import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { DataTable } from './DataTable'
import { columns } from "./Cloumns"
import TableSkeleton from '@/app/databased/(dataEntryRoutes)/TableSkeleton'

type Props = {}



const DailyDataTable = (props: Props) => {
    const {data: ProjectEditData = [], error: ProjectEditDatanError, isLoading: isProjectEditDataLoading, refetch:refetchProjectEditData} = useQuery<Project[]>({
        queryKey:'ProjectEditTableData',
        queryFn: ()=> axios.get('/api/productivitytable').then((res) => res.data),
        staleTime:60 * 1000,
        retry:3
     })
  return (
    <div className='max-w-[1280px] mx-auto'>
        {isProjectEditDataLoading ? (
            <TableSkeleton/>
        ):(
        <DataTable columns={columns} data={ProjectEditData} />
        )}
    </div>
  )
}

export default DailyDataTable