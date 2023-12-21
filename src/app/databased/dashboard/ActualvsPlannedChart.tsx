import { Card, CardHeader } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import React from 'react'
import { Bar, BarChart, ComposedChart, LabelList, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { sCurveData } from '@/lib/data/formdata'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Cross2Icon } from '@radix-ui/react-icons'


type Props = {
    opendialogue: boolean;
    setopenDialogue: (value: boolean) => void;
}

const ActualVsPallnedChart = ({ opendialogue,
    setopenDialogue,}: Props) => {
    return (
        <div className='relative'>
            <Dialog open={opendialogue}>
            <DialogContent className='max-md:h-[400px] h-[600px] max-w-[1280px] fixed left-[50%] top-[50%] z-50 grid w-full max-md:max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg'>
            <div className='px-3'>
            <div
            onClick={() => setopenDialogue(false)}
             className="absolute right-4 top-4 mb-2 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                <Cross2Icon className="h-5 w-5 text-red-500 font-semibold" />
                <span className="sr-only">Close</span>
            </div>
            </div>
                <p className='text-lg text-center font-semibold'>S-Curve</p>
                <ResponsiveContainer width="100%" height={350}>
                    <ComposedChart data={sCurveData}>
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
            </DialogContent>
            </Dialog>
        </div>
    )
}

export default ActualVsPallnedChart
