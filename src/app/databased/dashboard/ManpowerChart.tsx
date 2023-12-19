import { Button } from '@/components/ui/button'
import { Card, CardHeader } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import React from 'react'
import { Bar, BarChart, ComposedChart, LabelList, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

type Data = {
    month: string,
    total: number,
}
type TransformedData = {
    month: string,
    value1: number,
    value2: number
}

type Props = {
    data: Data[],
    label: string,
    color: string
}

const ManpowerCharts = ({ data, label, color }: Props) => {
    let cumulativeSum = 0;

    const monthsArray = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    const dataMap = new Map(data.map(entry => [entry.month, entry]));

    const dataWithZeroes = monthsArray.map(month => {
        const entry = dataMap.get(month);
        return entry || { month, total: 0 };
    });

    const dataWithCumulative: TransformedData[] = dataWithZeroes.map((entry) => {
        cumulativeSum += entry.total;
        return {
            ...entry,
            value1: entry.total,
            value2: parseFloat(cumulativeSum.toFixed(2)),
        };
    });

    console.log(dataWithCumulative)
    return (
        <div className='relative'>
            <Card className='px-2'>
                <CardHeader className='text-lg text-center font-semibold'>
                    {label}
                    <Button size='sm' className='my-1 absolute top-3 right-3'>View Data</Button>
                </CardHeader>
                <ResponsiveContainer width="100%" height={350}>
                    <ComposedChart data={dataWithCumulative}
                              margin={{
                                top: 20,
                            }}
                    >
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
                        <Bar yAxisId="left" dataKey="value1" fill={color} radius={[4, 4, 0, 0]} >
                            <LabelList dataKey="value1" position="top" className='text-sm' />
                        </Bar>
                        <Line yAxisId="right" type="monotone" dataKey="value2" stroke="#ff7300" dot={false} />
                    </ComposedChart>
                </ResponsiveContainer>
            </Card>
        </div>
    )
}

export default ManpowerCharts
