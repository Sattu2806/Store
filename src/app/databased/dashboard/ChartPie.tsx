import { PieChart, Pie, Sector, Cell, Label, LabelList, Tooltip } from "recharts";
import React, { useEffect, useState } from "react";
import { Card, CardFooter, CardTitle } from "@/components/ui/card";
import axios from "axios";
import { ManpowerData } from "@prisma/client";
import { useQuery } from "react-query";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import PiechartTableData from "./PiechartTableData";

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

const ChartPie = (props: Props) => {
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const [opendialogue, setopenDialogue] = useState(false)
  const [selectedMonth, setSelectedMonth] = useState<string>(monthsArray[new Date().getMonth()])
  

  const handleCellClick = (entry: PieData, index: number) => {
    setSelectedName(entry.name);
    console.log("Selected Name:", entry.name);
};

  const {data: piemanpowerapiData = [], error: manpowerapiDataError, isLoading: ismanpowerapiDataLoading, refetch:refetchmanpowerapiData} = useQuery<CategoryCount[]>({
    queryKey:'piemanpowerdata',
    queryFn: ()=> axios.get('/api/piechartmanpower', {
        params:{
            Month:selectedMonth
        }
    }).then((res) => res.data),
    staleTime:60 * 1000,
    retry:3,
  })

  useEffect(() => {
    refetchmanpowerapiData()
  },[selectedMonth])

  const piedata = piemanpowerapiData.map((item) => {
    return{
      name:item.category,
      total:item._sum.Nos
    }
  })

  console.log(piedata, piemanpowerapiData)

  return (
    <div >
      <Card className=" relative">
        <div className="flex items-center justify-center">
        <PieChart width={800} height={430} margin={{top:0, bottom:0}}>
          <Pie
            data={piedata}
            innerRadius={90}
            outerRadius={180}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="total"
            onClick={(entry, index) => {handleCellClick(entry, index); setopenDialogue(true)}}
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
        </div>
        <p className="absolute bottom-3 left-14 font-semibold">Available Resources (Direct / Indirect / Equipment) for {selectedMonth}</p>
        <div className="absolute top-5 right-5 ">
        <Select value={selectedMonth} onValueChange={(value) => setSelectedMonth(value)}>
              <SelectTrigger className="w-[180px] border-black">
                  <SelectValue placeholder="Select Group" />
              </SelectTrigger>
              <SelectContent>
                  {monthsArray?.map((month,index) => (
                      <SelectItem key={index} value={month}>{month}</SelectItem>
                  ))}
              </SelectContent>
        </Select>
        </div>
      </Card>
      <PiechartTableData  selectedOption={selectedName} setSelectedOption={setSelectedName} opendialogue={opendialogue} setopenDialogue={setopenDialogue}/>
    </div>
  )
}

export default ChartPie
