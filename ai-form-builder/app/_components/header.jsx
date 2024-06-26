"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { UserButton, useUser } from '@clerk/nextjs'
function header({ SignInButton }) {
  const { user, isSignedIn } = useUser();
  return (
    <div className='h-[8vh] rounded-sm shadow-md '>
      <div className='flex justify-between items-center h-full px-8'>
        <div><Image src="/logo.svg" alt="Logo" width={40} height={50} /></div>
        {isSignedIn ? <div className='flex items-center space-x-4'><Button><Link href={'/dashboard'}></Link></Button> <UserButton />   </div> : <Button><SignInButton /></Button>}

      </div>
    </div>
  )
}

export default header