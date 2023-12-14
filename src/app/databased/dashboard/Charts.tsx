import { Card, CardHeader } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import React from 'react'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

type Data =  {
    month:string, 
    total:number
}

type Props = {
    data:Data[],
    label:string,
    color:string
}

const Charts = ({data, label,color}: Props) => {
  return (
    <div className='relative'>
        <Card className='px-2'>
            <CardHeader className='text-lg text-center font-semibold'>{label}</CardHeader>
            <ResponsiveContainer width="100%" height={350}>
            <BarChart data={data}>
                <XAxis
                dataKey="month"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                style={{
                    fontWeight: '600',
                    color:"black"
                }}
                />
                <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}`}
                />
                <Tooltip />
                <Bar dataKey="total" fill={color} radius={[4, 4, 0, 0]} />
            </BarChart>
            </ResponsiveContainer>
        </Card>
    </div>
  )
}

export default Charts
