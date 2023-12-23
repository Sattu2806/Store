import React, { useState } from 'react'
import CardComponent from './CardComponent'
import { useQuery } from 'react-query'
import { AggregatedData } from '@/lib/types'
import axios from 'axios'
import { Skeleton } from '@/components/ui/skeleton'
import CardDialogue from './CardDialogue'

type Props = {

}

const AllCardComponents = (props: Props) => {
    const [opendialogue, setopenDialogue] = useState({
        excavationQty :false,
        formWorkQty  :false,
        rebarQty       :false,
        concreteQty   :false
    })
    const {data: total , error: manpowerapiDataError, isLoading: ismanpowerapiDataLoading, refetch:refetchmanpowerapiData} = useQuery<AggregatedData>({
        queryKey:'projectdata',
        queryFn: ()=> axios.get('/api/project').then((res) => res.data),
        staleTime:60 * 1000,
        retry:3,
    })

    console.log(total)

    if(!total){
        return <Skeleton className='max-w-[400px] h-5 animate-pulse'/>
    }
  return (
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 md:sticky top-0 z-20 py-2 bg-white '>
        <div onClick={() => setopenDialogue({ ...opendialogue, excavationQty: true })}>
            <CardComponent total={total} label='Excavation' unit = {<>M<sup>3</sup></>} />
        </div>
        {/* <div onClick={() => setopenDialogue({...opendialogue, FormWork: true})}>
            <CardComponent total={total} label='Total FormWork' unit = {<>M<sup>2</sup></>} />
        </div> */}
        <div onClick={() => setopenDialogue({...opendialogue, rebarQty: true})}>
            <CardComponent total={total} label='Rebar' unit = {<>MT</>} />
        </div>
        <div onClick={() => setopenDialogue({...opendialogue, concreteQty: true})}>
            <CardComponent total={total} label='Concrete' unit = {<>M<sup>3</sup></>} />
        </div>
        <CardDialogue opendialogue={opendialogue} setopenDialogue={setopenDialogue}/>
    </div>
  )
}

export default AllCardComponents