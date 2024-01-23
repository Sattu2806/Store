'use client'
import { DailyProductivity, LongLeadItem } from '@prisma/client'
import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { DataTable} from './DataTable'
import { columns } from "./Cloumns"
import TableSkeleton from '@/app/databased/(dataEntryRoutes)/TableSkeleton'
import { GetLongLead } from '@/actions/(forms)/longlead'

type Props = {}



const LongLeadTable = (props: Props) => {
    const {data: LongLeadData = [], error: LongLeadDatanError, isLoading: isLongLeadDataLoading, refetch:refetchLongLeadData} = useQuery<LongLeadItem[]>({
        queryKey:'LongLeadTable',
        queryFn: () => GetLongLead().then((res) => res.success),
        staleTime:60 * 1000,
        retry:3
     })
     const handleStatusChange = () => {
      console.log('Refetched')
      refetchLongLeadData();
    };
  return (
    <div className='max-w-[1280px] mx-auto'>
        {isLongLeadDataLoading ? (
            <TableSkeleton/>
        ):(
        <DataTable columns={columns} data={LongLeadData} refetchData = {handleStatusChange} />
        )}
    </div>
  )
}

export default LongLeadTable