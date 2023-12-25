import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { sCurveData } from '@/lib/data/formdata';
import ProgressBar from '../../app/databased/dashboard/ProgressBar';
import { Button } from '@/components/ui/button';
import ActualVsPallnedChart from './ActualvsPlannedChart';

type Props = {};

const monthsArray = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

const SCurveChart = (props: Props) => {
    const [opendialogue, setopenDialogue] = useState(false)
  const currentYear = new Date().getFullYear();
  const currentMonthIndex = new Date().getMonth();
  const currentMonth = monthsArray[currentMonthIndex];

  let cumulativeActual = 0
  let cumulativePlanned = 0

  const dataWithCumulative = sCurveData.map((entry, index) => {
    cumulativeActual += entry.actual;
    cumulativePlanned += entry.planned;

    return {
      ...entry,
      cumulative_actual: cumulativeActual,
      cumulative_planned: cumulativePlanned,
    };
  });

  const currentMonthData = dataWithCumulative.find(entry => entry.month === currentMonth && entry.year === currentYear);

  console.log(currentMonthData)



  return (
    <div>
      <Card className="relative px-2 h-[430px]">
        <CardHeader className='text-lg text-center font-semibold'>Project Overall S-Curve (Cutt of current {currentMonth})</CardHeader>
        <Button size='sm' className='my-1 absolute top-14 right-3'    onClick={(e) => {
            e.preventDefault();
            setopenDialogue(true);
        }}
        >View Data</Button>
        <CardContent>
            <div className='flex flex-col  items-baseline justify-between h-full gap-10 mt-16'>
            <ProgressBar label='Planned' color='bg-[#0088FE]' progress={currentMonthData?.cumulative_planned ?? 0}/>

            <ProgressBar label='Actual' color='bg-[#00C49F]'  progress={currentMonthData?.cumulative_actual ?? 0}/>
            
            <ProgressBar progress={currentMonthData ? currentMonthData.cumulative_planned - currentMonthData.cumulative_actual : 0} label='Variance' color='bg-red-500'  />
            </div>
        </CardContent>
      </Card>
      <ActualVsPallnedChart opendialogue={opendialogue} setopenDialogue={setopenDialogue} />
    </div>
  );
};

export default SCurveChart;
