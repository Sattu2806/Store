import React from 'react'

type Props = {
    progress:number
    color:string
    label:string
}

const ProgressBar = (props: Props) => {
  console.log(props.color)
  return (
    <div className='grid grid-cols-12 w-full gap-5'>
    <p className=' col-span-2'>{props.label}</p>
    <div className='w-full h-7 rounded bg-gray-200 overflow-hidden col-span-9 shadow-sm'>
        <div className={`h-full ${props.color} transition-all text-center`}
        style={{width:`${props.progress}%`}}
        >
        </div>
    </div>
    <p className='col-span-1'>{props.progress}%</p>
    </div>
  )
}

export default ProgressBar