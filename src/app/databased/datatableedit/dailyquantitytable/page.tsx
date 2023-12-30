import React from 'react'
import { DataTable } from './DataTable'
import DailyDataTable from './DailyTable'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <DailyDataTable/>
    </div>
  )
}

export default page

