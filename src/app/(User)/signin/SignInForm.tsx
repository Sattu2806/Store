'use client'
import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader } from '@/components/ui/card'
import { useToast } from "@/components/ui/use-toast"
import {signIn, useSession} from 'next-auth/react'
import { useRouter } from 'next/navigation'



type Props = {}

const SignInForm = (props: Props) => {
    const { toast } = useToast()
    const {data:Session, status} = useSession()
    const router = useRouter()

    if(Session){
        router.push('/')
    }

    
    
  return (
    <div className='mt-4 max-w-[1280px] mx-auto'>
        <Card className='p-5 max-w-[600px] mx-auto'>
            <CardHeader className='text-2xl font-semibold text-center'>Sign In</CardHeader>
                <Button onClick={() => signIn('google')} type='button' className='text-white w-full' variant='destructive'>Sign In with Google</Button>
        </Card>
    </div>
  )
}

export default SignInForm