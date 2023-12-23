'use client'
import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import Charts from '../../../components/(Charts)/Charts';

import { AggregatedData } from '@/lib/types';
import ComposedCharts from '../../../components/(Charts)/ComposedCharts';

import { NCRTable, ConcretePlannedVsActual } from '@/lib/data/formdata';
import ThreeBarChart from '../../../components/(Charts)/ThreeBarChart';
import DashboardSkeleton from './DashboardSkeleton';
import ChartPie from '../../../components/(Charts)/ChartPie';
import ProductivityCharts from '../../../components/(Charts)/ProductivityCharts';
import ManpowerchartCollection from '../../../components/(Charts)/ManpowerchartCollection';
import SCurveChart from '../../../components/(Charts)/SCurveChart';
import LongLeadTable from '../../../components/(Tables)/LongLeadTable';
import AllCardComponents from '../../../components/(cards)/AllCardComponents';

type Props = {
}

const Dashboard = (props:Props) => {
    const {data: total , error: manpowerapiDataError, isLoading: ismanpowerapiDataLoading, refetch:refetchmanpowerapiData} = useQuery<AggregatedData>({
        queryKey:'projectdata2',
        queryFn: ()=> axios.get('/api/project').then((res) => res.data),
        staleTime:60 * 1000,
        retry:3,
    })
    if(!total){
        return <div><DashboardSkeleton/></div>
    }
  return (
    <div >
        <AllCardComponents/>
        <div className='grid md:grid-cols-2 gap-10 mt-3'>
            <div className='space-y-3 flex flex-col'>
            <SCurveChart/>
            </div>
            <div className='space-y-3 flex flex-col'>
            <ChartPie/>
            </div>
        </div>
        <div className='grid md:grid-cols-2 gap-10 mt-3'>
            <LongLeadTable/>
        </div>
        <div className='grid md:grid-cols-2 gap-10 mt-3'>
            <div className='space-y-3 flex flex-col'>
            <ProductivityCharts/>
            <ThreeBarChart data={ConcretePlannedVsActual} label='Comulative Concrete Actual Vs Planned' color='#ABAC2A'/>
            <ThreeBarChart data={NCRTable} label='Comulative Non Complaince Report (NCR)' color='#9A4444'/>
            </div>
            <div className='space-y-3 flex flex-col'>
            <ManpowerchartCollection/>
            <ComposedCharts />
            </div>
        </div>
    </div>
  );
};

export default Dashboard;
