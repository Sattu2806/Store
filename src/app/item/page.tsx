import React from 'react'
import ItemForm from './ItemForm'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='mx-auto max-w-[1280px] clear-left py-10'>
        <ItemForm/>
    </div>
  )
}

export default page