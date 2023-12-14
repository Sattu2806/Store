import React, { ReactElement } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AggregatedData } from '@/lib/types';

type Props = {
    total:AggregatedData
    label:string
    unit: ReactElement
}

const CardComponent = ({total, label, unit}: Props) => {
  return (
    <Card  className='cursor-pointer hover:bg-slate-50 hover:shadow-md duration-100 ease-in-out'>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
            {label}
        </CardTitle>
        </CardHeader>
        <CardContent>
        <div className="text-2xl font-bold">
            {label === 'Total Excavation' ? total._sum.Excavation?.toFixed(2) : null}
            {label === 'Total FormWork' ? total._sum.FormWork?.toFixed(2) : null}
            {label === 'Total Rebar' ? total._sum.Rebar?.toFixed(2) : null}
            {label === 'Total Concrete' ? total._sum.Concrete?.toFixed(2) : null}
            {unit}</div>
        </CardContent>
    </Card>
  )
}

export default CardComponent