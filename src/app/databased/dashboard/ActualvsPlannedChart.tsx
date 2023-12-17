import { Card, CardHeader } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import React from 'react'
import { Bar, BarChart, ComposedChart, LabelList, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

type Data = {
    month: string,
    planned: number,
    actual:number
}

type Props = {
    data: Data[],
    label: string,
    color: string
}

const ActualVsPallnedChart = ({ data, label, color }: Props) => {

    return (
        <div className='relative'>
            <Card className='px-2'>
                <CardHeader className='text-lg text-center font-semibold'>{label}</CardHeader>
                <ResponsiveContainer width="100%" height={350}>
                    <ComposedChart data={data}>
                        <XAxis
                            dataKey="month"
                            stroke="#888888"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            style={{
                                fontWeight: '600',
                                color: "black"
                            }}
                        />
                        <YAxis
                            stroke="#888888"
                            yAxisId="left"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => `${value}`}
                        />
                        <YAxis
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => `${value}`}
                        yAxisId="right" orientation="right" />
                        <Tooltip contentStyle={{ borderRadius: '10px', background: '#fff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderColor: "none" }} />
                        <Legend />
                        <Bar yAxisId="left" dataKey="planned"  fill="#413ea0" radius={[4, 4, 0, 0]} >
                            <LabelList dataKey="planned" position="top" className='text-xs' />
                        </Bar>
                        <Bar yAxisId="left" dataKey="actual"  fill="#8884d8" radius={[4, 4, 0, 0]} >
                            <LabelList dataKey="actual" position="top" className='text-xs' />
                        </Bar>
                    </ComposedChart>
                </ResponsiveContainer>
            </Card>
        </div>
    )
}

export default ActualVsPallnedChart
