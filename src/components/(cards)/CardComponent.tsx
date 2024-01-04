import React, { ReactElement } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AggregatedData } from '@/lib/types';

import { TotalScopeAggregateResult } from '@/lib/types';


type Props = {
    total:AggregatedData
    totalActual:TotalScopeAggregateResult
    label:string
    unit: ReactElement
}

const CardComponent = ({totalActual, total, label, unit}: Props) => {
  return (
    <Card className='cursor-pointer hover:shadow-lg duration-100 ease-in-out hover:border-black py-3 px-4 text-neutral-800 hover:scale-105'>
        <CardTitle className='text-center p-0'><p className='text-center bg-[#363062] p-[6px] text-white rounded-md text-[18px]'>{label}</p></CardTitle>
        <div className='flex items-center justify-between mt-2'>
            <CardContent className='p-0'>
                <CardTitle className="text-sm font-medium p-0 text-center">
                    Total
                </CardTitle>
                <div className="text-md font-medium text-center">
                    {label === 'Excavation' ? total._sum?.Excavation?.toFixed(0) : null}
                    {label === 'FormWork' ? total._sum?.FormWork?.toFixed(0) : null}
                    {label === 'Rebar' ? total._sum?.Rebar?.toFixed(0) : null}
                    {label === 'Concrete' ? total._sum?.Concrete?.toFixed(0) : null}
                    {unit}
                </div>
            </CardContent>
            <CardContent className='p-0'>
            <CardTitle className="text-sm font-medium p-0 text-center">
                Completed
            </CardTitle>
            <div className="text-md font-semibold whitespace-pre text-center">
                {label === 'Excavation' ? totalActual._sum.excavationQty?.toFixed(0) : null}
                {label === 'FormWork' ? totalActual._sum.totalFoundations?.toFixed(0) : null}
                {label === 'Rebar' ? totalActual._sum.rebarQty?.toFixed(0) : null}
                {label === 'Concrete' ? totalActual._sum.concreteQty?.toFixed(0) : null}
                {unit}
            </div>
            </CardContent>
        <CardContent className='p-0 '>
            <CardTitle className="text-sm font-medium p-0 text-center">
                Balance
            </CardTitle>
            <div className="text-md font-semibold">
                {label === 'Excavation' ? (total._sum?.Excavation !== null ? (total._sum?.Excavation - totalActual._sum?.excavationQty) : null)?.toFixed(0) : null}
                {label === 'FormWork' ? (total._sum?.FormWork !== null ? (total._sum?.FormWork - totalActual._sum?.totalFoundations):null)?.toFixed(0) : null}
                {label === 'Rebar' ? (total._sum?.Rebar !== null ? (total._sum?.Rebar - totalActual._sum?.rebarQty):null)?.toFixed(0) : null}
                {label === 'Concrete' ? (total._sum?.Concrete !== null ? (total._sum?.Concrete - totalActual._sum?.concreteQty):null)?.toFixed(0) : null}
                {unit}
            </div>
        </CardContent>
        </div>
    </Card>
  )
}

export default CardComponent