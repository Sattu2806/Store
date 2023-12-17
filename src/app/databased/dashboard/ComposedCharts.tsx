'use client'
import React from 'react'
import { Bar,  Line, XAxis, YAxis,  ComposedChart, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList} from 'recharts';
import { ManpowerItem } from '@/lib/types';
import { Card, CardHeader } from '@/components/ui/card';

type Props = {
  manpowerdata: ManpowerItem[]
}

interface TransformedDataItem {
  Month: string;
  Direct_Value: number;
  Indirect_Value: number;
  Cumulative_Direct_Value: number;
  Cumulative_Indirect_Value: number;
}

const ComposedCharts = ({manpowerdata}: Props) => {
  const transformedData: Record<string, TransformedDataItem> = {};

  manpowerdata.forEach((item) => {
    const { Month, Type, Value } = item;
  
    if (!transformedData[Month]) {
      transformedData[Month] = {
        Month,
        Direct_Value: 0,
        Indirect_Value: 0,
        Cumulative_Direct_Value: 0,
        Cumulative_Indirect_Value: 0,
      };
    }
  
    if (Type === 'Direct') {
      transformedData[Month].Direct_Value = Value ?? 0;
      transformedData[Month].Cumulative_Direct_Value += Value ?? 0;
    } else if (Type === 'Indirect') {
      transformedData[Month].Indirect_Value = Value ?? 0;
      transformedData[Month].Cumulative_Indirect_Value += Value ?? 0;
    }
  });
  
  let result: TransformedDataItem[] = Object.values(transformedData);
  
  result.sort((a, b) => {
    const monthsOrder = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return monthsOrder.indexOf(a.Month) - monthsOrder.indexOf(b.Month);
  });
  
  let cumulativeDirect = 0;
  let cumulativeIndirect = 0;
  
  result = result.map((item) => {
    cumulativeDirect += item.Direct_Value;
    cumulativeIndirect += item.Indirect_Value;
  
    return {
      ...item,
      Cumulative_Direct_Value: cumulativeDirect,
      Cumulative_Indirect_Value: cumulativeIndirect,
    };
  });
  
  console.log(result);
  return (
    <div className='relative'>
    <Card className='px-2'>
      <CardHeader className='text-lg text-center font-semibold'>Indirect Direct Histogram</CardHeader>
      <ResponsiveContainer width="100%" height={350}>
          <ComposedChart
          width={500}
          height={400}
          data={result}
          margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
          }}
          >
          <XAxis 
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
              style={{
                fontWeight: '600',
                color:"black"
            }}
          dataKey="Month" scale="band" interval={0} />
          <YAxis
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
           yAxisId="left" />
          <YAxis
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
           yAxisId="right" orientation="right" />
          <Tooltip cursor={{ stroke: 'red', strokeWidth: 2 }}  contentStyle={{borderRadius:'10px', background:'#fff', boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1)', borderColor:"none"}}/>
          <Legend />
          <Bar yAxisId="left" dataKey="Indirect_Value"  fill="#413ea0" radius={[4, 4, 0, 0]} >
            <LabelList dataKey="Indirect_Value" position="top" className='text-sm' />
          </Bar>
          <Bar yAxisId="left" dataKey="Direct_Value"  fill="#8884d8" radius={[4, 4, 0, 0]} >
            <LabelList dataKey="Direct_Value" position="top" className='text-sm' />
          </Bar>
          <Line yAxisId="right" type="monotone" dataKey="Cumulative_Indirect_Value" stroke="#ff7300" dot={false} />
          <Line yAxisId="right" type="monotone" dataKey="Cumulative_Direct_Value" stroke="#82ca9d" dot={false} />
          </ComposedChart>
    </ResponsiveContainer>
  </Card>
</div>
  )
}

export default ComposedCharts