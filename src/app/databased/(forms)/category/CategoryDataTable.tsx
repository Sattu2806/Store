'use client'
import { Category,} from '@prisma/client'
import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { DataTable } from './DataTable'
import { columns } from "./Cloumns"
import TableSkeleton from '../TableSkeleton'

type Props = {}



const CategoryDataTable = (props: Props) => {
    const {data: categoryData = [], error: categoryDataError, isLoading: categoryDataLoading, refetch:refetchcategoryData} = useQuery<Category[]>({
      queryKey:'allcategorydata',
      queryFn: ()=> axios.get('/api/category').then((res) => res.data),
      staleTime:60 * 1000,
      retry:3,
    })
     console.log(categoryData)
  return (
    <div className='max-w-[1280px] mx-auto'>
        {categoryDataLoading ? (
            <TableSkeleton/>
        ):(
        <DataTable columns={columns} data={categoryData} />
        )}
    </div>
  )
}

export default CategoryDataTable