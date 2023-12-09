import { Label } from '@/components/ui/label'
import React from 'react'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

type Data =  {
    name:string, 
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
        <Label className='absolute left-20 '>{label}</Label>
        <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
            <XAxis
            dataKey="name"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            />
            <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${value}`}
            />
            <Tooltip />
            <Bar dataKey="total" fill={color} radius={[4, 4, 0, 0]} />
        </BarChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Charts