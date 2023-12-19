import React from 'react'
import GroupForm from './GroupForm'
import GroupDataTable from './GroupDataTable'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <GroupForm/>
        <GroupDataTable/>
    </div>
  )
}

export default page