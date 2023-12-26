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
import ChartPie from '../../../components/(Charts)/ChartPieActual';
import ProductivityCharts from '../../../components/(Charts)/ProductivityCharts';
import ManpowerchartCollection from '../../../components/(Charts)/ManpowerchartCollection';
import SCurveChart from '../../../components/(Charts)/SCurveChart';
import LongLeadTable from '../../../components/(Tables)/LongLeadTable';
import AllCardComponents from '../../../components/(cards)/AllCardComponents';
import NCRChart from '@/components/(Charts)/NCRChart';
import ChartPiePlan from '@/components/(Charts)/ChartPiePlan';
import ChartPieActual from '../../../components/(Charts)/ChartPieActual';

type Props = {

}

const Dashboard = (props:Props) => {
    const {data: total , error: manpowerapiDataError, isLoading: ismanpowerapiDataLoading, refetch:refetchmanpowerapiData} = useQuery<AggregatedData>({
        queryKey:'projectdata2',
        queryFn: async () => {
            try {
              const res = await axios.get('/api/project');
              return res.data;
            } catch (error) {
              throw new Error('Failed to fetch data');
            }
        },
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
            <NCRChart/>
            </div>
            <div className='space-y-3 flex flex-col '>
            <ChartPieActual/>
            </div>
            <div className='space-y-3 flex flex-col '>
            <ChartPiePlan/>
            </div>
        </div>
        <div className='grid md:grid-cols-2 gap-10 mt-3'>
            <div className='space-y-3 flex flex-col'>
            <ProductivityCharts/>
            <ThreeBarChart data={ConcretePlannedVsActual} label='Comulative Concrete Actual Vs Planned' color='#ABAC2A'/>
            {/* <ThreeBarChart data={NCRTable} label='Comulative Non Complaince Report (NCR)' color='#9A4444'/> */}
            </div>
            <div className='space-y-3 flex flex-col'>
            <ManpowerchartCollection/>
            <ComposedCharts />
            </div>
        </div>
        <div className='grid md:grid-cols-2 gap-10 mt-3'>
            <LongLeadTable/>
        </div>
    </div>
  );
};
export default Dashboard;