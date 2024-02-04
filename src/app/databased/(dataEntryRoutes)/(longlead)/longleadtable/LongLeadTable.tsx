'use client'
import React from 'react'
import { useQuery } from 'react-query'
import { DataTable} from './DataTable'
import { columns } from "./Cloumns"
import TableSkeleton from '@/app/databased/(dataEntryRoutes)/TableSkeleton'
import { GetLongLead } from '@/actions/(forms)/longlead'
import { LongLeadItem } from '@/lib/types'

type Props = {}


const LongLeadTable = (props: Props) => {
    const { data: LongLeadData = [], error: LongLeadDatanError, isLoading: isLongLeadDataLoading, refetch: refetchLongLeadData } = useQuery<LongLeadItem[]>({
        queryKey: 'LongLeadTable',
        queryFn: () => GetLongLead().then((res) => res.success),
        staleTime: 60 * 1000,
        retry: 3
    });

    const handleStatusChange = () => {
        refetchLongLeadData();
    };

    return (
        <div className='max-w-[1280px] mx-auto'>
            {isLongLeadDataLoading ? (
                <TableSkeleton />
            ) : (
                <DataTable columns={columns} data={LongLeadData} refetchData={handleStatusChange} />
            )}
        </div>
    );
};

export default LongLeadTable;
