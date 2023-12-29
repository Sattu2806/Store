'use client'
import { Category, Group,} from '@prisma/client'
import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { DataTable } from './DataTable'
import { columns } from "./Cloumns"
import TableSkeleton from '../TableSkeleton'

type Props = {}



const GroupDataTable = (props: Props) => {
    const {data: groupData = [], error: groupDatanError, isLoading: groupDataLoading, refetch:refetchgroupData} = useQuery<Group[]>({
      queryKey:'groupdata',
      queryFn: ()=> axios.get('/api/group').then((res) => res.data),
      staleTime:60 * 1000,
      retry:3,
    })
    console.log(groupData)
  return (
    <div className='max-w-[1280px] mx-auto'>
        {groupDataLoading ? (
            <TableSkeleton/>
        ):(
        <DataTable columns={columns} data={groupData} />
        )}
    </div>
  )
}

export default GroupDataTable