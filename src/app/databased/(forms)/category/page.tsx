import React from 'react'
import CategoryForm from './CategoryForm'
import CategoryDataTable from './CategoryDataTable'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <CategoryForm/>
        <CategoryDataTable/>
    </div>
  )
}

export default page