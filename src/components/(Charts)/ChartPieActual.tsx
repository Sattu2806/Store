import { PieChart, Pie, Sector, Cell, Label, LabelList, Tooltip, ResponsiveContainer } from "recharts";
import React, { useEffect, useState } from "react";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios";
import { resourceData } from "@prisma/client";
import { useQuery } from "react-query";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import PiechartTableData from "../(Tables)/PiechartTableData";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 }
];

type PieData = {
    name:string,
    total:number
}

type Props = {
    
}

type CategoryCount = {
  _sum: {
    Nos:number
  };
  category: string;
};

const monthsArray = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

const ChartPieActual = (props: Props) => {
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const [SelectedGroup, setSelectedGroup] = useState<string | null > (null)
  const [opendialogue, setopenDialogue] = useState(false)
  const [selectedMonth, setSelectedMonth] = useState<string>(`${monthsArray[new Date().getMonth()]}-${new Date().getFullYear()}`)
  

  const handleCellClick = (entry: PieData, index: number) => {
    setSelectedName(entry.name);
};


  const {data: piemanpowerapiData = [], error: piemanpowerapiDataError, isLoading: piemanpowerapiDataLoading, refetch:refetchpiemanpowerapiData} = useQuery<CategoryCount[]>({
    queryKey:'piemanpowerdataActual',
    queryFn: ()=> axios.get('/api/piechartmanpower', {
        params:{
            Date:selectedMonth,
            group:'Actual'
        }
    }).then((res) => res.data),
    staleTime:60 * 1000,
    retry:3,
  })

  const {data: manpowerapiData = [], error: manpowerapiDataError, isLoading: ismanpowerapiDataLoading, refetch:refetchmanpowerapiData} = useQuery<resourceData[]>({
    queryKey:'manpowerdatapie',
    queryFn: ()=> axios.get('/api/manpowerdatachart', {
        params:{
            Category:'All',
        }
    }).then((res) => res.data),
    staleTime:60 * 1000,
    retry:3,
})

const {data: piemanpowerapiDataPlan = [], error: piemanpowerapiDataErrorPlan, isLoading: piemanpowerapiDataLoadingPlan, refetch:refetchpiemanpowerapiDataPlan} = useQuery<CategoryCount[]>({
  queryKey:'piemanpowerdataPlan',
  queryFn: ()=> axios.get('/api/piechartmanpower', {
      params:{
          Date:selectedMonth,
          group:'Plan'
      }
  }).then((res) => res.data),
  staleTime:60 * 1000,
  retry:3,
})

  const uniqueYearMonthPairs = Array.from(new Set(manpowerapiData.map(item => `${item.Month}-${item.Year}`)))

  useEffect(() => {
    refetchpiemanpowerapiData()
    refetchpiemanpowerapiDataPlan()
  },[selectedMonth])

  const piedataActual = piemanpowerapiData.map((item) => {
    return{
      name:item.category,
      total:item._sum.Nos
    }
  })
  const piedataPlan = piemanpowerapiDataPlan.map((item) => {
    return{
      name:item.category,
      total:item._sum.Nos
    }
  })

  return (
    <div >
      <Card className=" relative py-3">
        <p className="text-center text-xl font-semibold mt-2">Actual Vs Planned Resources</p>
        <div className="lg:flex max-md:flex-col items-center justify-between gap-10" >
        <ResponsiveContainer height={430} className='my-6'>
        <PieChart >
          <Pie
            data={piedataActual}
            innerRadius={90}
            outerRadius={180}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="total"
            onClick={(entry, index) => {handleCellClick(entry, index); setopenDialogue(true); setSelectedGroup('Actual')}}
            className="border-none outline-none "
          >
            {data.map((entry, index) => {
              return(
                <Cell  className="cursor-pointer outline-none" key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              )
            })}
            <LabelList fill="#fff" className="text-2xl" dataKey='total' />
            <LabelList fill="#333"  className="text-2xl border-none stroke-none" dataKey='name' position='outside'  />
            <Tooltip/>
          </Pie>
        </PieChart>
        </ResponsiveContainer>
        <ResponsiveContainer height={430} className='my-6'>
        <PieChart >
          <Pie
            data={piedataPlan}
            innerRadius={90}
            outerRadius={180}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="total"
            onClick={(entry, index) => {handleCellClick(entry, index); setopenDialogue(true); setSelectedGroup('Plan')}}
            className="border-none outline-none"
          >
            {data.map((entry, index) => {
              return(
                <Cell  className="cursor-pointer outline-none" key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              )
            })}
            <LabelList fill="#fff" className="text-2xl" dataKey='total' />
            <LabelList fill="#333"  className="text-2xl border-none stroke-none" dataKey='name' position='outside'  />
            <Tooltip/>
          </Pie>
        </PieChart>
        </ResponsiveContainer>
        <p className="absolute lg:bottom-3 lg:left-[20%] max-lg:left-[40%] max-lg:bottom-[45%] text-lg font-medium border-[1px] border-blue-400 rounded-sm px-4 py-1">Actual</p>
        <p className="absolute bottom-3 lg:right-[20%] max-lg:right-[40%] text-lg font-medium border-[1px] border-blue-400 rounded-sm px-4 py-1">Plan</p>
        </div>
        <div className="absolute md:top-5 right-5 top-16 ">
        <Select value={selectedMonth} onValueChange={(value) => setSelectedMonth(value)}>
              <SelectTrigger className="w-[180px] border-black">
                  <SelectValue placeholder="Select Group" />
              </SelectTrigger>
              <SelectContent>
                  {uniqueYearMonthPairs?.map((month,index) => (
                      <SelectItem key={index} value={month}>{month}</SelectItem>
                  ))}
              </SelectContent>
        </Select>
        </div>
      </Card>
      {opendialogue && (
      <PiechartTableData selectedGroup={SelectedGroup}   selectedOption={selectedName} setSelectedOption={setSelectedName} opendialogue={opendialogue} setopenDialogue={setopenDialogue}/>
      )}
    </div>
  )
}

export default ChartPieActual
