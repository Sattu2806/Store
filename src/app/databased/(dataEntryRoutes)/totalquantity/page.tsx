import React from 'react'
import TotalQuantityForm from './TotalQuantityForm'
import TotalDataTable from './TotalDataTable'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <TotalQuantityForm/>
        <TotalDataTable/>
    </div>
  )
}

export default page