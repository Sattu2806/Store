import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query'
import ManpowerCharts from './ManpowerChart';

type Props = {}

type ManpowerDataItem = {
    _sum: {
      Nos: number | null;
    };
    Month: string;
    Year: number;
    category: string;
  };


const ManpowerchartCollection = (props: Props) => {
    const {data: ManpowerApiData = [], error: manpowerapiDataError, isLoading: ismanpowerapiDataLoading, refetch:refetchmanpowerapiData} = useQuery<ManpowerDataItem[]>({
        queryKey:'manpowerapidata',
        queryFn: ()=> axios.get('/api/manpowerapidata')
        .then((res) => res.data),
        staleTime:60 * 1000,
        retry:3,
    })

    const direct = ManpowerApiData
    ?.filter((data) => data.category === 'Direct')
    .map((item) => {
        return { month: item.Month, total: item._sum.Nos };
    });
    const indirect = ManpowerApiData
    ?.filter((data) => data.category === 'Indirect')
    .map((item) => {
        return { month: item.Month, total: item._sum.Nos };
    });
    const equipment = ManpowerApiData
    ?.filter((data) => data.category === 'Equipment')
    .map((item) => {
        return { month: item.Month, total: item._sum.Nos };
    });

  return (
    <div className='flex flex-col space-y-3'>
        <ManpowerCharts data={direct} label='Direct ManPower Histogram' color='#65B741'/>
        <ManpowerCharts data={indirect} label='InDirect ManPower Histogram' color='#7071E8'/>
        <ManpowerCharts data={equipment} label='Equipment Histogram' color='#9ADE7B'/>
    </div>
  )
}

export default ManpowerchartCollection