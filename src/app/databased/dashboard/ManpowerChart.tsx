import { Card, CardHeader } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import React from 'react'
import { Bar, BarChart, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

type Data = {
    month: string,
    total: number,
}
type TransformedData = {
    month: string,
    total: number,
    cumulative_value: number
}

type Props = {
    data: Data[],
    label: string,
    color: string
}

const ManpowerCharts = ({ data, label, color }: Props) => {
    let cumulativeSum = 0;
    const dataWithCumulative: TransformedData[] = data.map((entry) => {
        cumulativeSum += entry.total;
        return {
            ...entry,
            cumulative_value: parseFloat(cumulativeSum.toFixed(2))
        };
    });

    console.log(dataWithCumulative)
    return (
        <div className='relative'>
            <Card className='px-2'>
                <CardHeader className='text-lg text-center font-semibold'>{label}</CardHeader>
                <ResponsiveContainer width="100%" height={350}>
                    <ComposedChart data={dataWithCumulative}>
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
                        <Legend />
                        <Tooltip contentStyle={{ borderRadius: '10px', background: '#fff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderColor: "none" }} />
                        <Bar yAxisId="left" dataKey="total" fill={color} radius={[4, 4, 0, 0]} />
                        <Line yAxisId="right" type="monotone" dataKey="cumulative_value" stroke="#ff7300" />
                    </ComposedChart>
                </ResponsiveContainer>
            </Card>
        </div>
    )
}

export default ManpowerCharts
