import React from 'react'
import VariantForm from './VariantForm'
import CardProto from './CardProto'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='mx-auto max-w-[1280px] clear-left py-10'>
        {/* <VariantForm/> */}
        <CardProto/>
    </div>
  )
}

export default page