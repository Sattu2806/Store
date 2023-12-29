import React from 'react'
import DailyQuantityForm from './DailyQuantityForm'
import DailyDataTable from './DailyDataTable'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <DailyQuantityForm/>
        <DailyDataTable/>
    </div>
  )
}

export default page