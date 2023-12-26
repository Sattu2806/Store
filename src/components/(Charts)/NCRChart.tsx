import React from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { sCurveData } from '@/lib/data/formdata';
import ProgressBar from '../../app/databased/dashboard/ProgressBar';
import { Button } from '@/components/ui/button';
import { NCRTable } from '@/lib/data/formdata';

type Props = {}
const COLORS = ["#0088FE", "#00C49F", "#00C49F"];

const NCRChart = (props: Props) => {
    const data = NCRTable
  return (
    <div>
        <Card className="relative px-2 h-[430px]">
        <CardHeader className='text-lg text-center font-semibold'>Comulative Non Complaince Report (NCR)</CardHeader>
        <CardContent>
            <div className='flex flex-col  items-baseline justify-between h-full gap-10 mt-16'>
                {data.map((item, index) => (
                    <ProgressBar key={index} label={item.name} color={`bg-[${COLORS[index]}]`} progress={item.value ?? 0}/>
                ))}
            </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default NCRChart