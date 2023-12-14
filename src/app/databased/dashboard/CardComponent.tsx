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
    <Card className='cursor-pointer hover:bg-slate-100 hover:shadow-lg duration-100 ease-in-out hover:border-black py-2 px-2 text-neutral-800'>
        <div className='flex items-center justify-between'>
            <CardContent className='p-0'>
                <CardTitle className="text-sm font-medium p-0">
                    {label}
                </CardTitle>
                <div className="text-lg font-medium text-center">
                    {label === 'Total Excavation' ? total._sum.Excavation?.toFixed(0) : null}
                    {label === 'Total FormWork' ? total._sum.FormWork?.toFixed(0) : null}
                    {label === 'Total Rebar' ? total._sum.Rebar?.toFixed(0) : null}
                    {label === 'Total Concrete' ? total._sum.Concrete?.toFixed(0) : null}
                    {unit}
                </div>
            </CardContent>
            <CardContent className='p-0'>
            <CardTitle className="text-sm font-medium p-0">
                {label === 'Total Excavation' ? 'Completed Excavation' : null}
                {label === 'Total FormWork' ? 'Completed Formwork' : null}
                {label === 'Total Rebar' ? 'Completed Rebar' : null}
                {label === 'Total Concrete' ? 'Completed Concrete' : null}
            </CardTitle>
            <div className="text-md font-semibold whitespace-pre text-center">
                {label === 'Total Excavation' ? '500000' : null}
                {label === 'Total FormWork' ? '4000' : null}
                {label === 'Total Rebar' ? '62330' : null}
                {label === 'Total Concrete' ? '43000' : null}
                {unit}
            </div>
            </CardContent>
        </div>
        <div className='flex items-center justify-center mt-2'>
        <CardContent className='p-0 flex items-center justify-around opacity-70 space-x-1'>
            <CardTitle className="text-sm font-medium p-0">
                {label === 'Total Excavation' ? 'Balance Excavation : ' : null}
                {label === 'Total FormWork' ? 'Balance Formwork : ' : null}
                {label === 'Total Rebar' ? 'Balance Rebar : ' : null}
                {label === 'Total Concrete' ? 'Balance Concrete : ' : null}
            </CardTitle>
            <div className="text-sm font-semibold">
                {label === 'Total Excavation' ? ' 240000' : null}
                {label === 'Total FormWork' ? ' 32000' : null}
                {label === 'Total Rebar' ? ' 62330' : null}
                {label === 'Total Concrete' ? ' 29000' : null}
                {unit}
            </div>
        </CardContent>
        </div>
    </Card>
  )
}

export default CardComponent