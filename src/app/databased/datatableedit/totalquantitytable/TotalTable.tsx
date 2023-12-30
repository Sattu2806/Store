'use client'
import {TotalScope } from '@prisma/client'
import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { DataTable } from './DataTable'
import { columns } from "./Cloumns"
import TableSkeleton from '@/app/databased/(dataEntryRoutes)/TableSkeleton'

type Props = {}



const TotalDataTable = (props: Props) => {
    const {data: TotalData = [], error: TotalDatanError, isLoading: isTotalDataLoading, refetch:refetchTotalData} = useQuery<TotalScope[]>({
        queryKey:'TotalTableData',
        queryFn: ()=> axios.get('/api/totalquantity').then((res) => res.data),
        staleTime:60 * 1000,
        retry:3
     })
     console.log(TotalData)
  return (
    <div className='max-w-[1280px] mx-auto'>
        {isTotalDataLoading ? (
            <TableSkeleton/>
        ):(
        <DataTable columns={columns} data={TotalData} />
        )}
    </div>
  )
}

export default TotalDataTable