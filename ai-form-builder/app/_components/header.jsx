"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { UserButton, useUser } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
function header({ SignInButton }) {
  const { user, isSignedIn } = useUser();
  const path=usePathname();
  return  !path.includes('preview') && (
    <div className='h-[8vh] rounded-sm shadow-md '>
      <div className='flex justify-between items-center h-full px-8'>
        <div><Image src="/vercel.svg" alt="Logo" width={60} height={10} /></div>
        {isSignedIn ? <div className='flex items-center space-x-4'><Button><Link href={'/dashboard'}></Link></Button> < UserButton />   </div> : <Button><SignInButton /></Button>}
      </div>
    </div>
  )
}

export default header