import { Card, CardHeader } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import React, { useState } from 'react'
import { Bar, BarChart, LabelList, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import ProductivityTable from '../(Tables)/ProductivityTable'

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
    const [opendialogue, setopenDialogue] = useState(false)
    const [selectedOption, setSelectedOption] = useState<string | null >(null);
    const showdata = () => {
        switch (true) {
            case label.includes('Excavation'):
                setSelectedOption('excavationQty');
                break;
            case label.includes('Formwork'):
                setSelectedOption('formWorkQty');
                break;
            case label.includes('Rebar'):
                setSelectedOption('rebarQty');
                break;
            case label.includes('Concrete'):
                setSelectedOption('concreteQty');
                break;
            default:
                break;
        }
    };


    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const activeMonth = activeIndex ?  data[activeIndex].month : null
    const activeitem = activeIndex ?  data[activeIndex] : null
    console.log(activeitem)
  
    const handleClick = (data: Data[], index: number) => {
        setActiveIndex(index);
        showdata();
        // Move setopenDialogue(true) here
        setopenDialogue(true);
    };





  return (
    <div className='relative'>
        <Card className='px-2'>
            <CardHeader className='text-lg text-center font-semibold'>{label}</CardHeader>
            <ResponsiveContainer width="100%"
             height={350}
            >
            <BarChart data={data}
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
                <Bar  onClick={handleClick} dataKey="total" fill={color} radius={[4, 4, 0, 0]} >
                <LabelList dataKey="total" position="top" className='text-sm' />
                </Bar>
            </BarChart>
            </ResponsiveContainer>
        </Card>
        {opendialogue && (
        <ProductivityTable selectedMonth={activeMonth} selectedOption={selectedOption} setSelectedOption={setSelectedOption} opendialogue={opendialogue} setopenDialogue={setopenDialogue}/>
        )}
    </div>
  )
}

export default Charts
