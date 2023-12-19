'use client'
import { DailyQuantity } from '@prisma/client'
import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { DataTable } from './DataTable'
import { columns } from "./Cloumns"
import TableSkeleton from '../TableSkeleton'

type Props = {}



const DailyDataTable = (props: Props) => {
    const {data: DailyData = [], error: DailyDatanError, isLoading: isDailyDataLoading, refetch:refetchDailyData} = useQuery<DailyQuantity[]>({
        queryKey:'DailyTableData1',
        queryFn: ()=> axios.get('/api/dailyquantity').then((res) => res.data),
        staleTime:60 * 1000,
        retry:3
     })
     console.log(DailyData)
  return (
    <div className='max-w-[1280px] mx-auto'>
        {isDailyDataLoading ? (
            <TableSkeleton/>
        ):(
        <DataTable columns={columns} data={DailyData} />
        )}
    </div>
  )
}

export default DailyDataTable