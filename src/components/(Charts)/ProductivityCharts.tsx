import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import Charts from './Charts'
import { Skeleton } from '../ui/skeleton'

type Props = {}

type monthdata = {
    month:string
    total:number
}

type QuantityMonthData = {
    formWorkMonthData : monthdata[], 
    concreteMonthData : monthdata[], 
    excavationMonthData : monthdata[], 
    rebarMonthData : monthdata[], 
}

const ProductivityCharts = (props: Props) => {
    const {data: quantitymonthData = {} as QuantityMonthData, error: quantitymonthDatanError, isLoading: isquantitymonthDataLoading, refetch:refetchquantitymonthData} = useQuery<QuantityMonthData>({
        queryKey:'quantitymonthData',
        queryFn: ()=> axios.get('/api/chartquantityapi').then((res) => res.data),
        staleTime:60 * 1000,
        retry:3,
    })

    if(!quantitymonthData){
        return (
            <Skeleton/>
        )
    }

    const {formWorkMonthData, concreteMonthData, excavationMonthData, rebarMonthData}  = quantitymonthData
  return (
    <div className='flex flex-col space-y-3 mt-1'>
        <Charts data={excavationMonthData} label='Excavation Productivity By Month' color='#FF8080'/>
        <Charts data={formWorkMonthData} label='Formwork Productivity By Month' color='#BC7AF9'/>
        <Charts data={rebarMonthData} label='Rebar Productivity By Month' color='#FA7070'/>
        <Charts data={concreteMonthData} label='Concrete Productivity By Month' color='#29ADB2'/>
    </div>
  )
}

export default ProductivityCharts