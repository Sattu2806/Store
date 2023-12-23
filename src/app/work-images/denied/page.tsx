import Image from 'next/image'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='w-full h-full flex justify-center'>   
        <Image
        src='/access-denied.jpg'
        width={500}
        height={500}
        className='w-[500px]'
        alt='Image'
         />
    </div>
  )
}

export default page